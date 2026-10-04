import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import myLogo from "./icon.png";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kishan's Portfolio",
  description: "this is my portfolio website, you can find my work here.",
  
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <header className="flex flex-row items-center list-none sticky top-0 z-50  bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit " >
          <div>
          <Link href="/"><Image src={myLogo} alt="Logo" width={80} height={80} className="rounded-full"/></Link>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
           <ul className="flex flex-row justify-center items-center gap-6  ">
            <li><Link href="/dashboard/about">About</Link></li>
            <li><Link href="/dashboard/project">Projects</Link></li>
          </ul> 
          </div>
        </header>
      <body className="min-h-full flex flex-col ">
       
        {children}
        <footer>this is footer </footer>
      </body>
      
    </html>
  );
}
