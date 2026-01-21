import PillNav from '@/components/PillNav';

export default function Home() {
  return (
    <>
    <div className="flex justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
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
      <div>
        <h1 className="text-5xl font-bold text-blue-100 mt-50">Hi, I'm Akshat</h1>
      </div>
      </div>
    </>
    
  );
}
