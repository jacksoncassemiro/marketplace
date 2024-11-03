import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
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

	// protected routes
	if (request.nextUrl.pathname.startsWith("/protected") && user.error) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (request.nextUrl.pathname === "/" && !user.error) {
		return NextResponse.redirect(new URL("/protected", request.url));
	}

	return supabaseResponse;
};
