"use client";
import { Button } from "@/components/ui/button";
import Lenis from "lenis";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import WorkSection from "@/components/section/WorkSection";
import ContactSection from "@/components/section/ContactSection";
import { useEffect } from "react";
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
    <main className="flex min-h-screen w-full px-2  flex-col items-center justify-center font-sans">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
