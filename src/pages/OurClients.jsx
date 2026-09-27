import React from "react";

const clients = [
  "Sunrise Apartments",
  "Green Valley School",
  "TechCorp Pvt Ltd",
  "CarePlus Hospital",
];

const OurClients = () => {
  return (
    <div className="page-shell">
      <section className="section-wrap py-10 sm:py-14 reveal-up">
        <div className="section-card overflow-hidden px-6 py-10 sm:px-8 md:px-10 lg:px-14 lg:py-14">
          <span className="info-pill">Client Trust</span>
          <h1 className="section-heading mt-4">
            Trusted by clients across industries
          </h1>
          <p className="section-subtitle">
            From homes to hospitals, our expert team has cleaned tanks for
            clients who trust our quality and consistency.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-[22px] border border-slate-200 bg-white px-6 py-5 text-lg font-semibold text-slate-800 shadow-sm"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
