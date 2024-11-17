import { Image } from "@/components/ui/image";
import logo from '@/assets/images/logo.svg';
import { ImageProps } from "@mantine/core";

export const Logo = ({ h = 40, w = 40, p = 2, ...props }: ImageProps) => {
  return (
    <Image
      src={logo}
      alt="Logo Marketplace PI"
      h={h}
      w={w}
      p={p}
      {...props}
    />
  );
};