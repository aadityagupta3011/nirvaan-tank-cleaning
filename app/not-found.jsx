import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="page-shell">
      <section className="section-wrap py-24 text-center sm:py-32">
        <p className="label">Error 404</p>
        <h1 className="section-heading mt-5">This page could not be found</h1>
        <p className="section-subtitle mx-auto">
          The link may be broken or the page may have moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="primary-button">
            Go home
          </Link>
          <Link href="/contact" className="secondary-button">
            Book a service
          </Link>
        </div>
      </section>
    </div>
  );
}
