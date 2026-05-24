import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "KYR Real Estate | Premium Properties in Dubai",
  description:
    "KYR Real Estate — Dubai's most trusted agency for premium properties. Transparency, expertise, and precision in every transaction.",
  openGraph: {
    title: "KYR Real Estate | Dubai",
    description: "Premium properties. Data-driven advice. High-profile clientele.",
    images: ["https://i.ibb.co/F4J4BkrX/Untitled-design-3.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${cormorant.variable}`}>
      <body className="bg-[#030507] text-[#f0ece0] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
