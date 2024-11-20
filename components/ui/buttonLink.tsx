import type { ButtonProps, ElementProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';
import { ReactNode } from 'react';
import Link from 'next/link';

interface Props extends ButtonProps, ElementProps<"a", keyof ButtonProps> {
  children: ReactNode;
  href: string;
}

export const ButtonLink = ({ children, href, ...props }: Props) => {
  return (
    <MantineButton
			{...props}
			loaderProps={{ type: "dots" }}
      component={Link}
      href={href}
		>
      {children}
    </MantineButton>
  );
};
