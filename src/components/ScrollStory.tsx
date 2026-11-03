import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowDown, AudioLines, Check, MessageSquareText, Mic2 } from "lucide-react";
import { roadmap } from "../data";
import { SectionHeading } from "./Brand";

const backgrounds = ["#FFFFFF", "#EAF8FE", "#3CB4E6", "#343A3D"];

function PracticeVisual({ active }: { active: number }) {
  if (active === 0) {
    return (
      <div>
        <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-azure"><Mic2 className="h-4 w-4" /> Baseline conversation</span>
          <span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-sky" /><i className="h-2 w-2 rounded-full bg-charcoal/10" /><i className="h-2 w-2 rounded-full bg-charcoal/10" /></span>
        </div>
        <p className="py-8 font-serif text-[clamp(1.7rem,3vw,2.7rem)] italic leading-[1.15] tracking-[-0.03em] text-charcoal md:py-12">
          “I know what I want to say… until the meeting starts.”
        </p>
        <div className="grid grid-cols-3 gap-2">
          {["Hesitation", "Word choice", "Structure"].map((item, index) => (
            <div key={item} className="rounded-xl bg-[#F2F7F9] p-3 text-center">
              <span className="mx-auto mb-2 block h-1 w-8 rounded-full bg-sky" style={{ opacity: 1 - index * 0.2 }} />
              <span className="text-[10px] font-semibold text-charcoal sm:text-xs">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] text-grey">A practice scenario used to identify speaking priorities.</p>
      </div>
    );
  }

  if (active === 1) {
    return (
      <div>
        <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-azure"><MessageSquareText className="h-4 w-4" /> Language upgrade</span>
          <span className="text-[10px] font-semibold text-grey">PRACTICE EXAMPLE</span>
        </div>
        <div className="py-7 md:py-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-grey">Before</p>
          <p className="mt-2 text-lg text-charcoal/55 line-through decoration-charcoal/20 md:text-xl">I want to tell about the project.</p>
          <div className="my-6 h-px bg-gradient-to-r from-sky to-transparent" />
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-azure">After guided practice</p>
          <p className="mt-3 text-[clamp(1.55rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.04em] text-charcoal">Let me walk you through the project status.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Clear intent", "Professional tone", "Natural phrasing"].map((item) => <span key={item} className="rounded-full bg-sky/10 px-3 py-2 text-[10px] font-semibold text-azure">{item}</span>)}
        </div>
      </div>
    );
  }

  if (active === 2) {
    return (
      <div>
        <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-azure"><AudioLines className="h-4 w-4" /> Live role-play</span>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-grey"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky" /> PRACTICE</span>
        </div>
        <div className="space-y-5 py-7 md:py-9">
          <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#F0F5F7] p-4">
            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-grey">Trainer · follow-up</p>
            <p className="text-sm leading-6 text-charcoal md:text-base">What changed since yesterday’s update?</p>
          </div>
          <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-azure p-4 text-white">
            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">You · unscripted response</p>
            <p className="text-sm leading-6 md:text-base">We’ve resolved the main issue, so I’d like to confirm our next milestone.</p>
          </div>
          <div className="flex items-center gap-2 pl-1 text-[10px] font-medium text-azure"><span className="h-px w-6 bg-sky" /> Clear answer + confident next step</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-azure">Your communication toolkit</span>
        <span className="rounded-full bg-sky/10 px-3 py-1 text-[9px] font-bold text-azure">READY TO USE</span>
      </div>
      <div className="py-6 md:py-8">
        {[
          ["Lead with the point", "Make your message easy to follow."],
          ["Pause with purpose", "Give your ideas room to land."],
          ["Invite the next question", "Keep the conversation moving."],
        ].map(([title, copy], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + index * 0.12 }}
            className="flex items-center gap-4 border-b border-charcoal/[0.08] py-4 last:border-0"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky text-white"><Check className="h-4 w-4" /></span>
            <div><p className="text-sm font-semibold text-charcoal md:text-base">{title}</p><p className="mt-0.5 text-xs text-grey">{copy}</p></div>
          </motion.div>
        ))}
      </div>
      <p className="rounded-xl bg-[#F0F8FB] p-3 text-center text-[10px] leading-4 text-azure">Real communication is the destination—not a perfect script.</p>
    </div>
  );
}

export default function ScrollStory() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(3, Math.floor(latest * 4));
    setActive((current) => current === next ? current : next);
  });

  const goToPhase = (index: number) => {
    if (!ref.current) return;
    const top = ref.current.getBoundingClientRect().top + window.scrollY;
    const distance = ref.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + distance * (index / 4 + 0.03), behavior: reduceMotion ? "auto" : "smooth" });
  };

  if (reduceMotion) {
    return (
      <section className="section-pad bg-[#F3F8FA]" id="method">
        <div className="container-wide">
          <SectionHeading eyebrow="The 0 to 100 method" title={<>Progress you can <span className="font-serif font-normal italic text-azure">practise.</span></>} copy="Four connected stages turn personal feedback into communication you can use beyond the session." />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {roadmap.map((phase) => (
              <div key={phase.step} className="rounded-3xl bg-white p-7">
                <div className="flex items-center justify-between"><span className="text-xs font-bold text-azure">{phase.range}</span><span className="text-5xl font-semibold tracking-[-0.06em] text-charcoal/10">{phase.number}</span></div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-charcoal">{phase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-grey">{phase.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const light = active >= 2;

  return (
    <section ref={ref} className="relative h-[400svh]" id="method" aria-label="The four stages of the 0 to 100 learning method">
      <motion.div
        className="sticky top-0 h-[100svh] overflow-hidden"
        animate={{ backgroundColor: backgrounds[active], color: light ? "#FFFFFF" : "#4A4A4A" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <motion.div
          className={`pointer-events-none absolute -right-40 top-1/2 h-[75vw] w-[75vw] -translate-y-1/2 rounded-full border ${light ? "border-white/20" : "border-azure/10"}`}
          animate={{ rotate: active * 45, scale: 1 + active * 0.08 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="container-wide relative flex h-full flex-col py-6 sm:py-8 lg:py-10">
          <div className={`flex items-center justify-between border-b pb-4 ${light ? "border-white/20" : "border-charcoal/10"}`}>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className={`h-px w-7 ${light ? "bg-white/60" : "bg-sky"}`} /> The 0 to 100 method
            </div>
            <span className="text-[10px] font-bold tracking-[0.16em] opacity-60">SCROLL TO PROGRESS</span>
          </div>

          <div className="grid min-h-0 flex-1 items-center gap-6 py-5 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <div className="relative min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 35, clipPath: "inset(0 0 35% 0)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, y: -25, clipPath: "inset(35% 0 0 0)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-azure"}`}>{roadmap[active].step} · {roadmap[active].label}</span>
                    <span className={`h-px w-8 ${light ? "bg-white/40" : "bg-sky/40"}`} />
                    <span className="text-[10px] font-semibold opacity-50">{roadmap[active].range}</span>
                  </div>
                  <div className="flex items-start gap-4 sm:gap-7">
                    <span className="text-[clamp(6rem,13vw,11rem)] font-semibold leading-[0.78] tracking-[-0.09em]">{roadmap[active].number}</span>
                    <div className="relative mt-1 hidden h-20 w-20 shrink-0 sm:block">
                      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
                        <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
                        <motion.circle cx="40" cy="40" r="35" fill="none" stroke={light ? "#FFFFFF" : "#3CB4E6"} strokeWidth="3" strokeLinecap="round" style={{ pathLength: smoothProgress }} />
                      </svg>
                      <ArrowDown className="absolute inset-0 m-auto h-4 w-4 opacity-60" />
                    </div>
                  </div>
                  <h2 className="mt-6 max-w-xl text-[clamp(1.9rem,4vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.055em] lg:mt-8">{roadmap[active].title}</h2>
                  <p className={`mt-4 max-w-lg text-sm leading-6 md:text-base md:leading-7 ${light ? "text-white/75" : "text-grey"}`}>{roadmap[active].copy}</p>
                  <p className={`mt-4 hidden max-w-lg border-l pl-4 text-xs leading-5 md:block ${light ? "border-white/30 text-white/60" : "border-sky text-grey"}`}>{roadmap[active].note}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="story-visual relative min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.94, rotateY: -5, clipPath: "inset(10% 0 10% 0 round 28px)" }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, clipPath: "inset(0% 0 0% 0 round 28px)" }}
                  exit={{ opacity: 0, scale: 1.03, clipPath: "inset(0 0 100% 0 round 28px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[28px] bg-white p-5 text-charcoal shadow-[0_35px_100px_rgba(30,70,85,0.16)] sm:p-8 lg:p-10"
                >
                  <PracticeVisual active={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className={`grid grid-cols-4 border-t pt-4 ${light ? "border-white/20" : "border-charcoal/10"}`}>
            {roadmap.map((phase, index) => (
              <button key={phase.step} onClick={() => goToPhase(index)} className="group relative py-2 text-left" aria-current={active === index ? "step" : undefined}>
                <span className={`absolute left-0 right-3 top-[-17px] h-0.5 origin-left transition-transform duration-500 sm:right-6 ${light ? "bg-white" : "bg-sky"} ${active >= index ? "scale-x-100" : "scale-x-0"}`} />
                <span className={`block text-[9px] font-bold tracking-[0.12em] transition-opacity sm:text-[10px] ${active === index ? "opacity-100" : "opacity-40"}`}>{phase.step}</span>
                <span className={`mt-1 hidden text-xs font-semibold transition-opacity sm:block ${active === index ? "opacity-100" : "opacity-40"}`}>{phase.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
