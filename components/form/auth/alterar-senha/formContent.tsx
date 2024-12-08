"use client";

import { handleForgotPassword } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormInputsForgotPassword } from "@/components/form/auth/alterar-senha/formInputs";
import { FormRoot } from "@/components/form/formRoot";
import { initialValues, validate } from "@/schemas/auth/authSchema";
import { useTransition } from "react";

export const FormContentForgotPassword = () => {
	const [isPending, startTransition] = useTransition();
	const handleFormSubmit = (formData: any) => {
		startTransition(async () => {
			await handleForgotPassword(formData);
		});
	};
	return (
		<FormRoot
			className="flex flex-col gap-mantine-sm"
			validate={{ email: validate.email }}
			initialValues={{ email: initialValues.email }}
			nameForm="forgotPassword"
			formAction={handleFormSubmit}
			isLoading={isPending}
		>
			<FormInputsForgotPassword />
		</FormRoot>
	);
};
