import { secondaryFont } from "@/app/layout";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <section className="h-96 bg-secondary-color rounded-t-2xl">
      <div className="flex flex-col items-center w-11/12 max-w-xl gap-1 pt-12 mx-auto text-center">
        <h5 className={`text-4xl ${secondaryFont.className}`}>
          Let&apos;s <span className="italic">Connect</span>
        </h5>
        <p>
          Feel free to contact me if having any questions. I&apos;m available
          for new projects or just for chatting
        </p>
        <Link href='' target="_blank" className="flex relative items-center gap-2 z-50 bg-primary-color transition ease-in-out overflow-hidden p-2 px-4 rounded-xl hover:text-secondary-color hover:bg-accent-color mt-8">
          Connect With Me{" "}
          <span className="">
            <HiArrowUpRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
