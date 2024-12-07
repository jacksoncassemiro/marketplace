import { MouseEvent, ReactNode } from "react";
import { Drawer, DrawerProps, ScrollArea } from "@mantine/core";

export interface SidebarProps extends DrawerProps {
  children: ReactNode;
}
export const Sidebar = ({
  children,
  opened,
  onClose,
  position = "right",
  size = "xs",
  title = "Menu",
}: SidebarProps) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.target as HTMLElement;
    const classNames = clickedElement.className.toLowerCase();
    if (classNames.includes("button")) {
      onClose();
    }
  };
  return (
    <Drawer
      component="div"
      onClick={handleClick}
      title={title}
      opened={opened}
      onClose={onClose}
      position={position}
      size={size}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      {children}
    </Drawer>
  )
};