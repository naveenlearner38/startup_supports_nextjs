import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Startup Supports — Build Bold. Export Global.",
  description:
    "India's trusted partner for startup success and international trade excellence. Pitch decks, business plans, export documentation, freight forwarding, and more.",
};

export default function V2Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${syne.variable} ${dmSans.variable} min-h-full flex flex-col antialiased`}>
      {children}
    </div>
  );
}
