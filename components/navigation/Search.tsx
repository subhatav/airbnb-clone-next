"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
        w-full cursor-pointer rounded-full border-[1px] py-2
        text-sm shadow-sm transition hover:shadow-md md:w-auto
      "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="px-8 font-semibold sm:pl-14 md:pl-[40px]">Anywhere</div>
        <div
          className="
            hidden flex-row border-x-2 px-14 text-center
            font-semibold sm:block md:px-[22px] lg:px-8
          "
        >
          Any Week
        </div>
        <div
          className="
            flex flex-row items-center gap-[6px]
            px-2 text-gray-600 sm:gap-[22px]
          "
        >
          <div className="hidden px-4 sm:block sm:pr-[20px] md:pr-0">
            Add Guests
          </div>
          <div className="rounded-full bg-rose-500 p-2.5 text-white">
            <BiSearch size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
