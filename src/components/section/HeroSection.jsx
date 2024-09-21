"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
import SplitType from "split-type";

const HeroSection = () => {
  useEffect(() => {
    let title = new SplitType(".text-title", {
      types: "lines",
    });

    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 0.5,
      });

      tl.from(
        title.lines[0],
        {
          y: "110",
        },
      );
      tl.from(
        title.lines[1],
        {
          y: "110",
        },
      );
      tl.from(
        title.lines[2],
        {
          y: "110",
        },
      );
      tl.from("#overlay", {
        height: "100%",
        duration: 1.5,
      });
    });
    return () => ctx.revert();
  });
  return (
    <div className="flex h-screen w-full flex-col-reverse items-center justify-around desktop:flex-row">
      <div className="redd text-ScienceBlueDark">
        <article className="redd flex flex-col items-start justify-center text-4xl font-semibold text-AthensGray desktop:w-[45rem] desktop:text-6xl">
          <span className="redd text-title overflow-hidden desktop:pl-28">
            Front-end Developer{" "}
          </span>
          <span className="text-title redd overflow-hidden">
            {" "}
            <span className="text-ScienceBlue">Creative </span> Developer &{" "}
          </span>
          <span className="text-title redd overflow-hidden">
            {" "}
            Artistic Tech <span className="text-ScienceBlue">Explorer</span>
          </span>
        </article>
      </div>
      <div className="redd flex h-96 w-96 flex-col justify-end pb-24 desktop:h-full desktop:items-end">
        <div className="redd relative h-72 w-56 overflow-hidden rounded-lg p-1 shadow-lg desktop:h-96 desktop:w-72">
          <div
            id="overlay"
            className="absolute top-0 h-0 w-full bg-black"
          ></div>
          <Image
            src={"/assets/me.png"}
            width={500}
            height={500}
            alt="Titas Ghosh | "
            className="h-full w-full object-cover"
          />
        </div>
        <p className="pr-2 font-bold uppercase text-ScienceBlue">titas ghosh</p>
      </div>
    </div>
  );
};

export default HeroSection;
