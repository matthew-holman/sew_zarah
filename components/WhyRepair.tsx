import { whyRepair } from "@/content";

export default function WhyRepair() {
  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          {whyRepair.heading}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {whyRepair.points.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15"
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="mb-2 text-base font-semibold text-white">
              {point.title}
            </h3>
            <p className="text-sm leading-6 text-white/90">{point.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
