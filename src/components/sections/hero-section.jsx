import React from "react";
import { Hand } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "../ui/button";
// import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="redd my-5 flex h-[65vh] w-full flex-col items-center justify-center gap-10 border-b text-neutral-800 dark:border-neutral-800">
      <h1 className="text-center text-2xl font-medium tablet:w-[65%] desktop:w-[55%] desktop:text-4xl">
        I&apos;m Titas — a frontend developer building clean, fast, and
        meaningful experiences.
      </h1>
    </div>
  );
};

export default HeroSection;
