import React from "react";

const Footer = () => {
  return (
    <div
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className="relative z-[10] h-[510px] w-screen rounded-2xl flex items-center justify-center"
    >
      <div className="fixed bottom-1 flex h-[510px] w-full flex-col items-center justify-between rounded-lg bg-myBlue p-2 py-3 text-white">
        <div className="red h-96 w-full"></div>
        <div className="red h-20 w-full"></div>
      </div>
    </div>
  );
};

export default Footer;
