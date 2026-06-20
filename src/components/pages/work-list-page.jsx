"use client";

import React, { useState } from "react";
import { Link } from "next-view-transitions";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { LayoutGrid, List, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WORKS } from "@/data/workData";
import WorkFrame from "@/components/Card/work-frame";
import WorkFrameComingSoon from "@/components/Card/work-frame-soon";

const WorkListPage = () => {
  const [viewMode, setViewMode] = useState("list");
  const [activeVideo, setActiveVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for floating video preview in list view
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    // Offset preview so it sits nicely next to/slightly above the cursor
    mouseX.set(x + 20);
    mouseY.set(y - 90);
  };

  const handleHover = (video) => {
    setActiveVideo(video);
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="h-full w-full space-y-8">
      {/* Header and Toggle Controls */}
      <header className="flex w-full flex-col gap-4 border-b border-neutral-100 pb-6 pt-10 dark:border-neutral-800/60 tablet:flex-row tablet:items-center tablet:justify-between">
        <h1 className="text-3xl font-normal tracking-tight tablet:text-5xl">
          Recent Work ↴
        </h1>

        {/* Modern Switcher Controls */}
        <div className="flex self-start tablet:self-center">
          <div className="flex items-center gap-1 rounded-full border border-neutral-200/50 bg-neutral-100/80 p-1 dark:border-neutral-800/40 dark:bg-neutral-900/80">
            {[
              { id: "grid", label: "Grid", icon: LayoutGrid },
              { id: "list", label: "List", icon: List },
            ].map((v) => {
              const Icon = v.icon;
              const isActive = viewMode === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setViewMode(v.id)}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-300 focus-visible:outline-none",
                    isActive
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-work-view-tab"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:bg-neutral-800"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      style={{ zIndex: 0 }}
                    />
                  )}
                  <Icon className="relative z-10 h-3.5 w-3.5" />
                  <span className="relative z-10">{v.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-6 tablet:grid-cols-2"
            >
              {WORKS.map((data, i) => (
                <Link
                  key={i}
                  href={`/work/${data.slug}`}
                  className="group block size-full"
                >
                  <WorkFrame
                    date={data.date}
                    service={data.service}
                    title={data.title}
                    cover_img={data.cover_img}
                    cover_video={data.cover_video}
                    color={data.color}
                  />
                </Link>
              ))}
              <div className="block size-full">
                <WorkFrameComingSoon />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="relative flex flex-col"
              onMouseMove={handleMouseMove}
            >
              {/* Custom floating video preview (follows cursor on desktop) */}
              <motion.div
                style={{
                  x: xSpring,
                  y: ySpring,
                  position: "absolute",
                  pointerEvents: "none",
                  zIndex: 50,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.15 }}
                className="hidden h-44 w-72 overflow-hidden rounded-xl border border-neutral-200/50 bg-white/90 p-1 shadow-2xl backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-900/90 laptop:block"
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-950">
                  {activeVideo && (
                    <video
                      src={activeVideo}
                      className="h-full w-full object-cover"
                      loop
                      autoPlay
                      muted
                      playsInline
                    />
                  )}
                </div>
              </motion.div>

              {/* List Row Items */}
              <div className="divide-y divide-neutral-100 border-b border-neutral-100 dark:divide-neutral-800/40 dark:border-neutral-800/40">
                {WORKS.map((data, i) => (
                  <ListRow
                    key={i}
                    index={i + 1}
                    title={data.title}
                    slug={data.slug}
                    service={data.service}
                    video={data.cover_video}
                    onHover={handleHover}
                    onLeave={handleLeave}
                  />
                ))}
                
                {/* Coming soon row */}
                <div className="flex items-center justify-between py-6 text-neutral-400/60 dark:text-neutral-600/60 cursor-not-allowed">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm text-neutral-400/40 dark:text-neutral-600/40">
                      {String(WORKS.length + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-normal tracking-tight tablet:text-2xl">
                      Coming soon
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden font-mono text-xs text-neutral-400/40 opacity-60 dark:text-neutral-600/40 tablet:inline-block">
                      Product
                    </span>
                    <div className="rounded-full border border-neutral-200/30 p-2.5 dark:border-neutral-800/30">
                      <ArrowUpRight className="h-4 w-4 opacity-30" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorkListPage;

function ListRow({ index, title, slug, service, video, onHover, onLeave }) {
  const formattedIndex = String(index).padStart(2, "0");
  return (
    <Link
      href={`/work/${slug}`}
      className="group flex items-center justify-between py-6 text-neutral-600 transition-colors duration-300 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
      onMouseEnter={() => onHover(video)}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-6">
        <span className="font-mono text-sm text-neutral-400 dark:text-neutral-600">
          {formattedIndex}
        </span>
        <h2 className="text-xl font-normal tracking-tight transition-all duration-300 group-hover:translate-x-2 tablet:text-2xl">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden font-mono text-xs text-neutral-400 opacity-60 transition-opacity duration-300 group-hover:opacity-100 dark:text-neutral-600 tablet:inline-block">
          {service}
        </span>
        <div className="rounded-full border border-neutral-200 p-2.5 transition-all duration-300 group-hover:rotate-45 group-hover:bg-neutral-950 group-hover:text-white dark:border-neutral-800 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-950">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
