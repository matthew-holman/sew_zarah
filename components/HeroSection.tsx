import SewingMachineIllustration from "@/components/illustrations/SewingMachineIllustration";
import { hero } from "@/content";

export default function HeroSection() {
  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <span className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          {hero.badge}
        </span>

        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            {hero.heading}
          </h1>

          <p className="mt-5 max-w-prose text-lg text-white/70">
            {hero.tagline}
          </p>
        </div>

        <div>
          <a
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
            href="#contact"
          >
            {hero.cta}
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6">
          <SewingMachineIllustration className="h-50 w-full text-white/80" />
          {/*<ThreadRollIllustration className="h-40 w-full text-white/80" />*/}
          {/*<SewingMachineIllustration className="h-40 w-full text-white/80" />*/}
        </div>
      </div>
    </div>
  );
}
