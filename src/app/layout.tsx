import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GlowCursor from "@/components/GlowCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samjebas | 3D Parallax Portfolio",
  description: "A premium 3D parallax portfolio built with Next.js and Three.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-purple-500/30 overflow-x-hidden`}
      >
        <SmoothScroll>
          <GlowCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
