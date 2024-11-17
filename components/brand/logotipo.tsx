import { Image } from "@/components/ui/image";
import logotipo from '@/assets/images/logotipo.svg';
import { ImageProps } from "@mantine/core";

export const Logotipo = ({ h = 40, w = "auto", p = 2, ...props }: ImageProps) => {
  return (
    <Image
      src={logotipo}
      alt="Logotipo Marketplace PI"
      h={h}
      w={w}
      p={p}
      {...props}
    />
  );
};