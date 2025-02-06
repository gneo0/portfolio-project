import FooterActionBtns from "./ui/FooterActionBtns";
import FooterText from "./ui/FooterText";
import ScrollTopBtn from "./ui/ScrollTopBtn";

export default function Footer() {
  return (
    <section
      id="contact"
      className="h-96 flex flex-col bg-secondary-color rounded-t-2xl relative"
    >
      <FooterText />
      <FooterActionBtns />
      <ScrollTopBtn />
    </section>
  );
}
