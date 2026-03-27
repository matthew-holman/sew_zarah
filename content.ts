// ─────────────────────────────────────────────────────────────────────────────
// Site content — edit copy here without touching component markup
// ─────────────────────────────────────────────────────────────────────────────

// ── Who we are (HeroSection) ─────────────────────────────────────────────────
export const hero = {
  badge: "Clothing repair & alterations",
  heading: "Thoughtful clothing repairs, done with care.",
  tagline:
    "Send a few photos and a short description. We'll assess whether the repair is possible and provide an estimated price range before you commit.",
  cta: "Send photos for assessment",
};

// ── How it works (ProcessOverview) ───────────────────────────────────────────
export const process = {
  heading: "A simple, transparent process",
  subheading: "Clear steps, no pressure, and honest expectations from the start.",
  steps: [
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
  ],
};

// ── Pricing (ExpectationSetting) ─────────────────────────────────────────────
export const pricing = {
  heading: "How assessments and pricing work",
  body: [
    "Photos are used to assess whether a repair is possible and to provide an estimated price range.",
    "Final pricing is confirmed after the item has been inspected in person.",
  ],
  tableHeaders: ["Item", "Repair", "Size / complexity", "Indicative price"],
  tableRows: [
    { item: "Jeans",       repair: "Small hole repair", size: "Up to 2 cm",    price: "250–350 SEK" },
    { item: "Wool jumper", repair: "Invisible mend",    size: "Up to 1 cm",    price: "400–600 SEK" },
    { item: "Trousers",    repair: "Hem shortening",    size: "Standard",       price: "300–450 SEK" },
    { item: "Jacket",      repair: "Lining repair",     size: "Localised area", price: "500–800 SEK" },
  ],
  footnote:
    "Prices are indicative and depend on fabric, construction, and overall condition.",
};

// ── Get in touch (ContactAndPhotoSubmission) ──────────────────────────────────
export const contact = {
  heading: "Send photos for an assessment",
  subheading:
    "Share a short description and 1–3 photos. We'll confirm if the repair is possible and reply with an estimated price range.",
  fields: {
    name: {
      label: "Name",
      required: "(required)",
      placeholder: "Your name",
    },
    emailOrPhone: {
      label: "Email or phone",
      required: "(required)",
      placeholder: "you@email.com or +46…",
    },
    description: {
      label: "What needs repairing?",
      required: "(required)",
      placeholder:
        "Example: torn seam on jeans, small hole in knitwear, zipper replacement…",
    },
    photos: {
      label: "Upload photos",
      hint: "(1–3 images, JPG/PNG)",
      note: "Please include the area that needs repair and one full-item photo if possible.",
    },
    serviceOption: {
      legend: "Service option (optional)",
      options: [
        { value: "drop_off", label: "Local drop-off" },
        { value: "postage", label: "Postage (send and return)" },
      ],
    },
  },
  submitButton: "Send request",
  contactNote: "Prefer email? hello@sewzarah.com · +46 XX XXX XX XX",
};
