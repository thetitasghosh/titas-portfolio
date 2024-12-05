import React from "react";
import { social } from "@/data/navigation";
import Link from "next/link";
const TabBar = () => {
  return (
    <div
      id="wrapper"
      className="redd fixed bottom-5 flex h-16 w-full items-center justify-center p-2"
    >
      <div
        id="tab"
        className="flex h-full w-52 items-center justify-between rounded-md border border-neutral-700 bg-neutral-900 p-1"
      >
        {social.map((data, i) => {
          return <TabIcon key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default TabBar;
function TabIcon({ data }) {
  return (
    <div className="h-full w-10 rounded-md border border-neutral-800 p-1">
      <Link aria-label={data.label} href={data.route} target="_blank">
        {data.icon}
      </Link>
    </div>
  );
}
