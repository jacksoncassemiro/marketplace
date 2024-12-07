import { FormContentSignIn } from "@/components/form/auth/login/formContent";
import { Paper } from "@mantine/core";

export default function Login() {
	return (
		<Paper className="mx-auto max-w-64" radius="md" p="md">
			<FormContentSignIn />
		</Paper>
	);
}
