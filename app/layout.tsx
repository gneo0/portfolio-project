import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { mainFont } from "@/public/fonts/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "G. Neofitou | Portofolio",
  description:
    "Full-stack developer who transforms lines of code into dynamic digital solutions. Dedicated to crafting innovative web experiences that solve real-world problems with elegant & efficient technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth selection:bg-secondary-color">
      <body
        className={`bg-primary-color text-sm sm:text-base w-full ${mainFont.className} text-stone-50 antialiased`}
      >
        <ParticlesBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
