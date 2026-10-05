"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ExperienceRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#experience");
  }, [router]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-3 px-4 text-center">
      <meta httpEquiv="refresh" content="0; url=/#experience" />
      <p className="text-xs font-mono text-zinc-400">Navigating to Experience...</p>
      <Link
        href="/#experience"
        className="text-xs font-medium text-white underline underline-offset-4"
      >
        Click here if not redirected
      </Link>
    </div>
  );
}
