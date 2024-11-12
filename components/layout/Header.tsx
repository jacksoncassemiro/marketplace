'use client';

import { AppShell } from '@mantine/core';
import { Container } from "@/components/layout/Container";
import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell.Header>
      <Container>
        {children}
      </Container>
    </AppShell.Header>
  );
};