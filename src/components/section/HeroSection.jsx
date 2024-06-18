import React from "react";
import Image from "next/image";
import Titas from "../../../public/assets/img/pic.jpg";
const HeroSection = () => {
  return (
    <main className="redd flex h-screen w-screen items-end justify-center p-2">
      <div className="redd flex h-[90%] gap-2 w-full flex-col items-center justify-evenly">
        <div>
          <h1 className="text-5xl font-bold">TITAS GHOSH</h1>
        </div>
        <div className="w-full flex justify-center redd">
          <Image className="size-72 rounded-xl" src={Titas} width={200} alt="Titas Ghosh" />
        </div>
        <div className="w-full text-6xl">
          <h1 className="w-full text-right ">CRTV</h1>
          <h1 className="w-full text-right ">DEVELOPER</h1>
          <h1 className="w-full text-center ">BASED IN</h1>
          <h1 className="w-full text-center ">INDIA.</h1>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
