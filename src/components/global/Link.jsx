"use client";
import React from "react";
import { Link } from "next-view-transitions";
const LinkTransation = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default LinkTransation;
