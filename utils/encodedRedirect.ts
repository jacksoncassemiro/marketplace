import { redirect } from "next/navigation";

/**
 * Redireciona para um caminho especificado com uma mensagem codificada como um parâmetro de consulta.
 * @param {('error' | 'success')} type - O tipo de mensagem, seja 'error' ou 'success'.
 * @param {string} path - O caminho para redirecionar para.
 * @param {string} message - A mensagem a ser codificada e adicionada como um parâmetro de consulta.
 * @returns {never} Esta função não retorna porque dispara um redirecionamento.
 */
export function encodedRedirect(
	type: "error" | "success",
	path: string,
	message: string
) {
	return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}
