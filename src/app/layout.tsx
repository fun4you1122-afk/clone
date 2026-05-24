import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "KYR Real Estate | Premium Properties in Dubai, UAE",
  description:
    "KYR Real Estate — UAE-based agency specialising in premium properties. Redefining real estate through transparency, expertise, and precision.",
  openGraph: {
    title: "KYR Real Estate | Dubai",
    description: "Premium properties. Data-driven advice. High-profile clientele.",
    images: ["https://i.ibb.co/F4J4BkrX/Untitled-design-3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#07090d] text-[#f5f0e8]">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
