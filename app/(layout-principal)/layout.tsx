import { Main } from "@/components/layout/Main";
import { HeaderMain } from "@/components/layout/HeaderMain";
import { Container } from "@/components/layout/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderMain />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
    </>
  );
}
