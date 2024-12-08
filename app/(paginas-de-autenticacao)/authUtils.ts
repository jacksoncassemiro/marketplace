"use server";

import { AuthTypes, CreateAccountTypes } from "@/schemas/auth/authSchema";
import { errorMessage } from "@/utils/defaultObjects";
import { encodedRedirect } from "@/utils/encodedRedirect";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export const handleSignUp = async (formData: CreateAccountTypes) => {
	const {
		email,
		senha,
		nome,
		sobrenome,
		telefone,
	} = formData;
	const supabase = createClient();
	const origin = headers().get("origin");

	if (!email || !senha || !nome || !sobrenome || !telefone) {
		return { error: "Todos os campos são obrigatórios." };
	}

	const { error } = await supabase.auth.signUp({
		email,
		password: senha,
		options: {
			emailRedirectTo: `${origin}/api/auth/callback`,
			data: {
				is_redefinindo_senha: false,
				nome,
				sobrenome,
				telefone,
			},
		},
	});

	if (error) {
		return encodedRedirect({
			type: "error",
			path: "/criar-conta",
			message: `Erro ao criar conta: ${error.message}`,
		});
	} else {
		return encodedRedirect({
			type: "success",
			path: "/criar-conta",
			message:
				"Obrigado por se inscrever! Por favor, verifique seu e-mail para um link de verificação.",
		});
	}
};

export const handleSignIn = async (formData: AuthTypes) => {
	const {
		email,
		senha,
	} = formData;
	const supabase = createClient();

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password: senha,
	});
	if (error) {
		const message = errorMessage[error.code!] || "Erro ao fazer login";
		return encodedRedirect({
			type: "error",
			path: "/login",
			message,
		});
	}

	encodedRedirect({
		type: "redirect",
		path: "/",
		message: "",
	});
};

export const handleForgotPassword = async (
	formData: Omit<AuthTypes, "senha">
) => {
	const { email } = formData;
	const supabase = createClient();
	const origin = headers().get("origin");

	if (!email) {
		return encodedRedirect({
			type: "error",
			path: "/alterar-senha",
			message: "E-mail é obrigatório.",
		});
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${origin}/api/auth/callback?redirect_to=/protected/recuperar-senha`,
	});

	if (error) {
		return encodedRedirect({
			type: "error",
			path: "/alterar-senha",
			message: `Não foi possível redefinir a senha: ${error.message}`,
		});
	}

	return encodedRedirect({
		type: "success",
		path: "/alterar-senha",
		message:
			"Verifique seu e-mail para obter um link para redefinir sua senha.",
	});
};

export const handleResetPassword = async (formData: FormData) => {
	const supabase = createClient();

	const password = formData.get("password") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	if (!password || !confirmPassword) {
		encodedRedirect({
			type: "error",
			path: "/protected/recuperar-senha",
			message: "Senha e confirmação de senha são necessárias.",
		});
	}

	if (password !== confirmPassword) {
		encodedRedirect({
			type: "error",
			path: "/protected/recuperar-senha",
			message: "As senhas não correspondem.",
		});
	}

	const { error } = await supabase.auth.updateUser({
		password: password,
	});

	if (error) {
		encodedRedirect({
			type: "error",
			path: "/protected/recuperar-senha",
			message: "Falha na atualização da senha.",
		});
	}

	encodedRedirect({
		type: "success",
		path: "/protected/recuperar-senha",
		message: "Senha atualizada.",
	});
};

export const handleSignOut = async () => {
	const supabase = createClient();
	await supabase.auth.signOut();
	encodedRedirect({
		type: "redirect",
		path: "/",
		message: "",
	});
};
