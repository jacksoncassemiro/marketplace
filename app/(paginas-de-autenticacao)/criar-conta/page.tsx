import { FormContentSignUp } from "@/components/form/auth/criar-conta/formContent";
import { Paper } from "@mantine/core";

export default function Signup() {
	return (
		<Paper className="mx-auto max-w-64" radius="md" p="md">
			<FormContentSignUp />
		</Paper>
	);
}
