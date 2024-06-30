import Titas from '../../../public/assets/img/pic.jpg'
import React from "react";
import {V} from '@/constant/version'
import Image from 'next/image'
const Footer = () => {
  return (
    <div
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className="relative z-[10] flex h-[510px] w-screen items-center justify-center rounded-2xl "
    >
      <div className="fixed bottom-1 flex h-[510px] w-screen flex-col items-center justify-between rounded-lg bg-white p-2 py-3 text-black">
        <div className="redd flex h-96 w-full items-center justify-center">
          <div className='flex flex-col  w-full items-center justify-center '>
          {/* <Image className='rounded-full size-16 desktop:size-32' src={Titas} width={100} alt="Titas Ghosh "/> */}
          <h1 className="text-7xl desktop:text-9xl uppercase font-bold">©Titas</h1>
          <h1 className="text-7xl desktop:text-9xl uppercase font-bold">Ghosh</h1>
          </div>
        </div>
        <div className=" flex h-20 w-full items-center justify-between gap-2">
          <div className='font-semibold text-lg'>©2024 {V}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
