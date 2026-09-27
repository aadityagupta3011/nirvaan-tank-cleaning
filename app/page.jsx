import Link from "next/link";
import {
  ArrowRight,
  Clock,
  HeartPulse,
  Leaf,
  Phone,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import SiteImage from "@/components/SiteImage";
import StatsCounter from "@/components/StatsCounter";
import VerticalMarquee from "@/components/VerticalMarquee";
import StoryCarousel from "@/components/StoryCarousel";
import SectionHead from "@/components/SectionHead";
import { SITE, SERVICES, PROCESS_STEPS, inCity } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: { absolute: `Water Tank Cleaning Services${inCity} | ${SITE.name}` },
  description: `Professional mechanised water tank cleaning${inCity} for homes, apartments and commercial buildings. 6-step process with sludge removal, high-pressure cleaning, anti-bacterial spray and UV disinfection. Call ${SITE.phoneDisplay}.`,
  path: "/",
});

const heroSpecs = [
  { k: "Process", v: "6 steps" },
  { k: "Method", v: "Mechanised" },
  { k: "Final stage", v: "UV disinfection" },
];

const whyChooseUs = [
  { icon: Wrench, title: "Advanced Mechanized Cleaning", text: "Pumps, pressure jets, vacuums and UV — not buckets and brushes." },
  { icon: HeartPulse, title: "Health & Hygiene First", text: "Every step is designed to remove sludge, biofilm and bacteria." },
  { icon: Users, title: "Trained Professionals", text: "A skilled team that follows the same 6-step process on every job." },
  { icon: Leaf, title: "Eco-Friendly Approach", text: "Safe disinfectants and a water-saving process." },
  { icon: Clock, title: "Time-Efficient & Hassle-Free", text: "Timely, professional service with minimal disruption to your day." },
  { icon: Wallet, title: "Transparent & Affordable Pricing", text: "Clear pricing for homes, apartments and commercial buildings." },
];

const entIssues = [
  {
    title: "Ear Infections",
    text: "Otitis externa (swimmer's ear) occurs when bacteria from dirty water enter your ear during a bath. It can cause itching, pain, discharge, and temporary hearing loss.",
  },
  {
    title: "Sinus Infections (Sinusitis)",
    text: "Inhaling mist from unclean water can irritate your sinuses, leading to congestion, facial pressure, and headaches.",
  },
  {
    title: "Throat Irritation & Infections",
    text: "Gargling or brushing with dirty water introduces bacteria into your throat, causing tonsillitis, bad breath, and pharyngitis.",
  },
  {
    title: "Allergic Reactions",
    text: "Mold spores and algae in dirty tanks can trigger sneezing, itchy eyes, runny nose, and post-nasal drip.",
  },
  {
    title: "Higher Risk for People with ENT Conditions",
    text: "Asthma, sinusitis, and allergies can worsen due to minor exposure to contaminated water - especially in children and the elderly.",
  },
];

const riskGroups = [
  {
    title: "Why regular cleaning matters",
    intro: "Dirty tanks do more than affect taste — they create long-term health, plumbing, and maintenance issues.",
    items: [
      "Health Hazards",
      "Bad Taste & Odor",
      "Algae & Sludge Build-up",
      "Clogged Pipes & Appliances",
      "Pest Infestation",
      "Shorter Tank Lifespan",
    ],
  },
  {
    title: "Common skin problems from unclean water tanks",
    intro: "Contaminated water affects your skin every time you bathe or wash.",
    items: [
      "Rashes & Irritation",
      "Fungal Infections",
      "Allergic Reactions",
      "Dryness & Flaky Skin",
      "Acne & Folliculitis",
      "Worsening Existing Conditions",
    ],
  },
  {
    title: "How dirty water tanks cause plumbing problems",
    intro: "Think it's old pipes? Dirty tanks silently damage your water system from the inside out.",
    items: [
      "Sediment Buildup in Pipes",
      "Damaged Faucets & Fixtures",
      "Pipe Corrosion",
      "Foul Water Odors",
    ],
  },
];

