'use client';

import { Container } from "@/components/layout/Container";
import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header>
      <Container>
        {children}
      </Container>
    </header>
  );
};