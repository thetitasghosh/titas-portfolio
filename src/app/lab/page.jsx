import React from "react";
import { Experimants } from "../../data/labData";
import Link from "next/link";
const page = () => {
  return (
    <div className="redd flex h-screen w-full flex-col items-center justify-start gap-20 pt-36">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-5xl font-normal">Lab</h1>
        <p>
          Creative space for UI experiments, component explorations, and
          interaction design.
        </p>
      </div>
      <div className="space-y-5">
        {Experimants.map((data, i) => {
          return (
            <div
              key={i}
              className="rounded-lg border px-10 transition-colors duration-500 hover:bg-gray-200 hover:text-black"
            >
              <Link href={data.url}>{data.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
