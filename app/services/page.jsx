import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteImage from "@/components/SiteImage";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { SITE, SERVICES, PROCESS_STEPS, FAQS, inCity } from "@/lib/site";
import { pageMetadata, breadcrumbSchema, servicesSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Tank Cleaning Services${inCity} — Domestic, Commercial & Apartment`,
  description: `Mechanised water tank cleaning${inCity} for homes, apartments, housing societies and commercial buildings. Overhead tanks, underground tanks and sumps. Book on ${SITE.phoneDisplay}.`,
  path: "/services",
});

const Services = () => {
  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      {servicesSchema().map((schema) => (
        <JsonLd key={schema.name} data={schema} />
      ))}
      <JsonLd data={faqSchema()} />

      <PageHero
        crumb="Services"
        eyebrow="Our services"
        title={<>Water tank cleaning services{inCity} for homes, apartments and businesses</>}
      >
        We clean overhead tanks, underground tanks and sumps using a
        mechanised 6-step process — no manual scrubbing, no guesswork, and a
        tank that is disinfected and ready for daily use.
      </PageHero>

      {/* Services — alternating editorial rows */}
      <section className="section-wrap py-20 sm:py-28">
        {SERVICES.map((service, index) => (
          <article
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-32 gap-8 border-t border-ink/10 py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12 lg:py-16"
          >
            <div className={`bg-white p-2 ring-1 ring-ink/10 lg:col-span-6 ${index % 2 ? "lg:order-2" : ""}`}>
              <SiteImage
                name={service.image}
                alt={service.alt}
                priority={index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="label">S—0{index + 1}</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] sm:text-[2.6rem] sm:leading-[1.1]">
                {service.title}
              </h2>
              <p className="mt-5 max-w-lg text-[17px] leading-8 text-ink/70">{service.desc}</p>
              <ul className="mt-6 grid max-w-lg gap-2 border-t border-ink/10 pt-6 text-[15px] text-ink/80 sm:grid-cols-2">
                {["6-step mechanised process", "Anti-bacterial spray", "UV disinfection", "Overhead, underground & sumps"].map(
                  (point) => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="primary-button">
                  Book {service.title} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Process */}
      <section className="blueprint bg-ink py-20 text-white sm:py-28">
        <div className="section-wrap">
          <SectionHead n="" label="How we clean" title="Our 6-step mechanised cleaning process" light />
          <ol className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="bg-ink p-8">
                <span className="font-serif text-4xl font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/65">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label">FAQ</p>
          <h2 className="section-heading mt-5">Frequently asked questions about tank cleaning</h2>
          <p className="mt-6 text-[15px] leading-7 text-ink/65">
            Something else? Call{" "}
            <a href={`tel:${SITE.phone}`} className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
        <div className="border-b border-ink/10 lg:col-span-8">
          {FAQS.map((faq, i) => (
            <details key={faq.q} className="group border-t border-ink/10" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-xl font-semibold [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-ink/20 font-sans text-lg font-normal transition group-open:rotate-45 group-open:border-ink group-open:bg-ink group-open:text-white">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-[16px] leading-8 text-ink/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
