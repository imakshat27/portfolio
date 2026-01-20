'use client'
import PillNav from '@/components/PillNav';
import logo from '@/public/logo.svg';

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <PillNav
        logo={logo}
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
      
      hi
    </div>
  );
}
