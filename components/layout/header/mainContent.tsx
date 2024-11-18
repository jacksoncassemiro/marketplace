import HeaderAuth from "@/components/header-auth";
import { Box } from "@mantine/core";
import Link from "next/link";

export const MainContent = () => {
  return (
    <>
      <Box className="flex gap-5 items-center font-semibold">
        <Link href={"/protected"}>protected</Link>
      </Box>
      <HeaderAuth />
    </>
  )
};