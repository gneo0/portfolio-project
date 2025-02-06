import { secondaryFont } from "@/public/fonts/fonts";
import Banner from "../Banner";

export default function Hero() {
  return (
    <section
      id="#hero"
      className="text-center relative h-[calc(100dvh-2.5rem)] mt-10 flex flex-col border-b border-accent-color items-center overflow-hidden"
    >
      <div className="text-7xl sm:text-8xl xl:text-[9rem] whitespace-nowrap animate-scroll-x-negative flex gap-3 mt-20">
        <span className={`${secondaryFont.className}`}>
          Hello, I&apos;m Giorgos Neofitou.
        </span>
        <span className={`${secondaryFont.className}`}>
          Hello, I&apos;m Giorgos Neofitou.
        </span>
        <span className={`${secondaryFont.className}`}>
          Hello, I&apos;m Giorgos Neofitou.
        </span>
        <span className={`${secondaryFont.className}`}>
          Hello, I&apos;m Giorgos Neofitou.
        </span>
        <span className={`${secondaryFont.className}`}>
          Hello, I&apos;m Giorgos Neofitou.
        </span>
        <span className={`${secondaryFont.className}`}>
          Hello, I&apos;m Giorgos Neofitou.
        </span>
        <span className={`${secondaryFont.className}`}>
          Hello, I&apos;m Giorgos Neofitou.
        </span>
      </div>
      <p className="w-[95%] max-w-3xl mt-6 animate-opacity-up">
        Full-stack developer who transforms lines of code into dynamic digital
        solutions. Dedicated to crafting innovative web experiences that solve
        real-world problems with elegant & efficient technology.
      </p>
      <div className="sm:flex-row flex flex-col items-center justify-center gap-6 mt-8 animate-opacity-up">
        <p>
          <span className="w-2 h-2 rounded-full bg-secondary-color mb-[0.1rem] animate-pulse inline-block mr-2"></span>
          Open To Work
        </p>
        <button className="border-accent-color hover:bg-secondary-color px-4 py-2 transition-colors ease-linear border rounded">
          Download Resume
        </button>
      </div>
      <Banner />
    </section>
  );
}
