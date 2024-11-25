import { ReactNode } from "react";
import { createFormContext } from '@mantine/form';

export interface FormRootProps {
  nameForm: string;
  children: ReactNode;
  formAction: (formData: FormData) => void;
  className?: string;
  initialValues?: {
    [key: string]: any;
  },
  validate?: {
    [key: string]: (value: any) => string | null | {
      [key: string]: (value: any) => string | null;
    };
  },
}

const [FormProvider, useFormContext, useForm] = createFormContext<{
  [key: string]: any
}>();

export const FormRoot = ({
  nameForm,
  children,
  formAction,
  className,
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
        action={formAction}
        className={className}
        onSubmit={
          form.onSubmit(
            () => {},
            (errors) => {
              const firstErrorPath = Object.keys(errors)[0];
              form.getInputNode(firstErrorPath)?.focus();
            }
          )
        }
      >
        {children}
      </form>
    </FormProvider>
  );
}

export { useFormContext, useForm };