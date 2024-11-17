import { Container } from "@/components/layout/container";
import { Main } from "@/components/layout/main";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Main>
				<Container>{children}</Container>
			</Main>
		</>
	);
}
