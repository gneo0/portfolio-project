import Banner from "../Banner";

export default function Hero() {
  return (
    <main className="text-center relative h-[calc(100dvh-3rem)] flex flex-col overflow-hidden">
      <h1 className="text-8xl whitespace-nowrap">
        Hello, I&apos;m Giorgos Neofitou
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        incidunt tenetur reprehenderit quisquam sapiente sit culpa voluptatem
        itaque harum nam!
      </p>
      <div className="flex items-center justify-center gap-2">
        <span className="block w-2 h-2 rounded-full bg-accent-color animate-pulse"></span>
        <p>Open To Work</p>
      </div>
      <button>Download Resume</button>
      <Banner />
    </main>
  );
}
