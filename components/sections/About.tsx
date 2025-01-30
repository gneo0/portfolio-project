import { TECHNOLOGIES } from "@/utils/constants";

export default function About() {
  return (
    <section className="h-dvh">
      <h2 className="text-center">About me</h2>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div className="bg-accent-color p-8 rounded-md rounded-tl-3xl rounded-br-3xl w-5/6 relative">
          <span className="text-6xl absolute left-1 top-0">&#10077;</span>
          <blockquote className="ml-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nisi
            molestias, soluta ab debitis consectetur ducimus reprehenderit
            maxime pariatur neque dolore iste tenetur excepturi repudiandae!
            Mollitia consectetur itaque voluptatum asperiores.
          </blockquote>
          <span className="text-6xl absolute right-1 -bottom-5">&#10078;</span>
        </div>
        <div className="w-full">
          <h3>Technologies</h3>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border border-accent-color gap-1 text-center">
            {TECHNOLOGIES.map((tech) => (
              <li key={tech} className="bg-secondary-color">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
