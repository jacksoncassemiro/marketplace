import { useRouter } from "next/navigation";

/**
 * Redireciona para um caminho especificado com uma mensagem codificada como um parâmetro de consulta.
 * @param {('error' | 'success')} type - O tipo de mensagem, seja 'error' ou 'success'.
 * @param {string} path - O caminho para redirecionar para.
 * @param {string} message - A mensagem a ser codificada e adicionada como um parâmetro de consulta.
 */
export function useEncodedRedirect() {
  const router = useRouter();

  const encodedRedirect = (type: "error" | "success", path: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    router.push(`${path}?${type}=${encodedMessage}`);
  };

  return { encodedRedirect };
}
