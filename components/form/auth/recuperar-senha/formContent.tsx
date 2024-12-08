"use client";

import { handleResetPassword } from "@/app/(paginas-de-autenticacao)/authUtils";
import { FormRoot } from "@/components/form/formRoot";
import { initialValuesCreateAccount, validateCreateAccount } from "@/schemas/auth/authSchema";
import { useTransition } from "react";
import { FormInputsResetPassword } from "@/components/form/auth/recuperar-senha/formInputs";

export const FormContentResetPassword = () => {
	const [isPending, startTransition] = useTransition();
	const handleFormSubmit = (formData: any) => {
		startTransition(async () => {
			await handleResetPassword(formData);
		});
	};
	return (
		<FormRoot
			className="flex flex-col gap-mantine-sm"
			validate={validateCreateAccount}
			initialValues={initialValuesCreateAccount}
			nameForm="ResetPassword"
			formAction={handleFormSubmit}
			isLoading={isPending}
		>
			<FormInputsResetPassword />
		</FormRoot>
	);
};
