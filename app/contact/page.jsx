import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { SITE, inCity } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Contact & Book Tank Cleaning${inCity}`,
  description: `Book mechanised water tank cleaning${inCity} with ${SITE.name}. Call ${SITE.phoneDisplay}, email ${SITE.email}, or fill in the quick booking form for a free quote.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE.url}/contact`,
          name: `Contact ${SITE.name}`,
          about: { "@id": `${SITE.url}/#business` },
        }}
      />
      <PageHero crumb="Contact" eyebrow="Book your service" title={<>Book water tank cleaning{inCity}</>}>
        Clean tanks, healthy homes, smoother booking. Name and contact number
        are all we need to get started.
      </PageHero>
      <ContactForm />
    </>
  );
}
