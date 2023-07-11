"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";

import Avatar from "@/components/Avatar";
import MenuItem from "@/components/navigation/MenuItem";

const UserMenu = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={() => {}}
          className="
            hidden rounded-full p-4 text-sm font-semibold
            transition hover:bg-neutral-100 lg:block
          "
        >
          Airbnb your Home!
        </button>
        <div
          onClick={toggleOpen}
          className="
            flex cursor-pointer flex-row items-center gap-4
            rounded-full border-[1px] border-neutral-200 p-4
            transition hover:shadow-md md:gap-[18px] md:py-2
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src="/images/placeholder.jpg" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute right-0 top-[76px] w-36 overflow-hidden
            rounded-xl bg-white text-sm shadow-md md:top-[78px]
          "
        >
          <div className="flex cursor-pointer flex-col">
            {true ? (
              <>
                <MenuItem
                  isOptional={true}
                  label="Airbnb your Home"
                  onClick={() => {}}
                />
                <hr className="lg:hidden" />
                <MenuItem label="My Trips" onClick={() => {}} />
                <MenuItem label="My Reservations" onClick={() => {}} />
                <MenuItem label="My Favorites" onClick={() => {}} />
                <MenuItem label="My Properties" onClick={() => {}} />
                <hr />
                <MenuItem label="Sign Out" onClick={() => {}} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={() => {}} />
                <MenuItem label="Register" onClick={() => {}} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
