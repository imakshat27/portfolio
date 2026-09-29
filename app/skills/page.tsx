import { Metadata } from "next";
import Link from "next/link";
import { SKILL_CATEGORIES, PERSONAL_INFO } from "@/lib/portfolio-data";
import {
  Cpu,
  GraduationCap,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Skills & Technologies — Akshat Agarwal",
  description:
    "Comprehensive technical skill set and engineering stack: Next.js, React, Node.js, Python, Java, C++, PostgreSQL, Redis, LLMs, and Browser Automation.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="space-y-3 mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Technical Arsenal
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Skills &amp; Capabilities
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Full-stack web architecture, distributed caching, applied machine learning pipelines, and foundational computer science rigor.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.category}
            className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.06] hover:border-white/[0.12] backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {cat.category}
                </h2>
                <span className="text-[11px] font-mono text-sky-400/80 px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                  {cat.items.length} items
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group/item flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.05] hover:border-white/[0.15] transition-all duration-200"
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-4 h-4 object-contain filter group-hover/item:brightness-110"
                      />
                    )}
                    <span className="text-xs font-medium text-zinc-200 group-hover/item:text-white">
                      {item.name}
                    </span>
                    {item.level && (
                      <span className="text-[9px] font-mono text-zinc-400 ml-0.5">
                        • {item.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CS Fundamentals & Academic Rigor */}
      <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <h3 className="text-lg font-bold text-white">
                Academic Rigor &amp; Computer Science Foundation
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400">
              Vellore Institute of Technology, Vellore — B.Tech. in Information Technology (2024 — 2028)
            </p>
          </div>
        </div>

        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERSONAL_INFO.education.coursework.map((course) => (
            <div
              key={course}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                {course}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <div>
          <h4 className="text-sm font-semibold text-white">
            Looking for detailed project implementations of these technologies?
          </h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            Check out BankStatementRAG, ThinkBoard, and more in the projects gallery.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shrink-0"
        >
          <span>Explore Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
