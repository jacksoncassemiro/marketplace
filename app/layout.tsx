import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import HeaderAuth from "@/components/header-auth";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Marketplace PI",
  description: "Projeto desenvolvido para o curso de Sistemas para Internet da UNCISAL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="">
        <MantineProvider theme={theme} defaultColorScheme="light" withCssVariables>
          <div className="min-h-screen flex flex-col items-center">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Next.js Supabase Starter</Link>
            </div>
            <HeaderAuth />
          </div>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
