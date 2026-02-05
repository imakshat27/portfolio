import PillNav from '@/components/PillNav';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import TiltedCard from '@/components/TiltedCard';
import Contact from '@/components/ui/Contact';

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
      <div className="text-2xl items-center font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white">
        Projects
      </div>
<div className="flex flex-wrap content-center justify-center gap-10 min-h-screen">
  <a href="https://github.com/imakshat27">
  <TiltedCard
  imageSrc="https://picsum.photos/300"
  altText="Project 1"
  captionText="Project 1"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text bg-accent rounded-2xl px-5 py-2">
      Project 1
    </p>
  }
/>
</a>
<a href="https://github.com/imakshat27">
<TiltedCard
  imageSrc="https://picsum.photos/300"
  altText="Project 1"
  captionText="Project 1"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text bg-accent rounded-2xl px-5 py-2">
      Project 1
    </p>
  }
  />
  </a>
  <a href="https://github.com/imakshat27">
  <TiltedCard
  imageSrc="https://picsum.photos/300"
  altText="Project 1"
  captionText="Project 1"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text bg-accent rounded-2xl px-5 py-2">
      Project 1
    </p>
  }
  />
  </a>
  <a href="https://github.com/imakshat27">
  <TiltedCard
  imageSrc="https://picsum.photos/300"
  altText="Project 1"
  captionText="Project 1"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text bg-accent rounded-2xl px-5 py-2">
      Project 1
    </p>
  }
  />
  </a>
</div>
      </div>
      <div id="contact" className="w-full min-h-screen z-30 flex items-center">
          <Contact />
      </div>
      </div>
       
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400">&copy; 2026 Akshat Agarwal. All Rights Reserved.</p>
    </>
    
  );
}
