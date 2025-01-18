"use client";
import React from "react";
import { Button } from "../ui/button";
import { Computer } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size={"icon"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant={"outline"}
      className="dark:text-white"
    >
      <Computer />
    </Button>
  );
};

export default ThemeSwitcher;
