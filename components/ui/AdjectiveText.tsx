import { Adjective } from "@/typings";

export default function AdjectiveText({ adjective }: Adjective) {
  return (
    <li className="whitespace-nowrap after:content-['\2055'] after:text-accent-color last:after:content-none after:ml-12">
      {adjective}
    </li>
  );
}
