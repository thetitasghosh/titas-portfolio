"use client";
import Preloader from "@/lib/Preloader";
import { Button } from "@/components/ui/button";
import Lenis from "lenis";
import HeroV0 from "@/components/section/HeroV0";
// import HeroSection from "@/components/section/HeroSection";
// import AboutSection from "@/components/section/AboutSection";
// import WorkSection from "@/components/section/WorkSection";
// import ContactSection from "@/components/section/ContactSection";
import { useEffect } from "react";
// import DotBg from "@/lib/DotBg";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-2">
      {/* <Preloader/> */}
      <HeroV0 />

      {/* <AboutSection />
      <WorkSection />
      <ContactSection /> */}
    </main>
  );
}
