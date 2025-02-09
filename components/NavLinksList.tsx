import Link from "next/link";
import { NAV_LINKS } from "@/utils/constants";
import { useScroll } from "@/hooks/useScroll";

export default function NavLinksList() {
  const { isScrolled } = useScroll();

  return (
    <nav
      className={`sm:flex space-x-4 ${
        isScrolled ? "justify-center py-1" : "hidden sm:flex"
      }`}
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className="hover:text-secondary-color hover:bg-accent-color px-3 rounded-lg cursor-pointer transition-colors ease-in-out"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
