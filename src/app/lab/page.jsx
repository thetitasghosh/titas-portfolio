import React from "react";
import { Experimants } from "../../data/labData";
// import Link from "next/link";
import { Link } from "next-view-transitions";
export const metadata = {
  title: "Lab",
  description: "...",
};

const page = () => {
  return (
    <div className="redd flex h-screen w-full flex-col items-center justify-start gap-20 pt-36">
      <div className="redd container flex flex-col items-center justify-center">
        <h1 className="w-full px-52 text-5xl font-normal">Lab</h1>
        <p className="w-full px-52">
          Creative space for UI experiments, component explorations, and
          interaction design.
        </p>
      </div>
      <div className="space-y-5 w-full px-80">
        {Experimants.map((data, i) => {
          return (
            <Link
            href={data.url}
            key={i}
            className="m-1"
            >
            
            <div
              className=" py-5 border-b-2  transition-colors duration-500 hover:bg-gray-200 hover:text-black"
              >
                {data.title}
            </div>
              </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
