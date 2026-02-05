import TiltedCard from "../TiltedCard";

export default function Projects(){
    return (
        <>
        <div className="min-h-screen">
        <div className="text-2xl items-center font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white mb-40 mt-20">
        Projects
        </div>
        <div className="flex flex-wrap content-center justify-center gap-10">
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
    </>
    )

}