import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About",
  description: "...",
};

const page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center pt-16">
      <div id="container" className="container h-full red"></div>
    </div>
  );
};

export default page;
