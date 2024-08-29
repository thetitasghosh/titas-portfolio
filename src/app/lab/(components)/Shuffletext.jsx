"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";

const Shuffletext = () => {
  const TEXT = "Creative Developer";
  const CYCEL = 1;
  const CHARS = "!@#$%^&*():{};|,.<>/?";
  const TIME = 50;

  const [text, setText] = useState(TEXT);
  const intervalRef = useRef(null);
  const Shuffle = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const shuffletext = TEXT.split("")
        .map((char, i) => {
          if (pos / CYCEL > i) {
            return char;
          }
          let randomCharIndex = Math.floor(Math.random() * CHARS.length);
          let randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");
      setText(shuffletext);
      pos++;
      if (pos >= TEXT.length * CYCEL) {
        stopShuffle();
      }
    }, TIME);
  };
  const stopShuffle = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TEXT);
  };
  return (
    <div className="redd flex h-screen w-full items-center justify-center overflow-hidden p-2">
      <Button
        onMouseEnter={Shuffle}
        onMouseLeave={stopShuffle}
        className="relative w-64 overflow-hidden"
      >
        <span className="relative z-10 font-mono text-xl text-BlueRibbon uppercase">
          {" "}
          {text}
        </span>
      </Button>
    </div>
  );
};

export default Shuffletext;
