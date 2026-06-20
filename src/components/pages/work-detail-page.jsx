"use client";

import React from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Compass, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function WorkDetailPage({ workitem }) {
  if (!workitem) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-neutral-50 dark:bg-neutral-950">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Project Not Found</h2>
        <Link href="/work">
          <Button variant="default">Back to Works</Button>
        </Link>
      </div>
    );
  }

  // Brand color mapper for dynamic UI components and atmospheric ambient lights
  const colorMap = {
    yourmaker: "#f26522",
  };
  const brandColor = colorMap[workitem.color] || "#0071E3";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-50/20 dark:bg-neutral-950/80 px-6 py-20 tablet:px-10 laptop:px-16 pb-32">
      {/* Background grids and glowing gradients */}
      <div className="absolute inset-0 -z-10 bg-grid-small-neutral-200/40 dark:bg-grid-small-neutral-900/15" />
      <div 
        className="absolute top-0 left-1/2 -z-10 h-[550px] w-full max-w-7xl -translate-x-1/2 opacity-35 blur-[120px] pointer-events-none rounded-full dark:opacity-20"
        style={{
          background: `radial-gradient(circle, ${brandColor}30 0%, transparent 70%)`
        }}
      />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="pt-4"
        >
          <Link 
            href="/work" 
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1.5 text-xs font-medium text-neutral-600 shadow-[0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800/60 dark:bg-neutral-900/80 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to work</span>
          </Link>
        </motion.div>

        {/* Project Title Block & Quick Meta Info */}
        <div className="flex flex-col gap-6 border-b border-neutral-200/60 pb-10 dark:border-neutral-800/40 tablet:flex-row tablet:items-end tablet:justify-between">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 tablet:text-5xl laptop:text-6xl"
            >
              {workitem.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400"
            >
              <div className="flex items-center gap-1.5">
                <Layers className="h-4 w-4 opacity-70" />
                <span>{workitem.service}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 opacity-70" />
                <span>{workitem.date}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link target="_blank" href={workitem.site}>
              <Button 
                className="group gap-2 rounded-full px-6 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: brandColor,
                  boxShadow: `0 8px 30px ${brandColor}20`
                }}
              >
                <span>Visit live website</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Display Showcase Content */}
        <div className="space-y-20">
          
          {/* Cover Showcase */}
          {workitem.cover_img && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-white p-3 shadow-xl dark:border-neutral-800/50 dark:bg-neutral-900"
            >
              <div className="overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-950 aspect-[16/9] w-full">
                <Image
                  alt={workitem.title}
                  src={workitem.cover_img}
                  width={1920}
                  height={1080}
                  priority
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
            </motion.div>
          )}

          {/* Desktop Mockups (Browser frame) */}
          {workitem.desktop_mock && workitem.desktop_mock.length > 0 && (
            <div className="space-y-12">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200">
                  Desktop Interface
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Full widescreen layout experience and system dashboards.
                </p>
              </div>
              
              <div className="space-y-12">
                {workitem.desktop_mock.map((mockUrl, i) => (
                  <motion.div
                    key={`desktop-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-900"
                  >
                    {/* Safari Header */}
                    <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950">
                      {/* Close/Minimize/Maximize dots */}
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                      </div>
                      
                      {/* Address bar */}
                      <div className="flex items-center gap-1.5 rounded bg-neutral-100 px-6 py-1 text-[11px] text-neutral-400 dark:bg-neutral-900 dark:text-neutral-500 w-full max-w-sm mx-auto justify-center font-mono select-none">
                        <Compass className="h-3 w-3 opacity-60" />
                        <span className="truncate">{workitem.site.replace(/https?:\/\/(www\.)?/, '')}</span>
                      </div>
                      
                      {/* Offset balancer */}
                      <div className="w-12" />
                    </div>
                    
                    {/* Mock screenshot */}
                    <div className="bg-neutral-50 dark:bg-neutral-950 p-2">
                      <div className="overflow-hidden rounded-lg border border-neutral-200/40 dark:border-neutral-800/40 bg-white dark:bg-neutral-900">
                        <Image
                          alt={`Desktop layout mockup ${i + 1}`}
                          src={mockUrl}
                          width={1920}
                          height={1080}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Laptop Mockups */}
          {workitem.laptop_mock && workitem.laptop_mock.length > 0 && (
            <div className="space-y-12">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200">
                  Responsive Web Experience
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Ensuring visual consistency across typical laptop configurations.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2">
                {workitem.laptop_mock.map((mockUrl, i) => (
                  <motion.div
                    key={`laptop-${i}`}
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden rounded-xl border border-neutral-200/80 bg-white p-2.5 shadow-xl dark:border-neutral-800/80 dark:bg-neutral-900"
                  >
                    <div className="overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 dark:border-neutral-850 dark:bg-neutral-950 aspect-[16/10] w-full">
                      <Image
                        alt={`Laptop layout mockup ${i + 1}`}
                        src={mockUrl}
                        width={1440}
                        height={900}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Mockups */}
          {workitem.mobile_mock && workitem.mobile_mock.length > 0 && (
            <div className="space-y-12">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200">
                  Mobile Application Layouts
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Sleek navigation and optimized rendering on portrait devices.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12 tablet:grid-cols-2 laptop:grid-cols-3">
                {workitem.mobile_mock.map((mockUrl, i) => (
                  <motion.div
                    key={`mobile-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center"
                  >
                    {/* Device bezel frame container */}
                    <div className="relative mx-auto w-[285px] h-[580px] rounded-[48px] border-[10px] border-neutral-900 bg-neutral-950 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] ring-4 ring-neutral-800/40 dark:border-neutral-800 dark:ring-neutral-900/60 overflow-hidden flex flex-col justify-between">
                      {/* Notch / Dynamic Island */}
                      <div className="absolute top-3 left-1/2 z-20 h-4.5 w-24 -translate-x-1/2 rounded-full bg-neutral-900 dark:bg-neutral-800 flex items-center justify-end pr-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-950/60 dark:bg-neutral-900/60" />
                      </div>
                      
                      {/* Speaker grill */}
                      <div className="absolute top-0.5 left-1/2 z-20 h-0.5 w-10 -translate-x-1/2 rounded-full bg-neutral-800 dark:bg-neutral-700" />

                      {/* Screen content */}
                      <div className="relative w-full h-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                        <Image
                          alt={`Mobile mockup ${i + 1}`}
                          src={mockUrl}
                          width={400}
                          height={800}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      
                      {/* Home indicator line */}
                      <div className="absolute bottom-2 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-neutral-900/30 dark:bg-neutral-100/30" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
