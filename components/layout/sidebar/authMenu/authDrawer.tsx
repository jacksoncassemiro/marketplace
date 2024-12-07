import { ButtonLink } from "@/components/ui/buttonLink";
import { Sidebar, SidebarProps } from "@/components/layout/sidebar/sidebar";
import { Flex, Group } from "@mantine/core";

export const AuthDrawer = (props: Omit<SidebarProps, "children">) => {
  return (
    <Sidebar {...props}>
      <Flex
        direction="column"
      >
        <Group gap="xs" grow>
          <ButtonLink
            variant="filled"
            href="/login"
          >
            Entrar
          </ButtonLink>
          <ButtonLink
            variant={"default"}
            href="/criar-conta"
          >
            Cadastrar-se
          </ButtonLink>
        </Group>
      </Flex>
    </Sidebar>
  );
};