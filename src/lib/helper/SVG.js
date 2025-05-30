"use client";
import React from "react";
import { motion } from "framer-motion";

const SVG = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
          opacity: { delay, duration: 0.5 },
        },
      };
    },
  };

  // Define the path data array
  const paths = [
    "M3.5 40.0009C3.5 40.0009 33.8281 16.7494 85.5 7.62073M158.5 6.00095C131.041 2.5325 106.507 3.90952 85.5 7.62073M85.5 7.62073L73.5 119.5",
    "M125 111L130.5 57.5",
    "M128.5 32L131.5 35",
    "M192.5 10C192.5 10 177.5 71 180.5 109.5",
    "M144 80.0007C173.651 70.8084 193.081 68.1265 233.5 68.5007L239.5 56.5003M239.5 56.5003C226.742 55.4029 221.119 58.3497 215.5 74.0003C209.454 99.5305 210.766 110.428 227.5 119.5C248.433 104.396 249 94 239.5 56.5003ZM239.5 56.5003C243.365 81.7858 245.476 96.0188 261 110",
    "M293.5 52.5L266.5 79C297.397 75.3607 316.5 86.5 311 103.5C297.336 114.682 286.707 118.254 266.5 123.5",
  ];

  return (
    <div className="redd flex h-screen items-center justify-center">
      <motion.svg
        width="316"
        height="127"
        viewBox="0 0 316 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        className={"redd grid place-content-center"}
      >
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path} // Corrected Syntax
            // stroke="black"
            strokeWidth="7"
            strokeLinecap="round"
            variants={draw}
            custom={i}
            initial="hidden"
            animate="visible"
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default SVG;
