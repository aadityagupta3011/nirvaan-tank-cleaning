import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

const quickLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Nirvaan Services logo"
              className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 p-2"
            />
            <div>
              <h3 className="text-xl font-bold">Nirvaan Services</h3>
              <p className="text-sm text-slate-400">
                Professional mechanized water tank cleaning
              </p>
            </div>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-300">
            Nirvaan accepts challenges to serve cleaning solutions for
            individuals, corporations, industries, and governments with a
            hygiene-first approach.
          </p>

          <div className="space-y-3 text-sm text-slate-300">
            <a
              href="mailto:sales.nirvanservices@gmail.com"
              className="flex items-center gap-3 transition hover:text-cyan-300"
            >
              <FaEnvelope />
              sales.nirvanservices@gmail.com
            </a>
            <a
              href="tel:8690777089"
              className="flex items-center gap-3 transition hover:text-cyan-300"
            >
              <FaPhone />
              8690777089
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
              Core Service
            </h4>
            <p className="text-sm leading-7 text-slate-300">
              Mechanised water tank cleaning for homes, apartments, and
              commercial properties.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:bg-cyan-400 hover:text-slate-950"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:bg-cyan-400 hover:text-slate-950"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/aaditya3011/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:bg-cyan-400 hover:text-slate-950"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-5 text-center text-sm text-slate-400 lg:px-8">
        &copy; {new Date().getFullYear()} Nirvaan Tank Cleaning Services.
        Managed by{" "}
        <a
          href="https://www.linkedin.com/in/aaditya3011/"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 transition hover:text-cyan-200"
        >
          Aaditya Gupta
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
