"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Tanks cleaned", end: 1500 },
  { label: "Happy clients", end: 1300 },
  { label: "Years experience", end: 10 },
  { label: "Service areas", end: 8 },
];

// Real numbers are in the static HTML (readable by crawlers); the count-up plays on scroll.
export default function StatsCounter({ tone = "dark" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });
  const dark = tone === "dark";

  return (
    <section ref={ref} aria-label="Nirvaan in numbers" className={dark ? "bg-ink text-white" : "text-ink"}>
      <div className="section-wrap">
        {/* 1px gaps over a tinted background draw the hairline dividers */}
        <div className={`grid grid-cols-2 gap-px lg:grid-cols-4 ${dark ? "bg-white/10" : "bg-ink/10"}`}>
          {stats.map((item) => (
            <div key={item.label} className={`px-5 py-9 sm:px-8 sm:py-12 ${dark ? "bg-ink" : "bg-paper"}`}>
              <p className="font-serif text-5xl font-semibold tabular-nums tracking-[-0.03em] sm:text-6xl">
                {inView ? <CountUp end={item.end} duration={1.6} /> : item.end}
                <span className="text-accent">+</span>
              </p>
              <p className={`mt-3 font-mono text-[11px] uppercase tracking-[0.16em] ${dark ? "text-white/55" : "text-ink/55"}`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
