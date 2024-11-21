import { ReactNode } from "react";

export interface FormRootProps {
  children: ReactNode;
  formAction: (formData: FormData) => void;
  className?: string;
}

export const FormRoot = ({ children, formAction, className }: FormRootProps) => {
  return (
    <form
      action={formAction}
      className={className}
    >
      {children}
    </form>
  );
}