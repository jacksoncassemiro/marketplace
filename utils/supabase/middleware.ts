import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
	const pathname = request.nextUrl.pathname;
	// Crie uma resposta não modificada
	let supabaseResponse = NextResponse.next({
		request,
	});

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value }) =>
						request.cookies.set(name, value)
					);
					supabaseResponse = NextResponse.next({
						request,
					});
					cookiesToSet.forEach(({ name, value, options }) =>
						supabaseResponse.cookies.set(name, value, options)
					);
				},
			},
		}
	);

	// Isso atualizará a sessão se expirar - necessário para componentes do servidor
	// https://supabase.com/docs/guides/auth/server-side/nextjs
	const user = await supabase.auth.getUser();

	// rotas protegidas
	if (
		pathname.startsWith("/protected") && user.error
	) {
		const redirectUrl = new URL("/login", request.url);
		redirectUrl.searchParams.set("redirect", "auth");
		return NextResponse.redirect(redirectUrl);
	}

	// se tentar acessar qualquer página diferente de redefinição de senha e estiver em processo de redefinir senha irá deslogar
	if (
		!pathname.startsWith("/protected/recuperar-senha") &&
		user.data.user?.user_metadata?.is_redefinindo_senha
	) {
		supabase.auth.updateUser({ data: { is_redefinindo_senha: false } });
		supabase.auth.signOut();
		const redirectUrl = new URL("/login", request.url);
		return NextResponse.redirect(redirectUrl);
	}

	// retorna para página inicial se estiver logado e tentar acessar a página de login e criar conta
	if (
		!user.error &&
		(
			pathname === "/login" ||
			pathname === "/criar-conta"
		)
	) {
		const redirectUrl = new URL("/", request.url);
		return NextResponse.redirect(redirectUrl);
	}

	return supabaseResponse;
};
