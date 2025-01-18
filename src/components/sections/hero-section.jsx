import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "../ui/button";
// import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="redd my-5 flex h-[75vh] w-full items-center justify-center border-b text-neutral-500 dark:border-neutral-800">
      {/* <div className="redd flex items-center justify-start gap-2 pb-10 capitalize desktop:w-[65%]">
        <div id="avater" className="redd">
          <Avatar className="size-20 border">
            <AvatarImage src="/assets/me.png" width={1000} height={100} />
          </Avatar>
        </div>
        <div id="content" className="redd space-y-2">
          <h1 className="text-2xl laptop:text-4xl">Titas Ghosh</h1>
          <h1 className="text-xl laptop:text-xl">A front-end Developer</h1>
        </div>
      </div> */}
      <div className="redd w-96 text-xl desktop:text-5xl laptop:text-3xl desktop:w-[75%] laptop:w-[65%]  tablet:w-[75%]">
        Hi! I&apos;m <span className="font-semibold text-black">Titas Ghosh</span>,{" "}
        <span className="text-ScienceBlue">a front-end engineer</span>{" "}
        passionate about technology and innovation. Welcome to my digital space,
        where I showcase my work, creative experiments, and the exciting
        projects I&apos;m exploring.
      </div>
    </div>
  );
};

export default HeroSection;
