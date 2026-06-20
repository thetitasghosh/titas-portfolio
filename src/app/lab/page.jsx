// app/lab/page.jsx
import React from "react";
import LabListPage from "@/components/pages/lab-list-page";

export const metadata = {
  title: "Labs",
  description: "Recent experimental works and prototypes.",
};

const LabsPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6 pt-16 pb-20">
      <div className="container h-full">
        <LabListPage />
      </div>
    </div>
  );
};

export default LabsPage;

