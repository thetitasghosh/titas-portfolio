import React from "react";
import { social} from '@/data/navigation'
const Footer = () => {
  return (
    <div className="flex h-96 w-full items-center justify-center bg-black p-5 px-10">
      <div className="bg-Darkgrey relative flex h-full w-full flex-col items-center justify-evenly rounded-lg">
        <h1 className="desktop:text-9xl text-3xl font-black uppercase tracking-widest">
          Titas Ghosh
        </h1>
        <div className="redd flex-col-reverse gap-5 desktop:flex-row absolute bottom-0 h-10 flex items-center justify-between w-full px-10 ">
          <div>© By Titas Ghosh</div>
          <div className="flex items-center justify-center  gap-5">
          {
            social.map((data,i)=>{
              return <div key={i} className="size-6 ">{data.icon}</div>
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
