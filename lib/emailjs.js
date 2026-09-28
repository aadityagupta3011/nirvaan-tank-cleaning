import emailjs from "@emailjs/browser";

// EmailJS keys are meant to be public (they ship to the browser); security comes from the
// "Allowed origins" list in the EmailJS dashboard. Override per environment with NEXT_PUBLIC_* vars.
export const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_yqrvdl5",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_jwnpxjy",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ZhNtMjfgdFuvN8sow",
};

/**
 * Sends the booking request. The template in the EmailJS dashboard must use these
 * variables: {{name}} {{contact}} {{email}} {{address}} {{lane}} {{plot}} {{street}}
 * {{note}} {{services}} — and set the template's Reply-To field to {{reply_to}}.
 */
export function sendBooking(params) {
  return emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, params, {
    publicKey: EMAILJS.publicKey,
    blockHeadless: true, // drop submissions from headless browsers (bots)
    limitRate: { id: "booking-form", throttle: 30000 }, // max one send per 30s per browser
  });
}
