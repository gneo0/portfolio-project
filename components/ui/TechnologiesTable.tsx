import Technology from "./Technology";
import { secondaryFont } from "@/public/fonts/fonts";
import { TECHNOLOGIES } from "@/utils/constants";

export default function TechnologiesTable() {
  return (
    <div className="w-full flex flex-col h-1/2 sm:w-[60%] rounded-b-xl shadow-sm shadow-secondary-color overflow-hidden sm:h-1/2 max-w-lg">
      <h3 className="text-secondary-color bg-accent-color rounded-t-md py-2 text-center">
        Technologies i use:
      </h3>
      <ul
        className={`${secondaryFont.className} grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] h-full text-center mt-2`}
      >
        {TECHNOLOGIES.map(({ name, Icon }) => (
          <Technology key={name} name={name}>
            <span>
              <Icon />
            </span>
          </Technology>
        ))}
      </ul>
    </div>
  );
}
