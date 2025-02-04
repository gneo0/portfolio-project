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
      className="h-[calc(100dvh-2.5rem)] overflow-hidden flex flex-col items-center justify-center"
    >
      <h4 className={`${secondaryFont.className} text-6xl`}>
        Personal Projects
      </h4>
      <ul className="mt-6 w-11/12 max-w-3xl overflow-y-auto">
        {filteredProjects.map((project) => (
          <li
            key={project.id}
            className="w-full mx-auto mt-4 sm:flex-row p-4 flex flex-col justify-start sm:justify-center bg-primary-color gap-4 rounded-md overflow-hidden"
          >
            <Image
              width="100"
              height={50}
              className="object-cover"
              src="/placeholder.webp"
              alt={`${project.name} photo`}
            />
            <div className="flex flex-col justify-between w-2/3">
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
                  className="flex items-center gap-2"
                >
                  Watch Live{" "}
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
