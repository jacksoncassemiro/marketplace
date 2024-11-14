import { actionSignOut } from "@/app/(paginas-de-autenticacao)/authUtils";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

type User = {
  id: string;
  email: string;
};

export default function AuthButton() {
	const { user, logOut, logIn } = useAuth();

	return user ? (
		<div className="flex items-center gap-4">
			Hey, {user.email}!
			<Button type="submit" variant={"outline"} onClick={logOut}>
				Sign out
			</Button>
		</div>
	) : (
		<div className="flex gap-2">
			<Button size="sm" variant={"outline"} onClick={() => logIn({
				email: "mirop59104@hraifi.com",
				password: "1q2w3eASD@."
			})}>
				Login
				{/* <Link href="/login">Sign in</Link> */}
			</Button>
			<Button asChild size="sm" variant={"default"}>
				<Link href="/criar-conta">Sign up</Link>
			</Button>
		</div>
	);
}
