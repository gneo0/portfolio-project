import Link from "next/link";
import Image from "next/image";
import { MdOutlineOpenInNew } from "react-icons/md";

import getRepos from "@/app/services/api";
import { SELECTED_REPOS } from "@/utils/constants";
import { secondaryFont } from "@/public/fonts/fonts";
import { Project } from "@/typings";

export default async function Projects() {
  //  return
  const projects = await getRepos();
  const filteredProjects = projects.filter((project: Project) =>
    SELECTED_REPOS.includes(project.name)
  );

  return (
    <section
      id="projects"
      className="h-[50rem] overflow-hidden flex flex-col items-center justify-center py-4"
    >
      <h4 className={`${secondaryFont.className} sm:text-6xl text-4xl`}>
        Personal Projects
      </h4>
      <ul className="w-11/12 max-w-3xl overflow-y-auto">
        {filteredProjects.map((project: Project) => (
          <li
            key={project.id}
            className="sm:flex-row sm:justify-center bg-primary-color flex flex-col items-center justify-start w-full gap-4 p-4 mx-auto mt-4 overflow-hidden rounded-md"
          >
            <Image
              width={150}
              height={70}
              className="sm:w-96 sm:h-44 object-cover w-2/3"
              src={`/${project.name}-mockup.png`}
              alt={`${project.name} photo`}
            />
            <div className="flex flex-col justify-between w-full gap-4">
              <div>
                <h5 className="decoration-2 decoration-secondary-color mb-2 underline">
                  {project.name}
                </h5>
                <p>{project.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  target="_blank"
                  href={project.html_url}
                  className="flex items-center gap-2"
                >
                  GitHub code
                  <span>
                    <MdOutlineOpenInNew />
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={project.homepage}
                  className="border-accent-color hover:bg-accent-color hover:text-secondary-color flex items-center gap-2 px-2 py-1 transition-colors ease-in border rounded"
                >
                  Watch Live
                  <span>
                    <MdOutlineOpenInNew />
                  </span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
