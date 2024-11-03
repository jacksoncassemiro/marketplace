import { actionSignOut } from "@/app/(auth-pages)/authUtils";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function AuthButton() {
	const {
		data: { user },
	} = await createClient().auth.getUser();

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
			<Button asChild size="sm" variant={"outline"}>
				<Link href="/login">Sign in</Link>
			</Button>
			<Button asChild size="sm" variant={"default"}>
				<Link href="/criar-conta">Sign up</Link>
			</Button>
		</div>
	);
}
