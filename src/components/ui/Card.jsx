import Image from "next/image";
import { Link } from "next-view-transitions";
import React from "react";

const Card = ({ data }) => {
  return (
    <Link href={`/work/${data.slug}`}>
      <div className="redd bg-Darkgrey shadow-xl shadow-neutral-950 flex desktop:h-96 h-52 desktop:w-[40rem] flex-col items-center justify-between rounded-lg p-2 ">
        <div className="h-full overflow-hidden rounded-md w-full">
          <Image
            src={data.img}
            width={1000}
            height={500}
            className="w-full h-full object-cover"
            alt="Titas Portfolio Projects"
          />
        </div>
        <h1 className="w-full pl-2 pt-1">{data.title}</h1>
      </div>
    </Link>
  );
};

export default Card;
