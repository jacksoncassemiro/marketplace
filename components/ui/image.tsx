import { Image as MantineImage, ImageProps } from '@mantine/core';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

const NtImage = (props: NextImageProps) => {
  return <NextImage {...props} />;
};

interface Props extends ImageProps {
  alt: string;
}

export const Image = ({ alt, ...props }: Props) => {
  return (
    <MantineImage
      component={NtImage}
      alt={alt}
      {...props}
    />
  );
};