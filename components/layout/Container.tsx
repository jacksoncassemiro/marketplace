'use client';

import { Container as ContainerMantine, ContainerProps } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends ContainerProps {
  children: ReactNode;
}

export const Container = ({ children, size = "lg", ...props }: Props) => {
  return (
    <ContainerMantine size={size} {...props}>
      {children}
    </ContainerMantine>
  );
};