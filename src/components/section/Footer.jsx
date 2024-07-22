"use client";
// import Titas from "../../../public/assets/profile/pic.jpg";
import React, { useState } from "react";
import { social } from "@/data/navigation";
import { V } from "@/constant/version";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BorderVarients } from "@/lib/anim/animation";

const Footer = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className="relative z-[10] flex h-[510px] w-screen items-center justify-center rounded-2xl"
    >
      <div className="fixed bottom-1 flex h-[510px] w-screen flex-col items-center justify-between rounded-lg bg-white p-2 py-3 text-black">
        <div className="redd flex h-96 w-full items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            {/* <Image className='rounded-full size-16 desktop:size-32' src={Titas} width={100} alt="Titas Ghosh "/> */}
            <h1 className="text-7xl font-bold uppercase desktop:text-9xl">
              ©Titas
            </h1>
            <h1 className="pl-20 text-7xl font-bold uppercase desktop:pl-24 desktop:text-9xl">
              Ghosh ↙
            </h1>
            <div className="relative flex w-full justify-center">
              <h1 className="pt-3 text-xl font-bold uppercase desktop:text-4xl">
                <Link
                  onMouseEnter={() => setHover(!hover)}
                  onMouseLeave={() => setHover(!hover)}
                  className="relative"
                  href={"mailto:info.titasghosh@gmail.com"}
                >
                  Info.titasghosh@gmail.com
                  <motion.div
                    variants={BorderVarients}
                    initial="init"
                    animate={hover ? "anim" : "init"}
                    className="redd absolute -bottom-1 left-0 h-1 w-full bg-black"
                  />
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex h-20 w-full flex-col items-center justify-around gap-2 tablet:flex-row">
          <div className="redd text-lg font-semibold">©2024 {V}</div>
          <div className="redd flex h-16 w-full items-center justify-around tablet:w-[40rem]">
            {social.map((data, idx) => {
              return (
                <div key={idx} className="text-black">
                  <Link href={data.route} target={data.terget}>
                    {data.icon}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
