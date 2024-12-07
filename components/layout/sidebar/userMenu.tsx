import { User } from "@/contexts/authContext";
import { handleSignOut } from "@/app/(paginas-de-autenticacao)/authUtils";
import { ButtonSubmitAction } from "@/components/form/buttonSubmitAction";

export const UserMenu = ({ user }: { user: User }) => {
  return (
    <div className="flex items-center gap-4">
			Olá, {user.email}!
			<ButtonSubmitAction formAction={handleSignOut} variant="outline">
				Sair
			</ButtonSubmitAction>
		</div>
  );
};