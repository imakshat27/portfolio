"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Github, ExternalLink, GitCommit, Flame, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

export default function GithubContributions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contributions" className="scroll-mt-24 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-white/[0.06]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Open Source &amp; Activity
            </p>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Code Contributions
          </h2>
        </div>

        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.08] text-xs font-medium transition-colors w-fit"
        >
          <Github className="w-3.5 h-3.5" />
          <span className="font-mono">@imakshat27</span>
          <ExternalLink className="w-3 h-3 text-zinc-400" />
        </a>
      </div>

      {/* Main Container Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-5">
        {/* Quick Highlights / Sub-header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 pb-4 border-b border-white/[0.04]">
          <div className="flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-200 font-medium">Public Contribution Momentum</span>
            <span className="text-zinc-600 hidden sm:inline">&bull;</span>
            <span className="text-zinc-400 hidden sm:inline">Active commits across repositories</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>500+ commits / year</span>
          </div>
        </div>

        {/* Calendar Wrapper with Horizontal Scroll */}
        <div className="overflow-x-auto pb-2 pt-1 -mx-2 px-2 sm:mx-0 sm:px-0 scrollbar-thin">
          <div className="min-w-[720px] flex justify-center py-2">
            {mounted ? (
              <GitHubCalendar
                username="imakshat27"
                colorScheme="dark"
                blockSize={11}
                blockMargin={3}
                blockRadius={2}
                fontSize={12}
                theme={{
                  dark: ["#18181b", "#14532d", "#16a34a", "#22c55e", "#4ade80"],
                }}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            ) : (
              <div className="h-[128px] w-full flex items-center justify-center text-xs font-mono text-zinc-500 animate-pulse">
                Loading contribution calendar...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
