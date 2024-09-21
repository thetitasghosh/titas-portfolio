import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const nav = [
  // { id: 1, label: "Home", route: "/" },
  { id: 1, label: "About", route: "/about" },
  { id: 2, label: "View", route: "/view" },
  // { id: 2, label: "Lab", route: "/lab" },
  { id: 3, label: "Work", route: "/work" },
  { id: 4, label: "Contact", route: "/contact" },
];
export const social = [
  {
    id: 1,
    icon: <FaGithub className="h-full w-full" />,
    route: "https://github.com/thetitasghosh",
  },
  {
    id: 2,
    icon: <FaXTwitter className="h-full w-full" />,
    route: "https://twitter.com/thetitasghosh",
  },
  {
    id: 3,
    icon: <FaInstagram className="h-full w-full" />,
    route: "https://instagram.com/thetitasghosh",
  },
];
