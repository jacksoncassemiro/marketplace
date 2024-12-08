"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { FormRoot, FormRootProps } from "@/components/form/formRoot";

interface Props extends Omit<ButtonProps, "formAction"> {
  formAction: FormRootProps["formAction"]
}

interface FormContentProps extends Omit<ButtonProps, "formAction"> {}

const FormContent = ({
  children,
  ...props
}: FormContentProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      loading={pending}
      {...props}
    >
      {children}
    </Button>
  );
}

export const ButtonSubmitAction = ({
  children,
  formAction,
  ...props
}: Props) => {

  return (
    <form action={formAction}>
      <FormContent {...props}>
        {children}
      </FormContent>
    </form>
  );
}
