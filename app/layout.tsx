import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { AuthProvider } from '@/contexts/AuthContext';
import { theme } from '../theme';
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
    <AuthProvider>
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
    </AuthProvider>
  );
}
