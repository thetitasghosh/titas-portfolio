import type { Metadata } from "next";
import LenisScroll from "@/lib/helper/lenis-scroll";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/lib/helper/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
// import Footer from "@/components/section/Footer";
import "./globals.css";

// const RethinkSan = Rethink_Sans({ subsets: ["latin"] });
// const RethinkSan = Inclusive_Sans({ weight: "400", subsets: ["latin"] });
const Space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://titasghosh.com/"),
  keywords: ["Front-end", "Titas Ghosh", "Creative Developer", "thetitasghosh"],
  title: {
    template: "%s | Titas Ghosh",
    default: "Titas Ghosh | Front-end Developer",
  },
  description: "A Creative Developer & an Artistic Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={Space.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <LenisScroll>
              <Header />
              {children}
              {/* <TabBar /> */}
              <GoogleAnalytics gaId="G-71NWJY69F8" />
              <Analytics />
              <Footer />
            </LenisScroll>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
