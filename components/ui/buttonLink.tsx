import type { ButtonProps, ElementProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';
import Link from 'next/link';

interface Props extends ButtonProps, ElementProps<"a", keyof ButtonProps> {
  children: ReactNode;
  href: string;
}

export const ButtonLink = ({ children, href, size = "sm", ...props }: Props) => {
  return (
    <MantineButton
			{...props}
      component={Link}
      href={href}
      size={size}
		>
      {children}
    </MantineButton>
  );
};
