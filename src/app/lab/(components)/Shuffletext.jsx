"use client";
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
    <div className="flex h-screen w-full items-center justify-center">
      <h1
        className="redd rounded-md p-2 px-5 text-5xl uppercase"
        onMouseEnter={Shuffle}
        onMouseLeave={stopShuffle}
      >
        {text}
      </h1>
    </div>
  );
};

export default Shuffletext;
