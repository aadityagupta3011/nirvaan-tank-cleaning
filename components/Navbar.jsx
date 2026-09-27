"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";
import SiteImage from "@/components/SiteImage";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-ink text-white/70 md:block">
        <div className="section-wrap flex h-9 items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
          <p>Mechanised water tank cleaning · Homes · Societies · Commercial</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition hover:text-white">
              <Mail size={13} /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-accent transition hover:text-white">
              <Phone size={13} /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-ink/10 bg-paper/95 backdrop-blur">
        <nav className="section-wrap flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
            <SiteImage name="logo" alt="Nirvaan Services logo" priority className="h-10 w-auto" />
            <span className="leading-none">
              <span className="block font-serif text-[21px] font-semibold tracking-[-0.01em] text-ink">
                Nirvaan
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                Tank Hygiene Services
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-[15px] font-medium transition ${
                    active ? "text-ink" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-[1px] h-[2px] bg-accent transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <Link href="/contact" className="primary-button hidden py-2.5 md:inline-flex">
            Book a service <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[3px] border border-ink/20 p-2.5 text-ink md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="h-[calc(100dvh-72px)] border-b border-ink/10 bg-paper px-4 pb-8 pt-2 md:hidden">
          <div className="flex flex-col">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={pathname === item.path ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-ink/10 py-5"
              >
                <span className="font-mono text-xs text-ink/40">0{i + 1}</span>
                <span className={`font-serif text-3xl font-semibold ${pathname === item.path ? "text-ink" : "text-ink/70"}`}>
                  {item.label}
                </span>
              </Link>
            ))}
            <a href={`tel:${SITE.phone}`} className="secondary-button mt-8">
              <Phone size={16} /> Call {SITE.phoneDisplay}
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="accent-button mt-3">
              Book a service <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
