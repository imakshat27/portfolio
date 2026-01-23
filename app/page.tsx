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
      fadeDistance={1.0}
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
      <div className='flex flex-col items-center mt-32 text-center'>
        <h1 className="text-5xl font-bold text-blue-100 mt-40">Hi, I'm Akshat</h1>
        <p className="text-2xl text-blue-200 mt-4">A passionate developer building web experiences.</p>
      </div>
      </div>
      </div>
    </>
    
  );
}
