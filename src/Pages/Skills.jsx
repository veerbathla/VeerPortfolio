import { Code2, Server, Database, Terminal, GitBranch } from "lucide-react";
import SkillCard from "../components/SkillCard";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    accent: "bg-blue-50 text-blue-600",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "bg-emerald-50 text-emerald-600",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    icon: Database,
    accent: "bg-violet-50 text-violet-600",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    accent: "bg-amber-50 text-amber-600",
    skills: ["JavaScript", "Java", "C++", "C"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    accent: "bg-rose-50 text-rose-600",
    skills: ["Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative w-full min-h-screen overflow-hidden bg-white pt-28 sm:pt-32 pb-20 px-4">

      {/* Decorative background accents */}
      <div className="absolute top-24 -left-32 w-72 h-72 bg-blue-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 -right-32 w-72 h-72 bg-rose-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-500 mb-4">
            What I work with
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            My Skills
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            A toolkit built across the stack, from crafting clean interfaces to designing
            and shipping the systems that power them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              accent={category.accent}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;