import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muzic",
  description: "Discover and enroll in a variety of music courses, from beginner guitar lessons to advanced music theory. Learn from experienced instructors and enhance your musical skills with our online music education platform. Join now and start your musical journey today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
