import Link from 'next/link';
import type { AnchorProps, ElementProps } from '@mantine/core';
import { Anchor as MantineAnchor } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends AnchorProps, ElementProps<"a", keyof AnchorProps> {
  children: ReactNode;
  href: string;
}

export const Anchor = ({ children, href, ...props }: Props) => {
  return (
    <MantineAnchor
      {...props}
      component={Link}
      href={href}
		>
      {children}
    </MantineAnchor>
  );
};