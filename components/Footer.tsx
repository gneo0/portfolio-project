import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

import ScrollTopBtn from "./ui/ScrollTopBtn";
import { secondaryFont } from "@/public/fonts/fonts";

export default function Footer() {
  return (
    <section
      id="contact"
      className="h-96 bg-secondary-color rounded-t-2xl relative"
    >
      <div className="flex flex-col items-center w-11/12 max-w-xl gap-1 pt-12 mx-auto text-center">
        <h5 className={`text-4xl ${secondaryFont.className}`}>
          Let&apos;s <span className="italic">Connect</span>
        </h5>
        <p>
          Feel free to contact me if having any questions. I&apos;m available
          for new projects or just for chatting
        </p>
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
      </div>
      <ScrollTopBtn />
    </section>
  );
}
