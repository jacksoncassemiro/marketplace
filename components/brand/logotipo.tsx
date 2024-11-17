import { Image } from '@mantine/core';
import { NtImage } from '@/components/ui/image';
import logotipo from '@/assets/images/logotipo.svg';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Image>;

export const Logotipo = ({ ...props }: Props) => {
  return (
    <Image
      component={NtImage}
      src={logotipo}
      alt="Logotipo Marketplace PI"
      {...props}
    />
  );
};