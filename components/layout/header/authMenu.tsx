import { ButtonLink } from "@/components/ui/buttonLink";

export const AuthMenu = () => {
  return (
    <div className="flex items-center gap-4">
      <ButtonLink size="sm" variant="filled" href="/login">
				Acessar
			</ButtonLink>
			<ButtonLink size="sm" variant={"default"} href="/criar-conta">
				Cadastrar-se
			</ButtonLink>
    </div>
  );
};