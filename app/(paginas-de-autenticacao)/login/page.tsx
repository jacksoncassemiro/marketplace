import { actionSignIn } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormInputsSignIn } from "@/components/form/auth/formInputsSignIn";
import { FormRoot } from "@/components/form/formRoot";
import { Paper } from "@mantine/core";

export default function Login() {
	return (
		<Paper
			className="mx-auto max-w-64"
			radius="md"
			p="md"
		>
			<FormRoot
				formAction={actionSignIn}
				className="flex flex-col gap-mantine-sm"
			>
				<FormInputsSignIn />
			</FormRoot>
		</Paper>
	);
}
