import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-neutral-950/60 backdrop-blur-md mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0d0e12] border border-white/[0.12] text-white font-bold text-xs">
                A
              </div>
              <span className="font-semibold text-white tracking-tight text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-zinc-300 border border-white/[0.05]">
                VIT '28
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Software Development Lead at Sstudize Labs &amp; R&amp;D Intern at Samsung PRISM. Focused on distributed systems, full-stack architectures, and autonomous AI agents.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-wider uppercase text-zinc-400 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-zinc-400 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-zinc-400 hover:text-white transition-colors">
                  Skills &amp; Technologies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About &amp; Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-wider uppercase text-zinc-400 font-semibold">
              Connect
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/resume" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>Contact Form</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <span className="text-zinc-500 font-mono text-[11px]">
                  {PERSONAL_INFO.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <p>© {new Date().getFullYear()} Akshat Agarwal. Crafted with precision.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available for Opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
