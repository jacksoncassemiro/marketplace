'use client';

import { Box } from '@mantine/core';
import { Header } from "@/components/layout/Header";

export const HeaderSimple = () => {
  return (
    <Header>
      <Box className="flex gap-5 items-center font-semibold">
        <h1>Next.js Supabase Starter</h1>
      </Box>
    </Header>
  );
};