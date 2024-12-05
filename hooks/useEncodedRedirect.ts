import { EncoreRedirectProps } from "@/types/encodeRedirect";
import { useRouter } from "next/navigation";

export function useEncodedRedirect() {
  const router = useRouter();

  const encodedRedirect = ({
    type,
    path,
    message
  }: EncoreRedirectProps) => {
    const encodedMessage = encodeURIComponent(message);
    router.push(`${path}?${type}=${encodedMessage}`);
  };

  return { encodedRedirect };
}
