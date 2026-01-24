import PillNav from '@/components/PillNav';
import LightRays from '@/components/LightRays';

export default function Home() {
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
        logo='/logo.svg'
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
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 gap-8">
        <div className='flex flex-col text-center lg:text-left'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-100">Akshat<br/>Agarwal</h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-200 mt-4">Web Developer</p>
        <div className="flex justify-center lg:justify-center gap-6 mt-6">
        <a href="https://github.com/imakshat27"><img src="/github.png" alt="Github" className="w-10 h-10 sm:w-10 sm:h-10" /></a>
        <a href="https://linkedin.com/in/imakshat27"><img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10 sm:w-10 sm:h-10" /></a>
        <a href="https://x.com/imakshat_27"><img src="/twitter.png" alt="Twitter" className="w-10 h-10 sm:w-10 sm:h-10" /></a>
        </div>
      </div>
      <img src="/carricature.png" alt="Profile Picture" className="w-48 sm:w-64 md:w-70 lg:w-70 h-auto rounded-full" />
      </div>
      
      
      </div>
      </div>
    </>
    
  );
}
