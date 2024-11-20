'use client';

import { Box } from '@mantine/core';
import { ReactNode } from 'react';
import { Container } from "@/components/layout/container";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component='main'
      className="bg-mantine-bg-1"
    >
      <Container
        py="xl"
      >
        {children}
      </Container>
    </Box>
  );
};