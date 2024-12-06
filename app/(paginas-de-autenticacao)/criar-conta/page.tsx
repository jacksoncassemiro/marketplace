import { handleSignUp } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormMessage, Message } from "@/components/form-message";
import { ButtonSubmitAction } from "@/components/form/buttonSubmitAction";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signup() {
	return (
		<>
			<form className="flex flex-col min-w-64 max-w-64 mx-auto">
				<h1 className="text-2xl font-medium">Sign up</h1>
				<p className="text-sm text text-foreground">
					Already have an account?{" "}
					<Link className="text-primary font-medium underline" href="/login">
						Sign in
					</Link>
				</p>
				<div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
					<Label htmlFor="email">Email</Label>
					<Input name="email" placeholder="you@example.com" required />
					<Label htmlFor="password">Password</Label>
					<Input
						type="password"
						name="password"
						placeholder="Your password"
						minLength={6}
						required
					/>
					<ButtonSubmitAction
						formAction={handleSignUp}
					>
						Sign up
					</ButtonSubmitAction>
				</div>
			</form>
		</>
	);
}
