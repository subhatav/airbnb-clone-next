"use client";

import { MenuItemProps } from "@/interfaces";

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, isOptional }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isOptional && "lg:hidden"
      } p-3 font-semibold transition hover:bg-neutral-100`}
    >
      {label}
    </div>
  );
};

export default MenuItem;
