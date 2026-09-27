import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SITE, SERVICES } from "@/lib/site";
import SiteImage from "@/components/SiteImage";

const companyLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: SITE.social.facebook, Icon: FaFacebookF },
  { label: "Instagram", href: SITE.social.instagram, Icon: FaInstagram },
  { label: "LinkedIn", href: SITE.social.linkedin, Icon: FaLinkedinIn },
].filter((link) => link.href);

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="section-wrap grid gap-12 py-16 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <SiteImage name="logo" alt="Nirvaan Services logo" className="h-10 w-auto" />
            <p className="font-serif text-2xl font-semibold">{SITE.name}</p>
          </div>
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/60">
            Nirvaan accepts challenges to serve cleaning solutions for
            individuals, corporations, industries, and governments with a
            hygiene-first approach.
          </p>
          <div className="mt-8 space-y-2">
            <a href={`tel:${SITE.phone}`} className="block font-serif text-3xl font-semibold text-accent transition hover:text-white">
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="block text-[15px] text-white/70 transition hover:text-white">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="label-light">Services</p>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-[15px] text-white/75 transition hover:text-white">
                  {s.title}
                  {SITE.city ? ` in ${SITE.city}` : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label-light">Company</p>
          <ul className="mt-5 space-y-3">
            {companyLinks.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="text-[15px] text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {socialLinks.length > 0 && (
            <div className="mt-8 flex gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-white/15 text-white/70 transition hover:border-accent hover:text-accent"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-wrap flex flex-col gap-3 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}
          </p>
          <a
            href="https://www.linkedin.com/in/aaditya3011/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-white"
          >
            Managed by Aaditya Gupta <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
