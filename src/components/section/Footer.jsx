import Titas from "../../../public/assets/img/pic.jpg";
import React from "react";
import { social } from "@/data/navigation";
import { V } from "@/constant/version";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
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
            <h1 className="text-7xl font-bold uppercase desktop:text-9xl">
              Ghosh
            </h1>
          </div>
        </div>
        <div className="flex h-20 w-full flex-col items-center justify-between gap-2 tablet:flex-row">
          <div className="text-lg font-semibold">©2024 {V}</div>
          <div className="redd flex items-center justify-around h-16 w-full tablet:w-[40rem]">
            {social.map((data,idx) => {
              return (
                <div key={idx}  className="text-black">
                  <Link href={data.route} target={data.terget}>
                  {data.icon}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
