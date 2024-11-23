import { actionSignIn } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormInputsSignIn } from "@/components/form/auth/login/formInputs";
import { FormRoot } from "@/components/form/formRoot";

export const FormContent = () => {
	return (
		<FormRoot
			formAction={actionSignIn}
			className="flex flex-col gap-mantine-sm"
		>
			<FormInputsSignIn />
		</FormRoot>
	);
};
