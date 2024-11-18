"use client";

import { Logotipo } from "@/components/brand/logotipo";
import { Container } from "@/components/layout/container";
import { Anchor } from "@/components/ui/anchor";
import { Nav } from "@/components/layout/header/nav";
import { Paper } from "@mantine/core";

export const Header = () => {
	return (
		<Paper component="header" shadow="xs">
			<Container>
				<Anchor href="/">
					<Logotipo />
				</Anchor>
				<Nav />
			</Container>
		</Paper>
	);
};
