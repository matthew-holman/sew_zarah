import ContactSuccessBanner from "@/components/ContactSuccessBanner";

export default function ContactAndPhotoSubmission() {
  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="text-3xl text-white md:text-4xl">
          Send photos for an assessment
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Share a short description and 1–3 photos. We’ll confirm if the repair
          is possible and reply with an estimated price range.
        </p>
      </div>

      <div className="mt-10 w-full max-w-full rounded-3xl bg-black/10 p-8 ring-1 ring-white/25">
        <ContactSuccessBanner />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          encType="multipart/form-data"
          action="/?sent=1#contact"
          className="grid w-full max-w-full gap-4 md:grid-cols-2"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <label className="flex min-w-0 flex-col gap-2 text-sm text-white/70">
            Name <span className="text-white/40">(required)</span>
            <input
              className="w-full min-w-0 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Your name"
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 text-sm text-white/70">
            Email or phone <span className="text-white/40">(required)</span>
            <input
              className="w-full min-w-0 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="you@email.com or +46…"
              type="text"
              name="email_or_phone"
              autoComplete="email"
              required
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 text-sm text-white/70 md:col-span-2">
            What needs repairing?{" "}
            <span className="text-white/40">(required)</span>
            <textarea
              className="min-h-[140px] w-full min-w-0 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Example: torn seam on jeans, small hole in knitwear, zipper replacement…"
              name="description"
              required
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 text-sm text-white/70 md:col-span-2">
            Upload photos{" "}
            <span className="text-white/40">(1–3 images, JPG/PNG)</span>
            <input
              className="w-full min-w-0 rounded-xl bg-white/5 px-4 py-3 text-white/70 ring-1 ring-white/15 file:mr-4 file:rounded-full file:border-0 file:bg-white/15 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40"
              type="file"
              name="images"
              accept=".jpg,.jpeg,.png"
              multiple
              required
            />
            <span className="text-xs text-white/50">
              Please include the area that needs repair and one full-item photo
              if possible.
            </span>
          </label>

          <fieldset className="flex min-w-0 flex-col gap-3 text-sm text-white/70 md:col-span-2">
            <legend className="text-white/70">Service option (optional)</legend>

            <label className="flex items-center gap-3">
              <input
                className="h-4 w-4 rounded-full border-white/40 bg-white/10 text-white/80 focus:ring-2 focus:ring-white/40"
                type="radio"
                name="service_option"
                value="drop_off"
                defaultChecked
              />
              Local drop-off
            </label>

            <label className="flex items-center gap-3">
              <input
                className="h-4 w-4 rounded-full border-white/40 bg-white/10 text-white/80 focus:ring-2 focus:ring-white/40"
                type="radio"
                name="service_option"
                value="postage"
              />
              Postage (send and return)
            </label>
          </fieldset>

          <button
            className="inline-flex w-full items-center justify-center rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25 md:col-span-2"
            type="submit"
          >
            Send request
          </button>
        </form>

        <p className="mt-6 text-sm text-white/50">
          Prefer email? hello@sewzarah.com · +46 XX XXX XX XX
        </p>
      </div>
    </div>
  );
}
