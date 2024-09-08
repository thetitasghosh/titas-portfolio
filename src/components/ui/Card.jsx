import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <Link href={`/work/${data.slug}`}>
      <div className="redd bg-Darkgrey flex h-60 w-96 flex-col items-center justify-between rounded-lg p-2 ">
        <div className="h-44 overflow-hidden rounded-md w-full">
          <Image
            src={data.img}
            width={1000}
            height={500}
            className="w-full h-full"
            alt="Titas Portfolio Projects"
          />
        </div>
        <h1>{data.title}</h1>
      </div>
    </Link>
  );
};

export default Card;
