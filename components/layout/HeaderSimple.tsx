'use client';

import { Box } from '@mantine/core';
import { Header } from "@/components/layout/Header";
import { Logotipo } from '@/components/brand/logotipo';

export const HeaderSimple = () => {
  return (
    <Header>
      <Box className="flex gap-5 items-center font-semibold">
        <Logotipo />
      </Box>
    </Header>
  );
};