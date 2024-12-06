"use client";

import { handleSignIn } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormInputsSignIn } from "@/components/form/auth/login/formInputs";
import { FormRoot } from "@/components/form/formRoot";
import { initialValues, validate } from "@/schemas/login/authSchema";
import { useTransition } from "react";

export const FormContent = () => {
	const [isPending, startTransition] = useTransition();
	const handleFormSubmit = (formData: any) => {
    startTransition( async () => {
			await handleSignIn(formData);
    });
  };
	return (
		<FormRoot
			className="flex flex-col gap-mantine-sm"
			validate={validate}
			initialValues={initialValues}
			nameForm="signIn"
			formAction={handleFormSubmit}
			isLoading={isPending}
		>
			<FormInputsSignIn />
		</FormRoot>
	);
};
