"use client";
import useMouse from "../hooks/useMouse";
import React from "react";

const Cursor = ({ children, title }) => {
  const { x, y } = useMouse();
  return (
    <div id="wrapper" className="redd group relative size-full cursor-none">
      <div
        id="cursor"
        style={{ top: y, left: x, transform: "translate(-50%, -50%)" }}
        className="pointer-events-none fixed z-[9999] hidden rounded-md bg-white/90 p-2 group-hover:block"
      >
        <span className="rounded bg-neutral-300 p-1">View</span> | {title}
      </div>
      {children}
    </div>
  );
};

export default Cursor;
