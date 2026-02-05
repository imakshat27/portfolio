import TiltedCard from "../TiltedCard";

export default function Projects(){
    return (
        <>
        <div className="min-h-screen">
        <div className="text-2xl items-center font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white mb-40 mt-20">
        Projects
        </div>
        <div className="flex flex-wrap content-center justify-center gap-10">
        <a href="https://github.com/imakshat27/movie-vault">
        <TiltedCard
        imageSrc="/movie-vault.png"
        altText="Movie Vault"
        captionText="Movie Vault"
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
            Movie Vault
            </p>
        }
        />
        </a>
        <a href="https://github.com/imakshat27/closestpathinc">
        <TiltedCard
        imageSrc="/dijstraship.png"
        altText="DijstraShip"
        captionText="DijstraShip"
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
            DijstraShip
            </p>
        }
        />
        </a>
        <a href="https://github.com/imakshat27/hotel-booking">
        <TiltedCard
        imageSrc="/uncleartrip.png"
        altText="UnclearTrip"
        captionText="UnclearTrip"
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
            Uncleartrip
            </p>
        }
        />
        </a>
        <a href="https://github.com/imakshat27">
        <TiltedCard
        imageSrc="/lineup.png"
        altText="LineUp"
        captionText="LineUp"
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
            LineUp
            </p>
        }
        />
        </a>
        </div>
        </div>
    </>
    )

}