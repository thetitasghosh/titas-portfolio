import React from "react";
import { WORKS } from "@/data/workData";
import Card from "@/components/ui/Card";
const WorkSection = () => {
  return (
    <div className="redd flex min-h-screen w-full flex-col items-center justify-center gap-10 p-2">
      <div className="redd text-Darkgrey">
        <h1 className="text-5xl font-bold uppercase">Seleted Projects</h1>
      </div>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-10">
        {WORKS.map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default WorkSection;
