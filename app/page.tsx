import PillNav from '@/components/PillNav';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Projects from '@/components/ui/Projects';
import Contact from '@/components/ui/Contact';
import Skills from '@/components/ui/Skills';

export default function Home() {
  return (
    <>
    <div className="relative min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
      <PillNav
        logo='/logo.png'
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation={true}
      />
      <Hero />
      <div id="skills" className="w-full z-30 mt-20 mb-20">
        <Skills />
      </div>
      <div id="projects" className="w-full z-30 mt-20 mb-20">
        <Projects />
      </div>
      <div id="contact" className="w-full min-h-screen z-30 flex items-center">
          <Contact />
      </div>
      </div>
       
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-10">&copy; 2026 Akshat Agarwal. All Rights Reserved.</p>
    </>
    
  );
}
