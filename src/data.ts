export const WHATSAPP_NUMBER = "919572283466";
export const WHATSAPP_DISPLAY = "+91 95722 83466";
export const SUPPORT_EMAIL = "support@0to100learn.com";
export const LOGO_URL =
  "https://0to100learn.com/wp-content/uploads/2024/07/MAIN-1024x1024.jpg";
export const YOUTUBE_URL = "https://www.youtube.com/@0to100learn";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type Program = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  bestFor: string;
  outcomes: string[];
  session: string;
  skills: string[];
};

export const programs: Program[] = [
  {
    id: "business",
    number: "01",
    title: "Business English",
    shortTitle: "Business",
    eyebrow: "For the rooms that matter",
    description:
      "Communicate with clarity in meetings, presentations, negotiations and everyday workplace conversations—without memorising rigid scripts.",
    bestFor: "Working professionals, managers, founders and client-facing teams",
    outcomes: [
      "Open meetings and present updates with structure",
      "Disagree diplomatically and ask precise questions",
      "Write clearer professional emails and follow-ups",
    ],
    session:
      "Rehearse a project update, then refine it with your trainer for tone, vocabulary and concise delivery.",
    skills: ["Professionalism", "Vocabulary", "Voice modulation"],
  },
  {
    id: "custom",
    number: "02",
    title: "Customised 1-on-1 Sessions",
    shortTitle: "1-on-1",
    eyebrow: "Your goals set the syllabus",
    description:
      "A fully personalised learning programme built around your current level, real-life situations, pace and availability—not a one-size-fits-all batch.",
    bestFor: "Learners who want personal feedback and a flexible learning plan",
    outcomes: [
      "Work on the exact situations you find difficult",
      "Get live correction and detailed trainer feedback",
      "Schedule sessions around your availability",
    ],
    session:
      "Bring a real presentation, email or conversation. Your trainer turns it into the day’s practical lesson.",
    skills: ["Fluency", "Confidence", "Faster feedback"],
  },
  {
    id: "ielts",
    number: "03",
    title: "IELTS Preparation",
    shortTitle: "IELTS",
    eyebrow: "Prepare with a clear strategy",
    description:
      "Build stronger responses for the IELTS exam with focused speaking practice, useful vocabulary and individual guidance from an experienced trainer.",
    bestFor: "Students and professionals preparing for the IELTS exam",
    outcomes: [
      "Develop organised, extended speaking responses",
      "Improve lexical range through guided practice",
      "Use mock questions to identify areas to improve",
    ],
    session:
      "Attempt a timed speaking cue card, receive specific feedback, then rebuild the answer with better structure and language.",
    skills: ["Response structure", "Vocabulary", "Timed practice"],
  },
  {
    id: "communication",
    number: "04",
    title: "English Communication",
    shortTitle: "Communication",
    eyebrow: "From knowing English to using it",
    description:
      "Move beyond hesitation and translation. Practise forming clear thoughts, speaking more naturally and responding without searching for every word.",
    bestFor: "Learners who understand English but hesitate while speaking",
    outcomes: [
      "Speak in longer, more connected sentences",
      "Reduce pauses caused by word-searching",
      "Build confidence through consistent live practice",
    ],
    session:
      "Speak on a familiar topic, identify hesitation patterns and practise targeted drills with immediate correction.",
    skills: ["Fluency", "Confidence", "Sentence building"],
  },
  {
    id: "interview",
    number: "05",
    title: "Interview Guidance",
    shortTitle: "Interviews",
    eyebrow: "Make your experience easy to understand",
    description:
      "Prepare thoughtful, well-structured answers and practise saying them aloud so your interviews feel like conversations—not recitations.",
    bestFor: "Job seekers, interns and professionals preparing for a role change",
    outcomes: [
      "Structure answers using relevant examples",
      "Introduce your experience with clarity",
      "Practise follow-up questions in mock interviews",
    ],
    session:
      "Run a role-specific mock interview, review your answers and improve weak responses through a second attempt.",
    skills: ["Answer structure", "Confidence", "Professionalism"],
  },
  {
    id: "reallife",
    number: "06",
    title: "Real-Life Conversation",
    shortTitle: "Real life",
    eyebrow: "English for life outside the textbook",
    description:
      "Build practical speaking skills for introductions, phone calls, travel, social conversations and the unexpected moments in between.",
    bestFor: "Anyone who wants to feel more comfortable in everyday conversations",
    outcomes: [
      "Start, continue and close conversations naturally",
      "Handle common real-life speaking situations",
      "Listen and respond without relying on memorised lines",
    ],
    session:
      "Role-play an everyday scenario, learn useful expressions and repeat it with new, unscripted twists.",
    skills: ["Everyday fluency", "Listening", "Spontaneity"],
  },
];

