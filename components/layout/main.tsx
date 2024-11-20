'use client';

import { Box } from '@mantine/core';
import { ReactNode } from 'react';
import { Container } from "@/components/layout/container";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component='main'
      className="bg-mantine-gray-0 dark:bg-mantine-dark-800"
    >
      <Container
        py="xl"
      >
        {children}
      </Container>
    </Box>
  );
};