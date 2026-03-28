import { process } from "@/content";

export default function ProcessOverview() {
  return (
    <div id="how-it-works">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          {process.heading}
        </h2>
        <p className="mt-4 text-lg text-white/70">{process.subheading}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {process.steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10"
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white">
              {index + 1}
            </div>

            <h3 className="text-xl text-white">{step.title}</h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
