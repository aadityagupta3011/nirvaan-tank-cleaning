import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  BadgeCheck,
  Droplets,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";
import PhotoSlider from "../components/imageSlider";

const storyImages = [
  "/images/girl-drink-bad-water.png",
  "/images/girl-get's-ill.png",
  "/images/mother-call-nirvaan.png",
  "/images/nirvaan-cleans-tank.png",
  "/images/mother-thank-nirvaan.png",
  "/images/girl-drink-safe-water.png",
];

const stats = [
  { label: "Tanks Cleaned", end: 1500 },
  { label: "Happy Clients", end: 1300 },
  { label: "Years Experience", end: 10 },
  { label: "Service Areas", end: 8 },
];

const processSteps = [
  {
    title: "Mechanised Dewatering",
    image: "/images/mechanised-dewatering.png",
    description:
      "Using powerful suction pumps, we remove all the stored water from the tank in a controlled and hygienic manner without manual contact.",
  },
  {
    title: "Sludge Removal",
    image: "/images/sludge-removal.png",
    description:
      "We remove settled sludge and dirt particles at the bottom of the tank using scooping tools and suction machines.",
  },
  {
    title: "High Pressure Cleaning",
    image: "/images/high-pressure.png",
    description:
      "Inner walls of the tank are cleaned with high-pressure water jets to remove algae, biofilm, and stains thoroughly.",
  },
  {
    title: "Vacuum Cleaning",
    image: "/images/vaccum-cleaning.png",
    description:
      "Residual dirty water and leftover particles are vacuumed out from corners and grooves for a spotless result.",
  },
  {
    title: "Anti-Bacterial Spray",
    image: "/images/anti-bacterial-spray.png",
    description:
      "We spray FDA-approved antibacterial solution to disinfect the internal surface of the tank to kill bacteria and germs.",
  },
  {
    title: "UV Radiation",
    image: "/images/uv-rays-cleaning.png",
    description:
      "Finally, we expose the tank to UV light to eliminate any remaining bacteria or microorganisms without chemicals.",
  },
];

