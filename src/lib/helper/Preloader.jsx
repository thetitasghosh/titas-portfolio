"use client";
import { motion } from "framer-motion";
import React from "react";
import { PreloaderSildeUp } from "@/lib/anim/animation";
import SVG from "@/lib/helper/SVG";
const Preloader = () => {
  // const completed = sessionStorage.getItem("PreloaderCompleted");
  return (
    <motion.div
      variants={PreloaderSildeUp}
      initial="init"
      exit={"exit"}
      className="fixed right-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-white stroke-black dark:bg-black dark:[&_svg]:stroke-white"
    >
      <div className="redd flex size-full items-center justify-center">
        <SVG />
      </div>
    </motion.div>
  );
};

export default Preloader;
