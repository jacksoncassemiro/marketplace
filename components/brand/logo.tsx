import NextImage from 'next/image';
import { Image } from '@mantine/core';
import logo from '@/assets/logo.png';

type Props = typeof Image;

export const Logo = ({ ...props }: Props) => {
  return (
    <Image component={NextImage} src={logo} alt="Logo Marketplace PI" {...props} />
  );
};