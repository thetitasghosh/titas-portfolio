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
            <LabDialog key={i} src={data.video} url={data.url}>
              <div className="overflow-hidden rounded-md p-1 shadow-md transition-transform duration-300 hover:scale-105">
                <h1 className="w-full text-left redd p-1">{data.title}</h1>
                <Image
                  src={data.thumbnail}
                  alt={data.title || `Lab work ${i + 1}`}
                  width={1000}
                  height={1000}
                  className="h-full w-full overflow-hidden rounded-md object-cover"
                />
              </div>
            </LabDialog>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Page;

function LabDialog({ children, src, url }) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="h-auto max-w-4xl border-none bg-transparent p-0 shadow-none">
        <DialogHeader>
          <DialogTitle hidden>Video Preview</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border-none">
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          <Link
            className="absolute right-0 top-0 m-1 rounded-3xl bg-neutral-100 px-2 text-xs text-black"
            href={url}
          >
            {url}
          </Link>
        </div>
      </DialogContent>
      <DialogClose hidden />
    </Dialog>
  );
}
