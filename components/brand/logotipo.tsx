import { Image, ImageProps } from '@mantine/core';
import { NtImage } from '@/components/ui/image';
import logotipo from '@/assets/images/logotipo.svg';

export const Logotipo = ({ h = 40, w = "auto", ...props }: ImageProps) => {
  return (
    <Image
      component={NtImage}
      src={logotipo}
      alt="Logotipo Marketplace PI"
      h={h}
      w={w}
      p={2}
      {...props}
    />
  );
};