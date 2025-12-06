"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
const AboutPageTop = () => {
  useLayoutEffect(() => {
    // const title = new SplitType(".split-text-yourmaker", {
    //   types: "lines",
    // });
    // const line = new SplitType(".split-text-sum", { types: "lines" });
    // const desc = new SplitType(".yourmaker-desc", { types: "chars" });
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 1,
      });
      tl.from(".AboutText", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
      tl.from(".AboutDesc", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
      tl.from("#gradient", {
        opacity: 0,
        height: "0%",
        duration: 1.5,
        // filter: "blur(10px)",
      });
      tl.from("#image-frame", {
        opacity: 0,
        y: "50%",
        duration: .5,
        // filter: "blur(10px)",
      });
      tl.from("#image-overlay", {
        // opacity: 0,
        height: "100%",
        borderRadius: 0,
        duration: 1.5,
        // filter: "blur(10px)",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="h-[95vh] w-full px-4 pb-10">
      <div className="relative size-full overflow-hidden rounded-3xl">
        <div
          id="gradient"
          class="absolute inset-0 -z-10 h-full w-full rounded-3xl bg-transparent [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#0071E3_100%)]"
        ></div>
        <div
          id="content"
          className="redd flex size-full flex-col items-center justify-center gap-5"
        >
          <div
            id="row"
            className="redd container flex h-full flex-col items-start justify-center px-2 text-left"
          >
            <h1 className="AboutText overflow-hidden text-3xl font-medium text-neutral-800 tablet:text-4xl laptop:px-10 laptop:text-5xl desktop:px-0 desktop:text-6xl">
              Where clarity meets craft <br /> that&apos;s what I build.
            </h1>
            <p className="AboutDesc mt-4 max-w-xl overflow-hidden text-left indent-5 text-base text-neutral-500 dark:text-neutral-400 laptop:px-10 desktop:pl-0">
              I work at the edge of design and development — turning ideas into
              fast, functional, and thoughtfully-crafted digital experiences.
              Everything I build is shaped by intent, refined by detail, and
              guided by real-world use.
            </p>
          </div>
          <div
            id="row"
            className="redd container flex h-full items-center justify-center overflow-hidden pb-9 tablet:justify-end tablet:pb-5 laptop:pr-10 desktop:pr-0"
          >
            <div
              id="image-frame"
              className="redd border relative z-50 h-60 w-52 overflow-hidden rounded-2xl"
            >
              <Image
                src={"/assets/profile/titas_me.png"}
                className="size-full object-cover"
                width={1980}
                height={1080}
                alt="Titas Ghosh"
              ></Image>
              <div
                id="image-overlay"
                className="absolute bottom-0 right-0 z-40 h-0 w-full rounded-2xl backdrop-blur-md"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTop;
