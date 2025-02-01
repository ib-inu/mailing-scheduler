import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import DarkModeToggle from "./components/DarkModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mailing Scheduler",
  description: "A user-friendly application for scheduling, managing, and organizing your mailings effortlessly.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#171717] dark:text-[#fff] `}
      >
        <header className="p-4">
          <DarkModeToggle />
        </header>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
