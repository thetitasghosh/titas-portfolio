"use client";
import React, { useState } from "react";
import { nav } from "@/data/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import { Close } from "@radix-ui/react-toast";
const Header = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="redd fixed top-0 z-40 flex h-14 w-full items-center justify-between px-8 text-2xl font-bold mix-blend-difference desktop:px-20">
      <Logo />
      <Nav nav={nav} />
      <NavBar active={active} setactive={setActive} data={nav} />
    </div>
  );
};

function Logo() {
  return (
    <div className="redd flex items-center justify-center gap-2 text-2xl font-bold">
      {/* <Image src={'/assets/profile.png'} alt="Titas Ghosh" width={10000} height={10000} className="size-8"/> */}
      <Link href={"/"}>Titas G.</Link>
    </div>
  );
}
function Nav({ nav }) {
  return (
    <div className="redd hidden h-full items-center justify-center gap-5 px-5 laptop:flex">
      {nav.map((data, i) => {
        return (
          <div key={i}>
            <Link href={data.route}>{data.label}</Link>
          </div>
        );
      })}
    </div>
  );
}
function NavBar({ data, active, setactive }) {
  return (
    <>
      <div
        onClick={() => setactive(!active)}
        className="redd relative laptop:hidden"
      >
        <div className="z-50">
          {active ? (
            <Menu className="mix-blend-difference" />
          ) : (
            <X className="mix-blend-difference" />
          )}
        </div>
        {active ? (
          ""
        ) : (
          <div className="absolute right-0 top-0  h-96 w-80 rounded-2xl bg-white">

          </div>
        )}
      </div>
    </>
  );
}
export default Header;
