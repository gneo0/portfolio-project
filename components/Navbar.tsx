"use client";
import Logo from "./ui/Logo";
import NavLinksList from "./NavLinksList";
import { useScroll } from "@/hooks/useScroll";

export default function Navbar() {
  const { isScrolled } = useScroll();

  return (
    <nav
      className={`flex items-center fixed top-0 left-0 z-50 h-10 justify-around py-3 ${
        isScrolled
          ? "bg-primary-color/85 border border-dotted border-secondary-color w-72 sm:w-96 lg:w-[28rem] left-1/2 -translate-x-1/2 top-2 rounded-full animate-fade-down"
          : " w-full animate-opacity-down"
      }`}
    >
      <Logo />
      <NavLinksList />
    </nav>
  );
}
