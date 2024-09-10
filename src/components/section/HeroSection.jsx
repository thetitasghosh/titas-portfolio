import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex h-screen w-full flex-col-reverse items-center justify-around desktop:flex-row">
      <div className="redd text-ScienceBlueDark">
        <article className="redd flex flex-col items-start justify-center text-4xl font-semibold text-AthensGray desktop:w-[45rem] desktop:text-6xl">
          <span className="redd desktop:pl-28">Front-end Developer </span>
          <span>
            {" "}
            <span className="text-ScienceBlue">Creative </span> Developer &{" "}
          </span>
          <span>
            {" "}
            Artistic Tech <span className="text-ScienceBlue">Explorer</span>
          </span>
        </article>
      </div>
      <div className="redd flex h-96 w-96 flex-col justify-end pb-24 desktop:h-full desktop:items-end">
        <div className="redd h-72 w-56 overflow-hidden rounded-lg shadow-lg desktop:h-96 desktop:w-72">
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
