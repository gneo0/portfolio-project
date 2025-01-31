import { mainFont, secondaryFont } from "@/app/layout";
import { TECHNOLOGIES } from "@/utils/constants";

export default function About() {
  return (
    <section id="about" className="h-dvh sm:flex-row relative flex flex-col items-center justify-center gap-4 p-2 px-4">
      <article className="sm:w-2/3 space-y-4">
        <h2
          className={`sm:text-7xl text-6xl text-accent-color ${mainFont.className}`}
        >
          About me
          <span className="text-white decoration-0 inline-block">
            :
          </span>
        </h2>
        <div className="relative p-8 mx-auto">
          <span className="left-1 absolute top-0 text-6xl text-secondary-color">
            &#10077;
          </span>
          <blockquote className={`ml-2 ${secondaryFont.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nisi
            molestias, soluta ab debitis consectetur ducimus reprehenderit
            maxime pariatur neque dolore iste tenetur excepturi repudiandae!
            Mollitia consectetur itaque voluptatum asperiores.
          </blockquote>
          <span className="right-1 -bottom-5 absolute text-6xl text-secondary-color">
            &#10078;
          </span>
        </div>
      </article>
      <div className="w-full sm:w-[60%]">
        <h3 className="py-1 text-center">Technologies i use:</h3>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] min-[595px]:grid-cols-2 gap-y-1 gap-x-4 py-4 text-center">
          {TECHNOLOGIES.map((tech) => (
            <li key={tech} className="bg-secondary-color">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
