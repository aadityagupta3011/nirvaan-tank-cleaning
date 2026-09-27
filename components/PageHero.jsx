import Link from "next/link";

// Shared banner for inner pages: visible breadcrumb (matches the BreadcrumbList schema),
// mono label, serif H1 and intro, on the dark blueprint grid.
export default function PageHero({ crumb, eyebrow, title, children }) {
  return (
    <section className="blueprint relative overflow-hidden bg-ink text-white">
      <div className="section-wrap relative py-16 sm:py-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span aria-current="page" className="text-white/80">
            {crumb}
          </span>
        </nav>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label-light">{eyebrow}</p>
            <h1 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-6xl">
              {title}
            </h1>
          </div>
          {children && (
            <div className="border-l-2 border-accent pl-6 text-[17px] leading-8 text-white/70 lg:col-span-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
