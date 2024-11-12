'use client';

import { useAuth } from "@/contexts/AuthContext";
import { AppShell } from "@mantine/core";
import { ReactNode } from "react";

export const Root = ({ children }: { children: ReactNode }) => {
	const { openedBurger } = useAuth();
	return (
		<AppShell
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { desktop: true, mobile: !openedBurger },
			}}
			padding="md"
		>
			{children}
		</AppShell>
	);
};
