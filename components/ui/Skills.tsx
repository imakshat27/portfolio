export default function Skills(){
    return (
        <>
        <div className="min-h-screen">
        <div className="text-2xl items-center font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white mb-40 mt-20">
        Skills
        </div>
        <div className="flex flex-wrap content-center justify-center gap-10">
        <img src="/skills/java.png" alt="Java" className="w-24 h-24"/>
        <img src="/skills/python.png" alt="Python" className="w-24 h-24"/>
        <img src="/skills/cpp.png" alt="C++" className="w-24 h-24"/>
        <img src="/skills/javascript.png" alt="JavaScript" className="w-24 h-24"/>
        <img src="/skills/react.png" alt="React" className="w-24 h-24"/>
        <img src="/skills/nodejs.png" alt="Node.js" className="w-24 h-24"/>
        <img src="/skills/html.png" alt="HTML" className="w-24 h-24"/>
        <img src="/skills/css.png" alt="CSS" className="w-24 h-24"/>
        </div>
        </div>
        </>
    );
}