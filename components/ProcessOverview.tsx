const steps = [
  {
    title: "Align",
    description:
      "We clarify your positioning, audience, and outcomes with a tight strategy sprint.",
  },
  {
    title: "Craft",
    description:
      "We translate the story into elegant visual systems and messaging assets.",
  },
  {
    title: "Launch",
    description:
      "We deliver a focused rollout kit to ship with confidence and measure results.",
  },
];

export default function ProcessOverview() {
  return (
    <div id="how-it-works">
      <div className="max-w-2xl">
        <h2 className="text-3xl text-white md:text-4xl">
          A simple, reliable process
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Three focused phases that move quickly without losing clarity.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M12 5v14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-xl text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
