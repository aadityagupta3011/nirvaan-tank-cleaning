import { SITE, SERVICES, FAQS } from "./site";

const abs = (path = "/") => `${SITE.url}${path === "/" ? "" : path}`;

/**
 * Full per-page metadata: title, description, canonical, Open Graph, Twitter card.
 * Page-level openGraph replaces the layout's, so every page builds a complete one here.
 */
export function pageMetadata({ title, description, path = "/", keywords = [], noindex = false }) {
  const url = abs(path);
  // The <title> gets the "| Nirvaan Services" suffix from the layout template; social cards need it spelled out.
  const socialTitle = typeof title === "string" ? `${title} | ${SITE.name}` : title.absolute;
  const image = { url: SITE.ogImage, width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` };

  return {
    title,
    description,
    ...(keywords.length && { keywords }),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE.name,
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SITE.ogImage],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

// ---------- JSON-LD structured data (schema.org) ----------

const businessId = `${SITE.url}/#business`;

const postalAddress = () =>
  SITE.city
    ? {
        "@type": "PostalAddress",
        ...(SITE.streetAddress && { streetAddress: SITE.streetAddress }),
        addressLocality: SITE.city,
        ...(SITE.region && { addressRegion: SITE.region }),
        ...(SITE.postalCode && { postalCode: SITE.postalCode }),
        addressCountry: "IN",
      }
    : { "@type": "PostalAddress", addressCountry: "IN" };

export function localBusinessSchema() {
  const sameAs = Object.values(SITE.social).filter(Boolean);
  const areas = SITE.areasServed.length ? SITE.areasServed : SITE.city ? [SITE.city] : [];

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/icon-512.png`,
    image: `${SITE.url}${SITE.ogImage}`,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    address: postalAddress(),
    ...(SITE.geo && {
      geo: { "@type": "GeoCoordinates", latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    }),
    ...(areas.length && { areaServed: areas.map((name) => ({ "@type": "City", name })) }),
    ...(SITE.openingHours.length && { openingHours: SITE.openingHours }),
    ...(sameAs.length && { sameAs }),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Water Tank Cleaning Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.desc },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "en-IN",
    publisher: { "@id": businessId },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function servicesSchema() {
  return SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: "Water tank cleaning",
    description: s.desc,
    provider: { "@id": businessId },
    ...(SITE.city && { areaServed: SITE.city }),
    url: `${abs("/services")}#${s.slug}`,
  }));
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
