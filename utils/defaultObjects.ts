import { TypesMessageType } from "@/types/utils/encodeRedirect";

export const errorMessage = {
  invalid_credentials: "E-mail ou senha incorretos.",
  validation_failed: "Erro de validação. Cheque suas credenciaiais.",
} as Record<string, string>;

export const typesMessage: TypesMessageType[] = [
  "error",
  "success",
  "info",
  "warning",
  "redirect",
]