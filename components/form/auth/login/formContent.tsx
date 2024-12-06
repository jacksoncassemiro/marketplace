"use client";

import { handleSignIn } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormInputsSignIn } from "@/components/form/auth/login/formInputs";
import { FormRoot } from "@/components/form/formRoot";
import { initialValues, validate } from "@/schemas/login/loginSchema";

export const FormContent = () => {
	return (
		<FormRoot
			formAction={handleSignIn}
			className="flex flex-col gap-mantine-sm"
			validate={validate}
			initialValues={initialValues}
			nameForm="signIn"
		>
			<FormInputsSignIn />
		</FormRoot>
	);
};
