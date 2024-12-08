import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { LoadingOverlay } from "@mantine/core";

export const LoadingState = ({ loading }: { loading: boolean }) => {
  const [visible, { toggle }] = useDisclosure(true);
	useEffect(() => {
		toggle();
	}, [loading]);
  return (
    <LoadingOverlay pos="fixed" visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
  );
};