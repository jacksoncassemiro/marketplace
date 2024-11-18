import { Image } from "@/components/ui/image";
import logo from '@/assets/images/logo.svg';
import { ImageProps } from "@mantine/core";

export const Logo = ({ h = 38, w = 38, ...props }: ImageProps) => {
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