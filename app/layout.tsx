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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light" withCssVariables>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
