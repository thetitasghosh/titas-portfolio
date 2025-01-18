"use client";
import { motion } from "framer-motion";
import React from "react";
import SVG from "@/lib/helper/SVG";
const Preloader = () => {
  return (
    <motion.div
      // initial={{ top: "0", right: "0" }}
      // exit={{
      //   top: "-100vh",
      //   right: "0",
      //   transition: {
      //     duration: "0.8",
      //     ease: "easeInOut",
      //     delay: "0.2",
      //   },
      // }}
      className="fixed right-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-black"
    >
      <div className="">
        <SVG />
      </div>
    </motion.div>
  );
};

export default Preloader;
