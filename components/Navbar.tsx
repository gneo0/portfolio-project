import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center fixed top-0 left-0 z-50 justify-around w-full py-3">
      <Link
        href="/"
        className="hover:text-secondary-color hover:bg-accent-color cursor-pointer"
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
        <li className="hover:text-secondary-color hover:bg-accent-color cursor-pointer px-2 rounded-sm">
          Projects
        </li>
        <li className="hover:text-secondary-color hover:bg-accent-color cursor-pointer px-2 rounded-sm">
          Contact
        </li>
      </ul>
    </nav>
  );
}