export const roadmap = [
  {
    step: "01",
    range: "0—25",
    number: "00",
    label: "Discover",
    title: "Start with your real voice.",
    copy: "Your trainer listens before teaching. A baseline conversation reveals where hesitation, vocabulary or structure gets in the way.",
    note: "No generic placement test. We begin with the situations you actually face.",
    tags: ["Baseline conversation", "Goal mapping", "Priority skills"],
  },
  {
    step: "02",
    range: "26—50",
    number: "33",
    label: "Build",
    title: "Turn gaps into usable language.",
    copy: "Learn words, sentence patterns and delivery techniques inside short, focused exercises—then use them immediately in your own sentences.",
    note: "Every explanation is followed by guided practice and personal correction.",
    tags: ["Targeted vocabulary", "Sentence building", "Live correction"],
  },
  {
    step: "03",
    range: "51—75",
    number: "66",
    label: "Rehearse",
    title: "Practise the moment before it matters.",
    copy: "Step into realistic meetings, interviews and conversations. Your trainer adds follow-up questions so you learn to respond, not recite.",
    note: "Role-plays become progressively less scripted as your confidence grows.",
    tags: ["Real-life role-plays", "Mock interviews", "Voice modulation"],
  },
  {
    step: "04",
    range: "76—100",
    number: "100",
    label: "Communicate",
    title: "Speak with clarity. Own the room.",
    copy: "Bring your improved communication into real situations, review what happened and keep refining with detailed feedback from your trainer.",
    note: "The goal is independent, confident communication—not dependence on a script.",
    tags: ["Real-world application", "Progress review", "Next-level goals"],
  },
];

export const goals = [
  {
    id: "workplace",
    title: "Workplace communication",
    description: "Meetings, presentations, emails and professional conversations",
    program: "Business English",
    firstStep: "a structured two-minute project update",
    plan: [
      "Build a reliable meeting vocabulary bank",
      "Practise concise updates and diplomatic responses",
      "Rehearse a presentation with live feedback",
    ],
  },
  {
    id: "interview",
    title: "Interview preparation",
    description: "Answers, introductions and role-specific mock interviews",
    program: "Interview Guidance",
    firstStep: "a clear 60-second professional introduction",
    plan: [
      "Organise your strongest experience into clear examples",
      "Practise common and follow-up interview questions",
      "Refine your delivery in a realistic mock interview",
    ],
  },
  {
    id: "ielts",
    title: "IELTS preparation",
    description: "Speaking responses, vocabulary and timed practice",
    program: "IELTS Preparation",
    firstStep: "an organised two-minute cue-card response",
    plan: [
      "Identify patterns that limit your current responses",
      "Build flexible vocabulary around common topics",
      "Use timed practice followed by detailed correction",
    ],
  },
  {
    id: "everyday",
    title: "Everyday fluency",
    description: "Natural conversations, confidence and spontaneous speaking",
    program: "English Communication",
    firstStep: "a relaxed three-minute everyday conversation",
    plan: [
      "Practise speaking without translating every sentence",
      "Build useful phrases for familiar daily situations",
      "Add unscripted role-plays to strengthen spontaneity",
    ],
  },
];

export const challenges = [
  "I run out of words",
  "I feel nervous",
  "I translate in my head",
  "My answers lack structure",
  "I need better vocabulary",
  "I want a clearer voice",
];

export const ebookChapters = [
  {
    title: "Starting a new job",
    detail: "Professional introductions, first-day conversations and settling into a new workplace.",
  },
  {
    title: "Office communication",
    detail: "Standard sentences and questions for clear, respectful day-to-day communication.",
  },
  {
    title: "Meetings and discussions",
    detail: "Useful language for contributing, clarifying, agreeing and disagreeing professionally.",
  },
  {
    title: "Telephonic and video communication",
    detail: "Practical expressions for calls, virtual meetings and common communication hurdles.",
  },
  {
    title: "Networking and socializing",
    detail: "Professional small talk, introductions and interpersonal vocabulary for new connections.",
  },
  {
    title: "Negotiations and persuasion",
    detail: "Language for presenting your position, responding to objections and finding agreement.",
  },
];

export const ebookTopics = [
  "Legal & compliance vocabulary",
  "Case studies",
  "Project management vocabulary",
  "Supply chain & logistics",
  "International business",
  "Networking & interpersonal skills",
  "Presentations & public speaking",
  "Negotiations & persuasion",
  "Healthcare vocabulary",
  "Hospitality",
  "Financial & sales communication",
  "Human resources communication",
  "Confidence building & professionalism",
];

export const faqs = [
  {
    question: "What types of English courses do you offer?",
    answer:
      "We offer personalised programmes for General Communication, Business English, IELTS Preparation, Interview Guidance and Real-Life Conversations. Each programme is designed around your fluency, confidence and specific communication goals.",
  },
  {
    question: "How are the live sessions conducted?",
    answer:
      "Sessions are conducted online through one-on-one interactions with a personal trainer. You can schedule them based on your availability, and each session is customised to address your learning goals and current challenges.",
  },
  {
    question: "Can I try a session before committing to a course?",
    answer:
      "Yes. You can book a complimentary 15-minute consultation to discuss your needs with our language experts. For a deeper experience, you can choose a 50-minute paid demo session to understand our teaching methods and how we can support your learning objectives.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Use the Book a Call button on this page to prepare your booking details, then continue on WhatsApp to confirm your preferred session. You can also message us directly at +91 95722 83466. Our team will help you with the next steps.",
  },
  {
    question: "What kind of progress can I expect?",
    answer:
      "Progress depends on your starting point, practice and consistency. Our programmes are designed to improve fluency, vocabulary and confidence through regular speaking practice, detailed feedback and support. Your trainer helps you track your goals as you learn.",
  },
  {
    question: "Is the ₹315 e-book the same as 1-on-1 coaching?",
    answer:
      "No. Mastering Professional Communication is a self-paced digital e-book with bilingual English–Hindi support. The 1-on-1 programme is live, personalised coaching with a trainer. They are separate options, so you can choose the kind of support that suits you.",
  },
];
