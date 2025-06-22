import WorkFrame from "@/components/Card/work-frame";
import Cursor from "@/components/extensions/cursor";
import { WORKS } from "@/data/workData";
import Link from "next/link";
import React from "react";
// import { WORKS } from "@/data/workData";
// import Link from "next/link";
// import { Link } from "next-view-transitions";

export const metadata = {
  title: "Works",
  description: "...",
};

const WorkPage = () => {
  return (
    <div className="flex min-h-screen w-full items-start justify-center px-6 pt-16">
      <div id="container" className="borderr container h-full space-y-2">
        <div id="header" className="w-full pt-10 text-2xl desktop:text-5xl">
          <h1>Recent Work ↴</h1>
        </div>
        <div id="works" className="redd h-full w-full">
          {WORKS.map((data, i) => {
            return (
              <Link key={i} href={`/work/${data.slug}`}>
                <Cursor title={data.title}>
                  <WorkFrame
                    date={data.date}
                    service={data.service}
                    title={data.title}
                    cover_img={data.cover_img}
                    cover_video={data.cover_video}
                    color={data.color}
                  />
                </Cursor>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
