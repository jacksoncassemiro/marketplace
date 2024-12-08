import { ActionIcon, Input } from "@mantine/core"
import { Search } from "lucide-react"
import { memo } from "react";

interface Props {
  toggle: () => void;
}

export const ToggleSearch = memo(({ toggle }: Props) => {
  return (
    <>
      <Input
        visibleFrom="xs"
        component="button"
        pointer
        rightSectionPointerEvents="none"
        rightSection={<Search size={16} />}
        onClick={toggle}
        className="!w-full !max-w-72"
      >
        Encontre no PI
      </Input>
      <ActionIcon
        hiddenFrom="xs"
        variant="default"
        onClick={toggle}
        size={36}
      >
        <Search size={16} />
      </ActionIcon>
    </>
  )
})