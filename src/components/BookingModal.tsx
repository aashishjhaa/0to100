import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Check, Clock3, Mail, MessageCircle, X } from "lucide-react";
import { SUPPORT_EMAIL, programs, whatsappLink } from "../data";

export type BookingType = "consultation" | "demo";

export default function BookingModal({
  open,
  onClose,
  initialType = "consultation",
  initialProgram = "",
}: {
  open: boolean;
  onClose: () => void;
  initialType?: BookingType;
  initialProgram?: string;
}) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState("");
  const [type, setType] = useState<BookingType>(initialType);
  const [program, setProgram] = useState(initialProgram);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setType(initialType);
    setProgram(initialProgram);
    setError("");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 80);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, initialType, initialProgram, onClose]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim()) {
      setError("Please add your name so Jahnavi’s team knows how to address you.");
      return;
    }
    if (!program) {
      setError("Please choose the programme you are interested in.");
      return;
    }
    const sessionName = type === "consultation" ? "Free 15-minute consultation" : "50-minute paid demo session";
    const lines = [
      "Hello 0 to 100 Learn Academy, I would like to book a session.",
      "",
      `Name: ${name.trim()}`,
      `Session: ${sessionName}`,
      `Programme: ${program}`,
      date ? `Preferred date: ${date}` : "Preferred date: Flexible — please suggest",
      time ? `Preferred time: ${time}` : "Preferred time: Flexible — please suggest",
      note.trim() ? `My goal or challenge: ${note.trim()}` : "",
      "",
      "Please confirm availability and the next steps. Thank you.",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-5"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close booking dialog"
            className="absolute inset-0 cursor-default bg-charcoal/55 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={reduceMotion ? false : { opacity: 0, y: 70, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[94svh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] bg-white shadow-2xl sm:rounded-[32px]"
          >
            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
              <div className="relative overflow-hidden bg-azure p-7 text-white md:p-9">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20" />
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/20" />
                <MessageCircle className="mb-8 h-7 w-7" strokeWidth={1.6} />
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">Your first step</p>
                <h2 id="booking-title" className="text-3xl font-semibold leading-tight tracking-[-0.04em]">
                  Let’s talk about where you want to go.
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/75">
                  Tell us what you need. We’ll prepare a WhatsApp message so you can confirm the details directly with the academy.
                </p>
                <div className="mt-8 space-y-3 text-sm">
                  {["No account needed", "Flexible scheduling", "Personal trainer guidance"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-10 hidden items-center gap-2 text-xs text-white/70 underline-offset-4 hover:text-white hover:underline md:flex"
                >
                  <Mail className="h-3.5 w-3.5" /> Prefer email? {SUPPORT_EMAIL}
                </a>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-9">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-azure">Session details</p>
                    <p className="mt-1 text-xs text-grey">Fields marked * are required</p>
                  </div>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3F5F6] text-charcoal transition hover:rotate-90 hover:bg-sky/15"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <fieldset className="mb-5">
                  <legend className="mb-2.5 text-xs font-semibold text-charcoal">Choose a session</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "consultation", title: "Free consultation", meta: "15 minutes" },
                      { id: "demo", title: "Paid demo", meta: "50 minutes" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setType(option.id as BookingType)}
                        className={`rounded-2xl border p-3 text-left transition ${
                          type === option.id
                            ? "border-sky bg-sky/[0.07] ring-1 ring-sky"
                            : "border-charcoal/10 hover:border-sky/50"
                        }`}
                        aria-pressed={type === option.id}
                      >
                        <span className="block text-xs font-semibold text-charcoal sm:text-sm">{option.title}</span>
                        <span className="mt-1 block text-[11px] text-grey">{option.meta}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="mb-5 block">
                  <span className="mb-2 block text-xs font-semibold text-charcoal">Your name *</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="How should we address you?"
                    className="field"
                    autoComplete="name"
                  />
                </label>

                <label className="mb-5 block">
                  <span className="mb-2 block text-xs font-semibold text-charcoal">Programme *</span>
                  <select value={program} onChange={(event) => setProgram(event.target.value)} className="field">
                    <option value="">Select your learning goal</option>
                    {programs.map((item) => (
                      <option key={item.id} value={item.title}>{item.title}</option>
                    ))}
                    <option value="Not sure — help me choose">Not sure — help me choose</option>
                  </select>
                </label>

                <div className="mb-5 grid grid-cols-2 gap-3">
                  <label>
                    <span className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-charcoal">
                      <CalendarDays className="h-3.5 w-3.5 text-azure" /> Preferred date
                    </span>
                    <input type="date" min={today} value={date} onChange={(event) => setDate(event.target.value)} className="field px-3" />
                  </label>
                  <label>
                    <span className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-charcoal">
                      <Clock3 className="h-3.5 w-3.5 text-azure" /> Preferred time
                    </span>
                    <select value={time} onChange={(event) => setTime(event.target.value)} className="field px-3">
                      <option value="">Flexible</option>
                      <option>Morning (8 AM–11 AM)</option>
                      <option>Afternoon (12 PM–4 PM)</option>
                      <option>Evening (5 PM–9 PM)</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-charcoal">What would you like to improve?</span>
                  <textarea
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    placeholder="For example: I hesitate during client meetings…"
                    rows={3}
                    className="field resize-none"
                  />
                </label>

                {error && <p role="alert" className="mt-3 text-xs font-medium text-[#B64B4B]">{error}</p>}

                <button type="submit" className="button-primary mt-6 w-full justify-between">
                  Continue on WhatsApp <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-[10px] leading-4 text-grey">
                  Nothing is sent automatically. WhatsApp opens with your message; you choose when to send it.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
