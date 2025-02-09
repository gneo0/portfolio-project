import { secondaryFont } from "@/public/fonts/fonts";

export default function FooterText() {
  return (
    <div className="flex flex-col items-center w-11/12 max-w-xl gap-1 pt-12 mx-auto text-center">
      <h5 className={`text-4xl ${secondaryFont.className}`}>
        Let&apos;s <span className="italic">Connect</span>
      </h5>
      <p>
        Feel free to contact me if having any questions. I&apos;m available for
        new projects or just for chatting.
      </p>
    </div>
  );
}
