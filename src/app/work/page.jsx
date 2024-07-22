import React from "react";
import { WORKS } from "@/data/workData";
import Link from "next/link";

export const metadata = {
  title: "Work",
  description: "...",
};

const page = () => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <h1>
        Works:
        {WORKS.map((data) => {
          return (
            <h2 key={data.id}>
              <Link href={`/work/${data.slug}`}>{data.title}</Link>
            </h2>
          );
        })}
      </h1>
    </div>
  );
};

export default page;
