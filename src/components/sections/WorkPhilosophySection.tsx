"use client";

import React from "react";

const WorkPhilosophySection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 grid h-full grid-cols-1 gap-16 pt-32 laptop:grid-cols-2">
        {/* LEFT TEXT */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-widest text-neutral-400">
            (I work across)
          </p>

          <h2 className="max-w-md text-3xl font-medium leading-snug text-neutral-800 tablet:text-4xl">
            I design and build
            <br />
            systems for
            <br />
            complex, high-impact
            <br />
            digital products
          </h2>

          <div className="mt-6 h-px w-24 bg-neutral-800" />

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-700">
            My work sits at the intersection of product design, frontend
            engineering, and business thinking. I focus on building scalable
            systems — not just interfaces — that reduce operational friction and
            survive real-world use.
          </p>
        </div>

        {/* RIGHT DIAGRAM */}
        <div className="relative flex items-center justify-center">
          {/* Circle container */}
          <div className="relative tablet:h-[420px] tablet:w-[420px] size-60">
            {/* Circle 1 */}
            <div className="absolute inset-0 rounded-full border border-dashed border-neutral-900 opacity-40 animate-spin" />
            <div className="absolute left-1/2 top-6 -translate-x-1/2 text-sm text-neutral-800">
              Creativity
            </div>

            {/* Circle 2 */}
            <div className="absolute inset-12 rounded-full border border-dashed border-neutral-900 opacity-40 animate-spin" />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-sm text-neutral-800">
              Design
            </div>

            {/* Circle 3 */}
            <div className="absolute inset-24 rounded-full border border-dashed border-neutral-900 opacity-40 animate-spin" />
            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-sm text-neutral-800">
              Engineering
            </div>

            {/* CENTER */}
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-neutral-100">
              Product
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPhilosophySection;
