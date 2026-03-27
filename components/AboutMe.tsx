import { aboutMe } from "@/content";

export default function AboutMe() {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        {aboutMe.body.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-7 text-white/70">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex items-center justify-center">
        <h2 className="text-3xl text-white md:text-4xl text-center">
          {aboutMe.heading}
        </h2>
      </div>
    </div>
  );
}
