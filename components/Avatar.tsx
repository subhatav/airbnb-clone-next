"use client";

import Image from "next/image";

import { AvatarProps } from "@/interfaces";

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src ?? "/images/placeholder.jpg"}
      alt="Avatar"
      className="rounded-full"
      width="35"
      height="35"
    />
  );
};

export default Avatar;
