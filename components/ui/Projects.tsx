import TiltedCard from "../TiltedCard";

const projects = [
  {
    href: "https://github.com/imakshat27/movie-vault",
    imageSrc: "/movie-vault.png",
    altText: "Movie Vault",
    captionText: "Movie Vault",
    overlayContent: "Movie Vault",
  },
  {
    href: "https://github.com/imakshat27/closestpathinc",
    imageSrc: "/dijstraship.png",
    altText: "DijstraShip",
    captionText: "DijstraShip",
    overlayContent: "DijstraShip",
  },
  {
    href: "https://github.com/imakshat27/hotel-booking",
    imageSrc: "/uncleartrip.png",
    altText: "UnclearTrip",
    captionText: "UnclearTrip",
    overlayContent: "UnclearTrip",
  },
  {
    href: "https://github.com/imakshat27",
    imageSrc: "/lineup.png",
    altText: "LineUp",
    captionText: "LineUp",
    overlayContent: "LineUp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-2xl items-center font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white mb-20">
          Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project) => (
            <a href={project.href} key={project.href}>
              <div className="aspect-w-1 aspect-h-1">
                <TiltedCard
                  imageSrc={project.imageSrc}
                  altText={project.altText}
                  captionText={project.captionText}
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip
                  displayOverlayContent
                  overlayContent={
                    <p className="tilted-card-demo-text bg-accent rounded-2xl px-5 py-2">
                      {project.overlayContent}
                    </p>
                  }
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}