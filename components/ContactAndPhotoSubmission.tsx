export default function ContactAndPhotoSubmission() {
  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="text-3xl text-white md:text-4xl">
          Let’s build your next launch
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Share a few details and we’ll follow up with availability and a
          tailored proposal.
        </p>
      </div>
      <div className="mt-10 rounded-3xl bg-white/5 p-8 ring-1 ring-white/15">
        <form className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-white/70">
            Name
            <input
              className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Your name"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-white/70">
            Email or phone
            <input
              className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="you@email.com"
              type="text"
            />
          </label>
          <label className="md:col-span-2 flex flex-col gap-2 text-sm text-white/70">
            Description
            <textarea
              className="min-h-[140px] rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Tell us about your piece and timeline"
            />
          </label>
          <label className="md:col-span-2 flex flex-col gap-2 text-sm text-white/70">
            Upload images (1–3 JPG/PNG)
            <input
              className="rounded-xl bg-white/5 px-4 py-3 text-white/70 ring-1 ring-white/15 file:mr-4 file:rounded-full file:border-0 file:bg-white/15 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40"
              type="file"
              accept=".jpg,.jpeg,.png"
              multiple
            />
          </label>
          <fieldset className="md:col-span-2 flex flex-col gap-3 text-sm text-white/70">
            <legend className="text-white/70">Delivery method</legend>
            <label className="flex items-center gap-3">
              <input
                className="h-4 w-4 rounded-full border-white/40 bg-white/10 text-white/80 focus:ring-2 focus:ring-white/40"
                type="radio"
                name="delivery"
                defaultChecked
              />
              Drop-off in studio
            </label>
            <label className="flex items-center gap-3">
              <input
                className="h-4 w-4 rounded-full border-white/40 bg-white/10 text-white/80 focus:ring-2 focus:ring-white/40"
                type="radio"
                name="delivery"
              />
              Postal delivery
            </label>
          </fieldset>
          <button
            className="md:col-span-2 inline-flex w-full items-center justify-center rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25"
            type="button"
          >
            Send request
          </button>
        </form>
        <p className="mt-6 text-sm text-white/50">
          Prefer email? hello@zarahstudio.com · (555) 123-4567
        </p>
      </div>
    </div>
  );
}
