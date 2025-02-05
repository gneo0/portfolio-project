import { secondaryFont } from "@/public/fonts/fonts";
import { TECHNOLOGIES } from "@/utils/constants";

export default function About() {
  return (
    <section
      id="about"
      className="h-[calc(100dvh-2.5rem)] sm:flex-row relative flex flex-col items-center justify-center gap-2 px-4 bg-primary-color/60 border-b border-secondary-color"
    >
      <article className="sm:w-2/3 sm:h-1/2 flex flex-col justify-center h-full space-y-4">
        <h2
          className={`sm:text-7xl text-6xl text-accent-color ${secondaryFont.className}`}
        >
          About me
          <span className="decoration-0 inline-block text-white">:</span>
        </h2>
        <div className="relative p-8 mx-auto">
          <span className="left-1 text-secondary-color absolute top-0 text-6xl">
            &#10077;
          </span>
          <blockquote className="ml-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nisi
            molestias, soluta ab debitis consectetur ducimus reprehenderit
            maxime pariatur neque dolore iste tenetur excepturi repudiandae!
            Mollitia consectetur itaque voluptatum asperiores.
          </blockquote>
          <span className="right-1 -bottom-5 text-secondary-color absolute text-6xl">
            &#10078;
          </span>
        </div>
      </article>
      <div className="w-full flex flex-col h-1/2 sm:w-[60%] rounded-b-xl shadow-sm shadow-secondary-color overflow-hidden sm:h-1/2">
        <h3 className="text-secondary-color py-2 bg-accent-color text-center rounded-t-md">
          Technologies i use:
        </h3>
        <ul
          className={`${secondaryFont.className} grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] h-full min-[595px]:grid-cols-2 text-center mt-2`}
        >
          {TECHNOLOGIES.map((tech) => (
            <li key={tech} className="hover:bg-secondary-color pt-2">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
