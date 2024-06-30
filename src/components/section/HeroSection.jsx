import React from "react";

const HeroSection = () => {
  return (
    <div className="redd flex h-screen w-screen flex-col items-center justify-center px-6">
      <div className="redd flex flex-col items-center justify-end h-80 w-full text-6xl font-semibold ">
        <div className="redd flex h-16 w-full items-center justify-start">
          <h1>CRTV</h1>
        </div>
        <div className="redd flex h-16 w-full items-center justify-start">
          <h1>DEVELOPER</h1>
        </div>
        <div className="redd flex h-16 w-full items-center justify-end">
          <h1>DESIGNER</h1>
        </div>
      </div>
      <div className="redd flex h-32 w-full items-center justify-between">
        <h1 className="redd flex h-full items-end justify-center">©2024</h1>
        <div className="redd flex h-full w-full items-center justify-end">
          <div className="redd h-full w-[15rem] flex items-end justify-center text-left">
            Helping brand in this digital worlds for their help 10x faster 
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
