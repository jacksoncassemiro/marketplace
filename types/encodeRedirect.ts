import { Message } from "./message";

/**
 * Redireciona para um caminho especificado com uma mensagem codificada como um parâmetro de consulta.
 * @param {('error' | 'success' | 'info' | 'warning' | 'redirect')} type - O tipo de mensagem, seja 'error' ou 'success'.
 * @param {string} path - O caminho para redirecionar para.
 * @param {string} message - A mensagem a ser codificada e adicionada como um parâmetro de consulta.
 */
export interface EncoreRedirectProps {
  type: Message;
  path: string;
  message: string;
}