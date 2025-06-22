import WorkListPage from "@/components/pages/work-list-page";
import Link from "next/link";
import React from "react";
// import { WORKS } from "@/data/workData";
// import Link from "next/link";
// import { Link } from "next-view-transitions";

export const metadata = {
  title: "Works",
  description: "...",
};

const WorkPage = () => {
  return (
    <div className="flex min-h-screen w-full items-start justify-center px-6 pt-16">
      <div id="container" className="borderr container h-full space-y-2">
        <div id="header" className="w-full pt-10 text-2xl desktop:text-5xl">
          <h1>Recent Work ↴</h1>
        </div>
        <WorkListPage />
      </div>
    </div>
  );
};

export default WorkPage;
