import { ButtonLink } from "@/components/ui/buttonLink";
import { Sidebar, SidebarProps } from "@/components/layout/sidebar/sidebar";
import { Divider, Flex, Group, Stack } from "@mantine/core";
import { Anchor } from "@/components/ui/anchor";

export const AuthDrawer = (props: Omit<SidebarProps, "children">) => {
  return (
    <Sidebar {...props}>
      <Flex
        gap="xs"
        direction="column"
      >
        <Flex
          gap="xs"
          direction="column"
          align="center"
        >
          <Group gap="xs" w="100%" grow>
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

          <Anchor
            href="/alterar-senha"
            size="sm"
          >
            Recuperar senha
          </Anchor>
        </Flex>

        <Divider my="sm" />
        
      </Flex>
    </Sidebar>
  );
};