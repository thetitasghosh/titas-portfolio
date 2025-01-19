import React from "react";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="redd flex h-[60vh] w-full flex-col items-center justify-center">
      <div className="redd w-full text-2xl desktop:text-5xl">
        <h1>About me ↴</h1>
      </div>
      <div className="redd flex h-full w-full flex-col items-center justify-center text-neutral-500 laptop:flex-row">
        <div className="redd flex h-full w-full items-center justify-center pl-5 text-2xl desktop:text-5xl desktop:pr-32">
          I thrive on challenges and believe that the future of technology lies
          in building human-centered solutions.
        </div>
        <div className="redd flex h-full w-80 items-end justify-end p-10">
          <Link href={"/about"}>
            <Button variant={"outline"} className="group">
              About me... <Send className="size-4 group-hover:animate-bounce" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
