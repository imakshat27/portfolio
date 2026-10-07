"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-width nav-bar">
        <Link
          href="/"
          className="wordmark"
          onClick={() => setOpen(false)}
          aria-label="Akshat Agarwal home"
        >
          akshat<span> / </span>
          <small>the sketchbook</small>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {LINKS.map(([label, id]) => (
            <a key={id} href={`/#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noreferrer"
        >
          Résumé <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav site-width"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              (
                document.querySelector(".menu-toggle") as HTMLButtonElement
              )?.focus();
            }
          }}
        >
          {LINKS.map(([label, id]) => (
            <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
