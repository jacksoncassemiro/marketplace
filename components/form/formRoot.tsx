import { ReactNode } from "react";
import { createFormContext } from '@mantine/form';

export interface FormRootProps {
  children: ReactNode;
  formAction: (formData: FormData) => void;
  className?: string;
  initialValues?: {
    [key: string]: any;
  },
  validate?: {
    [key: string]: (value: any) => string | null;
  },
}

const [FormProvider, useFormContext, useForm] = createFormContext<{
  [key: string]: any
}>();

export const FormRoot = ({
  children,
  formAction,
  className,
  initialValues = {},
  validate = {},
}: FormRootProps) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues,
    validate,
  });

  return (
    <FormProvider form={form}>
      <form
        action={formAction}
        className={className}
        onSubmit={form.onSubmit(() => {})}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export { useFormContext, useForm };