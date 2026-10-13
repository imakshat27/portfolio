export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  featured: boolean;
  summary: string;
  description: string[];
  metrics: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  technologies: string[];
  category:
    | "AI & LLMs"
    | "Full Stack"
    | "Mobile & Web"
    | "Systems & Algorithms";
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    icon?: string;
    level?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Akshat Agarwal",
  role: "Full-Stack Engineer & AI Systems Developer",
  status: "Lead at Sstudize Labs • R&D Intern at Samsung PRISM",
  availability: "Open for High-Impact Roles & Collaborations",
  location: "Vellore, Tamil Nadu, India",
  email: "agarwalakshat2710@gmail.com",
  phone: "+91 7778841815",
  socials: {
    github: "https://github.com/imakshat27",
    linkedin: "https://linkedin.com/in/imakshat27",
    twitter: "https://x.com/imakshat_27",
  },
  education: {
    institution: "Vellore Institute of Technology, Vellore",
    degree: "B.Tech. in Information Technology",
    period: "2024 — 2028",
    cgpa: "9.32 / 10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  bio: "Software engineer specializing in high-performance full-stack architectures and autonomous AI agent workflows. Currently leading software development at Sstudize Labs and exploring LLM-driven browser agents at Samsung PRISM R&D.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "sstudize-labs",
    role: "Software Development Lead",
    company: "Sstudize Labs",
    companyUrl: "https://sstudize.co.in",
    period: "Mar 2026 — Present",
    location: "Remote",
    type: "Leadership / Full Stack",
    featured: true,
    summary:
      "Promoted from Software Developer Intern. Leading software architecture and end-to-end technical execution for an AI-enabled EdTech platform serving 500+ students.",
    description: [
      "Lead technical direction, feature roadmapping, engineering reviews, and production release cycles across frontend and backend services.",
      "Architected and shipped full-stack features using React, Next.js, Node.js, Express.js, PostgreSQL, and Supabase across core product surfaces.",
      "Re-engineered backend workflows and high-traffic APIs for scalability, driving down API response times by 35% on assessment and automated test-generation pipelines.",
      "Diagnosed and resolved critical production bottlenecks including connection pool exhaustion, request timeouts, and auth rate limits under 1000-VU stress testing.",
    ],
    metrics: [
      "35% lower API latency",
      "500+ active student users",
      "1000-VU load tested",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "Stress Testing",
    ],
  },
  {
    id: "samsung-prism",
    role: "R&D Intern (Autonomous Agents)",
    company: "Samsung PRISM — Samsung R&D Institute India",
    companyUrl: "https://www.samsungprism.com",
    period: "May 2026 — Present",
    location: "Remote",
    type: "Research & Development / AI",
    featured: true,
    summary:
      "Engineering an autonomous interaction framework utilizing LLM-driven browser agents for complex, dynamic web interfaces and multi-step tasks.",
    description: [
      "Developing modular agent orchestration and adaptive interaction pipelines designed to navigate dynamic DOM trees, modals, interstitials, and anti-bot obstacles.",
      "Integrating browser automation primitives, DOM structure analyzers, LLM multi-step reasoning, and vision-model heuristics to achieve high task success rates.",
      "Conducting comparative benchmarks between DOM-based and vision-based interaction strategies on shifting web layouts to boost generalizability.",
    ],
    metrics: [
      "Multi-step agent workflows",
      "Vision + DOM hybrid parsing",
      "Dynamic anti-bot resilience",
    ],
    technologies: [
      "Autonomous Agents",
      "LLMs",
      "Browser Automation",
      "DOM Analysis",
      "Vision Models",
      "Python",
      "Agentic Orchestration",
    ],
  },
  {
    id: "metis-intellisystems",
    role: "AI Developer Intern",
    company: "Metis Intellisystems Pvt. Ltd.",
    companyUrl: "https://metisintel.in",
    period: "May 2026 — Jun 2026",
    location: "Onsite",
    type: "AI & Transaction Intelligence",
    featured: true,
    summary:
      "Engineered an AI-assisted financial transaction intelligence pipeline processing heterogenous banking records across UPI, IMPS, NEFT, and RTGS.",
    description: [
      "Built a deterministic semantic classification engine categorizing transactions across 40+ financial sectors using rule-based signals combined with fine-tuned transformers.",
      "Boosted classification consistency by 30% through domain-specific feature engineering, lexical normalization, and hybrid classification heuristics.",
      "Engineered a resilient transaction ingest pipeline that cleans, normalizes, extracts features, and categorizes unstructured transaction narratives.",
    ],
    metrics: [
      "40+ transaction categories",
      "+30% classification consistency",
      "Heterogeneous financial parsing",
    ],
    technologies: [
      "Transformer Models",
      "NLP",
      "Python",
      "Semantic Classification",
      "Data Normalization",
      "Financial Systems",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "drop",
    title: "Drop",
    subtitle: "A home for what VIT is building",
    description:
      "A curated platform for VIT student projects, with weekly drops, verified support, builder profiles, and a place to find teammates. Built to help good work get discovered.",
    details: [
      "Project submissions move through a curator review before entering the public exhibition.",
      "Weekly support and locked ranking archives preserve each edition’s results.",
      "Google sign-in for verified VIT accounts, with server-side authorization and PostgreSQL constraints.",
    ],
    image: "/projects/drop-hero.webp",
    imageAlt:
      "Drop homepage hero reading What VIT is building, with colorful student-project cards",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Cloudflare Workers",
      "Drizzle",
      "Google OAuth",
    ],
    category: "Full Stack",
    liveUrl: "https://droppp.tech",
    featured: true,
  },
  {
    id: "orbit",
    title: "Orbit",
    subtitle: "A little space for your digital world",
    description:
      "My personal command center for files, notes, calendars, and site analytics. An installable PWA with Google Drive and Calendar integrations, kept private behind owner-only sign-in.",
    details: [
      "A responsive workspace brings quick capture, notes, file browsing, and calendar previews together.",
      "Cloudflare Workers and D1 handle sessions, notes, and encrypted provider tokens.",
      "Google Drive and Calendar connect through server-side adapters; a separate local demo uses sample data.",
    ],
    image: "/projects/orbit-hero.webp",
    imageAlt:
      "Orbit’s light-mode dashboard with workspace navigation, files, notes, site analytics, and calendar cards, using sample data",
    technologies: [
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "D1",
      "PWA",
      "Google APIs",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/imakshat27/personal-dash",
    liveUrl: "https://orbit.imakshat.com",
    liveLabel: "Visit Orbit",
    featured: true,
  },
  {
    id: "flick",
    title: "Flick",
    subtitle: "Your moment. Every perspective.",
    description:
      "A shared event camera: guests join by QR code, get a limited photo roll, and see the album after the host publishes it. An Android-first Expo app with a browser beta for guests.",
    details: [
      "Hosts choose the event theme and photo allowance; guests can join without a permanent account.",
      "Private photo storage, resumable uploads, host moderation, and a shared album reveal.",
      "Supabase authorization protects event membership, publication, sharing, and album expiry.",
    ],
    image: "/projects/flick-hero.webp",
    imageAlt:
      "Flick homepage hero reading Your moment, Every perspective, beside a disposable camera",
    technologies: [
      "Expo",
      "React Native",
      "TypeScript",
      "Supabase",
      "Expo Camera",
      "Cloudflare",
    ],
    category: "Mobile & Web",
    liveUrl: "https://flick.aksht.site",
    liveLabel: "Open web beta",
    featured: true,
  },
  {
    id: "bank-statement-rag",
    title: "BankStatementRAG",
    subtitle: "Financial Document Intelligence via Local LLM",
    description:
      "Privacy-first offline RAG system for intelligent querying and financial analytics over bank statement PDFs using locally hosted Qwen2.5 7B via Ollama.",
    details: [
      "Designed table-aware document chunking and vector retrieval tailored for multi-page financial statements with varied layout structures.",
      "Implemented strict privacy boundaries by running the entire model stack locally without external API telemetry.",
      "Achieved high precision on date-range filtering, spending categorization, and nested balance reconciliation queries.",
    ],
    image: "/projects/bank-statement-rag.webp",
    imageAlt:
      "Ink illustration of a bank statement and magnifying glass, with a rust transaction highlight",
    technologies: [
      "Python",
      "Qwen2.5 7B",
      "Ollama",
      "RAG",
      "Vector Search",
      "FastAPI",
    ],
    category: "AI & LLMs",
    githubUrl: "https://github.com/imakshat27/bank-statement-rag",
    featured: true,
  },
  {
    id: "thinkboard",
    title: "ThinkBoard",
    subtitle: "Productivity & Note Management Platform",
    description:
      "Full-stack collaborative workspace engineered with Next.js, Node.js, Express, MongoDB, and Redis caching with robust token-bucket rate limiting.",
    details: [
      "Architected clean REST APIs with JWT authentication and state synchronization across client devices.",
      "Implemented Redis-backed rate limiting to defend endpoints and ensure zero degradation under concurrent traffic spikes.",
      "Designed responsive, distraction-free markdown editing and tag organization capabilities.",
    ],
    image: "/projects/thinkboard.webp",
    imageAlt: "Two outlined note cards with a rust sticky note",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Tailwind CSS",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/imakshat27/notes-app-mern",
    liveUrl: "https://notes-app-mern-30i9.onrender.com/",
    featured: true,
  },
  {
    id: "campus-delivery-routing",
    title: "Campus Routing Engine",
    subtitle: "Algorithmic Shortest-Path Logistics System",
    description:
      "High-performance campus delivery routing engine built in C implementing Dijkstra's shortest-path algorithm over weighted directed graph representations.",
    details: [
      "Constructed custom adjacency-list graph structures optimized for low memory footprint and rapid neighbor traversals.",
      "Implemented min-heap priority queue optimizations yielding optimal O((V + E) log V) pathfinding runtime.",
      "Simulated real-world campus constraints including restricted walkways, transit zones, and variable route weights.",
    ],
    image: "/projects/campus-routing.webp",
    imageAlt:
      "Five connected graph nodes with a direct route highlighted in rust",
    technologies: [
      "C",
      "Graph Algorithms",
      "Dijkstra's Algorithm",
      "Data Structures",
    ],
    category: "Systems & Algorithms",
    githubUrl: "https://github.com/imakshat27",
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description:
      "Core programming languages used for systems, applications, and scripting",
    items: [
      { name: "Java", level: "Proficient" },
      { name: "Python", level: "Advanced" },
      { name: "C / C++", level: "Proficient" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "SQL", level: "Proficient" },
      { name: "HTML & CSS", level: "Advanced" },
    ],
  },
  {
    category: "Frameworks & Frontend",
    description:
      "Modern component libraries and responsive application frameworks",
    items: [
      { name: "Next.js", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "REST APIs", level: "Advanced" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Relational, document, and caching data storage engines",
    items: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis", level: "Proficient" },
      { name: "Supabase", level: "Advanced" },
    ],
  },
  {
    category: "AI, Agents & Tooling",
    description: "Generative AI, agentic systems, and automation frameworks",
    items: [
      { name: "Autonomous LLM Agents", level: "Applied R&D" },
      { name: "Browser Automation", level: "Advanced" },
      { name: "RAG Systems", level: "Advanced" },
      { name: "Local LLMs (Ollama/Qwen)", level: "Advanced" },
      { name: "DOM Analysis & Vision", level: "Research" },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    description: "Containerization, cloud platforms, and developer tooling",
    items: [
      { name: "Docker", level: "Working Knowledge" },
      { name: "Kubernetes", level: "Working Knowledge" },
      { name: "AWS", level: "Working Knowledge" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Vercel", level: "Advanced" },
    ],
  },
  {
    category: "Computer Science Fundamentals",
    description:
      "Foundational CS knowledge practiced in production and coursework",
    items: [
      { name: "Data Structures & Algorithms", level: "Academic & Competitive" },
      { name: "Object-Oriented Programming (OOP)", level: "Core" },
      { name: "Database Management Systems (DBMS)", level: "Core" },
      { name: "Operating Systems", level: "Core" },
      { name: "Computer Networks", level: "Core" },
    ],
  },
];
