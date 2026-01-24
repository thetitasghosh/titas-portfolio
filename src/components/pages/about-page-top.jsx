"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import WorkPhilosophySection from "../sections/WorkPhilosophySection";

const AboutPageTop = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-anim", {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-6 tablet:px-12 desktop:px-24">
      {/* BACKDROP */}
      {/* <div className="absolute inset-0 -z-10 bg-neutral-50 dark:bg-neutral-950" /> */}

      {/* MAIN GRID */}
      <div
        id="section-1"
        className="flex h-screen flex-col items-center justify-center gap-2 tablet:flex-row laptop:justify-between"
      >
        {/* LEFT — TYPOGRAPHY */}
        <div className="about-anim redd relative flex items-start gap-0 tablet:flex-col tablet:gap-10 laptop:h-[70%]">
          <h1 className="leading-none">
            <span className="block text-6xl font-semibold tracking-tight text-neutral-900 tablet:text-7xl desktop:text-8xl">
              TITAS
            </span>
            <span className="block pl-10 text-6xl font-semibold tracking-tight text-blue-500 tablet:text-7xl desktop:text-8xl">
              GHOSH
            </span>
          </h1>
          <p className="about-anim hidden max-w-xs border-b text-lg font-semibold text-neutral-500 tablet:block laptop:hidden">
            Product designer and frontend engineer creating products where
            design, code, and business meet.
          </p>
        </div>
        {/* IMAGE */}
        <div className="relative h-[420px] w-[300px] overflow-hidden rounded-xl tablet:h-[520px] tablet:w-[380px] desktop:h-[560px] desktop:w-[500px]">
          <Image
            src="/assets/profile/dp.png"
            alt="Titas Ghosh portrait"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        {/* RIGHT — IMAGE + MARKER */}
        <div className="about-anim redd relative hidden items-end justify-center laptop:flex laptop:h-[70%]">
          {/* YEAR / MARKER */}
          <div className="text-right">
            {/* MICRO DESCRIPTION */}
            <p className="about-anim max-w-xs border-b text-lg font-semibold text-neutral-500">
              Product designer and frontend engineer creating products where
              design, code, and business meet.
            </p>
          </div>
        </div>
      </div>
      <div id="section-1" className="redd flex w-full justify-end laptop:w-1/2">
        <div>
          <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
            (Vision)
          </p>

          <div className="text-2xl leading-snug text-neutral-700 tablet:text-3xl desktop:text-4xl">
            <p className="mb-8">
              I design and build systems that turn complexity into
              clarity—whether for clients, companies, or myself.
            </p>

            {/* <p className="text-neutral-400">
              By combining product thinking with hands-on development, I help
              ideas evolve into clear, scalable digital experiences — focused on
              usability, performance, and long-term growth.
            </p> */}
          </div>
        </div>
      </div>
      <WorkPhilosophySection />
    </section>
  );
};

export default AboutPageTop;
