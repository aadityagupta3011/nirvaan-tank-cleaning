import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Domestic Tank Cleaning",
    desc: "Hygienic cleaning for underground & overhead water tanks in homes, apartments, and societies.",
    image: "/images/domastic-tank.png",
  },
  {
    title: "Commercial Tank Cleaning",
    desc: "Group tank cleaning plans for societies to ensure all residents receive clean and safe water.",
    image: "/images/commercial-tank.png",
  },
  {
    title: "Apartment Tank Cleaning",
    desc: "Quick-response cleaning services during urgent situations like contamination or flooding.",
    image: "/images/apartment-photo.png",
  },
];

const Services = () => {
  return (
    <div className="page-shell">
      <section className="section-wrap py-10 sm:py-14 reveal-up">
        <div className="section-card overflow-hidden px-6 py-10 sm:px-8 md:px-10 lg:px-14 lg:py-14">
          <span className="info-pill">Our Services</span>
          <h1 className="section-heading mt-4">
            Professional solutions for residential and commercial tank cleaning
          </h1>
          <p className="section-subtitle">
            Clear service information for residential and commercial customers,
            with a cleaner layout and easier mobile browsing.
          </p>
        </div>
      </section>

      <section className="section-wrap py-2 pb-12 sm:pb-16 reveal-up">
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-7">
                <h2 className="text-3xl font-bold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.desc}
                </p>
                <div className="mt-6">
                  <Link to="/contact" className="primary-button">
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
