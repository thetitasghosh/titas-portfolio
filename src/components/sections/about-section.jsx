"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ventures = [
  {
    name: "Exelth",
    logo: "/assets/innovations/exelth.png",
    desc: "Healthcare booking & management platform",
  },
  {
    name: "Egostix Engineering",
    logo: "/assets/innovations/egostix-engineering.jpg",
    desc: "Product & software engineering studio",
  },
  {
    name: "Egostix Media",
    logo: "/assets/innovations/egostix-media.png",
    desc: "Brand, design & digital storytelling",
  },
];

const AboutSection = () => {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center px-6 tablet:px-12 desktop:px-24">
      <div className="flex w-full flex-col gap-16 tablet:flex-row">
        {/* LEFT: Innovations Grid */}
        <div className="w-full laptop:w-1/2">
          <p className="mb-8 text-sm uppercase tracking-widest text-neutral-500">
            Innovations I&apos;m building
          </p>

          <div className="redd grid w-fit grid-cols-2 place-content-start place-items-start items-start justify-start gap-1 tablet:grid-cols-2">
            {ventures.map((item, i) => (
              <div
                key={i}
                className="redd group flex size-28 overflow-hidden border laptop:size-52"
              >
                <Image
                  width={800}
                  height={800}
                  src={item.logo}
                  alt={item.name}
                  className="mb-4 size-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: About */}
        <div className="flex w-full flex-col justify-between laptop:w-1/2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
              (About)
            </p>

            <div className="text-2xl leading-snug text-neutral-200 tablet:text-3xl desktop:text-4xl">
              <p className="mb-8">
                Technology should feel intentional, not overwhelming. I believe
                great products are built when strategy, design, and engineering
                work as one system.
              </p>

              <p className="text-neutral-400">
                By combining product thinking with hands-on development, I help
                ideas evolve into clear, scalable digital experiences — focused
                on usability, performance, and long-term growth.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/about"
              className="group flex size-16 items-center justify-center rounded-full border border-neutral-700 transition hover:border-neutral-500"
            >
              <ArrowRight className="size-8 text-blue-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:-rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
