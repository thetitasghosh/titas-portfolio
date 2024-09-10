import React from "react";
import { WORKS } from "@/data/workData";
// import Link from "next/link";
import { Link } from "next-view-transitions";

export const metadata = {
  title: "Works",
  description: "...",
};

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <h1>
        <div className="pb-10">
          <span className="redd text-2xl font-semibold">Seleted Works</span>
        </div>
        <div className="redd flex flex-col items-start justify-center gap-3">
          {WORKS.map((data) => {
            return (
              <h2 key={data.id} className="border-b">
                <Link href={`/work/${data.slug}`}>{data.title}</Link>
              </h2>
            );
          })}
        </div>
      </h1>
    </div>
  );
};

export default page;
