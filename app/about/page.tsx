import { Metadata } from "next";
import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import {
  User,
  GraduationCap,
  MapPin,
  Mail,
  FileText,
  ArrowUpRight,
  Code2,
  Sparkles,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Akshat Agarwal",
  description:
    "Learn more about Akshat Agarwal: academic journey at VIT Vellore, software engineering philosophy, and interest in autonomous systems.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="space-y-3 mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Background &amp; Philosophy
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          About Akshat Agarwal
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Driven by curiosity, clean system design, and the frontier of autonomous AI agents.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Narrative Column */}
        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md space-y-4">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Who I Am</span>
            </h2>
            <p>
              I&apos;m a software engineer and researcher based in Vellore, India, currently pursuing my B.Tech. in Information Technology at Vellore Institute of Technology (VIT).
            </p>
            <p>
              My work sits at the intersection of <strong className="text-white font-medium">resilient distributed systems</strong> and <strong className="text-white font-medium">autonomous AI agents</strong>. Whether architecting high-throughput backend APIs for 500+ active students at Sstudize Labs or researching LLM-driven browser agents at Samsung PRISM, I care deeply about writing clean, maintainable, and observable code.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md space-y-4">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Engineering Philosophy</span>
            </h2>
            <p>
              I believe great software is defined by <strong className="text-white font-medium">minimalism, speed, and deliberate simplicity</strong>. Unnecessary abstraction creates tech debt; well-thought-out primitives endure.
            </p>
            <p>
              When building modern products, I prioritize:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong className="text-white font-medium">Measurable performance:</strong> Profiling bottlenecks, optimizing query latency, and stress-testing under load.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong className="text-white font-medium">Pragmatic AI integration:</strong> Using small, specialized local models and deterministic heuristics alongside frontier LLMs rather than blindly wrapping APIs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong className="text-white font-medium">End-to-end ownership:</strong> From database indexing and rate-limiting to polished UI micro-interactions.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md space-y-4">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Beyond the Screen</span>
            </h2>
            <p className="text-xs sm:text-sm">
              Outside of building products, you can find me exploring competitive algorithmic problems, diving into AI research papers, contributing to open-source software, and capturing moments through photography.
            </p>
          </div>
        </div>

        {/* Sidebar Info Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Profile Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md text-center space-y-4">
            <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden bg-neutral-900 border-2 border-white/10 shadow-2xl">
              <img
                src="/pic.jpeg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-sky-400 font-mono mt-0.5">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Education</span>
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {PERSONAL_INFO.education.institution}
              </div>
              <div className="text-xs text-zinc-300 mt-0.5">
                {PERSONAL_INFO.education.degree}
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mt-2 pt-2 border-t border-white/[0.05]">
                <span>{PERSONAL_INFO.education.period}</span>
                <span className="text-zinc-300">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Details Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md space-y-3 text-xs">
            <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
              <span className="text-zinc-400 font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Location
              </span>
              <span className="text-zinc-200">{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
              <span className="text-zinc-400 font-mono flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-400" /> Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sky-400 hover:underline"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-zinc-400 font-mono">Work Model</span>
              <span className="text-zinc-200">Remote / Hybrid / Onsite</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 text-xs font-semibold border border-white/[0.08] transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
