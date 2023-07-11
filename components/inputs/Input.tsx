"use client";

import { BiDollar } from "react-icons/bi";

import { InputProps } from "@/interfaces";

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  required,
  disabled,
  formatPrice,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar
          size={30}
          className="absolute left-3.5 top-4 pr-0.5 text-neutral-700"
        />
      )}

      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder=" "
        {...register(id, { required })}
        className={`
          peer w-full rounded-md border-2 bg-white
          pb-2 pr-4 pt-6 font-light outline-none transition
          disabled:cursor-not-allowed disabled:opacity-80
          ${formatPrice ? "pl-12" : "pl-4"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />

      <label
        className={`
          text-md absolute top-1/3 z-10 origin-[0]
          -translate-y-3.5 scale-75 transform pl-0.5 duration-150
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-3.5 peer-focus:scale-75
          ${formatPrice ? "left-12" : "left-4"}
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
