"use client";

import { ReactNode } from "react";
import { createFormContext } from '@mantine/form';
import { LoadingState } from "@/components/loadingState";

export interface FormRootProps {
  nameForm: string;
  children: ReactNode;
  className?: string;
  isLoading: boolean;
  formAction: (formData: any) => void;
  initialValues?: {
    [key: string]: any;
  };
  validate?: Record<string, (value: any) => string | null>;
}

const [FormProvider, useFormContext, useForm] = createFormContext<{
  [key: string]: any
}>();

export const FormRoot = ({
  nameForm,
  children,
  className,
  isLoading,
  formAction,
  initialValues = {},
  validate = {},
}: FormRootProps) => {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    name: nameForm,
    initialValues,
    validate,
  });

  return (
    <FormProvider form={form}>
      <form
        id={nameForm}
        className={className}
        onSubmit={
          form.onSubmit(
            (formData) => formAction(formData),
            (errors) => {
              const firstErrorPath = Object.keys(errors)[0];
              form.getInputNode(firstErrorPath)?.focus();
            }
          )
        }
      >
			  <LoadingState loading={isLoading} />
        {children}
      </form>
    </FormProvider>
  );
}

export { useFormContext, useForm };