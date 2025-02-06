import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Project } from "@/typings";

export default function ProjectActionBtns({ project }: { project: Project }) {
  return (
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
  );
}
