import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { getOrigin } from "@/utils/getOrigin";
import "@mantine/core/styles.css";
import "./globals.css";

export const metadata = {
	metadataBase: new URL(getOrigin()),
	title: "Marketplace PI",
	description:
		"Projeto desenvolvido para o curso de Sistemas para Internet da UNCISAL.",
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
					<link rel="icon" type="image/png" href="/./public/favicon/favicon-96x96.png" sizes="96x96" />
					<link rel="icon" type="image/svg+xml" href="/./public/favicon/favicon.svg" />
					<link rel="shortcut icon" href="/./public/favicon/favicon.ico" />
					<link rel="apple-touch-icon" sizes="180x180" href="/./public/favicon/apple-touch-icon.png" />
					<meta name="apple-mobile-web-app-title" content="Marketplace PI" />
					<link rel="manifest" href="/./public/favicon/site.webmanifest" />
				</head>
				<body>
					<MantineProvider
						theme={theme}
						defaultColorScheme="light"
						withCssVariables
					>
            {children}
            <Footer />
					</MantineProvider>
				</body>
			</html>
		</AuthProvider>
	);
}
