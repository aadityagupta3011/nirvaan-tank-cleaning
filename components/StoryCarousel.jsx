"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ChevronDown, ChevronUp, Pause, Play } from "lucide-react";
import SiteImage from "@/components/SiteImage";

const slides = [
  {
    image: "unsafe-tank-water",
    title: "Unsafe water, every single day",
    text: "An uncleaned tank collects sludge, algae and bacteria. The water looks fine — until it isn't.",
  },
  {
    image: "contaminated-water-illness",
    title: "The whole family feels it",
    text: "Stomach upsets, skin rashes, ear and throat infections — children and elders are hit first.",
  },
  {
    image: "booking-tank-cleaning",
    title: "One call to Nirvaan",
    text: "Share your details by phone or the booking form. We confirm a slot that suits you.",
  },
  {
    image: "nirvaan-tank-cleaning-deal",
    title: "Visit confirmed",
    text: "Our team confirms the visit and walks you through the 6-step cleaning process.",
  },
  {
    image: "nirvaan-cleaning-water-tank",
    title: "Mechanised deep cleaning",
    text: "Dewatering, sludge removal, high-pressure jets, vacuuming, anti-bacterial spray and UV treatment.",
  },
  {
    image: "happy-customer-clean-tank",
    title: "Peace of mind, restored",
    text: "A disinfected tank and a family that can trust its water again.",
  },
  {
    image: "safe-clean-water",
    title: "Safe water, back in every tap",
    text: "Clean water for drinking, cooking and bathing. We recommend a clean every six months.",
  },
];

const AUTOPLAY_MS = 4500;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (cb) => {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

// Vertical carousel: images slide up/down inside a fixed frame, with a vertical progress
// rail. Autoplays (paused on hover/focus, off for reduced motion); arrow keys, swipe and
// the up/down buttons all work. Every slide's text is in the HTML for SEO.
export default function StoryCarousel() {
  const [index, setIndex] = useState(0);
  // null = no user choice yet: autoplay unless the visitor prefers reduced motion.
  const [userPlaying, setUserPlaying] = useState(null);
  const [hovered, setHovered] = useState(false);
  const touchY = useRef(null);
  const count = slides.length;

  const go = useCallback((next) => setIndex((next + count) % count), [count]);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
  const playing = userPlaying ?? !reducedMotion;

  useEffect(() => {
    if (!playing || hovered) return;
    const id = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, playing, hovered, go]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  const onTouchEnd = (e) => {
    if (touchY.current == null) return;
    const dy = touchY.current - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 40) go(index + (dy > 0 ? 1 : -1));
    touchY.current = null;
  };

  const slide = slides[index];
  const autoplaying = playing && !hovered;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="How Nirvaan turns unsafe tank water into safe water"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="grid items-center gap-8 outline-none lg:grid-cols-[1fr_minmax(0,480px)_auto] lg:gap-14"
    >
      {/* Text column: all captions rendered, only the active one visible */}
      <div className="relative order-2 min-h-[210px] lg:order-1">
        {slides.map((s, i) => (
          <div
            key={s.title}
            aria-hidden={i !== index}
            className={`transition-all duration-500 ${
              i === index ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute inset-x-0 top-0 translate-y-4 opacity-0"
            }`}
          >
            <p className="font-mono text-xs tabular-nums tracking-[0.14em] text-ink/50">
              <span className="text-ink">{String(i + 1).padStart(2, "0")}</span> / {String(count).padStart(2, "0")}
            </p>
            <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[2.6rem]">{s.title}</h3>
            <p className="mt-5 max-w-md text-[17px] leading-8 text-ink/70">{s.text}</p>
          </div>
        ))}
        <p className="sr-only" aria-live={autoplaying ? "off" : "polite"}>
          Slide {index + 1} of {count}: {slide.title}
        </p>
      </div>

      {/* Vertical image track */}
      <div
        className="relative order-1 aspect-square overflow-hidden bg-white ring-1 ring-ink/10 lg:order-2"
        onTouchStart={(e) => (touchY.current = e.touches[0].clientY)}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateY(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={s.image} className="h-full w-full" aria-hidden={i !== index}>
              <SiteImage
                name={s.image}
                alt={s.title}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* autoplay progress — re-keyed per slide so it restarts from zero */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-ink/10">
          {autoplaying && (
            <div
              key={index}
              className="h-full origin-left bg-accent"
              style={{ animation: `storyProgress ${AUTOPLAY_MS}ms linear forwards` }}
            />
          )}
        </div>
      </div>

      {/* Vertical rail + controls */}
      <div className="order-3 flex items-center justify-center gap-4 lg:flex-col">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-ink/20 text-ink transition hover:border-ink hover:bg-ink hover:text-white"
        >
          <ChevronUp size={18} className="-rotate-90 lg:rotate-0" />
        </button>

        <div className="flex gap-1 lg:flex-col" role="group" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-current={i === index ? "true" : undefined}
              aria-label={`Slide ${i + 1}: ${s.title}`}
              onClick={() => go(i)}
              className="group px-0.5 py-3 lg:px-3 lg:py-0.5"
            >
              <span
                className={`block transition-all duration-300 ${
                  i === index
                    ? "h-[3px] w-8 bg-ink lg:h-8 lg:w-[3px]"
                    : "h-[3px] w-4 bg-ink/20 group-hover:bg-ink/40 lg:h-4 lg:w-[3px]"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-ink/20 text-ink transition hover:border-ink hover:bg-ink hover:text-white"
        >
          <ChevronDown size={18} className="-rotate-90 lg:rotate-0" />
        </button>

        <button
          type="button"
          onClick={() => setUserPlaying(!playing)}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-ink text-white transition hover:bg-accent hover:text-ink"
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
    </div>
  );
}
