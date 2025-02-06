import { Project } from "@/typings";

export default function ProjectText({ project }: { project: Project }) {
  return (
    <div>
      <h5 className="decoration-2 decoration-secondary-color mb-2 underline">
        {project.name}
      </h5>
      <p>{project.description}</p>
    </div>
  );
}
