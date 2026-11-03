import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, MessageSquareText, UserRound } from "lucide-react";
import { programs } from "../data";
import { Reveal, SectionHeading } from "./Brand";

export default function Programs({ onBook }: { onBook: (program: string) => void }) {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const program = programs[selected];

  return (
    <section id="programs" className="section-pad overflow-hidden bg-white">
      <div className="container-wide">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]">
          <SectionHeading
            eyebrow="Personal coaching, six directions"
            title={<>One goal. One trainer. <span className="font-serif font-normal italic text-azure">Your way forward.</span></>}
          />
          <Reveal delay={0.12}>
            <p className="max-w-lg text-base leading-7 text-grey lg:ml-auto">
              No crowded batch. No generic script. Choose a focus and shape every live session around the conversations you need to handle.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 md:mt-16" delay={0.1}>
          <div className="grid overflow-hidden rounded-[28px] border border-charcoal/10 bg-white lg:grid-cols-[0.78fr_1.22fr] lg:rounded-[36px]">
            <div className="border-b border-charcoal/10 p-3 sm:p-5 lg:border-b-0 lg:border-r">
              <div className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
                {programs.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(index)}
                    className={`group relative flex min-w-max items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors lg:w-full lg:px-5 lg:py-4 ${
                      selected === index ? "bg-charcoal text-white" : "text-charcoal hover:bg-sky/[0.06]"
                    }`}
                    aria-pressed={selected === index}
                  >
                    <span className={`text-[9px] font-bold tracking-[0.12em] ${selected === index ? "text-sky" : "text-grey"}`}>{item.number}</span>
                    <span className="text-xs font-semibold sm:text-sm">{item.title}</span>
                    <ArrowRight className={`ml-auto hidden h-4 w-4 transition-all lg:block ${selected === index ? "translate-x-0 text-sky opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"}`} />
                  </button>
                ))}
              </div>
              <div className="mt-4 hidden px-5 pb-2 lg:block">
                <p className="text-[10px] leading-5 text-grey">Not sure which track fits? Choose “Customised 1-on-1” and we’ll help you decide on a free call.</p>
              </div>
            </div>

            <div className="relative min-h-[580px] overflow-hidden bg-[#F0F9FD] p-6 sm:p-9 md:p-11 lg:min-h-[610px]">
              <div className="pointer-events-none absolute -right-20 -top-24 text-[16rem] font-semibold leading-none tracking-[-0.1em] text-azure/[0.045]">{program.number}</div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={program.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 24, clipPath: "inset(0 0 15% 0)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-azure">{program.eyebrow}</p>
                  <h3 className="mt-4 max-w-xl text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal">{program.title}</h3>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-grey md:text-base">{program.description}</p>

                  <div className="mt-7 flex items-start gap-3 rounded-2xl border border-azure/10 bg-white/65 p-4">
                    <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
                    <div><p className="text-[9px] font-bold uppercase tracking-[0.15em] text-grey">Best for</p><p className="mt-1 text-xs leading-5 text-charcoal sm:text-sm">{program.bestFor}</p></div>
                  </div>

                  <div className="mt-7 grid gap-7 md:grid-cols-2">
                    <div>
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.17em] text-charcoal">What you’ll work on</p>
                      <ul className="space-y-3">
                        {program.outcomes.map((outcome, index) => (
                          <motion.li
                            key={outcome}
                            initial={reduceMotion ? false : { opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.12 + index * 0.07 }}
                            className="flex gap-2.5 text-xs leading-5 text-charcoal sm:text-sm"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky/15 text-azure"><Check className="h-3 w-3" /></span>
                            {outcome}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-charcoal p-5 text-white">
                      <MessageSquareText className="mb-4 h-5 w-5 text-sky" strokeWidth={1.6} />
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">Inside a session</p>
                      <p className="mt-2 text-xs leading-6 text-white/80 sm:text-sm">{program.session}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-azure/10 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill) => <span key={skill} className="rounded-full border border-azure/15 px-3 py-1.5 text-[9px] font-semibold text-azure">{skill}</span>)}
                    </div>
                    <button onClick={() => onBook(program.title)} className="button-primary px-5 py-3 text-xs">Discuss this programme <ArrowUpRight className="h-4 w-4" /></button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
