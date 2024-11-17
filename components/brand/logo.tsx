import { Image } from '@mantine/core';
import { NtImage } from '@/components/ui/image';
import logo from '@/assets/images/logo.svg';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Image>;

export const Logo = ({ ...props }: Props) => {
  return (
    <Image
      component={NtImage}
      src={logo}
      alt="Logo Marketplace PI"
      {...props}
    />
  );
};