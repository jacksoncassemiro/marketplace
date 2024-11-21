import type { ButtonProps as MantineButtonProps, ElementProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';

export interface ButtonProps extends MantineButtonProps, ElementProps<"button", keyof MantineButtonProps> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MantineButton
			{...props}
		>
      {children}
    </MantineButton>
  );
};
