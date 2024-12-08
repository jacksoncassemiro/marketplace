import { FormContentResetPassword } from "@/components/form/auth/recuperar-senha/formContent";
import { Label } from "@/components/ui/label";
import { Input, Paper } from "@mantine/core";

export default async function ResetPassword() {
	return (
		<Paper className="mx-auto max-w-64" radius="md" p="md">
			<FormContentResetPassword />
		</Paper>
	);
}
