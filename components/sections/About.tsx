import AboutTextContainer from "../ui/AboutTextContainer";
import TechnologiesTable from "../ui/TechnologiesTable";

export default function About() {
  return (
    <section
      id="about"
      className="sm:flex-row h-[50rem] sm:h-[40rem] relative flex flex-col items-center justify-center gap-2 p-4 bg-primary-color/60 border-b border-secondary-color md:px-7 xl:gap-10"
    >
      <AboutTextContainer />
      <TechnologiesTable />
    </section>
  );
}
