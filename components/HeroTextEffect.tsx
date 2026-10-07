"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";

const ROLES = [
  "Full-Stack Engineer & Systems Builder",
  "Autonomous LLM Agent Researcher",
  "Software Lead @ Sstudize Labs (500+ Users)",
  "Samsung PRISM R&D (Autonomous Web Agents)",
];

export default function HeroTextEffect() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-medium min-h-[2rem]">
      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-400 shrink-0">
        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
      </div>
      <div className="relative overflow-hidden py-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 16, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -16, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent font-medium"
          >
            {ROLES[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
