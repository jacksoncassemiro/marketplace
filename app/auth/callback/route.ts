import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// A rota `/auth/callback` é necessária para o fluxo de autenticação do lado do servidor implementado
	// pelo pacote SSR. Ele troca um código de autenticação para a sessão do usuário.
	// https://supabase.com/docs/guides/auth/server-side/nextjs
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get("code");
	const origin = requestUrl.origin;
	const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();

	if (code) {
		const supabase = createClient();
		await supabase.auth.exchangeCodeForSession(code);
	}

	if (redirectTo) {
		return NextResponse.redirect(`${origin}${redirectTo}`);
	}

	// URL to redirect to after sign up process completes
	return NextResponse.redirect(`${origin}/protected`);
}
