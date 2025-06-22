"use client";
import React, { useLayoutEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
const HeroSection = () => {
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
      tl.from(".HeroText", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="redd my-5 flex h-[65vh] w-full flex-col items-center justify-center gap-10 border-b text-neutral-800 dark:border-neutral-800">
      <div className="redd overflow-hidden text-center text-2xl font-medium tablet:w-[65%] desktop:w-[55%] desktop:text-4xl">
        <p className="HeroText py-1">
          I&apos;m Titas — a frontend developer and founder building clean,
          fast, and meaningful experiences.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
