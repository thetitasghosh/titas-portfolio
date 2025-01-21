import Image from 'next/image';
import React from 'react';

const WorkFrame = ({title,service,date,cover_img}) => {
  return (
    <div id="work" className="space-y-2">
      <div
        id="title"
        className="resd flex items-center gap-2 px-2 text-neutral-500"
      >
        <h1 className="text-lg font-black desktop:text-3xl">Your Maker</h1>|
        <h1 className="text-xs desktop:text-2xl">Design & Development</h1>|
        <h1 className="text-xs desktop:text-2xl">2025</h1>
      </div>
      <div
        id="work-frame"
        className="redd relative h-60 w-full bg-orange-50 p-5 laptop:h-full laptop:p-28"
      >
        {" "}
        <div
          id="work-cover"
          className="redd h-full w-full overflow-hidden rounded-md"
        >
          <Image
            src={"/assets/works/yourmaker/hero_section.png"}
            alt="works"
            width={1000}
            height={1000}
            className="size-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkFrame;
