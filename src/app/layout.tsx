import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { Inter } from "next/font/google";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Titas Ghosh",
    default: "Titas Ghosh | Creative Developer",
  },
  description: "A Creative Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
