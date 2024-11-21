import { actionSignIn } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormInputsSignIn } from "@/components/form/auth/formInputsSignIn";
import { FormRoot } from "@/components/form/formRoot";
import { Paper } from "@mantine/core";

export default function Login() {
	return (
		<Paper
			className="flex flex-col min-w-64"
			radius="md"
		>
			<FormRoot
				formAction={actionSignIn}
			>
				<FormInputsSignIn />
			</FormRoot>
		</Paper>
	);
}
