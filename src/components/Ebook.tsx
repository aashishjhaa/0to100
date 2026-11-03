import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, Check, ChevronDown, FileText, Gift, Languages, Mail, MessageSquareText, PenLine } from "lucide-react";
import { ebookChapters, ebookTopics, whatsappLink } from "../data";
import { Logo, Reveal, SectionHeading } from "./Brand";

const contents = [
  { icon: FileText, title: "Detailed explanations", copy: "Every topic broken down clearly" },
  { icon: Languages, title: "English + Hindi", copy: "Curated for Indian Hindi speakers" },
  { icon: MessageSquareText, title: "1,000+ sentences", copy: "Professional sentences to use" },
  { icon: BookOpen, title: "1,000+ words", copy: "A practical workplace vocabulary" },
  { icon: PenLine, title: "100+ role-plays", copy: "Practise real-life situations" },
  { icon: Mail, title: "100+ email templates", copy: "Start writing with a structure" },
];

export default function Ebook() {
  const [tab, setTab] = useState<"chapters" | "topics">("chapters");
  const [openChapter, setOpenChapter] = useState(0);
  const reduceMotion = useReducedMotion();

  const orderMessage = [
    "Hello 0 to 100 Learn Academy, I am interested in the Mastering Professional Communication e-book (Professional English combo) at the displayed offer price of ₹315.",
    "Please share the access, payment and delivery details.",
  ].join("\n");

  return (
    <section id="ebook" className="section-pad relative overflow-hidden bg-charcoal text-white">
      <div className="pointer-events-none absolute -left-56 top-20 h-[38rem] w-[38rem] rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute -left-40 top-36 h-[30rem] w-[30rem] rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-azure/10 to-transparent" />
      <div className="container-wide relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/10 blur-3xl" />
            <motion.div
              whileHover={reduceMotion ? undefined : { rotateY: -7, rotateX: 2, y: -8 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="book-shadow relative mx-auto aspect-[0.76] w-[76%] overflow-hidden rounded-r-[18px] rounded-l-[5px] bg-gradient-to-br from-sky via-[#35A9DB] to-azure p-7 sm:p-9"
              style={{ transformPerspective: 1000 }}
            >
              <div className="absolute inset-y-0 left-0 w-2.5 bg-black/10" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/20" />
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/20" />
              <Logo className="h-14 w-14 border-2 border-white/50" />
              <p className="mt-10 text-[9px] font-bold uppercase tracking-[0.25em] text-white/70">The professional English combo</p>
              <h3 className="mt-4 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">Mastering<br />Professional<br /><span className="font-serif font-normal italic">Communication</span></h3>
              <div className="absolute bottom-8 left-7 right-7 sm:left-9">
                <div className="mb-4 h-px w-full bg-white/30" />
                <div className="flex items-end justify-between gap-3"><p className="text-[10px] font-semibold uppercase tracking-[0.12em]">English + Hindi<br /><span className="font-normal text-white/60">Practical guide</span></p><p className="font-serif text-xl italic">by Jahnavi</p></div>
              </div>
            </motion.div>
            <div className="absolute -bottom-5 right-1 rounded-2xl border border-white/10 bg-[#3D3D3D] px-5 py-4 shadow-2xl backdrop-blur sm:right-4">
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/50">E-book offer</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">₹315 <span className="text-xs font-normal text-white/40 line-through">₹999</span></p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              light
              eyebrow="Prefer to learn at your own pace?"
              title={<>Change the game of your <span className="font-serif font-normal italic text-sky">professional communication.</span></>}
              copy="A practical digital guide for Hindi-speaking learners who want the right words, sentences and templates for professional situations."
            />
            <Reveal delay={0.1}>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Working professionals", "Interns", "Small business owners", "Job seekers", "Freelancers"].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 px-3 py-2 text-[10px] font-medium text-white/70">{item}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={whatsappLink(orderMessage)} target="_blank" rel="noreferrer" className="button-primary">Order the e-book <ArrowUpRight className="h-4 w-4" /></a>
                <div><p className="text-lg font-semibold">Only ₹315 <span className="ml-1 text-xs font-normal text-white/40 line-through">₹999</span></p><p className="mt-1 text-[10px] text-white/45">Ordering is completed directly on WhatsApp.</p></div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 border-t border-white/10 pt-12" delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((item) => (
              <div key={item.title} className="group flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-sky/40 hover:bg-white/[0.03]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky/10 text-sky transition group-hover:bg-sky group-hover:text-white"><item.icon className="h-4 w-4" /></span>
                <div><p className="text-sm font-semibold">{item.title}</p><p className="mt-1 text-[10px] text-white/45">{item.copy}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky/10 text-sky"><Check className="h-4 w-4" /></span><div><p className="text-sm font-semibold">100+ practice questions</p><p className="mt-1 text-[10px] text-white/45">Turn reading into active practice</p></div></div>
            <div className="flex items-center gap-4 rounded-2xl border border-sky/20 bg-sky/[0.06] p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky/10 text-sky"><Gift className="h-4 w-4" /></span><div><p className="text-sm font-semibold">3 exclusive bonuses included</p><p className="mt-1 text-[10px] text-white/45">Listed bonus values: ₹999 + ₹999 + ₹499</p></div></div>
          </div>
        </Reveal>

        <Reveal className="mt-16" delay={0.08}>
          <div className="mb-7 flex items-center justify-between gap-5">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Take a look inside</h3>
            <div className="flex rounded-full border border-white/10 p-1">
              {(["chapters", "topics"] as const).map((item) => (
                <button key={item} onClick={() => setTab(item)} className={`relative rounded-full px-4 py-2 text-[10px] font-semibold capitalize transition sm:px-5 ${tab === item ? "text-charcoal" : "text-white/55 hover:text-white"}`}>
                  {tab === item && <motion.span layoutId="ebook-tab" className="absolute inset-0 rounded-full bg-white" />}
                  <span className="relative">{item}</span>
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            {tab === "chapters" ? (
              <motion.div key="chapters" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="grid gap-3 md:grid-cols-2">
                {ebookChapters.map((chapter, index) => (
                  <div key={chapter.title} className="rounded-2xl border border-white/10 bg-white/[0.02]">
                    <button onClick={() => setOpenChapter(openChapter === index ? -1 : index)} className="flex w-full items-center gap-4 p-5 text-left" aria-expanded={openChapter === index}>
                      <span className="text-[10px] font-bold text-sky">0{index + 1}</span><span className="flex-1 text-sm font-medium">{chapter.title}</span><ChevronDown className={`h-4 w-4 text-white/40 transition-transform ${openChapter === index ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openChapter === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="px-5 pb-5 pl-12 text-xs leading-6 text-white/50">{chapter.detail}</p></motion.div>}
                    </AnimatePresence>
                  </div>
                ))}
                <p className="text-xs leading-6 text-white/40 md:col-span-2">The e-book index also includes 9+ additional chapters.</p>
              </motion.div>
            ) : (
              <motion.div key="topics" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {ebookTopics.map((topic, index) => <div key={topic} className="flex items-center gap-3 border-b border-white/[0.07] py-3.5 text-xs text-white/65"><span className="text-[9px] font-bold text-sky">{String(index + 1).padStart(2, "0")}</span>{topic}</div>)}
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
