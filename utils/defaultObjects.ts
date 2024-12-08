import { TypesMessageType } from "@/types/utils/encodeRedirect";

export const errorMessage = {
  invalid_credentials: "E-mail ou senha incorretos.",
  validation_failed: "Erro de validação. Cheque suas credenciaiais.",
  same_password: "A nova senha deve ser diferente da senha antiga.",
} as Record<string, string>;

export const typesMessage: TypesMessageType[] = [
  "error",
  "success",
  "info",
  "warning",
  "redirect",
]

export const breakpoints = {
  xs: 320,  // Dispositivos extra pequenos (smartphones)
  sm: 640,  // Dispositivos pequenos (smartphones em paisagem)
  md: 768,  // Dispositivos médios (tablets)
  lg: 1024, // Dispositivos grandes (computadores)
  xl: 1280, // Dispositivos extra grandes (monitores grandes)
  '2xl': 1536, // Dispositivos extra-extra grandes (telas muito grandes)
};
