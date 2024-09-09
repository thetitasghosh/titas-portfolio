import Image from "next/image";
import React from "react";
import Profile from "@/components/ui/Profile";
const HeroSection = () => {
  return (
    <div className="redd flex h-screen w-full flex-col items-center justify-center desktop:px-80 desktop:py-52">
      <div className="redd z-40 flex h-full w-full flex-col items-center justify-center gap-2 desktop:items-start desktop:justify-center">
        <div
          id="name"
          className="redd h-fit flex desktop:flex-row flex-col-reverse items-center justify-center desktop:gap-5"
        >
          <Profile />
          <h1 className="redd flex h-full items-end justify-center text-6xl font-medium uppercase">
            Titas Ghosh
          </h1>
          <h1 className="redd flex tablet:hidden h-full items-end justify-center text-6xl font-medium uppercase">
           Front-end Developer
          </h1>
        </div>
        <h1 className="text-4xl font-bold  desktop:text-5xl"> Creative Tech Explorer</h1>
        <div id="desc">
          <p className="redd hidden desktop:block h-20 font-mono font-light desktop:w-1/2">
            While I love programming and software development, Art, Design, and
            Animation will always hold a special place in my heart. Here are a
            few projects/things I&apos;ve done over the years to keep the
            artistic side of me alive. I&apos;m always looking to push myself
            creatively and learn new things
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
