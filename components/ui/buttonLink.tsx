import Link from 'next/link';
import type { ButtonProps, ElementProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends ButtonProps, ElementProps<"a", keyof ButtonProps> {
  children: ReactNode;
  href: string;
}

export const Button = ({ children, href, ...props }: Props) => {
  return (
    <MantineButton
      {...props}
      component={Link}
      href={href}
			loaderProps={{ type: "dots" }}
		>
      {children}
    </MantineButton>
  );
};