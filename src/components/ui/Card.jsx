import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <Link href={`/work/${data.slug}`}>
      <div className="red flex h-96 w-96 flex-col items-center justify-center rounded-md p-5 py-5">
        <div className="h-full w-full">
          <Image
            src={data.img}
            width={1000}
            height={500}
            className="w-full"
            alt="Titas Portfolio Projects"
          />
        </div>
        <h1>{data.title}</h1>
      </div>
    </Link>
  );
};

export default Card;
