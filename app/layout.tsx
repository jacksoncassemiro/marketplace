import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import { Header } from "@/components/layout/header/header";
import { Main } from "@/components/layout/main";
import { Footer } from "@/components/layout/footer";
import { AuthProvider } from "@/contexts/authContext";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { getOrigin } from "@/utils/getOrigin";
import "./globals.css";
import { NotificationProvider } from "@/contexts/notificationContext";
import { Suspense } from "react";

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
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				<ColorSchemeScript defaultColorScheme="dark" />
				<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<meta name="apple-mobile-web-app-title" content="Marketplace PI" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
					/>
			</head>
			<body>
				<MantineProvider
					theme={theme}
					defaultColorScheme="dark"
				>
					<Suspense fallback={null}>
						<AuthProvider>
							<NotificationProvider>
								<Header />
								<Main>
									{children}
								</Main>
								<Footer />
							</NotificationProvider>
						</AuthProvider>
					</Suspense>
				</MantineProvider>
			</body>
		</html>
	);
}
