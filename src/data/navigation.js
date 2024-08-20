import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const nav = [
  { id: 1, label: "Home", route: "/" },
  { id: 2, label: "About", route: "/about" },
  { id: 2, label: "Lab", route: "/lab" },
  { id: 3, label: "Work", route: "/work" },
  { id: 4, label: "Contact", route: "/contact" },
];
export const social = [
  {
    id: 1,
    icon: <FaGithub className="size-8" />,
    terget: "_blank",
    route: "https://github.com/thetitasghosh",
  },
  {
    id: 2,
    icon: <FaXTwitter className="size-8" />,
    terget: "_blank",
    route: "https://twitter.com/thetitasghosh",
  },
  {
    id: 3,
    icon: <FaInstagram className="size-8" />,
    terget: "_blank",
    route: "https://twitter.com/thetitasghosh",
  },
];
