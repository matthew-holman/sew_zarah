// ─────────────────────────────────────────────────────────────────────────────
// Site content — edit copy here without touching component markup
// ─────────────────────────────────────────────────────────────────────────────

// ── Who we are (HeroSection) ─────────────────────────────────────────────────
export const hero = {
  badge: "Klädreparation & ändringar",
  heading: "Ge dina kläder nytt liv",
  tagline:
    "Skicka några bilder och en kort beskrivning. Du får snabbt besked om plagget går att laga och en uppskattad prisnivå – innan du bestämmer dig.",
  cta: "Skicka bilder för bedömning",
};

// ── How it works (ProcessOverview) ───────────────────────────────────────────
export const process = {
  heading: "En enkel och tydlig process",
  subheading: "Inga överraskningar – bara raka besked från start.",
  steps: [
    {
      title: "Skicka bilder",
      description:
        "Ladda upp 1–3 tydliga bilder och beskriv kort vad som behöver lagas.",
    },
    {
      title: "Bedömning",
      description:
        "Jag granskar bilderna och återkommer om lagningen är möjlig samt en uppskattad prisnivå.",
    },
    {
      title: "Laga & bekräfta",
      description:
        "Slutpris bekräftas efter att jag sett plagget. Därefter utförs lagningen noggrant och hållbart.",
    },
  ],
};

// ── Services (Services) ───────────────────────────────────────────────────────
export const services = {
  heading: "Vanliga lagningar",
  intro:
    "Här är exempel på vad jag ofta hjälper till med. Är du osäker – skicka en förfrågan.",
  items: [
    "Laga hål och slitningar",
    "Byta dragkedjor",
    "Lägga upp byxor och ärmar",
    "Justera passform",
    "Laga sömmar",
    "Foder och innerlagningar",
  ],
};

// ── Pricing (ExpectationSetting) ─────────────────────────────────────────────
export const pricing = {
  heading: "Så fungerar priser och bedömning",
  body: [
    "Bilder används för att avgöra om lagningen är möjlig och för att ge en ungefärlig prisnivå.",
    "Exakt pris fastställs först efter att plagget har inspekterats i verkligheten.",
  ],
  tableHeaders: ["Plagg", "Lagning", "Storlek / omfattning", "Cirkapris"],
  tableRows: [
    {
      item: "Jeans",
      repair: "Laga mindre hål",
      size: "Upp till 2 cm",
      price: "250–350 kr",
    },
    {
      item: "Ulltröja",
      repair: "Diskret lagning",
      size: "Upp till 1 cm",
      price: "400–600 kr",
    },
    {
      item: "Byxor",
      repair: "Lägga upp",
      size: "Standard",
      price: "300–450 kr",
    },
    {
      item: "Jacka",
      repair: "Laga foder",
      size: "Mindre område",
      price: "500–800 kr",
    },
  ],
  footnote:
    "Priserna är uppskattningar och kan variera beroende på material, konstruktion och skick.",
};

// ── Why repair (WhyRepair) ────────────────────────────────────────────────────
export const whyRepair = {
  heading: "Varför laga istället för att köpa nytt",
  points: [
    "Att laga kläder är ofta både billigare och mer hållbart än att köpa nytt.",
    "Du behåller plagg du redan trivs i – och slipper lägga tid på att hitta något nytt som passar lika bra.",
    "Många lagningar kostar dessutom betydligt mindre än att ersätta plagget.",
  ],
};

// ── About me (AboutMe) ────────────────────────────────────────────────────────
export const aboutMe = {
  heading: "Om mig",
  body: [
    "Jag som driver Sewzarah har lång erfarenhet av sömnad och reparationer.",
    "Jag lägger stor vikt vid noggrannhet och att lagningar ska hålla över tid – och gärna synas så lite som möjligt.",
    "Varje plagg behandlas med omsorg.",
  ],
};

// ── Get in touch (ContactAndPhotoSubmission) ──────────────────────────────────
export const contact = {
  heading: "Skicka in ditt plagg för bedömning",
  subheading:
    "Beskriv kort vad som behöver lagas och bifoga 1–3 bilder. Du får svar om det går att laga samt en uppskattad prisnivå.",
  fields: {
    name: {
      label: "Namn",
      required: "(obligatoriskt)",
      placeholder: "Ditt namn",
    },
    emailOrPhone: {
      label: "E-post eller telefon",
      required: "(obligatoriskt)",
      placeholder: "du@email.com eller +46…",
    },
    description: {
      label: "Vad behöver lagas?",
      required: "(obligatoriskt)",
      placeholder:
        "Exempel: trasig söm på jeans, hål i stickat, byta dragkedja…",
    },
    photos: {
      label: "Ladda upp bilder",
      hint: "(1–3 bilder, JPG/PNG)",
      note: "Visa gärna både skadan och en bild på hela plagget.",
    },
    serviceOption: {
      legend: "Leveransalternativ (valfritt)",
      options: [
        { value: "drop_off", label: "Lämna in personligen" },
        { value: "postage", label: "Skicka med post" },
      ],
    },
  },
  submitButton: "Skicka förfrågan",
  contactNote: "Föredrar du mejl? hello@sewzarah.com · +46 XX XXX XX XX",
};
