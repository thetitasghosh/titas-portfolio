"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { nav, social } from "@/data/navigation";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (!isActive) {
      document.body.style = "overflow-y: hidden";
    } else {
      document.body.style = "overflow-y:auto";
    }
    console.log(isActive);
  });
  return (
    <div className="redd fixed z-[999] flex h-16 w-screen items-center justify-between px-10 mix-blend-difference">
      <div className="text-2xl text-white">
        <h1 className="font-black">
          <Link className="" href={"/"}>
            TG
          </Link>
        </h1>
      </div>
      <div className="hidden h-10 items-center justify-evenly rounded-3xl border font-medium tablet:flex tablet:w-[25rem] laptop:w-[35rem]">
        {nav.map((data, idx) => {
          return (
            <Route
              isActive={isActive}
              setIsActive={setIsActive}
              key={idx}
              data={data}
            />
          );
        })}
      </div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="z-[100] rounded-xl border px-2 mix-blend-difference tablet:hidden"
      >
        {isActive ? "close" : "menu"}
      </div>

      {isActive && <Nav active={isActive} setActive={setIsActive} />}
    </div>
  );
};

function Nav({ active, setActive }) {
  return (
    <>
      <div className="fixed  z-[99] right-3 top-3 flex h-96 w-[20rem] flex-col items-start justify-evenly gap-20 rounded-lg bg-white p-2 py-4 text-2xl text-black transition-transform">
        <div className="flex  h-full w-full flex-col items-start justify-evenly px-20">
          {nav.map((data, idx) => {
            return (
              <Route
                onClick={() => {
                  setActive(!active);
                }}
                key={idx}
                data={data}
              />
            );
          })}
        </div>
        <div className="flex h-36 w-full flex-col items-center justify-evenly gap-1 text-xl">
          <h1 className="h-16">Social</h1>
          <div className="flex h-full w-full items-center justify-evenly">
            {social.map((data, idx) => {
              return <Route key={idx} data={data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

function Route({ data, onClick }) {
  return (
    <div onClick={onClick}>
      <Link target={data.terget} href={data.route}>
        <div className="">{data.label || data.icon}</div>
      </Link>
    </div>
  );
}
