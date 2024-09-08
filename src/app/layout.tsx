import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { Rethink_Sans } from "next/font/google";

import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";
import "./globals.css";

const RethinkSan = Rethink_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Titas Ghosh",
    default: "Titas Ghosh | An Artistic Explorer",
  },
  description: "A Creative Developer & an Artistic Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={RethinkSan.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
