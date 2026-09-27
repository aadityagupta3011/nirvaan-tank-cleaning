import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

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

const stats = [
  { label: "Tanks Cleaned", end: 1500 },
  { label: "Happy Clients", end: 1300 },
  { label: "Years Experience", end: 10 },
  { label: "Service Areas", end: 8 },
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <div className="page-shell">
      <section className="section-wrap py-10 sm:py-14 reveal-up">
        <div className="section-card overflow-hidden px-6 py-10 sm:px-8 md:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="info-pill">About Nirvaan</span>
              <h1 className="section-heading mt-4">
                Built on hygiene, trust, and better living
              </h1>
              <p className="section-subtitle">
                Nirvaan provides professional, eco-friendly tank cleaning
                services that prioritize your health, safety, and water quality.
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
              <img
                src="/images/homephoto.png"
                alt="Nirvaan team at work"
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-4 pb-8 sm:pb-12" ref={ref}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="section-card px-6 py-7 text-center">
              <div className="text-3xl font-bold text-slate-950 sm:text-4xl">
                {inView ? <CountUp end={item.end} duration={1.7} /> : 0}+
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 sm:py-12 reveal-up">
        <div className="grid gap-8 xl:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="feature-card">
              <h2 className="text-3xl font-bold text-slate-900">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 sm:py-12 reveal-up">
        <div className="mb-10">
          <span className="info-pill">Why Tank Cleaning Matters</span>
          <h2 className="section-heading mt-4">
            Cleaner tanks support healthier homes and systems
          </h2>
          <p className="section-subtitle">
            Over time, water tanks accumulate sediments, bacteria, and harmful
            pollutants. Drinking or using this water can affect your health and
            hygiene.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="feature-card">
              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
