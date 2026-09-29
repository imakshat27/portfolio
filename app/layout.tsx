import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshat Agarwal — Full-Stack Engineer & AI Systems",
  description:
    "Software Development Lead at Sstudize Labs & R&D Intern at Samsung PRISM. Focused on scalable web architectures, autonomous agents, and high-performance software.",
  keywords: [
    "Akshat Agarwal",
    "Software Engineer",
    "Full Stack Developer",
    "AI Systems",
    "Next.js",
    "React",
    "Autonomous Agents",
    "VIT Vellore",
  ],
  authors: [{ name: "Akshat Agarwal" }],
  openGraph: {
    title: "Akshat Agarwal — Full-Stack Engineer & AI Systems",
    description:
      "Software Development Lead at Sstudize Labs & R&D Intern at Samsung PRISM. Explore experience, projects, skills, and research.",
    type: "website",
    url: "https://aksht.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#08090c] text-zinc-100 min-h-screen flex flex-col relative selection:bg-sky-500/20 selection:text-sky-200`}
      >
        {/* Ambient Top Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 ambient-glow pointer-events-none z-0 opacity-70" />
        
        {/* Subtle grid pattern */}
        <div className="fixed inset-0 subtle-grid pointer-events-none opacity-40 z-0" />

        <div className="relative z-10 flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
