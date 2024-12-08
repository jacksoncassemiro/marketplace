"use client";

import { handleSignUp } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormRoot } from "@/components/form/formRoot";
import { initialValuesCreateAccount, validateCreateAccount } from "@/schemas/auth/authSchema";
import { useTransition } from "react";
import { FormInputsSignUp } from "@/components/form/auth/criar-conta/formInputs";

export const FormContentSignUp = () => {
	const [isPending, startTransition] = useTransition();
	const handleFormSubmit = (formData: any) => {
		startTransition(async () => {
			await handleSignUp(formData);
		});
	};
	return (
		<FormRoot
			className="flex flex-col gap-mantine-sm"
			validate={validateCreateAccount}
			initialValues={initialValuesCreateAccount}
			nameForm="SignUp"
			formAction={handleFormSubmit}
			isLoading={isPending}
		>
			<FormInputsSignUp />
		</FormRoot>
	);
};
