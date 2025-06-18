import { WORKS } from "@/data/workData";
import React from "react";
import WorkFrame from "@/components/Card/work-frame";
import Cursor from "@/components/extensions/cursor";
import Link from "next/link";

const WorkSection = () => {
  return (
    <div className="redd flex h-fit w-full flex-col items-center justify-start gap-5">
      {/* <div id="header" className="w-full text-2xl desktop:text-5xl">
        <h1>Recent Work ↴</h1>
      </div> */}
      <div id="works" className="redd h-full w-full p-2">
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
  );
};

export default WorkSection;
