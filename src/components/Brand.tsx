import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LOGO_URL } from "../data";

export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`${className} flex shrink-0 items-center justify-center rounded-full border-4 border-sky bg-white text-center font-extrabold leading-[0.8] text-azure`}
        aria-label="0 to 100 Learn Academy"
      >
        <span className="text-[0.65em]">0 TO 100</span>
      </div>
    );
  }

  return (
    <img
      src={LOGO_URL}
      alt="0 to 100 Learn Academy — by Jahnavi"
      className={`${className} shrink-0 rounded-full object-cover`}
      onError={() => setFailed(true)}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 42, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      <div
        className={`mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] ${
          align === "center" ? "justify-center" : ""
        } ${light ? "text-white/70" : "text-azure"}`}
      >
        <span className={`h-px w-8 ${light ? "bg-white/50" : "bg-sky"}`} />
        {eyebrow}
        {align === "center" && <span className={`h-px w-8 ${light ? "bg-white/50" : "bg-sky"}`} />}
      </div>
      <h2
        className={`text-balance text-[clamp(2.25rem,5.2vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-grey"}`}
        >
          {copy}
        </p>
      )}
    </motion.div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
