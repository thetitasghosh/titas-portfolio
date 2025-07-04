"use client";
import { Link } from "next-view-transitions";
import React, { useLayoutEffect } from "react";
import WorkFrame from "@/components/Card/work-frame";
import WorkFrameComingSoon from "@/components/Card/work-frame-soon";
import Cursor from "@/components/extensions/cursor";
import { WORKS } from "@/data/workData";
import gsap from "gsap";
// import Link from "next/link";
const WorkListPage = () => {
  return (
    <div id="works" className="redd WorkFrame h-full w-full space-y-5">
      {WORKS.map((data, i) => {
        return (
          <Link key={i} href={`/work/${data.slug}`}>
            {/* <Cursor title={data.title}> */}
            <WorkFrame
              date={data.date}
              service={data.service}
              title={data.title}
              cover_img={data.cover_img}
              cover_video={data.cover_video}
              color={data.color}
            />
            {/* </Cursor> */}
          </Link>
        );
      })}
      <WorkFrameComingSoon />
    </div>
  );
};

export default WorkListPage;
