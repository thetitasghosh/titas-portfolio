import React from "react";
import { WORKS } from "@/data/workData";
import Card from "@/components/ui/Card";
const WorkSection = () => {
  return (
    <div className="redd flex min-h-screen w-full flex-col items-center justify-center gap-10 p-2">
      <div className="redd">
        <h1 className="font-bold tracking-wider text-5xl">Seleted Projects</h1>
      </div>
      <div className="flex flex-wrap h-full w-full items-center justify-center gap-10">
        {WORKS.map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default WorkSection;
