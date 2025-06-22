import React from "react";
import { social } from "@/data/navigation";
import ISTClock from "@/components/global/ISTClock";
import ThemeSwitcher from "@/components/buttons/theme-switcher";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex h-fit w-full items-center justify-center p-5 selection:bg-neutral-100">
      <div
        id="container"
        className="container flex h-full flex-col items-center justify-center rounded-md border px-5 dark:border-neutral-900 dark:bg-neutral-800"
      >
        {/* <div className="h-full w-full"></div> */}
        <div className="redd  flex min-h-14 w-full items-center justify-between tablet:flex-row tablet:items-center tablet:justify-between laptop:items-center">
          <div id="copy" className="redf">
            &copy;2025 |<ISTClock />
            {/* <Link href={"/"} className="">
              <Image
                src={"/assets/titas_sign.svg"}
                width={120}
                height={100}
                alt="Titas"
                className="fill-black dark:fill-white"
              />
            </Link> */}
          </div>
          <div id="email" className="hidden tablet:block">
            <Link href={"mailto:hello@titasghosh.com"}>
              hello@titasghosh.com
            </Link>
          </div>
          <div id="social" className="redf">
            {social.map((data, i) => {
              return (
                <Link key={i} href={data.route}>
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="[&_svg]:size-5"
                  >
                    {data.icon}
                  </Button>
                </Link>
              );
            })}
          </div>
          {/* <div id="theme-switcher" className="redd">
            <ThemeSwitcher />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
