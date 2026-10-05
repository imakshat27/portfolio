"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SkillsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#skills");
  }, [router]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-3 px-4 text-center">
      <meta httpEquiv="refresh" content="0; url=/#skills" />
      <p className="text-xs font-mono text-zinc-400">Navigating to Skills...</p>
      <Link
        href="/#skills"
        className="text-xs font-medium text-white underline underline-offset-4"
      >
        Click here if not redirected
      </Link>
    </div>
  );
}
