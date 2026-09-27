import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { CheckCircle2, PhoneCall, ShieldCheck } from "lucide-react";

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
};

const serviceOptions = [
  "Domestic Tank Cleaning",
  "Commercial Tank Cleaning",
  "Apartment Tank Cleaning",
  "Others",
];

const Contact = () => {
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

    setError(false);
    setIsSubmitting(true);
    setSubmitState("idle");

    const templateParams = {
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      address: formData.address,
      lane: formData.lane,
      plot: formData.plot,
      street: formData.street,
      note: formData.note,
      services: formData.services.join(", "),
    };

    try {
      await emailjs.send(
        "service_0l2syxb",
        "template_c9xd5t9",
        templateParams,
        "-Ia5YhweVwPKlfu1Z",
      );

      setFormData(initialFormState);
      setSubmitState("success");
    } catch (submitError) {
      console.error("EmailJS Error:", submitError);
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-shell">
      <section className="section-wrap py-10 sm:py-14 reveal-up">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-card overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <span className="info-pill">Book Your Service</span>
            <h1 className="section-heading mt-4">
              Clean tanks, healthy homes, smoother booking
            </h1>
            <p className="section-subtitle">
              Reach out for professional tank cleaning services. We ensure
              hygiene, safety, and clean water for your family or business.
            </p>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white">
              <img
                src="/images/contact-form-photo.png"
                alt="Tank cleaning contact visual"
                className="h-72 w-full object-cover"
              />
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Professional Process",
                  text: "Mechanized cleaning with a hygiene-first approach.",
                },
                {
                  icon: PhoneCall,
                  title: "Fast Response",
                  text: "Share your details and we can follow up quickly.",
                },
                {
                  icon: CheckCircle2,
                  title: "Simple Booking",
                  text: "Clear form layout for mobile and desktop users.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-[22px] border border-slate-200 bg-white p-5"
                >
                  <item.icon className="mt-1 text-cyan-700" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="section-card relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-teal-500" />
            <h2 className="text-3xl font-bold text-slate-900">Book Your Service</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Name and contact number are required. Everything else helps us
              understand the job better.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              animate={shake ? { x: [-10, 10, -8, 8, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="mt-8 grid grid-cols-1 gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-400"
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number*"
                  value={formData.contact}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-400"
                  required
                />
              </div>

              {error && (
                <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  Name and Contact Number are required.
                </p>
              )}

              {submitState === "success" && (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Your request has been submitted successfully.
                </p>
              )}

              {submitState === "error" && (
                <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                  Something went wrong while submitting. Please try again.
                </p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-400"
              />

              <div className="grid gap-4 sm:grid-cols-3">
                <input
                  type="text"
                  name="lane"
                  placeholder="Lane"
                  value={formData.lane}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-400"
                />
                <input
                  type="text"
                  name="plot"
                  placeholder="Plot No"
                  value={formData.plot}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-400"
                />
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  value={formData.street}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-400"
                />
              </div>

              <textarea
                name="note"
                placeholder="Additional Note"
                value={formData.note}
                onChange={handleChange}
                rows={4}
                className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-400"
              />

              <fieldset className="rounded-[24px] border border-slate-200 bg-white p-5">
                <legend className="px-2 text-sm font-semibold text-slate-700">
                  Select Service
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 px-4 py-3 text-sm text-slate-700"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleChange}
                        className="h-4 w-4 accent-cyan-600"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </fieldset>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                className={`mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition ${
                  isSubmitting
                    ? "cursor-not-allowed bg-slate-300 text-slate-600"
                    : "bg-slate-950 text-white hover:bg-cyan-500 hover:text-slate-950"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.button>
            </motion.form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
