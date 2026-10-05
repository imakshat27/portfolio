import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] mt-28 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.04]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-100 text-sm">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-zinc-600">&bull;</span>
              <span className="text-xs text-zinc-400">
                Software Dev Lead &amp; AI Systems
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              VIT Vellore &bull; Vellore, Tamil Nadu, India
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-white transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-white transition-colors p-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-zinc-400 hover:text-white transition-colors p-1"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="text-zinc-400 hover:text-white transition-colors p-1"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js &amp; Tailwind CSS.</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
