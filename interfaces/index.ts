export interface AvatarProps {
  src: string | null | undefined;
}

export interface MenuItemProps {
  onClick: () => void;

  label: string;
  isOptional?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
}
