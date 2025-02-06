import AdjectiveText from "./ui/AdjectiveText";
import { BANNER_ADJECTIVES } from "../utils/constants";

export default function Banner() {
  return (
    <div className="bg-secondary-color absolute bottom-0 w-full">
      <ul className="w-fulsl md:text-base animate-scroll-x-positive text-accent-color flex gap-10 p-2 text-sm">
        {[...BANNER_ADJECTIVES, ...BANNER_ADJECTIVES, ...BANNER_ADJECTIVES].map(
          (adjective, i) => (
            <AdjectiveText key={adjective + i} adjective={adjective} />
          )
        )}
      </ul>
    </div>
  );
}
