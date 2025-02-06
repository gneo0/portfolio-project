import { Project } from "@/typings";

export default function ProjectText({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-between w-full gap-4">
      <div>
        <h5 className="decoration-2 decoration-secondary-color mb-2 underline">
          {project.name}
        </h5>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
