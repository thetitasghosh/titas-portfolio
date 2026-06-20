import React from "react";
import WorkListPage from "@/components/pages/work-list-page";

export const metadata = {
  title: "Works",
  description: "Recent works and projects.",
};

const WorkPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6 pt-16 pb-20">
      <div className="container h-full">
        <WorkListPage />
      </div>
    </div>
  );
};

export default WorkPage;
