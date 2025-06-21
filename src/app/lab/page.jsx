// app/lab/page.jsx (or .tsx if using TypeScript)
import React from "react";
import { LABS } from "../../data/labData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Lab",
  description: "Recent experimental works and prototypes.",
};

const Page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6 pt-16">
      <div className="container h-full space-y-6">
        <header className="w-full pt-10 text-2xl desktop:text-5xl">
          <h1>Recent Experiments ↴</h1>
        </header>

        <section className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-6">
          {LABS.map((data, i) => (
            <Link target="_blank" key={i} href={data.url} className="size-full">
              <LabDialog key={i} {...data} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Page;

function LabDialog({ video, url, title }) {
  return (
    <div id="work" className="space-y-2">
      <div
        id="work-frame"
        className={cn(
          `redd b relative h-60 w-full p-5 shadow laptop:h-full laptop:p-28`,
          {
            "to-030% bg-gradient-to-tr from-white from-20% via-neutral-300 via-50% to-white": true,
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
            src={video}
            className="size-full object-contain"
            width={1980}
            height={1080}
            loop
            autoPlay
          ></video>
        </div>
      </div>
    </div>
  );
}
