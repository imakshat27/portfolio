"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

const NAV_ITEMS = [
  { name: "About", href: "/#about", sectionId: "about" },
  { name: "Experience", href: "/#experience", sectionId: "experience" },
  { name: "Activity", href: "/#contributions", sectionId: "contributions" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Skills", href: "/#skills", sectionId: "skills" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      if (pathname === "/") {
        const sections = NAV_ITEMS.map((item) => item.sectionId);
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            return;
          }
        }
        if (window.scrollY < 200) {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on page or hash change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4">
      <div
        className={`mx-auto max-w-5xl transition-all duration-300 rounded-full ${
          isScrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/50 py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] py-2.5 sm:py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs font-semibold text-zinc-100 group-hover:border-white/25 transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                Akshat Agarwal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (pathname === "/" && item.href.startsWith("/#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-zinc-100 bg-white/[0.1] shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Resume & Socials / Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 hover:text-white transition-all duration-200"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>

            <div className="hidden sm:flex items-center gap-1 pl-1 border-l border-white/[0.08]">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Modal */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-4 rounded-3xl bg-zinc-950/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (pathname === "/" && item.href.startsWith("/#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-white bg-white/[0.1]"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between px-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.08]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.08]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
