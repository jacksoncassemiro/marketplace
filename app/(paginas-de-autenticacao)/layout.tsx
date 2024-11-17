import { Container } from "@/components/layout/container";
import { Main } from "@/components/layout/main";

export default async function Layout({
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
