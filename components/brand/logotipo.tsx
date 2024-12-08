"use client";

import { Image } from "@/components/ui/image";
import logotipo from '@/assets/images/logotipo.svg';
import { ImageProps } from "@mantine/core";

export const Logotipo = ({ h = 36, w = "auto", ...props }: ImageProps) => {
  return (
    <Image
      className="hidden"
      src={logotipo}
      alt="Logotipo Marketplace PI"
      mih={h}
      h={h}
      miw={w}
      w={w}
      {...props}
    />
  );
};