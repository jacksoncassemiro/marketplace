import { FormContentForgotPassword } from "@/components/form/auth/alterar-senha/formContent";
import { Paper } from "@mantine/core";

export default function ForgotPassword() {
	return (
		<>
			<Paper className="mx-auto max-w-64" radius="md" p="md">
				<FormContentForgotPassword />
			</Paper>
		</>
	);
}
