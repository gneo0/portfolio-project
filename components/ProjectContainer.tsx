import Image from "next/image";
import { Project } from "@/typings";
import ProjectActionBtns from "./ui/ProjectActionBtns";
import ProjectText from "./ui/ProjectText";

export default function ProjectContainer({ project }: { project: Project }) {
  return (
    <li className="sm:flex-row sm:justify-center bg-primary-color flex flex-col items-center justify-start w-full gap-4 p-4 mx-auto mt-4 overflow-hidden rounded-md">
      <Image
        width={150}
        height={70}
        className="sm:w-96 sm:h-44 object-cover w-2/3"
        src={`/${project.name}-mockup.png`}
        alt={`${project.name} photo`}
      />
      <div className="flex flex-col justify-between w-full gap-4">
        <ProjectText project={project} />
        <ProjectActionBtns project={project} />
      </div>
    </li>
  );
}
