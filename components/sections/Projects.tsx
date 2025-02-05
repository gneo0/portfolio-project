import Link from "next/link";
import Image from "next/image";
import { MdOutlineOpenInNew } from "react-icons/md";

import getRepos from "@/app/services/api";
import { secondaryFont } from "@/app/layout";
import { SELECTED_REPOS } from "@/utils/constants";

export default async function Projects() {
  const projects = await getRepos();
  const filteredProjects = projects.filter((project) =>
    SELECTED_REPOS.includes(project.name)
  );

  return (
    <section
      id="projects"
      className="h-[calc(100dvh-2.5rem)] overflow-hidden flex flex-col items-center justify-center py-4"
    >
      <h4 className={`${secondaryFont.className} sm:text-6xl text-4xl`}>
        Personal Projects
      </h4>
      <ul className="w-11/12 max-w-3xl mt-6 overflow-y-auto">
        {filteredProjects.map((project) => (
          <li
            key={project.id}
            className="sm:flex-row sm:justify-center bg-primary-color flex flex-col items-center justify-start w-full gap-4 p-4 mx-auto mt-4 overflow-hidden rounded-md"
          >
            <Image
              width={150}
              height={70}
              className="object-cover w-2/3 sm:w-96 sm:h-44"
              src={`/${project.name}-mockup.png`}
              alt={`${project.name} photo`}
            />
            <div className="flex flex-col justify-between w-full gap-4">
              <div>
                <h5>{project.name}</h5>
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
                  className="flex items-center gap-2 border border-accent-color py-1 px-2 hover:bg-accent-color hover:text-secondary-color rounded transition-colors ease-in"
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
