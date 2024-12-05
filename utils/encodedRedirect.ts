import { EncoreRedirectProps } from "@/types/encodeRedirect";
import { redirect } from "next/navigation";

export function encodedRedirect({
	type,
	path,
	message,
}: EncoreRedirectProps) {
	return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}
