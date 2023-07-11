"use client";

import { ContainerProps } from "@/interfaces";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-[2520px] px-5 md:px-10 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
