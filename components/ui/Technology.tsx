import { TechnologyProps } from "@/typings";

export default function Technology({ children, name }: TechnologyProps) {
  return (
    <li className="hover:bg-secondary-color justify-stretch flex items-center gap-2 pl-2">
      {children}
      {name}
    </li>
  );
}
