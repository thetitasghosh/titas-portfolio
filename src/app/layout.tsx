import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";
import TabBar from "@/components/global/TabBar";
// import Header from "@/components/section/Header";
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
    default: "Titas Ghosh",
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
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Header /> */}
            {children}
            <TabBar />
            <Analytics />
            {/* <Footer /> */}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
