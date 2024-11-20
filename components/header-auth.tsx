import { actionSignOut } from "@/app/(paginas-de-autenticacao)/authUtils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ButtonLink } from "./ui/buttonLink";

export default function AuthButton() {
	const { user } = useAuth();

	return user ? (
		<div className="flex items-center gap-4">
			Hey, {user.email}!
			<form action={actionSignOut}>
				<Button type="submit" variant={"outline"}>
					Sign out
				</Button>
			</form>
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
