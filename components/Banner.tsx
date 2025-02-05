import { BANNER_ADJECTIVES } from "../utils/constants";

export default function Banner() {
  return (
    <div className="absolute bottom-0 w-full bg-secondary-color">
      <ul className="flex w-fulsl gap-10 p-2 text-sm md:text-base animate-scroll-x-positive text-accent-color">
        {[
          ...BANNER_ADJECTIVES,
          ...BANNER_ADJECTIVES,
          ...BANNER_ADJECTIVES,
        ].map((adjective, i) => (
          <li
            key={adjective + i}
            className="whitespace-nowrap after:content-['\2055'] after:text-accent-color last:after:content-none after:ml-12"
          >
            {adjective}
          </li>
        ))}
      </ul>
    </div>
  );
}
