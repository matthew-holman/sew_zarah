import { aboutMe } from "@/content";
import PinCushionIllustration from "@/components/illustrations/PinCushionIllustration";

export default function AboutMe() {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          {aboutMe.heading}
        </h2>
        {aboutMe.body.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-7 text-white/80">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6">
          <PinCushionIllustration className="h-50 w-full text-white/80" />
        </div>
      </div>
    </div>
  );
}
