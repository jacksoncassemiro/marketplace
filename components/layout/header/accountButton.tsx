import { useAuth } from "@/contexts/authContext";
import { AuthMenu } from "./authMenu";
import { UserMenu } from "./userMenu";

export const AccountButton = () => {
	const { user } = useAuth();

	return user ? (
		<UserMenu user={user} />
	) : (
		<AuthMenu />
	);
};
