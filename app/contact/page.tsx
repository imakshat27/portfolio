"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  Clock,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="space-y-3 mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Get in Touch
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Contact &amp; Collaboration
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Open for full-stack engineering roles, AI agent research collaborations, and ambitious projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <h2 className="text-lg font-bold text-white mb-2">Send a Message</h2>
            <p className="text-xs text-zinc-400 mb-6">
              Fill out the details below and it will land straight in my inbox.
            </p>

            <form
              action="https://formsubmit.co/2a2a3b11f823e4c986bd0f2426b3845a"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-zinc-300 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/50 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-zinc-300 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-mono text-zinc-300 font-medium"
                >
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Internship opportunity / Technical inquiry / Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-zinc-300 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about what you're building or what you'd like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/50 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Coordinates Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Copy Email Box */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              Direct Email
            </span>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-xs sm:text-sm font-mono text-zinc-200 select-all truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors ml-2 shrink-0 cursor-pointer"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copied && (
              <span className="text-[11px] font-mono text-emerald-400 block animate-in fade-in">
                ✓ Email copied to clipboard!
              </span>
            )}
          </div>

          {/* Location & Timezone Box */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
              <div>
                <span className="text-xs font-mono text-zinc-400 block">
                  Location
                </span>
                <span className="text-sm font-medium text-white">
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-[11px] text-zinc-400 block mt-0.5">
                  Available for remote work &amp; relocation
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-white/[0.04]">
              <Clock className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
              <div>
                <span className="text-xs font-mono text-zinc-400 block">
                  Response Window
                </span>
                <span className="text-sm font-medium text-white">
                  Typically within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Social Presence */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              Find Me Online
            </span>
            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] text-xs text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>GitHub / imakshat27</span>
                </div>
                <span className="text-sky-400 text-[11px] font-mono">View ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] text-xs text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn / in/imakshat27</span>
                </div>
                <span className="text-sky-400 text-[11px] font-mono">Connect ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] text-xs text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Twitter className="w-4 h-4 text-sky-400" />
                  <span>X (Twitter) / @imakshat_27</span>
                </div>
                <span className="text-sky-400 text-[11px] font-mono">Follow ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
