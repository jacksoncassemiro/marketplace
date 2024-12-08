import { Image } from "@/components/ui/image";
import logo from '@/assets/images/logo.svg';
import { ImageProps } from "@mantine/core";

export const Logo = ({ h = 36, w = 36, ...props }: ImageProps) => {
  return (
    <Image
      src={logo}
      alt="Logo Marketplace PI"
      h={h}
      w={w}
      {...props}
    />
  );
};