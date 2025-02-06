import { useScroll } from "@/hooks/useScroll";
import { secondaryFont } from "@/public/fonts/fonts";

export default function Logo() {
  const { isScrolled } = useScroll();

  return (
    <h1
      className={`${
        secondaryFont.className
      } hover:text-secondary-color hover:bg-accent-color cursor-pointer font-semibold px-3 rounded-sm text-xl bg-secondary-color ${
        isScrolled ? "hidden opacity-0 transition-opacity ease-linear" : ""
      }`}
    >
      GN.
    </h1>
  );
}
