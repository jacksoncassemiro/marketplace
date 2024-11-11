"use server";

import { encodedRedirect } from "@/utils/encodedRedirect";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const actionSignUp = async (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();
	const supabase = createClient();
	const origin = headers().get("origin");

	if (!email || !password) {
		return { error: "E-mail e senha são obrigatórios." };
	}

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
			data: {
				is_redefinindo_senha: false,
			},
		},
	});

	if (error) {
		console.error(error.code + " " + error.message);
		return encodedRedirect("error", "/criar-conta", error.message);
	} else {
		return encodedRedirect(
			"success",
			"/criar-conta",
			"Obrigado por se inscrever! Por favor, verifique seu e-mail para um link de verificação."
		);
	}
};

export const actionSignIn = async (formData: FormData) => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const supabase = createClient();

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return encodedRedirect("error", "/login", error.message);
	}

	return redirect("/");
};

export const actionForgotPassword = async (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const supabase = createClient();
	const origin = headers().get("origin");
	const callbackUrl = formData.get("callbackUrl")?.toString();

	if (!email) {
		return encodedRedirect("error", "/alterar-senha", "E-mail é obrigatório.");
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${origin}/auth/callback?redirect_to=/protected/recuperar-senha`,
	});

	if (error) {
		console.error(error.message);
		return encodedRedirect(
			"error",
			"/alterar-senha",
			"Não foi possível redefinir a senha"
		);
	}

	if (callbackUrl) {
		return redirect(callbackUrl);
	}

	return encodedRedirect(
		"success",
		"/alterar-senha",
		"Verifique seu e-mail para obter um link para redefinir sua senha."
	);
};

export const actionResetPassword = async (formData: FormData) => {
	const supabase = createClient();

	const password = formData.get("password") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	if (!password || !confirmPassword) {
		encodedRedirect(
			"error",
			"/protected/recuperar-senha",
			"Senha e confirmação de senha são necessárias."
		);
	}

	if (password !== confirmPassword) {
		encodedRedirect(
			"error",
			"/protected/recuperar-senha",
			"As senhas não correspondem."
		);
	}

	const { error } = await supabase.auth.updateUser({
		password: password,
	});

	if (error) {
		encodedRedirect(
			"error",
			"/protected/recuperar-senha",
			"Falha na atualização da senha."
		);
	}

	encodedRedirect("success", "/protected/recuperar-senha", "Senha atualizada.");
};

export const actionSignOut = async () => {
	const supabase = createClient();
	await supabase.auth.signOut();
	return redirect("/login");
};
