import { BANNER_ADJECTIVES } from "../utils/constants";

export default function Banner() {
  return (
    <div className="absolute bottom-0 bg-secondary-color w-full border-y border-dotted border-accent-color">
      <ul className="flex w-fulsl gap-10 p-2 text-sm md:text-base animate-scroll-x-positive">
        {[
          ...BANNER_ADJECTIVES,
          ...BANNER_ADJECTIVES,
          ...BANNER_ADJECTIVES,
          ...BANNER_ADJECTIVES,
        ].map((adjective, i) => (
          <li
            key={adjective + i}
            className="whitespace-nowrap after:content-['\2055'] last:after:content-none after:ml-6"
          >
            {adjective}
          </li>
        ))}
      </ul>
    </div>
  );
}
