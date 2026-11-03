import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, RotateCcw, Target } from "lucide-react";
import { challenges, goals, whatsappLink } from "../data";

export default function PlanBuilder({ onBook }: { onBook: (program: string) => void }) {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [goalId, setGoalId] = useState("");
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [comfort, setComfort] = useState(5);
  const [error, setError] = useState("");
  const goal = goals.find((item) => item.id === goalId) ?? goals[0];

  const level = useMemo(() => {
    if (comfort <= 3) return { name: "Foundation", copy: "Build a safe, consistent speaking base with close guidance." };
    if (comfort <= 7) return { name: "Momentum", copy: "Turn what you already know into faster, clearer responses." };
    return { name: "Refinement", copy: "Polish precision, tone and spontaneity for higher-stakes moments." };
  }, [comfort]);

  const toggleChallenge = (challenge: string) => {
    setError("");
    setSelectedChallenges((current) => {
      if (current.includes(challenge)) return current.filter((item) => item !== challenge);
      if (current.length >= 2) {
        setError("Choose up to two priorities so your first plan stays focused.");
        return current;
      }
      return [...current, challenge];
    });
  };

  const goNext = () => {
    if (step === 0 && !goalId) {
      setError("Choose the goal that matters most to you right now.");
      return;
    }
    if (step === 1 && selectedChallenges.length === 0) {
      setError("Choose at least one challenge to personalise your starting point.");
      return;
    }
    setError("");
    setStep((current) => Math.min(2, current + 1));
  };

  const reset = () => {
    setStep(0);
    setGoalId("");
    setSelectedChallenges([]);
    setComfort(5);
    setError("");
  };

  const planMessage = [
    "Hello 0 to 100 Learn Academy, I completed the learning plan builder on your website.",
    "",
    `Goal: ${goal.title}`,
    `Current speaking comfort: ${comfort}/10`,
    `Main challenges: ${selectedChallenges.join(", ")}`,
    `Suggested programme: ${goal.program}`,
    `Starting level indicated: ${level.name}`,
    "",
    "I would like to discuss this plan in a free 15-minute consultation.",
  ].join("\n");

  const animation = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: 28 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -28 },
      };

  return (
    <div className="overflow-hidden rounded-[28px] border border-charcoal/10 bg-white shadow-[0_30px_90px_rgba(36,148,201,0.09)] md:rounded-[36px]">
      <div className="flex items-center justify-between border-b border-charcoal/[0.08] px-6 py-5 md:px-9">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky/10 text-azure">
            <Target className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-charcoal">Find your starting point</p>
            <p className="text-[11px] text-grey">Two quick questions. One practical plan.</p>
          </div>
        </div>
        <span className="rounded-full bg-[#F3F6F7] px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-grey">
          {step < 2 ? `0${step + 1} / 02` : "YOUR PLAN"}
        </span>
      </div>
      <div className="h-1 bg-charcoal/[0.05]">
        <motion.div
          className="h-full origin-left bg-sky"
          animate={{ scaleX: (step + 1) / 3 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: "100%" }}
        />
      </div>

      <div className="min-h-[475px] p-6 sm:p-8 md:p-10">
        <AnimatePresence mode="wait" initial={false}>
          {step === 0 && (
            <motion.div key="goal" {...animation} transition={{ duration: 0.3 }}>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-azure">Question one</p>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-charcoal md:text-3xl">What brings you here?</h3>
              <p className="mt-2 text-sm text-grey">Pick the goal that would make the biggest difference right now.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {goals.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => { setGoalId(item.id); setError(""); }}
                    className={`group relative min-h-32 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      goalId === item.id
                        ? "border-sky bg-sky/[0.06] shadow-[0_10px_30px_rgba(60,180,230,0.08)]"
                        : "border-charcoal/10 hover:-translate-y-1 hover:border-sky/50"
                    }`}
                    aria-pressed={goalId === item.id}
                  >
                    <span className="mb-4 block text-[10px] font-bold tracking-[0.15em] text-grey">0{index + 1}</span>
                    <span className="block pr-6 text-base font-semibold text-charcoal">{item.title}</span>
                    <span className="mt-1.5 block text-xs leading-5 text-grey">{item.description}</span>
                    <span className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border transition ${goalId === item.id ? "border-sky bg-sky text-white" : "border-charcoal/15"}`}>
                      {goalId === item.id && <Check className="h-3 w-3" />}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="challenge" {...animation} transition={{ duration: 0.3 }}>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-azure">Question two</p>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-charcoal md:text-3xl">What gets in the way?</h3>
              <p className="mt-2 text-sm text-grey">Choose up to two. Your plan will focus on these first.</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {challenges.map((challenge) => {
                  const active = selectedChallenges.includes(challenge);
                  return (
                    <button
                      key={challenge}
                      onClick={() => toggleChallenge(challenge)}
                      aria-pressed={active}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium transition ${
                        active ? "border-sky bg-sky text-white" : "border-charcoal/15 text-charcoal hover:border-sky hover:text-azure"
                      }`}
                    >
                      {active && <Check className="h-3.5 w-3.5" />} {challenge}
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 rounded-2xl bg-[#F5F8F9] p-5">
                <div className="flex items-end justify-between gap-4">
                  <label htmlFor="comfort" className="text-sm font-semibold text-charcoal">How comfortable are you speaking English now?</label>
                  <span className="text-2xl font-semibold tracking-[-0.05em] text-azure">{comfort}<span className="text-sm text-grey">/10</span></span>
                </div>
                <input
                  id="comfort"
                  type="range"
                  min="1"
                  max="10"
                  value={comfort}
                  onChange={(event) => setComfort(Number(event.target.value))}
                  className="range-input mt-5 w-full"
                  style={{ "--range-progress": `${((comfort - 1) / 9) * 100}%` } as React.CSSProperties}
                />
                <div className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-wider text-grey">
                  <span>I hesitate often</span><span>I speak comfortably</span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="result" {...animation} transition={{ duration: 0.3 }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-azure">Your suggested path</p>
                  <h3 className="text-3xl font-semibold tracking-[-0.045em] text-charcoal md:text-4xl">{goal.program}</h3>
                </div>
                <span className="rounded-full border border-sky/30 bg-sky/[0.07] px-4 py-2 text-xs font-bold text-azure">{level.name} stage</span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-6 text-grey">{level.copy} Begin with {goal.firstStep}, then build from your trainer’s feedback.</p>
              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.8fr]">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-grey">Your first three priorities</p>
                  <ol className="space-y-3">
                    {goal.plan.map((item, index) => (
                      <li key={item} className="flex gap-3 text-sm leading-5 text-charcoal">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky/10 text-[10px] font-bold text-azure">{index + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-2xl bg-charcoal p-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Your first live session</p>
                  <p className="mt-3 text-lg font-medium leading-6">{goal.firstStep.charAt(0).toUpperCase() + goal.firstStep.slice(1)}</p>
                  <p className="mt-3 text-xs leading-5 text-white/60">Selected focus: {selectedChallenges.join(" + ")}</p>
                </div>
              </div>
              <p className="mt-5 text-[10px] leading-4 text-grey">This is a practical recommendation from your answers, not an automated language assessment. Your trainer will confirm your level with you.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {error && <p role="alert" className="mt-4 text-xs font-medium text-[#B64B4B]">{error}</p>}

        <div className="mt-7 flex items-center justify-between gap-3 border-t border-charcoal/[0.08] pt-5">
          {step === 0 ? (
            <span className="text-[11px] text-grey">No signup. No data stored.</span>
          ) : (
            <button onClick={() => step === 2 ? reset() : setStep(step - 1)} className="flex items-center gap-2 text-xs font-semibold text-grey transition hover:text-azure">
              {step === 2 ? <RotateCcw className="h-3.5 w-3.5" /> : <ArrowLeft className="h-3.5 w-3.5" />}
              {step === 2 ? "Start again" : "Back"}
            </button>
          )}
          {step < 2 ? (
            <button onClick={goNext} className="button-primary px-5 py-3 text-xs">
              {step === 0 ? "Next question" : "Build my plan"} <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <div className="flex flex-wrap justify-end gap-2">
              <button onClick={() => onBook(goal.program)} className="button-secondary px-4 py-3 text-xs">Book free call</button>
              <a href={whatsappLink(planMessage)} target="_blank" rel="noreferrer" className="button-primary px-4 py-3 text-xs">
                Send my plan <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
