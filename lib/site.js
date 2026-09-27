// Single source of truth for business details. Every meta tag, the sitemap,
// and the structured data (JSON-LD) read from here — update once, applies everywhere.

export const SITE = {
  name: "Nirvaan Services",
  legalName: "Nirvaan Tank Cleaning Services",
  shortName: "Nirvaan",
  tagline: "Mechanised Water Tank Cleaning",
  description:
    "Nirvaan Services provides professional 6-step mechanised water tank cleaning for homes, apartments, societies and commercial buildings — dewatering, sludge removal, high-pressure cleaning, vacuuming, anti-bacterial spray and UV treatment.",

  // Set NEXT_PUBLIC_SITE_URL when a custom domain is connected (no trailing slash).
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://nirvaanservices-f1fea.web.app").replace(/\/$/, ""),

  phone: "+918690777089",
  phoneDisplay: "86907 77089",
  email: "sales.nirvanservices@gmail.com",
  foundingDate: "2025-04",

  // TODO: fill these in — local search ranking ("tank cleaning near me") depends on them.
  city: "", // e.g. "Jaipur"
  region: "", // state, e.g. "Rajasthan"
  postalCode: "",
  streetAddress: "",
  areasServed: [], // e.g. ["Jaipur", "Malviya Nagar", "Vaishali Nagar"]
  geo: null, // e.g. { latitude: 26.9124, longitude: 75.7873 }
  openingHours: [], // e.g. ["Mo-Sa 08:00-20:00"] — only add real hours

  // Only your OWN profiles go here. Empty entries are hidden from the footer.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/aaditya3011/",
    googleBusiness: "", // your Google Business Profile URL, once created
  },

  // Paste the content value from Google Search Console / Bing Webmaster Tools.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },

  ogImage: "/og-image.jpg",
};

export const inCity = SITE.city ? ` in ${SITE.city}` : "";

export const KEYWORDS = [
  "water tank cleaning",
  "water tank cleaning services",
  "mechanised tank cleaning",
  "mechanized water tank cleaning",
  "overhead tank cleaning",
  "underground tank cleaning",
  "sump cleaning",
  "apartment water tank cleaning",
  "society tank cleaning",
  "commercial tank cleaning",
  "domestic tank cleaning",
  "tank disinfection",
  "UV tank cleaning",
  "tank sludge removal",
  "water tank cleaning near me",
  ...(SITE.city
    ? [`water tank cleaning ${SITE.city}`, `tank cleaning services in ${SITE.city}`]
    : []),
];

export const SERVICES = [
  {
    slug: "domestic-tank-cleaning",
    title: "Domestic Tank Cleaning",
    desc: "Hygienic cleaning for underground and overhead water tanks in independent houses and villas.",
    image: "independent-house-tank-service",
    alt: "Independent house whose overhead and underground water tanks Nirvaan cleans",
  },
  {
    slug: "commercial-tank-cleaning",
    title: "Commercial Tank Cleaning",
    desc: "Scheduled tank cleaning for offices, shops, schools, hotels and other commercial buildings so everyone gets clean, safe water.",
    image: "commercial-water-tank-cleaning",
    alt: "Large steel water tank at a commercial building",
  },
  {
    slug: "apartment-tank-cleaning",
    title: "Apartment & Society Tank Cleaning",
    desc: "Group cleaning plans for apartments and housing societies, plus quick response for urgent contamination or flooding.",
    image: "apartment-society-tank-cleaning",
    alt: "Apartment building whose water tanks are cleaned by Nirvaan",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Mechanised Dewatering",
    image: "mechanised-dewatering",
    description:
      "Using powerful suction pumps, we remove all the stored water from the tank in a controlled and hygienic manner without manual contact.",
  },
  {
    title: "Sludge Removal",
    image: "sludge-removal",
    description:
      "We remove settled sludge and dirt particles at the bottom of the tank using scooping tools and suction machines.",
  },
  {
    title: "High Pressure Cleaning",
    image: "high-pressure-jet-cleaning",
    description:
      "Inner walls of the tank are cleaned with high-pressure water jets to remove algae, biofilm, and stains thoroughly.",
  },
  {
    title: "Vacuum Cleaning",
    image: "vacuum-cleaning",
    description:
      "Residual dirty water and leftover particles are vacuumed out from corners and grooves for a spotless result.",
  },
  {
    title: "Anti-Bacterial Spray",
    image: "anti-bacterial-spray",
    description:
      "We spray FDA-approved antibacterial solution to disinfect the internal surface of the tank to kill bacteria and germs.",
  },
  {
    title: "UV Radiation",
    image: "uv-tank-disinfection",
    description:
      "Finally, we expose the tank to UV light to eliminate any remaining bacteria or microorganisms without chemicals.",
  },
];

// General guidance only — no prices or guarantees. Shown on /services and emitted as FAQPage schema.
export const FAQS = [
  {
    q: "How often should a water tank be cleaned?",
    a: "Most households and buildings should clean their water tanks at least once every six months. Tanks in dusty areas, older tanks, or tanks that show algae, odour or sediment may need cleaning more often.",
  },
  {
    q: "What is mechanised tank cleaning?",
    a: "Mechanised tank cleaning uses pumps, high-pressure jets, vacuum machines and UV equipment instead of manual scrubbing. It is faster, removes more sludge and biofilm, and avoids workers standing in the stored water.",
  },
  {
    q: "What steps does Nirvaan follow to clean a tank?",
    a: "We follow a 6-step process: mechanised dewatering, sludge removal, high-pressure wall cleaning, vacuum cleaning, anti-bacterial spray, and UV radiation treatment.",
  },
  {
    q: "Which types of tanks do you clean?",
    a: "We clean overhead tanks, underground tanks and sumps for independent homes, apartments, housing societies and commercial buildings.",
  },
  {
    q: "How do I book a tank cleaning service?",
    a: `Call us on ${SITE.phoneDisplay} or fill in the booking form on our contact page with your name, contact number and address, and our team will get back to you.`,
  },
];
