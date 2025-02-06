import getRepos from "@/app/services/api";
import ProjectsHeader from "../ui/ProjectsHeader";
import ProjectsList from "../ProjectsList";
import { SELECTED_REPOS } from "@/utils/constants";
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
      <ProjectsHeader />
      <ProjectsList projects={filteredProjects} />
    </section>
  );
}
