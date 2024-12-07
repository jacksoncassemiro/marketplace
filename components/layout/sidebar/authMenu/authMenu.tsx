import { Button } from "@/components/ui/button";
import { useDisclosure } from "@mantine/hooks";
import { AuthDrawer } from "@/components/layout/sidebar/authMenu/authDrawer";

export const AuthMenu = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button
        onClick={open}
        variant="filled"
      >
        Acessar
      </Button>
      <AuthDrawer
        title="Acessar"
        opened={opened}
        onClose={close}
      />
    </>
  );
};