const Home = () => {
  return (
    <div className="page-shell">
      {/* ---------- Hero ---------- */}
      <section className="border-b border-ink/10">
        <div className="section-wrap grid gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="rise flex flex-col justify-center lg:col-span-7">
            <p className="label">Water tank hygiene specialists</p>

            <h1 className="display mt-6 text-[2.75rem] leading-[1.02] sm:text-[4rem] lg:text-[4.6rem]">
              Professional water tank cleaning{inCity},{" "}
              <em className="font-normal italic text-water">done to a six‑step standard.</em>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70">
              {SITE.name} provides mechanized water tank cleaning for homes,
              apartments, and commercial spaces so your water stays cleaner,
              safer, and more hygienic.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="accent-button px-7 py-4">
                Book a tank cleaning <ArrowRight size={17} />
              </Link>
              <a href={`tel:${SITE.phone}`} className="secondary-button px-7 py-4">
                <Phone size={16} /> {SITE.phoneDisplay}
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 border-t border-ink/15">
              {heroSpecs.map((spec, i) => (
                <div key={spec.k} className={`pt-5 ${i > 0 ? "border-l border-ink/15 pl-4 sm:pl-6" : "pr-4"}`}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50 sm:text-[11px]">{spec.k}</dt>
                  <dd className="mt-2 font-serif text-lg font-semibold leading-tight sm:text-2xl">{spec.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <VerticalMarquee />
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* ---------- 01 Services ---------- */}
      <section className="section-wrap py-20 sm:py-28">
        <SectionHead n="01" label="Services" title="Tank cleaning for every kind of property">
          Overhead tanks, underground tanks and sumps — cleaned with the same
          mechanised process whether it is one home or a whole society.
          <div className="mt-6">
            <Link href="/services" className="text-link">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </SectionHead>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {SERVICES.map((service, i) => (
            <Link key={service.slug} href={`/services#${service.slug}`} className="group flex flex-col border-t border-ink/15 pt-6">
              <div className="overflow-hidden bg-white">
                <SiteImage
                  name={service.image}
                  alt={service.alt}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">S—0{i + 1}</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-[-0.01em]">{service.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-7 text-ink/65">{service.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold">
                  Enquire
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- 02 Process ---------- */}
      <section className="blueprint bg-ink py-20 text-white sm:py-28">
        <div className="section-wrap">
          <SectionHead n="02" label="Our method" title="Our steps of cleaning" light>
            We follow a 6-step professional cleaning process to ensure your
            water tank is fully disinfected, safe, and hygienic for use.
          </SectionHead>

          <ol className="mt-14 border-b border-white/10">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-3 border-t border-white/10 py-7 sm:grid-cols-12 sm:gap-x-8 sm:py-8"
              >
                <span className="font-serif text-4xl font-semibold leading-none text-accent sm:col-span-1 sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="self-center font-serif text-2xl font-semibold sm:col-span-4 sm:self-start sm:pt-1">
                  {step.title}
                </h3>
                <p className="col-span-2 text-[15px] leading-7 text-white/65 sm:col-span-5 sm:pt-1.5">
                  {step.description}
                </p>
                <div className="hidden bg-white p-1.5 sm:col-span-2 sm:block">
                  <SiteImage
                    name={step.image}
                    alt={`Step ${index + 1} of water tank cleaning: ${step.title}`}
                    sizes="160px"
                    className="aspect-[4/3] w-full object-contain"
                  />
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 max-w-3xl border-l-2 border-accent pl-6 text-[17px] leading-8 text-white/80">
            <strong className="text-white">100% Safe & Hygienic.</strong> Our
            step-by-step cleaning process ensures your water is pure, safe, and
            ready for daily use.
          </p>
        </div>
      </section>

      {/* ---------- 03 Story (vertical carousel) ---------- */}
      <section className="bg-paper-2 py-20 sm:py-28">
        <div className="section-wrap">
          <SectionHead n="03" label="Why cleaning matters" title="From dirty tank to safe water">
            How a dirty tank affects daily life — and how professional cleaning
            solves the problem.
          </SectionHead>
          <div className="mt-14">
            <StoryCarousel />
          </div>
        </div>
      </section>

      {/* ---------- 04 Why Nirvaan ---------- */}
      <section className="section-wrap py-20 sm:py-28">
        <SectionHead n="04" label="Why Nirvaan" title="Your trusted hygiene partner">
          We focus on hygienic cleaning, clear service steps, and a simple
          booking process customers can trust.
        </SectionHead>

        <div className="mt-14 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="bg-paper p-8 transition hover:bg-white">
              <item.icon size={22} strokeWidth={1.6} className="text-water" />
              <h3 className="mt-6 font-serif text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-ink/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- 05 Health ---------- */}
      <section className="border-t border-ink/10 bg-white py-20 sm:py-28">
        <div className="section-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
            <p className="label">05 — Health awareness</p>
            <h2 className="section-heading mt-5">How dirty water affects your ENT health</h2>
            <p className="section-subtitle">
              Unclean water is not just unsafe to drink — it can also affect
              your health through the steam you inhale or the water you use to
              wash your face.
            </p>
            <div className="mt-8 bg-paper p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-water">Prevention tip</p>
              <p className="mt-3 text-[15px] leading-7 text-ink/80">
                Regular, mechanized tank cleaning prevents microbial buildup that
                harms your ENT health. Protect your family — especially kids and
                elders — from silent exposure.
              </p>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {entIssues.map((item, index) => (
              <li key={item.title} className="grid gap-2 border-t border-ink/10 py-7 sm:grid-cols-[80px_1fr] sm:gap-6 last:border-b">
                <span className="font-mono text-xs tracking-[0.14em] text-ink/40">R—0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-7 text-ink/65">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="section-wrap mt-20">
          <div className="grid gap-px bg-ink/10 lg:grid-cols-3">
          {riskGroups.map((group) => (
            <div key={group.title} className="bg-white py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <h3 className="font-serif text-xl font-semibold">{group.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-ink/60">{group.intro}</p>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-ink/85">
                    <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-accent">
        <div className="section-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">Ready to clean your tank?</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-[3.4rem]">
              Contact us today for a free quote or immediate booking.
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            <Link href="/contact" className="primary-button py-4">
              Get a free quote <ArrowRight size={17} />
            </Link>
            <a href={`tel:${SITE.phone}`} className="secondary-button border-ink/40 py-4">
              <Phone size={16} /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
