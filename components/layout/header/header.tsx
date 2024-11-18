"use client";

import { Logotipo } from "@/components/brand/logotipo";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { Anchor } from "@/components/ui/anchor";
import { ContentMain } from "@/components/layout/header/contentMain";
import { Paper } from "@mantine/core";

export const Header = () => {
	return (
		<Paper
			component="header"
			pos={"sticky"}
			top={0}
			shadow="xs"
		>
			<Container
				className="flex items-center justify-between py-4"
			>
				<Anchor href="/">
					<Logotipo visibleFrom="md" />
					<Logo hiddenFrom="md" />
				</Anchor>
				<ContentMain />
			</Container>
		</Paper>
	);
};
