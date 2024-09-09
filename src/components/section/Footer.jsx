import React from "react";
import { social } from "@/data/navigation";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex h-96 w-full items-center justify-center bg-black p-5 px-10">
      <div className="bg-AthensGray relative flex h-full w-full flex-col items-center justify-evenly rounded-lg">
        <h1 className="text-3xl font-black uppercase tracking-widest text-ScienceBlueDark desktop:text-9xl">
          Titas Ghosh
        </h1>
        <div className="redd absolute bottom-0 flex h-10 w-full flex-col-reverse items-center justify-between gap-5 px-10 text-ScienceBlueDark desktop:flex-row">
          <div>Copy Right © By Titas Ghosh Design & Development</div>
          <div className="flex items-center justify-center gap-5">
            {social.map((data, i) => {
              return (
                <div key={i} className="size-6">
                  <Link target="_blank" href={data.route}>
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
