export default function HeroSection() {
  return (
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
        <span className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Clothing repair & alterations
        </span>

          <div>
            <h1 className="text-4xl leading-tight text-white md:text-6xl">
              Thoughtful clothing repairs, done with care.
            </h1>

            <p className="mt-5 max-w-prose text-lg text-white/70">
              Send a few photos and a short description. We’ll assess whether the
              repair is possible and provide an estimated price range before you
              commit.
            </p>
          </div>

          <div>
            <a
                className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25"
                href="#contact"
            >
              Send photos for assessment
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6">
            <svg
                aria-hidden="true"
                className="h-48 w-full text-white/80"
                viewBox="0 0 320 200"
                fill="none"
            >
              <rect
                  x="16"
                  y="16"
                  width="288"
                  height="168"
                  rx="24"
                  stroke="currentColor"
                  strokeWidth="2"
              />
              <path
                  d="M44 132c38-34 62-50 94-50 31 0 46 12 70 36 24 24 43 32 68 32"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
              />
              <circle cx="92" cy="78" r="18" stroke="currentColor" strokeWidth="2" />
              <path
                  d="M188 64h72m-72 20h72m-72 20h48"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
  );
}
