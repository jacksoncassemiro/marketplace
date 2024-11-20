'use client';

import { Box } from '@mantine/core';
import { ReactNode } from 'react';
import { Container } from "@/components/layout/container";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component='main'
      bg="gray.0"
    >
      <Container
        py="xl"
      >
        {children}
      </Container>
    </Box>
  );
};