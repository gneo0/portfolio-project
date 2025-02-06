import { Project } from "@/typings";
import ProjectContainer from "./ProjectContainer";

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <ul className="w-11/12 max-w-3xl overflow-y-auto">
      {projects.map((project) => (
        <ProjectContainer key={project.id} project={project} />
      ))}
    </ul>
  );
}
