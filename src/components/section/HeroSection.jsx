import React from "react";

const HeroSection = () => {
  return (
    <div className="reddd flex h-screen w-screen flex-col items-center justify-center px-6">
      <div className="redd w-full">
        <div className="redd flex h-80 w-[90vw] flex-col items-center justify-end font-semibold tablet:h-[30rem] tablet:w-[70vw] laptop:h-96 laptop:w-[80vw] desktop:h-[30rem] desktop:w-[65rem] desktop:justify-center">
          <div className="redd flex h-16 w-full items-center justify-start laptop:h-24">
            <h1 className="text-6xl tablet:text-[10vw] laptop:text-8xl desktop:text-[8rem]">
              <em>CREATIVE</em> <em>★</em>
            </h1>
          </div>
          <div className="redd flex h-16 w-full items-center justify-start laptop:h-24">
            <h1 className="text-6xl tablet:text-[10vw] laptop:text-8xl desktop:text-[8rem]">
              DEVELOPER
            </h1>
          </div>
          <div className="reddd flex h-16 w-full items-center justify-end laptop:h-24">
            <h1 className="text-6xl tablet:text-[10vw] laptop:text-8xl desktop:text-[8rem]">
              & DESIGNER
            </h1>
          </div>
        </div>
        <div className="reddd flex h-32 w-full items-center justify-between tablet:text-xl laptop:text-2xl">
          <h1 className="reddd flex h-full items-end justify-center">©2024</h1>
          <div className="reddd flex h-full w-full items-center justify-end">
            <div className="reddd flex h-full w-[15rem] items-end justify-center text-left">
              Helping brand in this digital worlds for their help 10x faster
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
