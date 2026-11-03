import { useCallback, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  GraduationCap,
  Mail,
  Menu,
  MessageCircle,
  MessageSquareText,
  Play,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { Logo, Reveal, SectionHeading } from "./components/Brand";
import BookingModal, { type BookingType } from "./components/BookingModal";
import Programs from "./components/Programs";
import ScrollStory from "./components/ScrollStory";
import PlanBuilder from "./components/PlanBuilder";
import Ebook from "./components/Ebook";
import LegalModal, { type LegalKind } from "./components/LegalModal";
import {
  SUPPORT_EMAIL,
  WHATSAPP_DISPLAY,
  YOUTUBE_URL,
  faqs,
  whatsappLink,
} from "./data";

const navItems = [
  { label: "Programmes", href: "#programs" },
  { label: "Our method", href: "#method" },
  { label: "E-book", href: "#ebook" },
  { label: "About", href: "#about" },
];

const marqueeItems = [
  "Business English",
  "Customised sessions",
  "IELTS",
  "English communication",
  "Interview guidance",
  "Real-life conversation",
  "Fluency",
  "Confidence",
  "Vocabulary",
  "Voice modulation",
];

function Header({ onBook }: { onBook: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 30));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-charcoal text-white">
        <div className="container-wide flex h-8 items-center justify-between gap-4 text-[9px] font-medium tracking-[0.04em] sm:text-[10px]">
          <p className="truncate text-white/75">Your next confident conversation starts here.</p>
          <button onClick={onBook} className="flex shrink-0 items-center gap-1.5 font-semibold text-sky transition hover:text-white">
            Free 15-minute consultation <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className={`border-b transition-all duration-300 ${scrolled || menuOpen ? "border-charcoal/[0.07] bg-white/95 shadow-[0_8px_35px_rgba(50,80,90,0.06)] backdrop-blur-xl" : "border-transparent bg-white/80 backdrop-blur-md"}`}>
        <nav className="container-wide flex h-[72px] items-center justify-between" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3" aria-label="0 to 100 Learn Academy home" onClick={() => setMenuOpen(false)}>
            <Logo className="h-11 w-11" />
            <span className="leading-none">
              <span className="block text-[13px] font-extrabold tracking-[-0.03em] text-azure">0 TO 100</span>
              <span className="mt-1 block text-[8px] font-bold tracking-[0.15em] text-charcoal">LEARN ACADEMY</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative py-2 text-[11px] font-semibold text-charcoal transition hover:text-azure">
                {item.label}<span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-sky transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onBook} className="button-primary hidden px-5 py-2.5 text-[11px] sm:inline-flex">Book a free call <ArrowUpRight className="h-3.5 w-3.5" /></button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 text-charcoal lg:hidden" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-charcoal/[0.07] lg:hidden">
              <div className="container-wide py-5">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between border-b border-charcoal/[0.07] py-4 text-sm font-semibold text-charcoal last:border-0"
                  >
                    {item.label}<ArrowRight className="h-4 w-4 text-azure" />
                  </motion.a>
                ))}
                <button onClick={() => { setMenuOpen(false); onBook(); }} className="button-primary mt-4 w-full sm:hidden">Book a free call <ArrowUpRight className="h-4 w-4" /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 210]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.68]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  const lineVariants = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-white pb-14 pt-32 sm:pt-36">
      <motion.div className="pointer-events-none absolute inset-0" style={reduceMotion ? undefined : { y: visualY }}>
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "linear-gradient(rgba(36,148,201,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(36,148,201,.07) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="soft-pulse absolute -right-40 top-10 h-[44rem] w-[44rem] rounded-full bg-sky/10 blur-[100px]" />
        <div className="absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-azure/[0.06] blur-[80px]" />
        <span className="text-stroke absolute -right-8 bottom-0 select-none text-[clamp(8rem,23vw,24rem)] font-extrabold leading-none tracking-[-0.09em]">100</span>
      </motion.div>

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6">
        <motion.div style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }} className="relative z-10">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-azure">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-sky opacity-50" /><span className="relative h-2 w-2 rounded-full bg-sky" /></span>
            We build · Online 1-on-1 coaching
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.13, delayChildren: 0.1 }}
            className="text-[clamp(3.7rem,7.3vw,7rem)] font-semibold leading-[0.85] tracking-[-0.072em] text-charcoal"
          >
            <span className="block overflow-hidden pb-2"><motion.span variants={lineVariants} className="block">Excellent English</motion.span></span>
            <span className="block overflow-hidden pb-3"><motion.span variants={lineVariants} className="block font-serif font-normal italic tracking-[-0.045em] text-azure">communicators.</motion.span></span>
          </motion.h1>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.7 }}>
            <p className="mt-6 max-w-xl text-base leading-7 text-grey sm:text-lg sm:leading-8">
              Our language experts are ready to help you speak with greater fluency, confidence and clarity—through a programme built entirely around you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onBook} className="button-primary">Book a free 15-min call <ArrowUpRight className="h-4 w-4" /></button>
              <a href="#programs" className="button-secondary">Explore programmes <ArrowDown className="h-4 w-4" /></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {["Fully customised 1-on-1", "Expert personal guidance", "Flexible online sessions"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-[10px] font-semibold text-charcoal sm:text-[11px]"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky/15 text-azure"><Check className="h-2.5 w-2.5" /></span>{item}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.75, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={reduceMotion ? undefined : { y: visualY, scale: visualScale, rotate: visualRotate }}
          className="relative mx-auto hidden aspect-square w-full max-w-[520px] items-center justify-center sm:flex"
        >
          <div className="orbital-ring absolute inset-0 rounded-full border border-dashed border-azure/20">
            <span className="absolute left-[12%] top-[8%] h-3 w-3 rounded-full bg-sky shadow-[0_0_0_7px_rgba(60,180,230,.12)]" />
            <span className="absolute bottom-[15%] right-[7%] h-2 w-2 rounded-full bg-azure" />
          </div>
          <div className="absolute inset-[9%] rounded-full border border-azure/10" />
          <div className="absolute inset-[17%] rounded-full bg-sky/[0.07]" />
          <motion.div animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative z-10">
            <Logo className="h-[48%] w-[48%] min-h-56 min-w-56 shadow-[0_30px_70px_rgba(36,148,201,0.2)] sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
          </motion.div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-0 top-[18%] z-20 rounded-2xl border border-azure/10 bg-white/90 p-4 shadow-[0_15px_45px_rgba(50,90,110,0.12)] backdrop-blur">
            <UserRound className="mb-3 h-5 w-5 text-azure" strokeWidth={1.6} /><p className="text-xs font-semibold text-charcoal">Your personal trainer</p><p className="mt-1 text-[9px] text-grey">Individual attention, every session</p>
          </motion.div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] right-0 z-20 rounded-2xl border border-azure/10 bg-white/90 p-4 shadow-[0_15px_45px_rgba(50,90,110,0.12)] backdrop-blur">
            <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky/10 text-azure"><MessageSquareText className="h-4 w-4" /></span><div><p className="text-xs font-semibold text-charcoal">Speak. Get feedback. Grow.</p><p className="mt-1 text-[9px] text-grey">Practice that feels like real life</p></div></div>
          </motion.div>
        </motion.div>
      </div>
      <motion.a href="#proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-grey lg:flex">
        Scroll to discover <span className="flex h-7 w-7 items-center justify-center rounded-full border border-charcoal/10"><ArrowDown className="h-3 w-3 animate-bounce" /></span>
      </motion.a>
    </section>
  );
}

