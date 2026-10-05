import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
  Twitter,
  User,
} from "lucide-react";
import {
  EXPERIENCES,
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
} from "@/lib/portfolio-data";

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-28 md:space-y-36 pb-12">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-12 md:pt-16 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Dev Lead @ Sstudize &bull; R&amp;D Intern @ Samsung</span>
            </div>

            {/* Title & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Akshat Agarwal
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-sky-200 to-zinc-400">
                Full-Stack Engineer &amp; AI Systems Researcher
              </p>
            </div>

            {/* Punchy Narrative */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Engineering high-throughput distributed web systems and autonomous LLM browser agents. Currently studying Information Technology at <span className="text-zinc-200 font-medium">VIT Vellore</span> while directing full-stack development for an EdTech platform serving 500+ students.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 hover:translate-y-[-1px]"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>View Experience</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 text-xs font-semibold border border-white/[0.08] transition-all hover:translate-y-[-1px]"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Explore Projects</span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/[0.04] text-zinc-400 hover:text-white text-xs font-medium transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Socials & Coordinates */}
            <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06] text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <span className="text-zinc-600 hidden sm:inline">&bull;</span>
              <span className="hidden sm:flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                Vellore, India
              </span>
            </div>
          </div>

          {/* Hero Right Column: Clean Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group p-2.5 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md shadow-2xl">
              <div className="relative w-52 sm:w-60 md:w-64 aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/[0.08]">
                <img
                  src="/pic.jpeg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUMMARIZED EXPERIENCE SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
              Career &amp; Leadership
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Engineering leadership, research prototypes, and applied AI systems.
            </p>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 hover:text-sky-300 transition-colors group shrink-0"
          >
            <span>View All Experience</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Summarized Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    {exp.period}
                  </span>
                  <span className="text-zinc-500">{exp.location}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">{exp.company}</p>
                </div>

                <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <TrendingUp className="w-3 h-3 shrink-0" />
                  <span>{exp.metrics[0]}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] flex flex-wrap gap-1">
                {exp.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-xs font-semibold text-zinc-300 hover:text-white transition-all"
          >
            <span>View Complete Career History &amp; Detailed Metrics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 3. SUMMARIZED PROJECTS SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
              Featured Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Production full-stack applications, local LLMs, and algorithmic systems.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 hover:text-sky-300 transition-colors group shrink-0"
          >
            <span>Browse All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.06] hover:border-white/[0.12] overflow-hidden backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full bg-neutral-900/60 overflow-hidden border-b border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <div className="text-[11px] font-mono text-sky-400 mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/[0.04]">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 border border-white/[0.06] transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
                <Link
                  href="/projects"
                  className="text-xs font-mono text-zinc-500 hover:text-white transition-colors"
                >
                  Architecture &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-xs font-semibold text-zinc-300 hover:text-white transition-all"
          >
            <span>Explore All 6 Projects &amp; Systems</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. SUMMARIZED SKILLS SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
              Technical Arsenal
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Curated stack across full-stack engineering, databases, and AI systems.
            </p>
          </div>
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 hover:text-sky-300 transition-colors group shrink-0"
          >
            <span>Full Skill Matrix</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Summarized Skill Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.slice(0, 4).map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-4"
            >
              <h3 className="text-sm font-bold text-white tracking-tight flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-[10px] font-mono text-zinc-500">
                  {cat.items.length} items
                </span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] text-zinc-200 border border-white/[0.05]"
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-3.5 h-3.5 object-contain"
                      />
                    )}
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-xs font-semibold text-zinc-300 hover:text-white transition-all"
          >
            <span>View All Technologies &amp; Computer Science Coursework</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. SUMMARIZED ABOUT & EDUCATION SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
              Background
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              About &amp; Education
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Academic pedigree at VIT Vellore and core engineering values.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 hover:text-sky-300 transition-colors group shrink-0"
          >
            <span>Read Full Story</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Bio Preview */}
          <div className="md:col-span-7 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                I focus on building software that scales reliably and runs fast. Whether that means re-architecting backend query pathways at Sstudize Labs to trim 35% off latency or orchestrating autonomous browser agents at Samsung PRISM R&amp;D.
              </p>
              <p className="text-xs text-zinc-400">
                I thrive on end-to-end execution: understanding user workflows, designing reliable database models, stress-testing under load, and implementing modern UI interactions.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-sky-300 transition-colors"
              >
                <span>Read engineering philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Education Card */}
          <div className="md:col-span-5 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>Academic Record</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Vellore Institute of Technology
                </h3>
                <p className="text-xs text-zinc-300 mt-0.5">
                  B.Tech. in Information Technology (2024 — 2028)
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-white/[0.05]">
                <span>CGPA</span>
                <span className="text-zinc-200">
                  9.32 / 10.0
                </span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-500">
              Core Coursework: DSA, OOP, DBMS, OS, Computer Networks
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-8 sm:p-12 text-center backdrop-blur-xl space-y-6">
        <div className="max-w-xl mx-auto space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Open for High-Impact Roles</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s build something exceptional.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Interested in discussing full-stack architecture, an internship opportunity, or AI agent research? Reach out directly.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-xl shadow-white/5"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 text-xs font-semibold border border-white/[0.08] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>View Resume (PDF)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
