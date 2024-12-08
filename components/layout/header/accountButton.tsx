import { useAuth } from "@/contexts/authContext";
import { AuthMenu } from "@/components/layout/sidebar/authMenu/authMenu";
import { UserMenu } from "../sidebar/userMenu";

export const AccountButton = () => {
	const { user } = useAuth();

	return user ? (
		<UserMenu user={user} />
	) : (
		<AuthMenu />
	);
};
