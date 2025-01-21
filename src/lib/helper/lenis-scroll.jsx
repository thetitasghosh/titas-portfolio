"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

const LenisScroll = ({ children }) => {
  return (
    <ReactLenis options={{ lerp: 0.1, }} root>
      {children}
    </ReactLenis>
  );
};

export default LenisScroll;
