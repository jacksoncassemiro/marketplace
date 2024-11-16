'use client';

import { Container as ContainerMantine } from '@mantine/core';
import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <ContainerMantine size="lg">
      {children}
    </ContainerMantine>
  );
};