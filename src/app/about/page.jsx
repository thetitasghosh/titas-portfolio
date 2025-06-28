import Image from "next/image";
import React from "react";
import AboutPageTop from '@/components/pages/about-page-top'
export const metadata = {
  title: "About",
  description: "...",
};

const AboutPage = () => {
  return (
    <div className="redd relative flex min-h-screen w-full flex-col items-center justify-center pt-16">
      <AboutPageTop/>
      <div id="container" className="redd container h-full"></div>
    </div>
  );
};

export default AboutPage;
