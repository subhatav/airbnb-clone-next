"use client";

import Container from "@/components/Container";
import Logo from "@/components/navigation/Logo";
import Search from "@/components/navigation/Search";
import UserMenu from "@/components/navigation/UserMenu";

const NavBar = () => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-3">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
