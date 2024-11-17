"use client";

import { Logotipo } from "@/components/brand/logotipo";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/buttonLink";
import { Nav } from "@/components/layout/header/nav";

export const Header = () => {
	return (
		<header>
			<Container>
				<ButtonLink href="/">
					<Logotipo />
				</ButtonLink>
				<Nav />
			</Container>
		</header>
	);
};
