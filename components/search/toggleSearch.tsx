import { Input } from "@mantine/core"
import { Search } from "lucide-react"
import { memo } from "react";

interface Props {
  toggle: () => void;
}

export const ToggleSearch = memo(({ toggle }: Props) => {
  return (
    <Input
      component="button"
      pointer
      rightSectionPointerEvents="none"
      rightSection={<Search size={16} />}
      onClick={toggle}
    >
      {"Encontre no PI"}
    </Input>
  )
})