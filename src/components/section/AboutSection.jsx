"use client";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const cont = useRef();
  useEffect(() => {
    let about = new SplitType(".text", { types: "chars" });
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: cont.current,
          start: "top 70%",
          end: "bottom 70%",
          // markers: true,
          scrub: true,
        },
      });
      tl.from(about.chars, {
        opacity: 0.1,
        stagger: { amount: 1.5 },
      });
    });
    return () => ctx.revert();
  });
  return (
    <div
      ref={cont}
      className="redd flex h-[30rem] w-full text-Darkgrey flex-col items-center justify-center  p-2"
    >
      <div className="desktop:w-1/2 px-5  redd text-justify desktop:text-center">
        <h1 className="text desktop:text-3xl text-xl  font-bold">
          Beyond programming, I have a lot hobbies that I enjoy doing in my free
          time. The more tangible hobbies I have are Music and creating Digital
          Art
        </h1>
      </div>
    </div>
  );
};

export default AboutSection;
