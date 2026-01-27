import PillNav from '@/components/PillNav';
import LightRays from '@/components/LightRays';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import InfiniteMenu from '@/components/InfiniteMenu';

export default function Home() {
  const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://github.com/imakshat27',
    title: 'Project 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://github.com/imakshat27',
    title: 'Project 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://github.com/imakshat27',
    title: 'Project 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://github.com/imakshat27',
    title: 'Project 4',
    description: 'This is pretty cool, right?'
  }
];
  return (
    <>
    <div className="relative min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
    <LightRays
      raysOrigin="top-center"
      raysColor="#ffffff"
      raysSpeed={1}
      lightSpread={1}
      rayLength={2}
      pulsating={false}
      fadeDistance={1.5}
      saturation={0.5}
      followMouse
      mouseInfluence={0.05}
      noiseAmount={0}
      distortion={0}
    />

</div>
      <div className="relative z-10 flex flex-col items-center">
      <PillNav
        logo='/logo.png'
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '#about' },
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
      <div id="about" className="w-full z-30 mt-20 mb-20">
        <About />
      </div>
      <div id="projects" className="w-full z-30">
      <div className="text-2xl items-center font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white mb-10">
        Projects
      </div>
<div style={{ height: '90vh', position: 'relative' }}>
  <InfiniteMenu items={items}
    scale={1}
/>
</div>
      </div>
      </div>
       
      </div>
    </>
    
  );
}
