import { actionSignOut } from "@/app/(paginas-de-autenticacao)/authUtils";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type User = {
  id: string;
  email: string;
};

export default function AuthButton() {
	const supabase = createClient();
	const [user, setUser] = useState<User | null>(null);
	
	const getUserProfile = async () => {
		const { data } = await supabase.auth.getUser();
    if (data.user) setUser({ id: data.user.id, email: data.user.email! });
		console.log("data", data);
	};
	useEffect(() => {
		getUserProfile();
	})

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
