import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "halluminate",
  description: "Generated by create next app",
};

const euclid = localFont({
  src: './EuclidCircularARegular.ttf'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={euclid.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
