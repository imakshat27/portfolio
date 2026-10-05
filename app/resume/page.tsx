"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    window.location.replace("/resume.pdf");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 px-4">
      <meta httpEquiv="refresh" content="0; url=/resume.pdf" />
      <p className="text-zinc-300 text-sm">Opening Resume (PDF)...</p>
      <a
        href="/resume.pdf"
        className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-medium transition-colors"
      >
        Click here if not redirected automatically
      </a>
    </div>
  );
}
