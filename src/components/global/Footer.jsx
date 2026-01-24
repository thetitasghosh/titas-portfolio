import React from "react";
import Link from "next/link";
import ISTClock from "@/components/global/ISTClock";
import { social } from "@/data/navigation";

const Footer = () => {
  return (
    <footer className="relative w-full px-6 py-24 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 tablet:px-12 desktop:px-24">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3b82f5_100%)]"></div>
      <div className="mx-auto grid max-w-full grid-cols-1 gap-16 tablet:grid-cols-3">
        {/* LEFT — SOCIALS & CONTACT */}
        <div className="space-y-10 text-sm">
          <div>
            <p className="mb-3 uppercase tracking-widest text-neutral-400">
              Socials
            </p>
            <ul className="space-y-1">
              {social.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.route}
                    className="transition hover:text-neutral-600 dark:hover:text-neutral-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 uppercase tracking-widest text-neutral-400">
              Contact
            </p>
            <ul className="space-y-1">
              <li>
                <Link href="mailto:hello@titasghosh.com">Email</Link>
              </li>
              {/* <li>
                <Link href="https://wa.me/91XXXXXXXXXX">WhatsApp</Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* CENTER — BIG CTA */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-neutral-400">
            Got a project in mind?
          </p>
          <h2 className="max-w-md text-4xl font-light leading-tight tablet:text-5xl">
            Let’s make something happen together
          </h2>
        </div>

        {/* RIGHT — META */}
        <div className="flex flex-col items-start justify-between text-sm tablet:items-end">
          <div className="space-y-2 text-neutral-400">
            <p>© 2025</p>
            <ISTClock />
          </div>

          <Link
            href="mailto:hello@titasghosh.com"
            className="mt-8 text-xl font-medium transition hover:opacity-70"
          >
            hello@titasghosh.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
