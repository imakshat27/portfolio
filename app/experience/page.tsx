import { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCES, PERSONAL_INFO } from "@/lib/portfolio-data";
import {
  Briefcase,
  MapPin,
  Calendar,
  ArrowUpRight,
  TrendingUp,
  FileText,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience — Akshat Agarwal",
  description:
    "Explore Akshat Agarwal's engineering leadership, AI research at Samsung PRISM, full-stack architecture at Sstudize Labs, and ML engineering at Metis Intellisystems.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="space-y-3 mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Career &amp; Leadership
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Work Experience
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          A track record of engineering scalable full-stack products, leading development teams, and pioneering autonomous LLM agents in research settings.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-white/[0.08] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-16">
        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 border-2 border-sky-400/80 shadow-[0_0_12px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform" />

            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-md transition-all duration-300 space-y-6">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {exp.type}
                    </span>
                    {idx === 0 && (
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h2>
                  <div className="text-base text-zinc-300 font-medium mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-zinc-400 font-mono gap-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {exp.summary}
              </p>

              {/* Key Accomplishments */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Key Technical Responsibilities &amp; Impact
                </h3>
                <ul className="space-y-2.5">
                  {exp.description.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Highlights */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.metrics.map((metric, mIdx) => (
                  <span
                    key={mIdx}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    {metric}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t border-white/[0.05] flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-zinc-400 uppercase mr-1">
                  Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume CTA Box */}
      <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-sky-950/20 via-neutral-900/30 to-purple-950/20 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white">
            Need a detailed copy for recruitment?
          </h3>
          <p className="text-xs text-zinc-400">
            View the verified, comprehensive curriculum vitae with complete education &amp; coursework.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/resume"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open Resume (PDF)</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 text-xs font-semibold border border-white/[0.08] transition-colors"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