function ProofStrip() {
  const stats = [
    { value: "8+", label: "years of experience", icon: GraduationCap },
    { value: "5,000+", label: "students trained", icon: UsersRound },
    { value: "12+", label: "countries reached", icon: Globe2 },
  ];
  return (
    <section id="proof" className="border-y border-charcoal/[0.08] bg-white">
      <div className="container-wide grid grid-cols-3 divide-x divide-charcoal/[0.08]">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08} className="flex flex-col items-center justify-center gap-2 px-2 py-8 text-center sm:flex-row sm:gap-4 sm:px-6 sm:py-10 sm:text-left">
            <stat.icon className="hidden h-5 w-5 shrink-0 text-sky sm:block" strokeWidth={1.5} />
            <div><p className="text-2xl font-semibold tracking-[-0.06em] text-charcoal sm:text-4xl">{stat.value}</p><p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-grey sm:text-[10px]">{stat.label}</p></div>
          </Reveal>
        ))}
      </div>
      <div className="marquee-wrap overflow-hidden border-t border-charcoal/[0.08] bg-[#F3FAFD] py-4">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
              {marqueeItems.map((item) => <span key={`${group}-${item}`} className="flex items-center text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal"><span className="px-5 sm:px-8">{item}</span><span className="h-1.5 w-1.5 rounded-full bg-sky" /></span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanSection({ onBook }: { onBook: (program: string) => void }) {
  return (
    <section id="plan" className="section-pad relative overflow-hidden bg-[#F2F9FC]">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full border border-azure/10" />
      <div className="container-wide grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-36">
          <SectionHeading eyebrow="Your personalised starting point" title={<>Not sure where to begin? <span className="font-serif font-normal italic text-azure">Start here.</span></>} copy="Answer two quick questions and get a practical coaching direction you can discuss with Jahnavi’s team." />
          <Reveal delay={0.15} className="mt-8 space-y-4">
            {[
              { icon: Clock3, text: "Takes less than a minute" },
              { icon: ShieldCheck, text: "No signup; your answers stay in your browser" },
              { icon: MessageCircle, text: "Send your plan only if you choose to" },
            ].map((item) => <div key={item.text} className="flex items-center gap-3 text-xs font-medium text-charcoal"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-azure shadow-sm"><item.icon className="h-3.5 w-3.5" /></span>{item.text}</div>)}
          </Reveal>
        </div>
        <Reveal delay={0.08}><PlanBuilder onBook={onBook} /></Reveal>
      </div>
    </section>
  );
}

function Founder({ onBook }: { onBook: () => void }) {
  return (
    <section id="about" className="section-pad overflow-hidden bg-white">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-azure to-sky p-8 text-white sm:p-11">
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/20" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/20" />
            <div className="flex items-center justify-between">
              <Logo className="h-16 w-16 border-2 border-white/50" />
              <span className="rounded-full border border-white/25 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em]">Founder & senior trainer</span>
            </div>
            <p className="mt-10 select-none text-[clamp(8rem,18vw,13rem)] font-semibold leading-[0.72] tracking-[-0.1em] text-white/95">JV<span className="text-sky">.</span></p>
            <div className="mt-12 border-l-2 border-white/40 pl-5">
              <p className="font-serif text-2xl italic leading-snug sm:text-3xl">“We are here to help you—always.”</p>
              <p className="mt-4 font-serif text-xl italic text-white/75">by Jahnavi</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-3 rounded-2xl bg-charcoal px-5 py-4 text-white shadow-xl sm:right-8">
            <p className="text-[9px] uppercase tracking-[0.15em] text-white/50">Personal trainer connection</p><p className="mt-1 text-sm font-semibold">Guidance beyond a generic course</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Meet your trainer" title={<>Miss Jahnavi V. <span className="font-serif font-normal italic text-azure">by your side.</span></>} />
          <Reveal delay={0.1}>
            <p className="mt-7 text-base leading-8 text-grey">Jahnavi V. is the founder and senior trainer at 0 to 100 Learn Academy, with 8+ years of experience and more than 5,000 students trained across 12+ countries.</p>
            <p className="mt-4 text-base leading-8 text-grey">A specialist in Professional English, IELTS and interview preparation, she combines practical language, relatable examples and individual feedback to help learners communicate with confidence.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Professional English", "IELTS preparation", "Interview guidance", "Confidence building"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-[#F4F8FA] px-4 py-3 text-xs font-semibold text-charcoal"><Check className="h-3.5 w-3.5 text-azure" />{item}</div>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onBook} className="button-primary">Talk to Jahnavi’s team <ArrowUpRight className="h-4 w-4" /></button>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="button-secondary"><Play className="h-4 w-4" /> Watch on YouTube</a>
            </div>
            <p className="mt-4 text-[10px] text-grey">Explore English speaking practice, vocabulary boosters and professional communication on @0to100learn.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Good questions, clear answers" title={<>Everything you need to <span className="font-serif font-normal italic text-azure">get started.</span></>} copy="Still unsure? A free 15-minute consultation is the easiest way to discuss your specific situation." />
          <Reveal delay={0.15} className="mt-7">
            <a href={whatsappLink("Hello 0 to 100 Learn Academy, I have a question about your English learning programmes.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-azure hover:underline">Ask a different question on WhatsApp <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </Reveal>
        </div>
        <Reveal className="border-t border-charcoal/10">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-charcoal/10">
              <button onClick={() => setOpen(open === index ? -1 : index)} className="group flex w-full items-center gap-5 py-6 text-left" aria-expanded={open === index}>
                <span className={`text-[10px] font-bold transition-colors ${open === index ? "text-azure" : "text-grey"}`}>0{index + 1}</span>
                <span className={`flex-1 text-sm font-semibold leading-6 transition-colors sm:text-base ${open === index ? "text-azure" : "text-charcoal group-hover:text-azure"}`}>{faq.question}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${open === index ? "rotate-180 bg-sky text-white" : "bg-[#F2F5F6] text-charcoal group-hover:bg-sky/10"}`}><ChevronDown className="h-4 w-4" /></span>
              </button>
              <AnimatePresence initial={false}>
                {open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"><p className="max-w-2xl pb-7 pl-9 pr-10 text-sm leading-7 text-grey">{faq.answer}</p></motion.div>}
              </AnimatePresence>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Contact({ onBook }: { onBook: (type: BookingType) => void }) {
  return (
    <section id="contact" className="bg-white pb-8 sm:pb-12">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] bg-[#EDF8FD] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-azure/10" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-azure/10" />
            <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-azure"><Sparkles className="h-3.5 w-3.5" /> Your first conversation</p>
                <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-charcoal">Ready to speak<br /><span className="font-serif font-normal italic text-azure">more freely?</span></h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-grey">Tell us where you are now and where you want to be. We’ll help you find the right next step—without any pressure.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <button onClick={() => onBook("consultation")} className="group rounded-3xl bg-charcoal p-6 text-left text-white transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between"><CalendarDays className="h-5 w-5 text-sky" /><ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-sky" /></div>
                  <p className="mt-8 text-lg font-semibold">Free consultation</p><p className="mt-2 text-xs leading-5 text-white/55">15 minutes to discuss your goals and ask questions.</p><span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-sky">Book your call</span>
                </button>
                <button onClick={() => onBook("demo")} className="group rounded-3xl border border-azure/15 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-sky">
                  <div className="flex items-center justify-between"><Play className="h-5 w-5 text-azure" /><ArrowUpRight className="h-4 w-4 text-charcoal/30 transition group-hover:text-azure" /></div>
                  <p className="mt-8 text-lg font-semibold text-charcoal">Paid demo session</p><p className="mt-2 text-xs leading-5 text-grey">50 minutes to experience the teaching approach in depth.</p><span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-azure">Request a demo</span>
                </button>
              </div>
            </div>
            <div className="relative mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-azure/10 pt-6 text-xs">
              <span className="font-semibold text-charcoal">Prefer to message directly?</span>
              <a href={whatsappLink("Hello 0 to 100 Learn Academy, I would like to know more about your English programmes.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-azure hover:underline"><MessageCircle className="h-4 w-4" />{WHATSAPP_DISPLAY}</a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2 text-azure hover:underline"><Mail className="h-4 w-4" />{SUPPORT_EMAIL}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ onLegal }: { onLegal: (kind: LegalKind) => void }) {
  return (
    <footer className="bg-white pb-24 pt-10 sm:pb-8">
      <div className="container-wide">
        <div className="grid gap-10 border-b border-charcoal/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3"><Logo className="h-14 w-14" /><span><span className="block text-base font-extrabold text-azure">0 TO 100</span><span className="mt-1 block text-[9px] font-bold tracking-[0.16em] text-charcoal">LEARN ACADEMY</span></span></a>
            <p className="mt-5 max-w-sm text-xs leading-6 text-grey">Personalised English communication coaching and practical self-paced learning resources, by Jahnavi.</p>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.17em] text-charcoal">Explore</p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-xs text-grey md:grid-cols-1">
              {navItems.map((item) => <a key={item.href} href={item.href} className="transition hover:text-azure">{item.label}</a>)}
              <a href="#faq" className="transition hover:text-azure">FAQs</a><a href="#contact" className="transition hover:text-azure">Contact us</a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.17em] text-charcoal">Information</p>
            <div className="space-y-3 text-xs text-grey">
              <button onClick={() => onLegal("privacy")} className="block transition hover:text-azure">Privacy policy</button>
              <button onClick={() => onLegal("terms")} className="block transition hover:text-azure">Terms & conditions</button>
              <button onClick={() => onLegal("refund")} className="block transition hover:text-azure">Refund & support policy</button>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-azure"><Play className="h-3.5 w-3.5" />@0to100learn</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-[10px] text-grey sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 0 to 100 Learn Academy. All rights reserved.</p>
          <p>Excellent English, made personal. <span className="ml-2 font-serif text-base italic text-charcoal">by Jahnavi</span></p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [booking, setBooking] = useState<{ open: boolean; type: BookingType; program: string }>({ open: false, type: "consultation", program: "" });
  const [legal, setLegal] = useState<LegalKind | null>(null);
  const openBooking = useCallback((type: BookingType = "consultation", program = "") => setBooking({ open: true, type, program }), []);
  const closeBooking = useCallback(() => setBooking((current) => ({ ...current, open: false })), []);
  const closeLegal = useCallback(() => setLegal(null), []);

  return (
    <div className="min-h-screen bg-white">
      <Header onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <ProofStrip />
        <Programs onBook={(program) => openBooking("consultation", program)} />
        <ScrollStory />
        <PlanSection onBook={(program) => openBooking("consultation", program)} />
        <Founder onBook={() => openBooking()} />
        <Ebook />
        <FAQ />
        <Contact onBook={(type) => openBooking(type)} />
      </main>
      <Footer onLegal={setLegal} />

      <motion.a
        href={whatsappLink("Hello 0 to 100 Learn Academy, I would like help choosing the right English learning option.")}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-charcoal px-4 py-3 text-xs font-semibold text-white shadow-[0_12px_35px_rgba(50,60,65,0.25)] transition-all hover:-translate-y-1 hover:bg-azure sm:px-5"
        aria-label={`Chat with 0 to 100 Learn Academy on WhatsApp at ${WHATSAPP_DISPLAY}`}
      >
        <MessageCircle className="h-4 w-4 text-sky" /><span className="hidden sm:inline">Chat on WhatsApp</span><span className="sm:hidden">Chat</span>
      </motion.a>

      <BookingModal open={booking.open} onClose={closeBooking} initialType={booking.type} initialProgram={booking.program} />
      <LegalModal kind={legal} onClose={closeLegal} />
    </div>
  );
}
