import type { Metadata } from "next";
import LenisScroll from "@/lib/helper/lenis-scroll";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/lib/helper/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import "./globals.css";

// const RethinkSan = Rethink_Sans({ subsets: ["latin"] });
// const RethinkSan = Inclusive_Sans({ weight: "400", subsets: ["latin"] });
// const Space = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://titasghosh.com"),

  title: {
    default: "Titas Ghosh | Creative Technologist & Product Builder",
    template: "%s | Titas Ghosh",
  },

  description:
    "Creative technologist building scalable products at the intersection of strategy, design, and engineering. Founder-minded developer focused on clarity, systems, and execution.",

  keywords: [
    "Titas Ghosh",
    "Creative Technologist",
    "Product Engineer",
    "Frontend Architect",
    "Startup Founder",
    "Design Engineering",
    "Next.js Developer",
    "Supabase",
    "Product Design",
    "Web Applications",
  ],

  authors: [{ name: "Titas Ghosh", url: "https://titasghosh.com" }],
  creator: "Titas Ghosh",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://titasghosh.com",
    title: "Titas Ghosh — Creative Technologist & Product Builder",
    description:
      "Building digital products through strategy, design, and engineering. Focused on scalable systems and meaningful user experiences.",
    siteName: "Titas Ghosh",
    images: [
      {
        url: "/opengraph-image.png", // YOU must add this
        width: 1200,
        height: 630,
        alt: "Titas Ghosh — Creative Technologist & Product Builder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Titas Ghosh — Creative Technologist & Product Builder",
    description:
      "Founder-minded developer working across strategy, design, and technology to build scalable digital products.",
    images: ["/opengraph-image.png"],
    creator: "@thetitasghosh", // only if you actually use this
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          > */}
          <LenisScroll>
            <Header />
            {children}
            <GoogleAnalytics gaId="G-71NWJY69F8" />
            <Analytics />
            <Footer />
          </LenisScroll>
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
