export default function HeroAction() {
  return (
    <div className="sm:flex-row flex flex-col items-center justify-center gap-6 mt-8 animate-opacity-up">
      <p>
        <span className="w-2 h-2 rounded-full bg-secondary-color mb-[0.1rem] animate-pulse inline-block mr-2"></span>
        Open To Work
      </p>
      <button className="border-accent-color hover:bg-secondary-color px-4 py-2 transition-colors ease-linear border rounded">
        Download Resume
      </button>
    </div>
  );
}
