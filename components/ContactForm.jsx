"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendBooking } from "@/lib/emailjs";
import { CheckCircle2, PhoneCall, ShieldCheck } from "lucide-react";
import SiteImage from "@/components/SiteImage";
import { SITE, SERVICES } from "@/lib/site";

const initialFormState = {
  name: "",
  contact: "",
  email: "",
  address: "",
  lane: "",
  plot: "",
  street: "",
  note: "",
  services: [],
  website: "", // honeypot — hidden from people, bots fill it in
};

const serviceOptions = [...SERVICES.map((s) => s.title), "Others"];

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState("idle");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((item) => item !== value),
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim()) {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    // Honeypot tripped: pretend success so the bot moves on, but send nothing.
    if (formData.website) {
      setFormData(initialFormState);
      setSubmitState("success");
      return;
    }

    setError(false);
    setIsSubmitting(true);
    setSubmitState("idle");

    // Optional fields get a placeholder so the booking email never shows blank rows.
    const orNA = (value) => value.trim() || "Not provided";
    const templateParams = {
      name: formData.name.trim(),
      contact: formData.contact.trim(),
      email: orNA(formData.email),
      address: orNA(formData.address),
      lane: orNA(formData.lane),
      plot: orNA(formData.plot),
      street: orNA(formData.street),
      note: formData.note.trim() || "No additional note",
      services: formData.services.join(", ") || "None selected",
      reply_to: formData.email.trim(), // raw address for the template's Reply-To field
    };

    try {
      await sendBooking(templateParams);
      console.log("Email Successfully sent");

      setFormData(initialFormState);
      setSubmitState("success");
    } catch (submitError) {
      // EmailJS rejects with { status, text } — log both so the real reason is visible.
      console.error(`EmailJS Error ${submitError?.status ?? ""}: ${submitError?.text ?? submitError?.message ?? submitError}`);
      setSubmitState(submitError?.status === 429 ? "throttled" : "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-wrap py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Direct contact */}
        <aside className="lg:col-span-5">
          <p className="label">Direct line</p>
          <a
            href={`tel:${SITE.phone}`}
            className="mt-4 block font-serif text-4xl font-semibold tracking-[-0.02em] transition hover:text-water sm:text-5xl"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 inline-block break-all text-[17px] text-ink/75 underline decoration-accent decoration-2 underline-offset-4 transition hover:text-ink"
          >
            {SITE.email}
          </a>

          <p className="mt-8 max-w-md text-[17px] leading-8 text-ink/70">
            Reach out for professional tank cleaning services. We ensure
            hygiene, safety, and clean water for your family or business.
          </p>

          <dl className="mt-10 border-t border-ink/10">
            {[
              { icon: ShieldCheck, title: "Professional Process", text: "Mechanized cleaning with a hygiene-first approach." },
              { icon: PhoneCall, title: "Fast Response", text: "Share your details and we can follow up quickly." },
              { icon: CheckCircle2, title: "Simple Booking", text: "Just your name and number — we take care of the rest." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 border-b border-ink/10 py-5">
                <item.icon className="mt-0.5 shrink-0 text-water" size={20} strokeWidth={1.6} />
                <div>
                  <dt className="font-semibold">{item.title}</dt>
                  <dd className="mt-1 text-[15px] leading-6 text-ink/65">{item.text}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10 hidden bg-white p-2 ring-1 ring-ink/10 lg:block">
            <SiteImage
              name="book-tank-cleaning"
              alt="Customer booking a water tank cleaning service"
              sizes="40vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </aside>

        {/* Booking form */}
        <div className="border-t-4 border-accent bg-white p-6 ring-1 ring-ink/10 sm:p-10 lg:col-span-7">
          <p className="label">Booking request</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Book your service</h2>
          <p className="mt-3 text-[15px] leading-7 text-ink/60">
            Name and contact number are required. Everything else helps us
            understand the job better.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            animate={shake ? { x: [-10, 10, -8, 8, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="mt-8 grid gap-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" required>
                <input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} className="field" required />
              </Field>
              <Field label="Contact number" required>
                <input type="tel" name="contact" autoComplete="tel" value={formData.contact} onChange={handleChange} className="field" required />
              </Field>
            </div>

            {error && (
              <p role="alert" className="border-l-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800">
                Name and Contact Number are required.
              </p>
            )}

            <Field label="Email">
              <input type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} className="field" />
            </Field>

            <Field label="Address">
              <input type="text" name="address" autoComplete="street-address" value={formData.address} onChange={handleChange} className="field" />
            </Field>

            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Lane">
                <input type="text" name="lane" value={formData.lane} onChange={handleChange} className="field" />
              </Field>
              <Field label="Plot no.">
                <input type="text" name="plot" value={formData.plot} onChange={handleChange} className="field" />
              </Field>
              <Field label="Street">
                <input type="text" name="street" value={formData.street} onChange={handleChange} className="field" />
              </Field>
            </div>

            <fieldset>
              <legend className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">Service required</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {serviceOptions.map((service) => {
                  const checked = formData.services.includes(service);
                  return (
                    <label
                      key={service}
                      className={`flex cursor-pointer items-center gap-3 rounded-[3px] border px-4 py-3 text-[15px] transition ${
                        checked ? "border-ink bg-ink text-white" : "border-ink/20 hover:border-ink/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={checked}
                        onChange={handleChange}
                        className="h-4 w-4 accent-accent"
                      />
                      {service}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Honeypot: off-screen and skipped by keyboard/screen readers */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
              </label>
            </div>

            <Field label="Additional note">
              <textarea name="note" value={formData.note} onChange={handleChange} rows={4} className="field resize-none" />
            </Field>

            {submitState === "success" && (
              <p role="status" className="border-l-2 border-emerald-600 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                Your request has been submitted successfully.
              </p>
            )}
            {submitState === "throttled" && (
              <p role="alert" className="border-l-2 border-amber-600 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                We already received a request from you a moment ago. Please wait 30 seconds, or call {SITE.phoneDisplay}.
              </p>
            )}
            {submitState === "error" && (
              <p role="alert" className="border-l-2 border-amber-600 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                Something went wrong while submitting. Please try again or call {SITE.phoneDisplay}.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`accent-button w-full py-4 text-base ${isSubmitting ? "cursor-not-allowed opacity-60" : ""}`}
            >
              {isSubmitting ? "Submitting…" : "Submit booking request"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default ContactForm;
