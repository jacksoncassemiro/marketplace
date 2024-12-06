import { handleSignOut } from "@/app/(paginas-de-autenticacao)/authUtils";
import { ButtonSubmitAction } from "@/components/form/buttonSubmitAction";
import { useAuth } from "@/contexts/authContext";
import { ButtonLink } from "./ui/buttonLink";

export default function AuthButton() {
	const { user } = useAuth();

	return user ? (
		<div className="flex items-center gap-4">
			Hey, {user.email}!
			<ButtonSubmitAction formAction={handleSignOut} variant="outline">
				Sign out
			</ButtonSubmitAction>
		</div>
	) : (
		<div className="flex gap-2">
			<ButtonLink size="sm" variant={"outline"} href="/login">
				Sign in
			</ButtonLink>
			<ButtonLink size="sm" variant={"default"} href="/criar-conta">
				Sign up
			</ButtonLink>
		</div>
	);
}
