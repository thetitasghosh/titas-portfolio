"use client";
import { cn } from "@/lib/utils";
import React from "react";

const WorkFrameComingSoon = () => {
  return (
    <div id="work" className="WorkFrameComingSoon space-full">
      <div
        id="work-frame"
        className={cn(
          `redd b relative h-60 w-full p-5 shadow laptop:h-full laptop:p-28 tablet:h-96`,
          {
            "to-030% bg-gradient-to-tr from-white from-20% via-neutral-200 via-50% to-white": true,
          },
        )}
      >
        <div
          id="title"
          className="resd absolute right-0 top-0 flex items-center justify-end gap-2 bg-white px-2 text-neutral-500"
        >
          <h1 className="text-xs font-black desktop:text-3xl">Coming soon</h1>
        </div>
        <div
          id="work-cover"
          className="redd h-full w-full overflow-hidden rounded-md py-5"
        >
          <svg
            viewBox="0 0 1980 1080"
            className="size-full animate-pulse rounded bg-neutral-200/60 dark:bg-neutral-800/60"
            width={1980}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkFrameComingSoon;
