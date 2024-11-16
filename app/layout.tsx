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
