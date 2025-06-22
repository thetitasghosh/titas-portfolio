"use client";
import { useEffect, useState } from "react";

const ISTClock = () => {
  const [indiaTime, setIndiaTime] = useState("");

  useEffect(() => {
    const updateIndiaTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        // day: "2-digit",
        // month: "2-digit",
        // year: "numeric",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-IN", options);
      setIndiaTime(formatter.format(now));
    };

    updateIndiaTime(); // show initially
    const interval = setInterval(updateIndiaTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return <span className=" uppercase">{indiaTime} IST</span>;
};

export default ISTClock;
