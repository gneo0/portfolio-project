"use client";
import { TiArrowUpOutline } from "react-icons/ti";

export default function ScrollTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="bottom-5 right-5 bg-primary-color hover:bg-accent-color hover:text-secondary-color md:text-lg lg:text-xl 2xl:text-2xl hover:rounded-full shadow-accent-color/60 absolute p-2 transition-all duration-150 ease-linear rounded-md shadow-md"
    >
      <span>
        <TiArrowUpOutline />
      </span>
    </button>
  );
}
