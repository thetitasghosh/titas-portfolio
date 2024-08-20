import React from "react";
import { WORKS } from "@/data/workData";
import Card from "@/components/ui/Card";
const WorkSection = () => {
  return (
    <div className="red flex h-screen w-full flex-col items-center justify-center p-2">
      <div>
        <h1>Work Section</h1>
      </div>
      <div className="flex h-full w-full items-center justify-center gap-10">
        {WORKS.map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default WorkSection;
