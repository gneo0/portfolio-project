import ProjectsHeader from "../ui/ProjectsHeader";
import ProjectsList from "../ProjectsList";

export default async function Projects() {
  return (
    <section
      id="projects"
      className="h-[50rem] overflow-hidden flex flex-col items-center justify-center py-4"
    >
      <ProjectsHeader />
      <ProjectsList />
    </section>
  );
}
