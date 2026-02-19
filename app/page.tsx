import PillNav from '@/components/PillNav';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Projects from '@/components/ui/Projects';
import Contact from '@/components/ui/Contact';
import Skills from '@/components/ui/Skills';
import { NavbarDemo } from '@/components/NavbarDemo';
import PixelTrail from '@/components/PixelTrail';

export default function Home() {
  return (
    <>
      <div className="relative bg-zinc-50 font-sans dark:bg-black overflow-hidden">
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
