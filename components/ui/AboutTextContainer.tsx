import AboutHeader from "./AboutHeader";
import AboutStoryText from "./AboutStoryText";

export default function AboutText() {
  return (
    <article className="sm:w-2/3 h-1/2 flex flex-col justify-center max-w-2xl space-y-2">
      <AboutHeader />
      <AboutStoryText />
    </article>
  );
}
