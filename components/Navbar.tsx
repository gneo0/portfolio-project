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
      <ul className="flex space-x-4">
        <Link
          href="#about"
          className="hover:text-secondary-color hover:bg-accent-color px-2 rounded-sm cursor-pointer"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="hover:text-secondary-color hover:bg-accent-color px-2 rounded-sm cursor-pointer"
        >
          Projects
        </Link>
        <li className="hover:text-secondary-color hover:bg-accent-color px-2 rounded-sm cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}