const whyChooseUs = [
  "Advanced Mechanized Cleaning",
  "Health & Hygiene First",
  "Trained Professionals",
  "Eco-Friendly Approach",
  "Time-Efficient & Hassle-Free",
  "Transparent & Affordable Pricing",
  "Your Trusted Hygiene Partner",
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

const waterRisks = [
  "Health Hazards",
  "Bad Taste & Odor",
  "Algae & Sludge Build-up",
  "Clogged Pipes & Appliances",
  "Pest Infestation",
  "Shorter Tank Lifespan",
];

const skinProblems = [
  "Rashes & Irritation",
  "Fungal Infections",
  "Allergic Reactions",
  "Dryness & Flaky Skin",
  "Acne & Folliculitis",
  "Worsening Existing Conditions",
];

const plumbingProblems = [
  "Sediment Buildup in Pipes",
  "Damaged Faucets & Fixtures",
  "Pipe Corrosion",
  "Foul Water Odors",
];

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <div className="page-shell">
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 py-12">
        <div className="float-in space-y-8">
          
          {/* pill */}
          <span className="inline-block rounded-full bg-cyan-100 px-4 py-1 text-sm font-medium text-cyan-800">
            Professional Tank Cleaning
          </span>

          {/* heading + text */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Clean water starts with a clean tank.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Nirvaan Services provides mechanized water tank cleaning for
              homes, apartments, and commercial spaces so your water stays
              cleaner, safer, and more hygienic.
            </p>
          </div>

          {/* buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-slate-950 px-6 py-3 text-white transition hover:bg-slate-800"
            >
              Book Now
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-slate-300 px-6 py-3 text-slate-900 transition hover:bg-slate-100"
            >
              Explore Services
            </Link>
          </div>

          {/* features */}
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Safe Process",
                text: "Mechanized cleaning designed for hygiene and safety.",
              },
              {
                icon: Droplets,
                title: "Clean Water Focus",
                text: "Built to reduce sludge, bacteria, and contamination risk.",
              },
              {
                icon: BadgeCheck,
                title: "Reliable Service",
                text: "Simple booking flow and customer-friendly support.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm"
              >
                <item.icon className="mb-3 text-cyan-700" size={20} />
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

      <section ref={ref} className="section-wrap py-4 pb-8 sm:pb-12">
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
        <div className="section-card overflow-hidden px-6 py-8 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="/images/homepage.png"
                alt="Nirvaan homepage service visual"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="info-pill">Why Cleaning Matters</span>
              <h2 className="section-heading mt-4">From dirty tank to safe water</h2>
              <p className="section-subtitle">
                A simple visual explanation helps customers quickly understand
                how dirty tanks affect daily life and how professional cleaning
                solves the problem.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {storyImages.slice(0, 4).map((image, index) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-[22px] border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <img
                      src={image}
                      alt={`Service story ${index + 1}`}
                      className="h-40 w-full rounded-[16px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-8 sm:py-12 reveal-up">
        <div className="mb-10">
          <span className="info-pill">Health Awareness</span>
          <h2 className="section-heading mt-4">
            How dirty water affects your ENT health
          </h2>
          <p className="section-subtitle">
            Unclean water is not just unsafe to drink - it can also affect your
            health through the steam you inhale or the water you use to wash
            your face.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {entIssues.map((item, index) => (
            <article
              key={item.title}
              className={`feature-card ${index === 4 ? "md:col-span-2 xl:col-span-3" : ""}`}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-rose-500">
                Risk {index + 1}
              </p>
              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="section-card mt-8 flex items-start gap-4 px-6 py-5 sm:px-8">
          <Sparkles className="mt-1 text-rose-500" size={20} />
          <p className="text-base leading-7 text-slate-700">
            <strong>Prevention Tip:</strong> Regular, mechanized tank cleaning
            prevents microbial buildup that harms your ENT health. Protect your
            family - especially kids and elders - from silent exposure.
          </p>
        </div>
      </section>

      <section className="section-wrap py-8 sm:py-12 reveal-up">
        <div className="mb-10">
          <span className="info-pill">6-Step Process</span>
          <h2 className="section-heading mt-4">Our steps of cleaning</h2>
          <p className="section-subtitle">
            We follow a 6-step professional cleaning process to ensure your
            water tank is fully disinfected, safe, and hygienic for use.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <article key={step.title} className="feature-card">
              <div className="flex flex-col gap-5 sm:flex-row">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-36 w-full rounded-[20px] object-cover sm:w-44"
                />
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
                    Step {index + 1}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-card mt-8 px-6 py-5 sm:px-8">
          <p className="text-base leading-7 text-slate-700">
            <strong>100% Safe & Hygienic:</strong> Our step-by-step cleaning
            process ensures your water is pure, safe, and ready for daily use.
          </p>
        </div>
      </section>

      <section className="section-wrap py-8 sm:py-12 reveal-up">
        <div className="mb-10">
          <span className="info-pill">Why Nirvaan</span>
          <h2 className="section-heading mt-4">Why choose us?</h2>
          <p className="section-subtitle">
            We focus on hygienic cleaning, clear service steps, and a simple
            booking process customers can trust.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((title, index) => (
            <div
              key={title}
              className={`feature-card ${index === 6 ? "md:col-span-2 xl:col-span-3" : ""}`}
            >
              <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-900">
                Point {index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8 sm:py-12 reveal-up">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="section-card px-6 py-8 sm:px-8">
            <h2 className="text-3xl font-bold text-slate-900">
              About Nirvaan Tank Cleaning
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We provide safe and effective water tank cleaning services using
              modern equipment and eco-friendly methods.
            </p>
            <div className="mt-6 flex">
              <Link to="/about" className="secondary-button">
                Learn More
              </Link>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-2xl font-semibold text-slate-900">
              Nirvaan: Our Services
            </h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
              <li>Professional water tank cleaning</li>
              <li>Removal of algae and dirt layers</li>
              <li>Disinfection using safe chemicals</li>
              <li>Residential, commercial, & industrial tanks</li>
              <li>Eco-friendly & water-saving process</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-2xl font-semibold text-slate-900">
              Nirvaan: Core Focus
            </h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
              <li>Thorough & hygienic tank cleaning</li>
              <li>Timely & professional service</li>
              <li>Customer satisfaction is our priority</li>
              <li>Use of modern tools & trained staff</li>
              <li>Zero water wastage during process</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-wrap py-8 sm:py-12 reveal-up">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="section-card px-6 py-8 sm:px-8 lg:col-span-1">
            <div className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-rose-700">
              Dirty Tank Risks
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Why regular cleaning matters
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dirty tanks do more than affect taste - they can create long-term
              health, plumbing, and maintenance issues for families and
              buildings.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            {waterRisks.map((title, index) => (
              <div key={title} className="feature-card">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-rose-500">
                  Issue {index + 1}
                </p>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-8 sm:py-12">
        <div className="mb-10">
          <span className="info-pill">Health & Plumbing</span>
          <h2 className="section-heading mt-4">
            Common skin and plumbing problems from unclean water tanks
          </h2>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          <div className="section-card px-6 py-8 sm:px-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Common Skin Problems from Unclean Water Tanks
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Contaminated water does not just make you sick internally - it
              also affects your skin every time you bathe or wash.
            </p>
            <div className="mt-6 grid gap-4">
              {skinProblems.map((title, index) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-slate-200 bg-white p-5"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
                    Skin Risk {index + 1}
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card px-6 py-8 sm:px-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              How Dirty Water Tanks Cause Plumbing Problems
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Think your plumbing issues are due to old pipes? Dirty tanks can
              silently damage your water system from the inside out.
            </p>
            <div className="mt-6 grid gap-4">
              {plumbingProblems.map((title, index) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-slate-200 bg-white p-5"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
                    Plumbing Risk {index + 1}
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[20px] border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm leading-7 text-cyan-900">
              <strong>Tip:</strong> Mechanized tank cleaning ensures no sludge
              or bacteria is left behind - helping protect both your plumbing
              system and your family.
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-10 sm:py-14 reveal-up">
        <div className="overflow-hidden rounded-[32px] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.28)] sm:px-8 md:px-10 lg:px-14 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                <Waves size={16} />
                Ready to clean your tank?
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Contact us today for a free quote or immediate booking.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Quick booking, clean service presentation, and a better mobile
                experience for your customers.
              </p>
            </div>

            <Link to="/contact" className="primary-button bg-cyan-400 text-slate-950 hover:bg-white">
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
