"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";

const CATEGORIES = [
  "All",
  "AI & LLMs",
  "Full Stack",
  "Systems & Algorithms",
] as const;

export default function ProjectGallery() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const projects = PROJECTS.filter(
    (project) => category === "All" || project.category === category,
  );
  return (
    <>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects"
      >
        {CATEGORIES.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Showing {projects.length} projects
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1160px) calc((100vw - 80px) / 2), 530px"
                loading="lazy"
              />
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Try it out <ArrowUpRight size={18} aria-hidden="true" />
                    <span className="sr-only">: {project.title}</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={16} aria-hidden="true" />{" "}
                    {project.githubUrl === PERSONAL_GITHUB
                      ? "GitHub profile"
                      : "Source code"}
                    <span className="sr-only">: {project.title}</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
const PERSONAL_GITHUB = "https://github.com/imakshat27";
