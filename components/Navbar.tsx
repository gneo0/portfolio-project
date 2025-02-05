"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { secondaryFont } from "@/public/fonts/fonts";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY >= window.innerHeight - 700);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center fixed top-0 left-0 z-50 h-10 justify-around py-3 ${
        isScrolled
          ? "bg-primary-color/85 border border-dotted border-secondary-color w-72 sm:w-96 lg:w-[28rem] left-1/2 -translate-x-1/2 top-2 rounded-full animate-fade-down"
          : " w-full"
      }`}
    >
      <Link
        href="#hero"
        className={`${
          secondaryFont.className
        } hover:text-secondary-color hover:bg-accent-color cursor-pointer font-semibold px-3 rounded-sm text-xl bg-secondary-color ${
          isScrolled ? "hidden opacity-0 transition-opacity ease-linear" : ""
        }`}
      >
        GN.
      </Link>
      <ul
        className={`sm:flex space-x-4 ${
          isScrolled ? "justify-center py-1" : "hidden sm:flex"
        }`}
      >
        <a
          href="#about"
          className="hover:text-secondary-color hover:bg-accent-color px-3 rounded-lg cursor-pointer transition-colors ease-in-out"
        >
          About
        </a>
        <Link
          href="#projects"
          className="hover:text-secondary-color hover:bg-accent-color px-3 rounded-lg cursor-pointer transition-colors ease-in-out"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:text-secondary-color hover:bg-accent-color px-3 rounded-lg cursor-pointer transition-colors ease-in-out"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
