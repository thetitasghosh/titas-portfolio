import React from "react";
import { nav } from "@/data/navigation";
import {Menu} from 'lucide-react'
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div className="redd z-50 fixed top-0 flex h-14 w-full items-center justify-between px-20 text-2xl font-bold mix-blend-difference">
      <Logo />
      <Nav nav={nav} />
      <NavBar data={nav}/>
    </div>
  );
};

function Logo() {
  return (
    <div className="redd text-2xl flex items-center justify-center gap-2 font-bold">
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
function NavBar({data}) {
  return (
    <>
      <div className="laptop:hidden">
        <Menu/>
      </div>
    </>
  );
}
export default Header;
