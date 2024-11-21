import { actionSignOut } from "@/app/(paginas-de-autenticacao)/authUtils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ButtonLink } from "./ui/buttonLink";
import { ButtonSubmitAction } from "@/components/form/buttonSubmitAction";

export default function AuthButton() {
	const { user } = useAuth();

	return user ? (
		<div className="flex items-center gap-4">
			Hey, {user.email}!
			<ButtonSubmitAction
				formAction={actionSignOut}
				variant="outline"
			>
				Sign out
			</ButtonSubmitAction>
		</div>
	) : (
		<div className="flex gap-2">
			<ButtonLink
				size="sm"
				variant={"outline"}
				href="/login"
			>
				Sign in
			</ButtonLink>
			<ButtonLink
				size="sm"
				variant={"default"}
				href="/criar-conta"
			>
				Sign up
			</ButtonLink>
		</div>
	);
}
