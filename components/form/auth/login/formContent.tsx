"use client";

import { actionSignIn } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormInputsSignIn } from "@/components/form/auth/login/formInputs";
import { FormRoot } from "@/components/form/formRoot";

export const FormContent = () => {
	const validate = {
		email: (value: string) => {
			if (!value) {
				return "Campo obrigatório";
			}
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
				return "Email inválido";
			}
			return null;
		},
		password: (value: string) => {
			if (!value) {
				return "Campo obrigatório";
			}
			return null;
		},
	};
	return (
		<FormRoot
			formAction={actionSignIn}
			className="relative flex flex-col gap-mantine-sm"
			validate={validate}
			initialValues={{ email: "", password: "" }}
			nameForm="signIn"
		>
			<FormInputsSignIn />
		</FormRoot>
	);
};
