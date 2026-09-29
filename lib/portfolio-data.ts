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
  technologies: string[];
  category: "AI & LLMs" | "Full Stack" | "Systems & Algorithms";
  githubUrl?: string;
  liveUrl?: string;
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
    image: "/dijstraship.png",
    technologies: ["Python", "Qwen2.5 7B", "Ollama", "RAG", "Vector Search", "FastAPI"],
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
    image: "/thinkboard.png",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Redis", "Tailwind CSS"],
    category: "Full Stack",
    githubUrl: "https://github.com/imakshat27/notes-app-mern",
    liveUrl: "https://notes-app-mern-30i9.onrender.com/",
    featured: true,
  },
  {
    id: "movie-vault",
    title: "Movie Vault",
    subtitle: "Cinematic Discovery & Media Tracking Engine",
    description:
      "Modern cinematic exploration web application featuring fluid search, rich metadata filtering, watchlist management, and TMDB integration.",
    details: [
      "Engineered an intuitive interface with instant debounced search and genre-based filtering.",
      "Integrated dynamic modal previews, cast breakdowns, and trailer streaming previews.",
      "Optimized client caching and image rendering for lightning-fast browsing on any screen.",
    ],
    image: "/movie-vault.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Vercel"],
    category: "Full Stack",
    liveUrl: "https://movie-vault-a3.vercel.app/",
    githubUrl: "https://github.com/imakshat27",
    featured: true,
  },
  {
    id: "uncleartrip",
    title: "UnclearTrip",
    subtitle: "Curated Travel Experience & Itinerary Planner",
    description:
      "Sleek travel discovery web platform designed to simplify itinerary organization, budget forecasting, and exploration guides.",
    details: [
      "Crafted an immersive editorial design aesthetic with interactive destination maps.",
      "Built structured travel guides and intuitive reservation overviews.",
    ],
    image: "/uncleartrip.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "UI/UX Design"],
    category: "Full Stack",
    liveUrl: "https://uncleartrip.vercel.app/",
    githubUrl: "https://github.com/imakshat27",
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
    image: "/dijstraship.png",
    technologies: ["C", "Graph Algorithms", "Dijkstra's Algorithm", "Data Structures"],
    category: "Systems & Algorithms",
    githubUrl: "https://github.com/imakshat27",
    featured: false,
  },
  {
    id: "lineup",
    title: "LineUp",
    subtitle: "Task Scheduling & Team Workflow Orchestrator",
    description:
      "Collaborative task coordination tool offering real-time progress indicators, sprint boards, and priority tagging.",
    details: [
      "Interactive drag-and-drop kanban workflow with optimistic UI updates.",
      "Custom notification triggers and team assignment workflows.",
    ],
    image: "/lineup.png",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    category: "Full Stack",
    githubUrl: "https://github.com/imakshat27",
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming languages used for systems, applications, and scripting",
    items: [
      { name: "Java", icon: "/java.png", level: "Proficient" },
      { name: "Python", icon: "/python.png", level: "Advanced" },
      { name: "C / C++", icon: "/cpp.png", level: "Proficient" },
      { name: "TypeScript", icon: "/typescript.png", level: "Advanced" },
      { name: "JavaScript", icon: "/javascript.png", level: "Advanced" },
      { name: "SQL", icon: "/postgresql.png", level: "Proficient" },
      { name: "HTML & CSS", icon: "/html.png", level: "Advanced" },
    ],
  },
  {
    category: "Frameworks & Frontend",
    description: "Modern component libraries and responsive application frameworks",
    items: [
      { name: "Next.js", icon: "/nextjs.png", level: "Advanced" },
      { name: "React.js", icon: "/react.png", level: "Advanced" },
      { name: "Node.js", icon: "/nodejs.png", level: "Advanced" },
      { name: "Express.js", icon: "/express.png", level: "Advanced" },
      { name: "Tailwind CSS", icon: "/tailwind.png", level: "Expert" },
      { name: "REST APIs", icon: "/next.svg", level: "Advanced" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Relational, document, and caching data storage engines",
    items: [
      { name: "PostgreSQL", icon: "/postgresql.png", level: "Proficient" },
      { name: "MongoDB", icon: "/mongo.png", level: "Advanced" },
      { name: "Redis", icon: "/redis.png", level: "Proficient" },
      { name: "Supabase", icon: "/postgresql.png", level: "Advanced" },
    ],
  },
  {
    category: "AI, Agents & Tooling",
    description: "Generative AI, agentic systems, and automation frameworks",
    items: [
      { name: "Autonomous LLM Agents", icon: "/python.png", level: "Applied R&D" },
      { name: "Browser Automation", icon: "/javascript.png", level: "Advanced" },
      { name: "RAG Systems", icon: "/python.png", level: "Advanced" },
      { name: "Local LLMs (Ollama/Qwen)", icon: "/python.png", level: "Advanced" },
      { name: "DOM Analysis & Vision", icon: "/python.png", level: "Research" },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    description: "Containerization, cloud platforms, and developer tooling",
    items: [
      { name: "Docker", icon: "/next.svg", level: "Working Knowledge" },
      { name: "Kubernetes", icon: "/next.svg", level: "Working Knowledge" },
      { name: "AWS", icon: "/vercel.svg", level: "Working Knowledge" },
      { name: "Git & GitHub", icon: "/github.png", level: "Advanced" },
      { name: "Postman", icon: "/next.svg", level: "Advanced" },
      { name: "Vercel", icon: "/vercel.svg", level: "Advanced" },
    ],
  },
  {
    category: "Computer Science Fundamentals",
    description: "Foundational CS knowledge practiced in production and coursework",
    items: [
      { name: "Data Structures & Algorithms", level: "Academic & Competitive" },
      { name: "Object-Oriented Programming (OOP)", level: "Core" },
      { name: "Database Management Systems (DBMS)", level: "Core" },
      { name: "Operating Systems", level: "Core" },
      { name: "Computer Networks", level: "Core" },
    ],
  },
];
