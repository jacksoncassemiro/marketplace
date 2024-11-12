'use client';

import { AppShell } from '@mantine/core';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell.Main>
      {children}
    </AppShell.Main>
  );
};