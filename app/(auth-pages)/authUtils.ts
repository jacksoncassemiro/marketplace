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
		return { error: "Email and password are required" };
	}

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
		},
	});

	if (error) {
		console.error(error.code + " " + error.message);
		return encodedRedirect("error", "/criar-conta", error.message);
	} else {
		return encodedRedirect(
			"success",
			"/criar-conta",
			"Thanks for signing up! Please check your email for a verification link."
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

	return redirect("/protected");
};

export const actionForgotPassword = async (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const supabase = createClient();
	const origin = headers().get("origin");
	const callbackUrl = formData.get("callbackUrl")?.toString();

	if (!email) {
		return encodedRedirect("error", "/alterar-senha", "Email is required");
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${origin}/auth/callback?redirect_to=/protected/recuperar-senha`,
	});

	if (error) {
		console.error(error.message);
		return encodedRedirect(
			"error",
			"/alterar-senha",
			"Could not reset password"
		);
	}

	if (callbackUrl) {
		return redirect(callbackUrl);
	}

	return encodedRedirect(
		"success",
		"/alterar-senha",
		"Check your email for a link to reset your password."
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
			"Password and confirm password are required"
		);
	}

	if (password !== confirmPassword) {
		encodedRedirect(
			"error",
			"/protected/recuperar-senha",
			"Passwords do not match"
		);
	}

	const { error } = await supabase.auth.updateUser({
		password: password,
	});

	if (error) {
		encodedRedirect(
			"error",
			"/protected/recuperar-senha",
			"Password update failed"
		);
	}

	encodedRedirect("success", "/protected/recuperar-senha", "Password updated");
};

export const actionSignOut = async () => {
	const supabase = createClient();
	await supabase.auth.signOut();
	return redirect("/login");
};
