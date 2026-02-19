import Hero from '@/components/ui/Hero';
import Projects from '@/components/ui/Projects';
import Contact from '@/components/ui/Contact';
import Skills from '@/components/ui/Skills';
import { NavbarDemo } from '@/components/NavbarDemo';

export default function Home() {
  return (
    <>
      <div className="relative font-sans overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <NavbarDemo />
          <Hero />
          <section id="skills" className="w-full py-20">
            <Skills />
          </section>
          <section id="projects" className="w-full py-20">
            <Projects />
          </section>
          <section id="contact" className="w-full py-20">
            <Contact />
          </section>
        </div>
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-10">&copy; 2026 Akshat Agarwal. All Rights Reserved.</p>
    </>
  );
}
