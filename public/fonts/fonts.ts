import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const secondaryFont = localFont({
  src: "./font-files/Philosopher-Regular.ttf",
});

export const mainFont = Poppins({
  weight: ["400"],
  subsets: ["latin-ext"],
});
