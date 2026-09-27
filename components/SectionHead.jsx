// Numbered section header: "01 — Services" label + serif H2 on the left, intro on the right.
export default function SectionHead({ n, label, title, children, light = false }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <p className={light ? "label-light" : "label"}>
          {n && <>{n} — </>}
          {label}
        </p>
        <h2
          className={`mt-5 font-serif text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[2.9rem] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {children && (
        <div className={`text-[17px] leading-8 lg:col-span-5 lg:pt-10 ${light ? "text-white/65" : "text-ink/65"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
