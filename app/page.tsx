import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Mail,
  MoveUpRight,
} from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import {
  EXPERIENCES,
  PERSONAL_INFO,
  SKILL_CATEGORIES,
} from "@/lib/portfolio-data";

function Chapter({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className="chapter-heading">
      <span className="chapter-number" aria-hidden="true">
        {number}
      </span>
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function InkDrawing() {
  return (
    <svg
      viewBox="0 0 440 410"
      fill="none"
      aria-hidden="true"
      className="ink-drawing"
    >
      <defs>
        <pattern id="dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity=".25" />
        </pattern>
      </defs>
      <path
        d="M52 78L111 127M33 138L105 158M81 39L136 112M340 62L298 129M394 111L324 156M405 190L336 192M351 310L315 280M70 289L114 263"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M55 105L105 139M380 141L329 167M367 286L327 261M88 61L122 115"
        stroke="currentColor"
      />
      <ellipse cx="232" cy="326" rx="135" ry="23" fill="url(#dots)" />
      <path
        d="M136 164L297 151L320 263L157 277Z"
        fill="var(--paper)"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M148 177L286 166L303 249L164 262Z" fill="var(--ink)" />
      <path
        d="M199 197L184 212L203 223M257 190L273 203L258 218M239 184L221 233"
        stroke="var(--paper)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M157 277L320 263L347 294L184 314L125 289L157 277Z"
        fill="var(--paper)"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M168 284L314 273M182 292L322 281M193 302L246 295"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M98 238L78 235L83 275Q89 295 112 292Q131 289 126 274L119 233L98 238Z"
        fill="var(--accent)"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M80 248Q61 238 62 256Q64 272 83 268M97 221Q86 213 97 202M111 218Q101 208 111 195"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M323 107L338 87L343 111L367 117L344 125L338 149L328 127L306 122Z"
        fill="var(--accent)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M183 81Q220 61 260 82M257 76L262 83L252 87"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="site-width">
      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-meta">
          <span className="eyebrow">A little corner of the internet</span>
          <span className="eyebrow">Vellore, India ↗</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hello-note">Hey there, I’m</p>
            <h1 id="intro-title">
              Akshat<span className="name-period">.</span>
              <span className="sr-only"> Agarwal — software developer</span>
            </h1>
            <p className="hero-description">
              I make things for the web.
              <br />
              Sometimes they’re useful.
              <br />
              Sometimes I just want to see what happens.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="ink-button">
                Explore my projects <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a href="#about" className="text-link">
                Meet the person <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-caption">
              <span>FIG. 01</span>
              <span>IDEA → BUILD → REPEAT</span>
            </div>
            <InkDrawing />
            <span className="drawing-note">Something starts here.</span>
            <div className="panel-footer">
              <span>Currently exploring</span>
              <strong>Web apps &amp; AI agents</strong>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Developer. Student. Work in progress.</span>
          <span>
            Scroll for the rest of the story{" "}
            <ArrowDown size={14} aria-hidden="true" />
          </span>
        </div>
      </section>

      <section id="about" className="chapter about-section">
        <Chapter
          number="01"
          label="Behind the screen"
          title="A person, then a portfolio."
        />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I’m Akshat Agarwal, a software developer and IT student at VIT
              Vellore. This is where I keep the things I’ve made, what I’m
              learning, and a few chapters of my journey.
            </p>
            <p>
              I’m interested in how things work: from the interface you click to
              the systems behind it. Lately that’s meant building web apps and
              exploring how AI agents interact with browsers.
            </p>
            <p className="handwritten">There’s always another idea to try.</p>
          </div>
          <aside className="margin-note">
            <p className="eyebrow">A note in the margin</p>
            <h3>
              Still learning.
              <br />
              Still building.
            </h3>
            <p>
              {PERSONAL_INFO.education.degree}
              <br />
              VIT Vellore · {PERSONAL_INFO.education.period}
            </p>
            <details>
              <summary>The academic details</summary>
              <p>CGPA: {PERSONAL_INFO.education.cgpa}</p>
              <p>{PERSONAL_INFO.education.coursework.join(" · ")}</p>
            </details>
          </aside>
        </div>
      </section>

      <section id="projects" className="chapter">
        <Chapter
          number="02"
          label="The experiment shelf"
          title="Things I’ve made."
        />
        <p className="section-intro">
          A mix of practical problems, curious ideas, and learning by doing.
        </p>
        <ProjectGallery />
      </section>

      <section id="experience" className="chapter">
        <Chapter
          number="03"
          label="Along the way"
          title="A few chapters of work."
        />
        <p className="section-intro">
          The people, teams, and problems I’ve been learning from. Open a
          chapter for the details.
        </p>
        <div className="experience-list">
          {EXPERIENCES.map((experience, index) => (
            <details className="experience-item" key={experience.id}>
              <summary>
                <span className="experience-index">0{index + 1}</span>
                <span className="experience-heading">
                  <strong>{experience.company}</strong>
                  <span>{experience.role}</span>
                </span>
                <span className="experience-period">{experience.period}</span>
                <span className="expand-mark" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="experience-body">
                <p>{experience.summary}</p>
                <ul role="list">
                  {experience.description.map((line) => (
                    <li key={line}>
                      <span className="experience-bullet" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="tag-list">
                  {experience.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
                <p className="stack-note">
                  {experience.technologies.join(" · ")}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="skills" className="chapter">
        <Chapter
          number="04"
          label="In the toolbox"
          title="Tools for the next idea."
        />
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.category} className="skill-panel">
              <h3>{category.category}</h3>
              <p>{category.items.map((item) => item.name).join(" / ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contributions" className="activity-strip">
        <div>
          <p className="eyebrow">Between the finished projects</p>
          <h2>The work in progress lives on GitHub.</h2>
          <p>Repos, experiments, and the occasional rabbit hole.</p>
        </div>
        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noreferrer"
          className="ink-button secondary"
        >
          <Github size={18} aria-hidden="true" /> Browse GitHub{" "}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>

      <section id="contact" className="chapter contact-section">
        <Chapter
          number="05"
          label="The next chapter"
          title="Got an idea? Say hello."
        />
        <div className="contact-grid">
          <div>
            <p className="contact-description">
              A project, a question, a collaboration, or just a good
              conversation. My inbox is open.
            </p>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="email-link">
              {PERSONAL_INFO.email}
              <MoveUpRight size={24} aria-hidden="true" />
            </a>
            <div className="social-links">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                X / Twitter <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <form
            action="https://formsubmit.co/2a2a3b11f823e4c986bd0f2426b3845a"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="What should I call you?"
                />
              </label>
              <label>
                Your email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label>
              Your message
              <textarea
                name="message"
                rows={4}
                required
                placeholder="What’s on your mind?"
              />
            </label>
            <p className="form-note">
              Sent through FormSubmit. You’ll continue to their confirmation
              page.
            </p>
            <button type="submit" className="ink-button">
              Send a note <Mail size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
