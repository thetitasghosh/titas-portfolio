import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex h-screen desktop:flex-row flex-col-reverse w-full items-center justify-around">
      <div className="text-ScienceBlueDark redd">
        <article className="redd flex desktop:w-[35rem] flex-col items-end justify-center text-4xl desktop:text-5xl font-semibold">
          <span className="redd pl-16">Front-end Developer </span>
          <span> Creative Developer & </span>
          <span> Artistic Tech Explorer</span>
        </article>
      </div>
      <div className=" redd w-96 desktop:h-full h-96 flex-col flex desktop:items-end pb-24 justify-end">
          <div className="redd overflow-hidden rounded-lg desktop:h-96 h-72 w-56 shadow-lg desktop:w-72">
            <Image src={'/assets/me.png'} width={500} height={500} alt="Titas Ghosh | " className="h-full w-full object-cover"/>
          </div>
          <p className="uppercase font-bold text-ScienceBlue pr-2">titas ghosh</p>
      </div>
    </div>
  );
};

export default HeroSection;
