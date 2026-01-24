"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect } from "react";

const WorkFrame = ({ title, service, date, cover_img, cover_video, color }) => {
  const Color = color;

  return (
    <div id="work" className="WorkFrame space-y-2">
      <div
        id="work-frame"
        className={cn(
          `redd b relative h-60 w-full p-5 shadow laptop:h-full laptop:p-28 tablet:h-96`,
          {
            "to-030% bg-gradient-to-tr from-white from-20% via-yourmaker via-50% to-white":
              Color === "yourmaker",
          },
        )}
      >
        <div
          id="title"
          className="resd absolute right-0 top-0 flex items-center justify-end gap-2 bg-white px-2 text-neutral-500"
        >
          <h1 className="text-xs font-black desktop:text-3xl">{title}</h1>
        </div>
        <div
          id="work-cover"
          className="redd h-full w-full overflow-hidden rounded-md py-5"
        >
          <video
            src={cover_video}
            className="size-full object-contain"
            width={1980}
            height={1080}
            loop
            muted
            playsInline
            autoPlay
          ></video>
        </div>
      </div>
    </div>
  );
};

export default WorkFrame;
