import Image from "next/image";
import React from "react";
import Profile from '@/components/ui/Profile'
const HeroSection = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-80 py-52">
      <div className="redd z-40 flex h-full w-full flex-col gap-2 items-start justify-center">
        <div id="name" className="redd flex items-center justify-center gap-5">
          <Profile />
          <h1 className="text-6xl redd h-full flex items-end justify-center uppercase font-medium">Titas Ghosh</h1>
        </div>
        <h1 className="text-5xl"> Creative Tech Explorer</h1>
        <div id="desc">
          <p className="font-light font-mono redd w-1/2">
            While I love programming and software development ,Art ,Design , and
            Animation will always hold a special place in my heart. Here are a
            few projects/things I’ve done over the years to keep the artistic
            side of me alive . I’m always looking to push myself creatively and
            learn new things
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
