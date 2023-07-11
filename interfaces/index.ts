import { IconType } from "react-icons";

export interface ClientOnlyProps {
  children: React.ReactNode;
}

export interface AvatarProps {
  src: string | null | undefined;
}

export interface MenuItemProps {
  label: string;
  onClick: () => void;
  isOptional?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
