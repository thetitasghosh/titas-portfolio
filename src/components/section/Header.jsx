import React from "react";
import { nav } from "@/data/navigation";
import {Menu} from 'lucide-react'
import Link from "next/link";
const Header = () => {
  return (
    <div className="redd fixed top-0 flex h-14 w-full items-center justify-between px-20 text-2xl font-bold mix-blend-difference">
      <Logo />
      <Nav nav={nav} />
      <NavBar data={nav}/>
    </div>
  );
};

function Logo() {
  return (
    <div className="redd text-2xl font-bold">
      <Link href={"/"}>Titas</Link>
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
