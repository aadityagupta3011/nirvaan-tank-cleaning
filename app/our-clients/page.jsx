import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";

// noindex until these are real, approved client names (the current list looks like placeholders).
export const metadata = pageMetadata({
  title: "Our Clients",
  description: "Homes, schools, offices and hospitals that trust Nirvaan Services for water tank cleaning.",
  path: "/our-clients",
  noindex: true,
});

const clients = [
  "Sunrise Apartments",
  "Green Valley School",
  "TechCorp Pvt Ltd",
  "CarePlus Hospital",
];

const OurClients = () => {
  return (
    <div className="page-shell">
      <PageHero crumb="Our Clients" eyebrow="Client trust" title="Trusted by clients across industries">
        From homes to hospitals, our expert team has cleaned tanks for clients
        who trust our quality and consistency.
      </PageHero>
      <section className="section-wrap py-14 sm:py-20">
        <div>
          <div className="grid gap-5 md:grid-cols-2">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-paper px-6 py-8 font-serif text-2xl font-semibold"
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
