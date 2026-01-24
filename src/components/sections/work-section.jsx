import { WORKS } from "@/data/workData";
import React, { useLayoutEffect } from "react";
import WorkFrame from "@/components/Card/work-frame";
import Cursor from "@/components/extensions/cursor";
import Link from "next/link";
import gsap from "gsap";

const WorkSection = () => {
  useLayoutEffect(() => {
    // const title = new SplitType(".split-text-yourmaker", {
    //   types: "lines",
    // });
    // const line = new SplitType(".split-text-sum", { types: "lines" });
    // const desc = new SplitType(".yourmaker-desc", { types: "chars" });
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 2.5,
      });
      tl.from(".WorkFrame", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
        // ease: "power1.in",
        duration: 0.9,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="redd flex h-fit w-full flex-col items-center justify-start gap-5">
      <div
        id="header"
        className="flex w-full  items-center justify-between px-6 py-10 text-2xl tablet:px-12 desktop:px-24 desktop:text-5xl"
      >
        <h1 className="font-bold text-3xl text-neutral-700 tablet:text-4xl desktop:text-6xl">
          Recent Projects I <br /> worked on
        </h1>{" "}
        <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
          (Works)
        </p>
      </div>
      <div id="works" className="redd WorkFram h-full w-full p-5 laptop:p-20">
        {WORKS.map((data, i) => {
          return (
            <Link key={i} href={`/work/${data.slug}`}>
              <Cursor color={data.color}>
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
