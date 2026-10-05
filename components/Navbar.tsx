"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Github, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4">
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "bg-neutral-950/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/40 py-2.5 px-4 sm:px-5"
            : "bg-neutral-950/40 backdrop-blur-md border border-white/[0.05] py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d0e12] border border-white/[0.12] text-white font-bold text-sm shadow-sm overflow-hidden group-hover:border-white/[0.25] transition-colors">
              <span className="font-sans font-bold text-sm tracking-tight text-zinc-100">A</span>
              <span className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Akshat Agarwal
              </span>
              <span className="text-[10px] tracking-wide text-zinc-400 font-mono flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                SWE &amp; AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/[0.05]">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/[0.12] shadow-sm font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Resume & Contact / Mobile Menu button */}
          <div className="flex items-center gap-2.5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg border bg-white/[0.04] hover:bg-white/[0.09] text-zinc-300 hover:text-white border-white/[0.08] transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1 text-xs font-medium px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/20 hover:border-sky-500/30 transition-all duration-200"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-white/[0.08] mt-3 space-y-1 animate-in fade-in duration-200">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "text-white bg-white/[0.1] font-medium"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  )}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between px-1">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-white/[0.06] text-white border border-white/[0.1]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume (PDF)</span>
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/imakshat27"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.05]"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com/in/imakshat27"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.05]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
