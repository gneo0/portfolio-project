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
      className={`flex items-center fixed top-0 left-0 z-50 h-10 justify-around w-full py-3 ${
        isScrolled ? "bg-secondary-color w-96 left-1/2 -translate-x-1/2 top-2 rounded-full" : ""
      }`}
    >
      <Link
        href="#hero"
        className={`hover:text-secondary-color hover:bg-accent-color cursor-pointer ${
          isScrolled ? "hidden opacity-0" : ""
        }`}
      >
        Logo here
      </Link>
      <ul className="flex space-x-4">
        <Link
          href="#about"
          className="hover:text-secondary-color hover:bg-accent-color cursor-pointer px-2 rounded-sm"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="hover:text-secondary-color hover:bg-accent-color cursor-pointer px-2 rounded-sm"
        >
          Projects
        </Link>
        <li className="hover:text-secondary-color hover:bg-accent-color cursor-pointer px-2 rounded-sm">
          Contact
        </li>
      </ul>
    </nav>
  );
}
