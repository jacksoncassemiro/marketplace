'use client';

import { Box } from '@mantine/core';
import HeaderAuth from '@/components/header-auth';
import Link from "next/link";
import { Header } from "@/components/layout/Header";

export const HeaderMain = () => {
  return (
    <Header>
      <div className="flex gap-5 items-center font-semibold">
        <Link href={"/"}>Next.js Supabase Starter</Link>
      </div>
      <HeaderAuth />
    </Header>
  );
};