import SiteImage from "@/components/SiteImage";

// Two columns of photos drifting vertically in opposite directions (pure CSS, no JS).
// Each column's list is rendered twice so translateY(-50%) loops seamlessly (spacing is
// per-card margin, not flex gap, so both halves are exactly equal height); the copy is
// aria-hidden so screen readers and crawlers see each image once. Pauses on hover and
// stops entirely for users who prefer reduced motion.
const columns = [
  {
    direction: "up",
    duration: "42s",
    items: [
      { name: "nirvaan-team-tank-cleaning", alt: "Technician cleaning the inside of a water tank", tag: "Deep cleaning" },
      { name: "apartment-society-tank-cleaning", alt: "Apartment building with rooftop water tanks", tag: "Societies" },
      { name: "water-storage-tanks", alt: "Row of overhead water storage tanks", tag: "Overhead tanks" },
    ],
  },
  {
    direction: "down",
    duration: "48s",
    items: [
      { name: "technician-cleaning-overhead-tank", alt: "Technician in protective gear cleaning an overhead tank", tag: "Trained team" },
      { name: "commercial-water-tank-cleaning", alt: "Large commercial steel water tank", tag: "Commercial tanks" },
      { name: "nirvaan-cleaning-water-tank", alt: "Nirvaan technician running a mechanised tank cleaning machine", tag: "Mechanised" },
    ],
  },
];

function Card({ item, fig, hidden }) {
  return (
    <figure className="mb-3 bg-white p-2 ring-1 ring-ink/10">
      <SiteImage
        name={item.name}
        alt={hidden ? "" : item.alt}
        sizes="(min-width: 1024px) 260px, 45vw"
        className="aspect-[4/5] w-full object-cover"
      />
      <figcaption className="flex items-center justify-between gap-3 whitespace-nowrap px-1 pb-0.5 pt-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/60">
        <span className="shrink-0">Fig. {String(fig).padStart(2, "0")}</span>
        <span className="truncate text-ink">{item.tag}</span>
      </figcaption>
    </figure>
  );
}

export default function VerticalMarquee() {
  return (
    <div className="marquee-mask relative grid h-[440px] grid-cols-2 gap-3 overflow-hidden sm:h-[600px] lg:h-[680px]">
      {columns.map((col, i) => (
        <div key={i} className={i === 1 ? "pt-20" : ""}>
          <div
            className={`marquee-track ${col.direction === "up" ? "animate-marquee-up" : "animate-marquee-down"}`}
            style={{ "--marquee-duration": col.duration }}
          >
            {col.items.map((item, j) => (
              <Card key={item.name} item={item} fig={i * col.items.length + j + 1} />
            ))}
            <div aria-hidden="true">
              {col.items.map((item, j) => (
                <Card key={`${item.name}-copy`} item={item} fig={i * col.items.length + j + 1} hidden />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
