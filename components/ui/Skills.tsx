import { Badge } from "@/components/ui/badge";

const skills = {
  "Languages": [
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "Python", icon: "/python.png" },
    { name: "Java", icon: "/java.png" },
    { name: "C++", icon: "/cpp.png" },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: "/react.png" },
    { name: "Node.js", icon: "/nodejs.png" },
    { name: "Next.js", icon: "/nextjs.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
  ],
  "Tools": [
    { name: "Git", icon: "/github.png" },
    { name: "Vercel", icon: "/vercel.svg" },

  ]
};

export default function Skills() {
  return (
    <>
      <div className="mb-40">
        <div className="text-2xl items-center font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white mb-20 mt-20">
          Skills
        </div>
        <div className="flex flex-col items-center gap-10">
          {Object.entries(skills).map(([category, skills]) => (
            <div key={category} className="w-full max-w-4xl">
              <h3 className="text-xl md:text-2xl font-semibold text-center text-black dark:text-white mb-5">{category}</h3>
              <div className="flex flex-wrap content-center justify-center gap-4">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="default" className="flex items-center gap-2 px-4 py-2 text-lg">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6"/>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );


}