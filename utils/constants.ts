import { TbBrandThreejs } from "react-icons/tb";
import { FaGolang, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiMongoose,
  SiPostgresql,
  SiRedux,
  SiReactquery,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const BANNER_ADJECTIVES = [
  "Disciplined",
  "Self-Driven",
  "Adaptable",
  "Creative",
  "Detail-Oriented",
];

export const TECHNOLOGIES = [
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: RiNextjsFill },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node", Icon: FaNodeJs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express", Icon: SiExpress },
  { name: "Mongoose", Icon: SiMongoose },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redux", Icon: SiRedux },
  { name: "Tanstack", Icon: SiReactquery },
  { name: "Three.js", Icon: TbBrandThreejs },
  { name: "Go", Icon: FaGolang },
];

export const SELECTED_REPOS = ["Regal-hive", "TaskFlow-pro", "Movie-Verse"];
