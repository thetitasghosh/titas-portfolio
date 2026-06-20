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
import { LABS } from "@/data/labData";

const LabListPage = () => {
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
          Recent Experiments ↴
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
                      layoutId="active-view-tab"
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
              {LABS.map((data, i) => (
                <Link
                  target="_blank"
                  key={i}
                  href={data.url}
                  className="group block size-full"
                >
                  <LabDialog {...data} />
                </Link>
              ))}
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
                {LABS.map((data, i) => (
                  <ListRow
                    key={i}
                    index={i + 1}
                    title={data.title}
                    url={data.url}
                    video={data.video}
                    onHover={handleHover}
                    onLeave={handleLeave}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LabListPage;

function LabDialog({ video, title }) {
  return (
    <div id="work" className="space-y-2">
      <div
        id="work-frame"
        className={cn(
          `redd b relative h-60 w-full p-5 shadow tablet:h-96 laptop:h-full laptop:p-28`,
          {
            "to-030% bg-gradient-to-tr from-white from-20% via-neutral-300 via-50% to-white": true,
          },
        )}
      >
        <div
          id="title"
          className="resd absolute left-1 top-1 flex items-center justify-end gap-2 bg-white px-2 text-neutral-500 desktop:rounded"
        >
          <h1 className="text-xs font-semibold desktop:text-xl">{title}</h1>
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
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}

function ListRow({ index, title, url, video, onHover, onLeave }) {
  const formattedIndex = String(index).padStart(2, "0");
  return (
    <Link
      href={url}
      target="_blank"
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
          Experiment
        </span>
        <div className="rounded-full border border-neutral-200 p-2.5 transition-all duration-300 group-hover:rotate-45 group-hover:bg-neutral-950 group-hover:text-white dark:border-neutral-800 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-950">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
