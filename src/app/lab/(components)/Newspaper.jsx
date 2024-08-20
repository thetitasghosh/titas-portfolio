"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
const Newspaper = ({ Ref }) => {
  const { scrollYProgress } = useScroll({
    target: Ref,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });
  let rotatefull = useTransform(scrollYProgress, [0, 1], [0, 360]);
  let ScaleFull = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      style={{ rotate: rotatefull, scale: ScaleFull }}
      className="redd sticky top-36 flex h-[45rem] w-[30rem] flex-col items-center justify-start gap-5 bg-white p-5 text-black"
    >
      <div>
        <h1 className="text-5xl uppercase"> Titas Ghosh</h1>
      </div>
      <div>
        <h1 className="text-4xl uppercase">A Creative Developer</h1>
      </div>
      <div className="size-52 border border-black rounded-2xl overflow-hidden">
        <Image
          alt="Titas Ghosh | A Creative Developer"
          width={500}
          height={500}
          className="w-full -z-10 h-full"
          src={
            "https://gxvexicguxtddkwzyser.supabase.co/storage/v1/object/sign/Titas%20Projects/Profile/me.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUaXRhcyBQcm9qZWN0cy9Qcm9maWxlL21lLmpwZyIsImlhdCI6MTcyNDE2NzgyMywiZXhwIjoxNzU1NzAzODIzfQ.6ou8wzKVAwBC1yNcC9DE8qw5qmRkU0q0a5jWJHcOaMA&t=2024-08-20T15%3A28%3A52.479Z"
          }
        />
      </div>
    </motion.div>
  );
};

export default Newspaper;
