import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, X } from "lucide-react";
import { SUPPORT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "../data";

export type LegalKind = "privacy" | "terms" | "refund";

const legalContent: Record<LegalKind, { title: string; intro: string; sections: { heading: string; body: string }[] }> = {
  privacy: {
    title: "Privacy at a glance",
    intro: "A clear explanation of how information is handled on this one-page website.",
    sections: [
      { heading: "Interactive tools", body: "The learning plan builder runs in your browser. Your answers are not sent to a server or stored by this website. If you choose “Send my plan”, those answers are placed in a WhatsApp message for you to review and send yourself." },
      { heading: "Booking details", body: "Information entered in the booking form stays in the page until you choose to continue on WhatsApp. Nothing is submitted automatically. Once you use WhatsApp or email, their own privacy terms also apply." },
      { heading: "Contact enquiries", body: "When you contact the academy, the details you provide are used to respond to your enquiry, discuss suitable learning options and arrange the service you request. For a correction or deletion request, email support with the relevant enquiry details." },
      { heading: "Third-party content", body: "The logo and web fonts are loaded from external providers, and outbound links include WhatsApp and YouTube. These services may receive standard technical information such as your IP address under their own policies." },
    ],
  },
  terms: {
    title: "Terms of use",
    intro: "The key points to understand before using this website or purchasing a learning service.",
    sections: [
      { heading: "Coaching and consultations", body: "Live coaching, the free 15-minute consultation and the 50-minute paid demo are separate options. Programme suitability, trainer availability, scheduling, fees and inclusions are confirmed directly with the academy before purchase." },
      { heading: "Self-paced e-book", body: "Mastering Professional Communication is a digital, self-paced product and is not a live coaching programme. The displayed offer is ₹315 against an original listed price of ₹999. Confirm current pricing, access and delivery details on WhatsApp before paying." },
      { heading: "Learning outcomes", body: "The academy provides instruction, practice and feedback. Individual progress varies with starting level, attendance, practice and consistency; this website does not guarantee a particular score, job outcome or timeframe." },
      { heading: "Acceptable use", body: "Website and e-book content is provided for personal learning. Do not copy, resell, redistribute or misrepresent the material. If any displayed information appears outdated, contact support so it can be clarified." },
    ],
  },
  refund: {
    title: "Refund & support policy",
    intro: "How to ask for help with a payment, digital access or a booked service.",
    sections: [
      { heading: "Before you pay", body: "Refund, cancellation and rescheduling eligibility can differ between live coaching, a paid demo and a digital e-book. Ask the academy to confirm the terms that apply to your specific purchase in writing before completing payment." },
      { heading: "Request a review", body: "For a duplicate payment, a digital access issue or another purchase concern, email support with your name, purchase date, payment reference and a short explanation. Requests are reviewed directly by the academy rather than through an automated promise on this page." },
      { heading: "Rescheduling live sessions", body: "Contact the team as early as possible if you cannot attend a confirmed session. The team will explain the available rescheduling options for your booking. A free consultation can also be rearranged through WhatsApp." },
      { heading: "Protect your information", body: "Never send passwords, card PINs or full banking credentials in a support request. A payment reference and the contact details used for the purchase are sufficient to begin an enquiry." },
    ],
  },
};

export default function LegalModal({ kind, onClose }: { kind: LegalKind | null; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!kind) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 80);
    const keydown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", keydown);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", keydown);
    };
  }, [kind, onClose]);

  return (
    <AnimatePresence>
      {kind && (
        <motion.div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center sm:p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="absolute inset-0 bg-charcoal/60 backdrop-blur-md" onClick={onClose} aria-label="Close policy" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-title"
            initial={reduceMotion ? false : { opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-[28px] bg-white p-6 shadow-2xl sm:rounded-[30px] sm:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-azure">0 to 100 Learn Academy</p><h2 id="legal-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-charcoal sm:text-4xl">{legalContent[kind].title}</h2></div>
              <button ref={closeRef} onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F5F6] transition hover:rotate-90 hover:bg-sky/15" aria-label="Close"><X className="h-4 w-4" /></button>
            </div>
            <p className="mt-4 text-sm leading-6 text-grey">{legalContent[kind].intro}</p>
            <div className="mt-8 space-y-7">
              {legalContent[kind].sections.map((section, index) => (
                <div key={section.heading} className="grid gap-2 border-t border-charcoal/10 pt-5 sm:grid-cols-[2rem_1fr] sm:gap-4">
                  <span className="text-[10px] font-bold text-azure">0{index + 1}</span>
                  <div><h3 className="text-sm font-semibold text-charcoal">{section.heading}</h3><p className="mt-2 text-xs leading-6 text-grey sm:text-sm">{section.body}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#F1F9FC] p-5">
              <p className="text-xs font-semibold text-charcoal">Need clarification?</p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs">
                <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2 font-medium text-azure hover:underline"><Mail className="h-3.5 w-3.5" />{SUPPORT_EMAIL}</a>
                <a href={whatsappLink(`Hello, I have a question about your ${kind === "refund" ? "refund and support policy" : kind === "terms" ? "terms" : "privacy information"}.`)} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium text-azure hover:underline">WhatsApp {WHATSAPP_DISPLAY}<ArrowUpRight className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
