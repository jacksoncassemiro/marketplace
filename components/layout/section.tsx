'use client';

import { AppShell } from '@mantine/core';
import { ReactNode } from 'react';

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell.Section>
      {children}
    </AppShell.Section>
  );
};