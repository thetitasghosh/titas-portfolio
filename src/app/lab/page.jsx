import React from "react";
import { Experimants } from "../../data/labData";
// import Link from "next/link";
import { Link } from "next-view-transitions";
export const metadata = {
  title: "Lab",
  description: "...",
};

const page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center pt-16">
      <div id="container" className="container h-full border"></div>
    </div>
  );
};

export default page;
