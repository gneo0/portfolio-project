import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

export default function FooterActionBtns() {
  return (
    <div className="flex gap-2">
      <Link
        href="mailto:geo_nio@hotmail.com"
        className="bg-primary-color rounded-md shadow-md shadow-primary-color/30 hover:text-secondary-color hover:bg-accent-color relative z-50 flex items-center gap-2 p-2 px-4 mt-8 overflow-hidden transition ease-in-out"
      >
        <span>
          <MdMarkEmailUnread />
        </span>
        Mail Me
      </Link>
      <Link
        href="https://www.linkedin.com/in/giorgos-neofitou/"
        target="_blank"
        className="bg-primary-color rounded-md shadow-md shadow-primary-color/30 hover:text-secondary-color hover:bg-accent-color relative z-50 flex items-center gap-2 p-2 px-4 mt-8 overflow-hidden transition ease-in-out"
      >
        <span>
          <BsLinkedin />
        </span>
        Linked In
      </Link>
    </div>
  );
}
