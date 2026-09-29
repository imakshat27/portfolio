"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/lib/portfolio-data";
import {
  Code2,
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Layers,
  Terminal,
} from "lucide-react";

const CATEGORIES = ["All", "AI & LLMs", "Full Stack", "Systems & Algorithms"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="space-y-3 mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Engineering &amp; Open Source
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Featured Projects
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Production web applications, local LLM intelligence pipelines, and systems programming implementations.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/[0.06] pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-white text-black font-semibold shadow-md shadow-white/5"
                : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.05]"
            }`}
          >
            {cat}
            <span
              className={`ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                activeCategory === cat
                  ? "bg-black/10 text-neutral-800"
                  : "bg-white/[0.05] text-zinc-400"
              }`}
            >
              {cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.14] overflow-hidden backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Preview Box */}
              <div className="relative aspect-[16/9] w-full bg-neutral-900/60 overflow-hidden border-b border-white/[0.06]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-sky-400">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-mono text-amber-300/80">
                        &bull; Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key engineering details */}
                <div className="space-y-1.5 pt-1">
                  {project.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-sky-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-white/[0.05] mt-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors"
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
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/[0.08] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>

              <span className="text-[11px] font-mono text-zinc-400">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
