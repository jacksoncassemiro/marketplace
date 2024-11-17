import type { ButtonProps, ElementProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends ButtonProps, ElementProps<"button", keyof ButtonProps> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <MantineButton
			{...props}
			loaderProps={{ type: "dots" }}
		>
      {children}
    </MantineButton>
  );
};
