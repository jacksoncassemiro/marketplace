import { Image, ImageProps } from '@mantine/core';
import { NtImage } from '@/components/ui/image';
import logo from '@/assets/images/logo.svg';

export const Logo = ({ h = 40, w = 40, p = 2, ...props }: ImageProps) => {
  return (
    <Image
      component={NtImage}
      src={logo}
      alt="Logo Marketplace PI"
      h={h}
      w={w}
      p={p}
      {...props}
    />
  );
};