"use client";
import React, { useState } from "react";
import { nav } from "@/data/navigation";
import { Menu, X } from "lucide-react";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import Image from "next/image";
// import { Close } from "@radix-ui/react-toast";
const Header = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className="redd fixed top-0 z-40 flex h-14 w-full items-center justify-between px-8 text-2xl font-bold mix-blend-difference desktop:px-20">
        <Logo />
        <Nav nav={nav} />
      </div>
      <NavBar active={active} setactive={setActive} data={nav} />
    </>
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
      <div className="redd fixed right-5 top-4 z-[999] laptop:hidden">
        <div
          onClick={() => setactive(!active)}
          className="redd relative z-[100]"
        >
          <div className="cursor-pointer mix-blend-difference">
            {active ? (
              <Menu className="mix-blend-difference" />
            ) : (
              <X className="mix-blend-difference" />
            )}
          </div>
          {active ? (
            ""
          ) : (
            <div className="absolute right-0 top-0 z-[199] h-[30rem] w-72 rounded-2xl bg-Darkgrey p-5">
              <div className="redd flex h-full w-full flex-col items-center justify-center gap-2">
                {data.map((itm, i) => {
                  return (
                    <div key={i}>
                      <Link href={itm.route}>{itm.label}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
