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
				className="flex items-center justify-between gap-2 py-4"
			>
				<Anchor className="min-w-max" href="/">
					<Logotipo visibleFrom="sm" />
					<Logo hiddenFrom="sm" />
				</Anchor>
				<MainContent />
			</Container>
		</Paper>
	);
};
