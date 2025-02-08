import ProjectContainer from "./ProjectContainer";
import getRepos from "@/app/services/api";
import { Project } from "@/typings";
import { SELECTED_REPOS } from "@/utils/constants";

export default async function ProjectsList() {
  const projects = await getRepos();
  const filteredProjects: Project[] = projects.filter((project: Project) =>
    SELECTED_REPOS.includes(project.name)
  );
  return (
    <ul className="w-11/12 max-w-3xl overflow-y-auto">
      {filteredProjects.map((project) => (
        <ProjectContainer key={project.id} project={project} />
      ))}
    </ul>
  );
}
