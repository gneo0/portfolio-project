import Banner from "../Banner";
import HeroAction from "../ui/HeroAction";
import HeroHeader from "../ui/HeroHeader";
import HeroSummary from "../ui/HeroSummary";

export default function Hero() {
  return (
    <section
      id="#hero"
      className="text-center relative h-[calc(100dvh-2.5rem)] mt-10 flex flex-col border-b border-accent-color items-center overflow-hidden"
    >
      <HeroHeader />
      <HeroSummary />
      <HeroAction />
      <Banner />
    </section>
  );
}
