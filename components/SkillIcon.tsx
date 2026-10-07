import React from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiOllama,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import {
  TbApi,
  TbRobot,
  TbBrowser,
  TbDatabaseSearch,
  TbScan,
  TbBinaryTree,
  TbHierarchy,
  TbDatabase,
  TbCpu,
  TbNetwork,
} from "react-icons/tb";
import { Code2 } from "lucide-react";

interface SkillIconProps {
  name: string;
  className?: string;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  // Languages
  Java: FaJava,
  Python: SiPython,
  "C / C++": SiCplusplus,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  SQL: SiPostgresql,
  "HTML & CSS": SiHtml5,

  // Frameworks & Frontend
  "Next.js": SiNextdotjs,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Tailwind CSS": SiTailwindcss,
  "REST APIs": TbApi,

  // Databases & Storage
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Supabase: SiSupabase,

  // AI, Agents & Tooling
  "Autonomous LLM Agents": TbRobot,
  "Browser Automation": TbBrowser,
  "RAG Systems": TbDatabaseSearch,
  "Local LLMs (Ollama/Qwen)": SiOllama,
  "DOM Analysis & Vision": TbScan,

  // Infrastructure & DevOps
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  "Git & GitHub": SiGithub,
  Git: SiGit,
  Postman: SiPostman,
  Vercel: SiVercel,

  // CS Fundamentals
  "Data Structures & Algorithms": TbBinaryTree,
  "Object-Oriented Programming (OOP)": TbHierarchy,
  "Database Management Systems (DBMS)": TbDatabase,
  "Operating Systems": TbCpu,
  "Computer Networks": TbNetwork,
};

export default function SkillIcon({ name, className = "w-3.5 h-3.5" }: SkillIconProps) {
  const IconComponent = ICON_MAP[name] || Code2;
  return <IconComponent className={className} />;
}
