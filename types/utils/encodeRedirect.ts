export type TypesMessageType = "error" | "success" | "info" | "warning" | "redirect";

export interface EncoreRedirectProps {
	type: TypesMessageType;
	path: string;
	message: string;
}
