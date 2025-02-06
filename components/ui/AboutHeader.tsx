import { secondaryFont } from "@/public/fonts/fonts";

export default function AboutHeader() {
  return (
    <h2
      className={`sm:text-7xl text-6xl text-accent-color ${secondaryFont.className}`}
    >
      About me
      <span className="decoration-0 inline-block text-white">:</span>
    </h2>
  );
}
