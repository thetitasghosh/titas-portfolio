import React from 'react';

const Preloader = () => {
  return (
    <div className="absolute right-0 top-0 flex h-screen w-full items-center justify-center bg-black">
      <div className="redd w-80 uppercase text-2xl">
        <div className="flex w-full items-center justify-between">
          <span>titas ghosh</span>
          <span>20</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span>creative</span>
          <span>front-end</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span>explorer</span>
          <span>developer</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span>portfolio</span>
          <span>v0.0.1</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span>2024</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
