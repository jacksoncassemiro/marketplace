import { Footer } from "@/components/layout/Footer";
import { Root } from "@/components/layout/Root";
import { AuthProvider } from "@/contexts/AuthContext";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "../theme";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
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
				</head>
				<body>
					<MantineProvider
						theme={theme}
						defaultColorScheme="light"
						withCssVariables
					>
						<Root>
							{children}
							<Footer />
						</Root>
					</MantineProvider>
				</body>
			</html>
		</AuthProvider>
	);
}
