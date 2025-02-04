"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY >= window.innerHeight - 800);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center fixed top-0 left-0 z-50 h-10 justify-around py-3 ${
        isScrolled
          ? "bg-secondary-color w-96 left-1/2 -translate-x-1/2 top-2 rounded-full animate-fade-down"
          : " w-full"
      }`}
    >
      <Link
        href="#hero"
        className={`hover:text-secondary-color hover:bg-accent-color cursor-pointer ${
          isScrolled ? "hidden opacity-0 transition-opacity ease-linear" : ""
        }`}
      >
        Logo here
      </Link>
      <ul
        className={`flex space-x-4 ${
          isScrolled ? "border border-accent-color/50 w-[95%] justify-center rounded-full py-1 bg-primary-color" : ""
        }`}
      >
        <Link
          href="#about"
          className="hover:text-secondary-color hover:bg-accent-color px-4 rounded-xl cursor-pointer"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="hover:text-secondary-color hover:bg-accent-color px-4 rounded-xl cursor-pointer"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:text-secondary-color hover:bg-accent-color px-4 rounded-xl cursor-pointer"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
