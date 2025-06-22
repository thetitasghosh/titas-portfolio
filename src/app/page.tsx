"use client";
import Preloader from "@/lib/helper/Preloader";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
// import Lenis from "lenis";
import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import WorkSection from "@/components/sections/work-section";
import ContactSection from "@/components/sections/contact-section";
export default function Home() {
  const [isloading, setIsloading] = useState(true);
  const [loaded, setIsloaded] = useState(false);

  useEffect(() => {
    const animated = sessionStorage.getItem("PreloaderAnimated");
    const completed = sessionStorage.getItem("PreloaderCompleted");

    if (animated && completed) {
      setIsloading(false); // Already visited in this session
    } else {
      sessionStorage.setItem("PreloaderAnimated", "true");

      const timeout = setTimeout(() => {
        sessionStorage.setItem("PreloaderCompleted", "true");
        setIsloading(false);
        window.scrollTo(0, 0);
      }, 1500); // Match with Preloader animation duration

      return () => clearTimeout(timeout);
    }
  }, []);
  return (
    <>
      {/* {loaded && ( */}
      <AnimatePresence mode="wait">
        {isloading ? <Preloader /> : null}
      </AnimatePresence>
      {/* )} */}
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 pt-16 selection:bg-neutral-100">
        <div
          id="container"
          className="redd container h-full space-y-5 text-neutral-900 dark:text-neutral-100"
        >
          <HeroSection />
          {/* <AboutSection /> */}
          <WorkSection />
          {/* <ContactSection /> */}
        </div>
      </main>
    </>
  );
}
