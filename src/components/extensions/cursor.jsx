"use client";
import { cn } from "@/lib/utils";
import useMouse from "../hooks/useMouse";
import React from "react";

const Cursor = ({ children, color }) => {
  const { x, y } = useMouse();
  let Color = color || "neutral-900";
  return (
    <div id="wrapper" className="redd group relative size-full cursor-none">
      <div
        id="cursor"
        style={{ top: y, left: x, transform: "translate(-50%, -50%)" }}
        className={cn(
          `redd pointer-events-none fixed z-[9999] hidden size-16 rounded-full bg-neutral-800 text-white group-hover:block`,
          {
            "bg-neutral-900": Color === "neutral-900",
            "bg-orange-500": Color === "yourmaker",
            "bg-green-500": Color === "exelth",
            "bg-blue-800": Color === "egostix-engineering",
            "bg-blue-500": Color === "egostix-media",
          },
        )}
      >
        <div className="flex size-full items-center justify-center">
          <span className="rounded-sm">View</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Cursor;
