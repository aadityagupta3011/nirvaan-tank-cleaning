import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const linkClassName = ({ isActive }) =>
  [
    "rounded-full px-4 py-2 text-sm font-semibold transition duration-300",
    isActive
      ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
      : "text-slate-200 hover:bg-white/10 hover:text-white",
  ].join(" ");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-2 shadow-lg shadow-cyan-950/40">
            <img
              src="/images/logo.png"
              alt="Nirvaan Services"
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
          </div>
          <div>
            <p className="text-lg font-bold tracking-wide text-white sm:text-xl">
              Nirvaan Services
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Tank Cleaning Experts
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClassName}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:8690777089"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
          >
            <Phone size={16} />
            8690777089
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Book Service
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-6 pt-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkClassName}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="tel:8690777089"
              className="rounded-full border border-white/10 px-4 py-3 text-center text-sm font-semibold text-slate-100"
            >
              Call 8690777089
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-slate-950"
              onClick={() => setOpen(false)}
            >
              Book Service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
