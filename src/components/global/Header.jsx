"use client";
import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav, social } from "@/data/navigation";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Button } from "../ui/button";
import gsap from "gsap";
const Header = () => {
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    // const title = new SplitType(".split-text-yourmaker", {
    //   types: "lines",
    // });
    // const line = new SplitType(".split-text-sum", { types: "lines" });
    // const desc = new SplitType(".yourmaker-desc", { types: "chars" });
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 2.5,
      });
      tl.from(".Header", {
        opacity: 0,
        y: "-50%",
        filter: "blur(10px)",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <motion.div
      initial={{
        height: "64px",
        top: 0,
      }}
      animate={{
        height: open ? "260px" : "64px",
        top: 10,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="redd Header fixed right-0 top-0 z-50 flex h-16 w-full items-center justify-center px-5 py-2 selection:bg-neutral-100"
    >
      <div
        id="container"
        className="redd container flex h-full flex-col items-start justify-between gap-1 overflow-hidden rounded-md border bg-white px-2 dark:border-neutral-900 dark:bg-neutral-800 tablet:px-5"
      >
        <div className="redd flex h-11 w-full items-center justify-between">
          <div id="logo" className="redd h-11 font-medium text-black">
            <Link
              href={"/"}
              className="flex size-full items-center justify-center text-xl font-semibold"
            >
              Titas Ghosh
            </Link>
          </div>
          <div id="menu-desktop" className="hidden gap-5 laptop:flex">
            {nav.map((data, i) => {
              return (
                <Link
                  className="text-sm text-neutral-600 transition-all duration-500 hover:underline"
                  href={data.route}
                  key={i}
                >
                  {data.label}
                </Link>
              );
            })}
          </div>
          <div
            id="menu-mobile"
            className="redd flex h-11 items-center justify-center laptop:hidden"
          >
            <Button
              className="group"
              variant="ghost"
              size="icon"
              onClick={() => setOpen((prevState) => !prevState)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <svg
                className="pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L20 12"
                  className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                />
                <path
                  d="M4 12H20"
                  className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                />
                <path
                  d="M4 12H20"
                  className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="redd flex size-full flex-col items-end justify-center gap-2 overflow-hidden border-t pr-5">
          {nav.map((data, i) => {
            return (
              <Link onClick={() => setOpen(!open)} href={data.route} key={i}>
                {data.label}
              </Link>
            );
          })}
          <div className="redd flex items-center">
            {social.map((data, i) => {
              return (
                <div key={i}>
                  <Link href={data.route} target="_blank">
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="[&_svg]:size-5"
                    >
                      {data.icon}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
