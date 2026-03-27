import ContactSuccessBanner from "@/components/ContactSuccessBanner";
import { Suspense } from "react";
import { contact } from "@/content";

export default function ContactAndPhotoSubmission() {
  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="text-3xl text-white md:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-4 text-lg text-white/70">
          {contact.subheading}
        </p>
      </div>

      <div className="mt-10 w-full max-w-full rounded-3xl bg-black/10 p-8 ring-1 ring-white/25">
        <Suspense fallback={null}>
          <ContactSuccessBanner />
        </Suspense>
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
            {contact.fields.name.label} <span className="text-white/40">{contact.fields.name.required}</span>
            <input
              className="w-full min-w-0 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder={contact.fields.name.placeholder}
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 text-sm text-white/70">
            {contact.fields.emailOrPhone.label} <span className="text-white/40">{contact.fields.emailOrPhone.required}</span>
            <input
              className="w-full min-w-0 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder={contact.fields.emailOrPhone.placeholder}
              type="text"
              name="email_or_phone"
              autoComplete="email"
              required
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 text-sm text-white/70 md:col-span-2">
            {contact.fields.description.label}{" "}
            <span className="text-white/40">{contact.fields.description.required}</span>
            <textarea
              className="min-h-[140px] w-full min-w-0 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
              placeholder={contact.fields.description.placeholder}
              name="description"
              required
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 text-sm text-white/70 md:col-span-2">
            {contact.fields.photos.label}{" "}
            <span className="text-white/40">{contact.fields.photos.hint}</span>
            <input
              className="w-full min-w-0 rounded-xl bg-white/5 px-4 py-3 text-white/70 ring-1 ring-white/15 file:mr-4 file:rounded-full file:border-0 file:bg-white/15 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40"
              type="file"
              name="images"
              accept=".jpg,.jpeg,.png"
              multiple
              required
            />
            <span className="text-xs text-white/50">
              {contact.fields.photos.note}
            </span>
          </label>

          <fieldset className="flex min-w-0 flex-col gap-3 text-sm text-white/70 md:col-span-2">
            <legend className="text-white/70">{contact.fields.serviceOption.legend}</legend>

            {contact.fields.serviceOption.options.map((option, index) => (
              <label key={option.value} className="flex items-center gap-3">
                <input
                  className="h-4 w-4 rounded-full border-white/40 bg-white/10 text-white/80 focus:ring-2 focus:ring-white/40"
                  type="radio"
                  name="service_option"
                  value={option.value}
                  defaultChecked={index === 0}
                />
                {option.label}
              </label>
            ))}
          </fieldset>

          <button
            className="inline-flex w-full items-center justify-center rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25 md:col-span-2"
            type="submit"
          >
            {contact.submitButton}
          </button>
        </form>

        <p className="mt-6 text-sm text-white/50">
          {contact.contactNote}
        </p>
      </div>
    </div>
  );
}
