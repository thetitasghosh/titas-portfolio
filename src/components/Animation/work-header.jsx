"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import React from "react";
import { Send } from "lucide-react";

const WorkHeader = ({ title, service, date, site }) => {
  return (
    <motion.div
      id="header"
      className="redd flex h-[50vh] w-full flex-col items-start justify-end gap-2 overflow-hidden border-b pb-5 laptop:flex-row laptop:items-end laptop:justify-start desktop:items-end desktop:justify-start desktop:gap-10"
    >
      {/* <div className="red "> */}
      <motion.h1
        initial={{ y: "120%" }}
        whileInView={{
          y: "0%",
          transition: { delay: 0.1, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="text-5xl font-black tablet:text-6xl laptop:text-7xl desktop:text-8xl"
      >
        {title}
      </motion.h1>
      {/* </div> */}
      <motion.h1
        initial={{ y: "150%" }}
        whileInView={{ y: "0%", transition: { delay: 0.4, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="overflow-hidden text-neutral-500 desktop:text-3xl"
      >
        {service}
      </motion.h1>
      <motion.h1
        initial={{ y: "150%" }}
        whileInView={{ y: "0%", transition: { delay: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="overflow-hidden text-neutral-500 desktop:text-3xl"
      >
        {date}
      </motion.h1>
      <motion.div
        initial={{ y: "150%" }}
        whileInView={{ y: "0%", transition: { delay: 0.7, ease: "easeInOut" } }}
        viewport={{ once: true }}
      >
        <Link target="_blank" href={site} className="redd">
          <Button variant={"outline"} className="group gap-2">
            <Send className="group-hover:animate-bounce" /> Live site
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default WorkHeader;
