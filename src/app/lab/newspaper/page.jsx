"use client";
import React, { useRef } from "react";
import Newspaper from "../(components)/Newspaper";
// export const metadata = {
//   title: "Lab - Shuffletext",
//   description: "...",
// };

const Page = () => {
  const ContainerRef = useRef();
  return (
    <div
      ref={ContainerRef}
      className="redd flex h-[500vh] w-full items-start justify-center"
    >
      <Newspaper Ref={ContainerRef} />
    </div>
  );
};

export default Page;
