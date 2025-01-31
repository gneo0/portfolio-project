import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center fixed top-0 left-0 z-50 h-10 justify-around w-full py-3">
      <Link
        href="#hero"
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
        <Link href='#projects' className="hover:text-secondary-color hover:bg-accent-color cursor-pointer px-2 rounded-sm">
          Projects
        </Link>
        <li className="hover:text-secondary-color hover:bg-accent-color cursor-pointer px-2 rounded-sm">
          Contact
        </li>
      </ul>
    </nav>
  );
}
