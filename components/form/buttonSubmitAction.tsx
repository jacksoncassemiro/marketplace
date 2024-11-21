"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { FormRoot, FormRootProps } from "@/components/form/formRoot";

interface Props extends Omit<ButtonProps, "formAction">, Omit<FormRootProps, "children"> {}
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
    <FormRoot formAction={formAction}>
      <FormContent {...props}>
        {children}
      </FormContent>
    </FormRoot>
  );
}
