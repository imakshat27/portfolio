"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Cpu,
  Copy,
  Check,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  TrendingUp,
  Twitter,
  Layers,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import {
  EXPERIENCES,
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
} from "@/lib/portfolio-data";

const CATEGORIES = ["All", "AI & LLMs", "Full Stack", "Systems & Algorithms"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-12 md:pt-16">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          {/* Hero Left Column */}
          <div className="space-y-5 flex-1">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for high-impact roles</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-zinc-300">
                Full-Stack Engineer &amp; AI Systems Developer
              </p>
            </div>

            {/* Concise Narrative */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              Engineering scalable distributed web architectures and autonomous LLM browser agents. Leading software development at{" "}
              <span className="text-zinc-200 font-medium">Sstudize Labs</span>, researching agent orchestration at{" "}
              <span className="text-zinc-200 font-medium">Samsung PRISM</span>, and studying IT at{" "}
              <span className="text-zinc-200 font-medium">VIT Vellore</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>View Projects</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 text-xs font-medium border border-white/[0.08] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-zinc-400 hover:text-white text-xs font-medium transition-colors"
              >
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Socials & Location */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
              <span className="text-zinc-600 hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs">
                <MapPin className="w-3.5 h-3.5" />
                Vellore, India
              </span>
            </div>
          </div>

          {/* Hero Portrait */}
          <div className="shrink-0">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl bg-zinc-900">
              <img
                src="/pic.jpeg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & PHILOSOPHY SECTION */}
      <section id="about" className="scroll-mt-24 space-y-6">
        <div className="space-y-1 pb-3 border-b border-white/[0.06]">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            About &amp; Background
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Engineering with Purpose &amp; Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 space-y-4 text-sm text-zinc-300 leading-relaxed">
            <p>
              I believe modern software should be fast, minimal, and resilient under load. Whether that means re-architecting backend query pathways at <strong className="text-zinc-100 font-medium">Sstudize Labs</strong> to shave 35% off latency, or designing autonomous DOM-navigation pipelines at <strong className="text-zinc-100 font-medium">Samsung PRISM R&amp;D</strong>, I focus on clean primitives that scale without bloat.
            </p>
            <p className="text-zinc-400">
              My engineering approach prioritizes end-to-end execution: database indexing, deterministic error handling, stress-testing under peak concurrent traffic, and crafting responsive interfaces with zero friction.
            </p>
          </div>

          {/* Academic Card */}
          <div className="md:col-span-5 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <GraduationCap className="w-4 h-4 text-zinc-300" />
              <span>Academic Pedigree</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Vellore Institute of Technology
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                B.Tech. in Information Technology &bull; 2024 — 2028
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-white/[0.04]">
              <span className="text-zinc-400">CGPA</span>
              <span className="text-zinc-100 font-semibold">9.32 / 10.0</span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 pt-1">
              Coursework: DSA, OOP, DBMS, OS, Computer Networks
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORK EXPERIENCE SECTION */}
      <section id="experience" className="scroll-mt-24 space-y-8">
        <div className="space-y-1 pb-3 border-b border-white/[0.06]">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Career &amp; Leadership
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.06] hover:border-white/[0.1] transition-all space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 pb-2 border-b border-white/[0.04]">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs text-zinc-400 font-medium">
                    {exp.company} &bull; <span className="font-mono text-zinc-400">{exp.location}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-400 shrink-0">
                  {exp.period}
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Accomplishments */}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-zinc-500 font-bold mt-0.5">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Metrics & Stack */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                {exp.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    <TrendingUp className="w-3 h-3" />
                    <span>{metric}</span>
                  </span>
                ))}
                {exp.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-400 border border-white/[0.04]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-24 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/[0.06]">
          <div className="space-y-1">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Selected Work
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.06] hover:border-white/[0.1] overflow-hidden transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/9] w-full bg-zinc-900 overflow-hidden border-b border-white/[0.05]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                      {project.category}
                    </span>
                    <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
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

              {/* Action Links */}
              <div className="p-5 pt-0 flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
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
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.06] transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SKILLS SECTION */}
      <section id="skills" className="scroll-mt-24 space-y-6">
        <div className="space-y-1 pb-3 border-b border-white/[0.06]">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Technical Stack
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Skills &amp; Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-3"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24 space-y-6">
        <div className="space-y-1 pb-3 border-b border-white/[0.06]">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Get In Touch
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Let&apos;s Build Something Exceptional
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Contact Direct Info */}
          <div className="md:col-span-5 space-y-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <p>
              I&apos;m actively exploring full-stack engineering roles, high-performance distributed systems, and autonomous AI research collaborations.
            </p>

            <div className="pt-2 space-y-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-mono text-zinc-200 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                {copiedEmail ? (
                  <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-zinc-500" />
                )}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 text-center py-2 px-3 rounded-xl bg-white text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition-colors"
                >
                  Send Direct Email
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-zinc-300 text-xs font-medium transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Minimalist Message Form */}
          <div className="md:col-span-7 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-sm font-semibold text-white">Message sent</h3>
                <p className="text-xs text-zinc-400">
                  Thank you! I will get back to you promptly.
                </p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/2a2a3b11f823e4c986bd0f2426b3845a"
                method="POST"
                onSubmit={() => setFormSubmitted(true)}
                className="space-y-3.5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-mono text-zinc-400">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-mono text-zinc-400">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-mono text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
