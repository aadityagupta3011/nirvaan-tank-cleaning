import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteImage from "@/components/SiteImage";
import SectionHead from "@/components/SectionHead";
import StatsCounter from "@/components/StatsCounter";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { SITE, inCity } from "@/lib/site";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `About Us — Hygiene-First Tank Cleaning${inCity}`,
  description: `Learn about ${SITE.name}, a facility management company started in April 2025 with a focus on mechanised water tank cleaning${inCity}, health, hygiene and customer satisfaction.`,
  path: "/about",
});

const sections = [
  {
    title: "Our Vision",
    content: [
      "At Nirvaan Services, we envision becoming a leading name in the integrated facility management industry by delivering high-quality, reliable, and comprehensive solutions tailored to meet the evolving needs of our clients.",
      "We began our journey with a focus on water tank cleaning services, setting a foundation rooted in hygiene, safety, and customer satisfaction. As we grow, we are committed to expanding our service offerings to include a wide range of essential facility services such as floor cleaning, carpentry, electrical work, housekeeping, and even specialized services like havan (spiritual purification rituals).",
      "Our goal is to be a one-stop destination for all facility management needs - combining professionalism, skilled manpower, and a customer-centric approach to enhance the living and working environments of our clients. With a forward-thinking mindset and a dedication to excellence, Nirvaan Services aims to set new standards in the service industry.",
    ],
  },
  {
    title: "About Our Company",
    content: [
      "Nirvaan Services is a facility management company born from a dream and brought to life in April 2025, with a mission to provide reliable, high-quality services that simplify and improve everyday living. Our journey began with a single focus - water tank cleaning services - driven by a commitment to health, hygiene, and customer satisfaction.",
      "What started as a single-service initiative has now grown into a broader vision: to become a trusted, all-in-one facility management partner. As we evolve, we are expanding our service portfolio to include floor cleaning, carpentry, electrical services, housekeeping, and even specialized offerings such as havan (spiritual rituals) - all delivered with professionalism, integrity, and care.",
      "At Nirvaan Services, we believe that well-maintained spaces lead to better living and working experiences. With a customer-first approach and a passion for excellence, we are dedicated to building long-term relationships and becoming a name synonymous with trust and quality in the facility management industry.",
    ],
  },
];

const benefits = [
  {
    title: "Prevents Waterborne Diseases",
    desc: "Regular cleaning eliminates bacteria like E. coli and salmonella that thrive in stagnant water.",
  },
  {
    title: "Improves Water Quality",
    desc: "Removes rust, algae, and sediments to ensure safe, odor-free water for all uses.",
  },
  {
    title: "Protects Plumbing & Appliances",
    desc: "Clean tanks reduce pipe corrosion and extend the life of your geysers and pumps.",
  },
];

const About = () => {
  return (
    <div className="page-shell">
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />

      <PageHero crumb="About" eyebrow="About Nirvaan" title="Built on hygiene, trust, and better living">
        Nirvaan provides professional, eco-friendly tank cleaning services
        that prioritize your health, safety, and water quality.
      </PageHero>

      <section className="section-wrap py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-5">
            <div className="bg-white p-2 ring-1 ring-ink/10">
              <SiteImage
                name="nirvaan-team-tank-cleaning"
                alt="Technician cleaning the inside of a water tank"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
              <span>Fig. 01</span>
              <span>Mechanised tank cleaning</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <p className="label">Est. April 2025</p>
            <h2 className="section-heading mt-5">
              What started with water tanks is growing into complete facility care.
            </h2>
            {sections.map((section) => (
              <div key={section.title} className="mt-12 border-t border-ink/10 pt-8">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-water">{section.title}</h3>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-ink/75">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="section-wrap py-20 sm:py-28">
        <SectionHead n="" label="Why tank cleaning matters" title="Cleaner tanks support healthier homes and systems">
          Over time, water tanks accumulate sediments, bacteria, and harmful
          pollutants. Drinking or using this water can affect your health and
          hygiene.
        </SectionHead>

        <div className="mt-14 grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
          {benefits.map((item, i) => (
            <article key={item.title} className="bg-paper p-8">
              <span className="font-serif text-4xl font-semibold text-accent">0{i + 1}</span>
              <h3 className="mt-5 font-serif text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink/65">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <Link href="/services" className="primary-button">
            Explore our services <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="secondary-button">
            Book a cleaning
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
