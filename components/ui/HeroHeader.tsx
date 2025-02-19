import { secondaryFont } from "@/public/fonts/fonts";

export default function HeroHeader() {
  return (
    <div className="text-7xl sm:text-8xl xl:text-[9rem] whitespace-nowrap animate-scroll-x-negative flex gap-3 mt-20">
      {Array.from({ length: 7 }, (_, index) => (
        <span key={index} className={secondaryFont.className}>
          Hello, I&apos;m Giorgos Neofitou.
        </span>
      ))}
    </div>
  );
}
