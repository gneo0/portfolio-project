import Banner from "../Banner";
import { mainFont } from "@/app/layout";

export default function Hero() {
  return (
    <main className="text-center relative h-dvh flex flex-col items-center overflow-hidden">
      <div
        className={`${mainFont.className}flex text-8xl sm:text-9xl mt-12 whitespace-nowrap animate-scroll-x-negative`}
      >
        <span> Hello, I&apos;m Giorgos Neofitou.</span>
        <span> Hello, I&apos;m Giorgos Neofitou.</span>
        <span> Hello, I&apos;m Giorgos Neofitou.</span>
        <span> Hello, I&apos;m Giorgos Neofitou.</span>
        <span> Hello, I&apos;m Giorgos Neofitou.</span>
        <span> Hello, I&apos;m Giorgos Neofitou.</span>
        <span> Hello, I&apos;m Giorgos Neofitou.</span>
      </div>
      <p className="w-1/2 mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        incidunt tenetur reprehenderit quisquam sapiente sit culpa voluptatem
        itaque harum nam!
      </p>
      <div className="flex items-center justify-center gap-12 mt-8">
        <p>
          <span className="w-2 h-2 rounded-full bg-accent-color animate-pulse inline-block mr-2"></span>
          Open To Work
        </p>
        <button className="border border-secondary-color px-4 py-2 hover:bg-secondary-color transition-colors ease-linear">
          Download Resume
        </button>
      </div>
      <Banner />
    </main>
  );
}
