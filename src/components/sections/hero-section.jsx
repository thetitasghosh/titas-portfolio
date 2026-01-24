"use client";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const HeroSection = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".HeroText", {
        opacity: 0,
        y: 60,
        filter: "blur(12px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        delay: 1.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/profile/website-cover-middle.png"
          alt="Titas Ghosh"
          fill
          priority
          className="translate-x-16 scale-150 object-cover object-center pb-16 tablet:translate-x-40 tablet:scale-150 tablet:pb-0 laptop:translate-x-5 laptop:scale-150 desktop:translate-x-0 desktop:scale-110"
        />
        {/* Bottom backdrop blur for text readability */}
        <div className="redd HeroText pointer-events-none absolute bottom-0 left-0 h-[5%] w-full backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-end justify-between px-6 pb-16 tablet:px-12 desktop:px-24">
        {/* Small Intro */}
        <div>
          <p className="HeroText text-sm uppercase tracking-widest text-neutral-900">
            Hi there!
          </p>
          <p className="HeroText mb-4 text-xl font-semibold text-neutral-950">
            Titas <span className="text-neutral-700">Ghosh</span>
          </p>

          {/* Big Headline */}
          <h1 className="HeroText text-5xl font-semibold leading-[0.95] text-neutral-700 tablet:text-7xl desktop:text-8xl">
            DESIGN <br />
            MEETS <br />
            <span className="">TECHNOLOGY</span>
          </h1>

          {/* Supporting Line */}
          <p className="HeroText mt-6 max-w-xl text-base text-neutral-600 tablet:text-lg">
            Building scalable digital products through strategy, design, and
            engineering — with a founder’s mindset.
          </p>
        </div>
        <div className="HeroText hidden h-[50%] w-60 flex-col items-center justify-between gap-4 laptop:flex">
          {/* Call to Action Button */}
          <div className="border-b border-t text-sm font-light">
            <span className="text-sm font-semibold"> What I work on</span>{" "}
            <br /> Product Strategy <br /> Design Engineering <br /> Frontend
            Architecture <br /> Brand Systems <br /> Motion & Interaction
          </div>
          <span>(Scroll Down)</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
