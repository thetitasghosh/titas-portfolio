import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
// import { Mail } from "lucide-react";

export const nav = [
  // {  label: "Home", route: "/" },
  // { label: "About", route: "/about" },
  // { label: "View", route: "/view" },
  { label: "Work", route: "/work" },
  { label: "Lab", route: "/lab" },
  // { label: "Contact", route: "/contact" },
];
export const social = [
  {
    id: 1,
    label: "Github",
    icon: <FaGithub className="" />,
    route: "https://github.com/thetitasghosh",
  },
  {
    id: 2,
    label: "X",
    icon: <FaXTwitter className="" />,
    route: "https://twitter.com/thetitasghosh",
  },
  {
    id: 3,
    label: "Instagram",
    icon: <FaInstagram className="" />,
    route: "https://instagram.com/thetitasghosh",
  },
  // {
  //   id: 4,
  //   label: "Email",
  //   icon: <Mail className="" />,
  //   route: "mailto:hello@titasghosh.com",
  // },
];
