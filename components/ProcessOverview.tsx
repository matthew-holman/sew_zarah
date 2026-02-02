const steps = [
    {
        title: "Send photos",
        description:
            "Upload 1–3 clear photos of the item and briefly describe the repair you need.",
    },
    {
        title: "Initial assessment",
        description:
            "We review the photos to confirm whether the repair is possible and provide an estimated price range.",
    },
    {
        title: "Repair & confirm",
        description:
            "Final pricing is confirmed after inspecting the item in person, then the repair is carried out with care.",
    },
];

export default function ProcessOverview() {
    return (
        <div id="how-it-works">
            <div className="max-w-2xl">
                <h2 className="text-3xl text-white md:text-4xl">
                    A simple, transparent process
                </h2>
                <p className="mt-4 text-lg text-white/70">
                    Clear steps, no pressure, and honest expectations from the start.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {steps.map((step, index) => (
                    <div
                        key={step.title}
                        className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10"
                    >
                        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white">
                            {index + 1}
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