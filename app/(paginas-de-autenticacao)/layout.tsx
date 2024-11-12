import { Main } from "@/components/layout/Main";
import { HeaderSimple } from "@/components/layout/HeaderSimple";
import { Container } from "@/components/layout/Container";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSimple />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
    </>
  );
}
