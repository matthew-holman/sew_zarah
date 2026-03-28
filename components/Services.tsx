import { services } from "@/content";

export default function Services() {
  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="text-3xl text-white md:text-4xl">{services.heading}</h2>
        <p className="mt-4 text-lg text-white/70">{services.intro}</p>
      </div>

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/10"
          >
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm font-medium text-white/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
