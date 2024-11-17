import NextImage from 'next/image';
import { Image } from '@mantine/core';
import logotipo from '@/assets/logotipo.png';

type Props = typeof Image;

export const Logotipo = ({ ...props }: Props) => {
  return (
    <Image component={NextImage} src={logotipo} alt="Logo Marketplace PI" {...props} />
  );
};