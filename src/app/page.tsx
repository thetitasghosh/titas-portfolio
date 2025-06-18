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
  // useEffect(() => {
  //   const sendPing = () => {
  //     fetch("/api/ping", {
  //       method: "POST",
  //       credentials: "include", // Send cookies
  //     });
  //   };

  //   sendPing(); // Send first ping when page loads

  //   const interval = setInterval(sendPing, 10000); // Send ping every 10s

  //   return () => clearInterval(interval); // Stop pinging when user leaves
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
      // document.body.style = "hidden";
      // document.querySelector(".MainPage").style.overflow = "hidden";

      window.scrollTo(0, 0);
    }, 1000);
  }, [isloading]);
  return (
    <>
      <AnimatePresence mode="wait">
        {isloading && <Preloader />}
      </AnimatePresence>
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
