"use client";
import Link from "next/link";
import React, { useLayoutEffect } from "react";
import WorkFrame from "@/components/Card/work-frame";
import Cursor from "@/components/extensions/cursor";
import { WORKS } from "@/data/workData";
import gsap from "gsap";
const WorkListPage = () => {
  return (
    <div id="works" className="redd WorkFrame h-full w-full">
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
  );
};

export default WorkListPage;
