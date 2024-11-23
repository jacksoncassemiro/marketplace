"use client";

import { Logotipo } from "@/components/brand/logotipo";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { Anchor } from "@/components/ui/anchor";
import { MainContent } from "@/components/layout/header/mainContent";
import { Paper } from "@mantine/core";

export const Header = () => {
	return (
		<Paper
			component="header"
			pos={"sticky"}
			top={0}
			shadow="xs"
			className="z-50"
		>
			<Container
				className="flex items-center justify-between py-4"
			>
				<Anchor href="/">
					<Logotipo visibleFrom="md" />
					<Logo hiddenFrom="md" />
				</Anchor>
				<MainContent />
			</Container>
		</Paper>
	);
};
