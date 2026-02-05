"use client";

import SectionHeading from "../ui/section-heading";
import { skillsData, type SkillCategory } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Marquee from "react-fast-marquee";

function getCategoryColorClass(category: SkillCategory): string {
  switch (category) {
    case "Programming Languages":
      return "border-blue-500/30 hover:bg-blue-500 dark:border-blue-400/30 dark:hover:bg-blue-400 hover:text-white dark:hover:text-black";
    case "Frontend":
      return "border-purple-500/30 hover:bg-purple-500 dark:border-purple-400/30 dark:hover:bg-purple-400 hover:text-white dark:hover:text-black";
    case "Backend":
      return "border-green-500/30 hover:bg-green-500 dark:border-green-400/30 dark:hover:bg-green-400 hover:text-white dark:hover:text-black";
    case "Mobile":
      return "border-orange-500/30 hover:bg-orange-500 dark:border-orange-400/30 dark:hover:bg-orange-400 hover:text-white dark:hover:text-black";
    case "Database":
      return "border-cyan-500/30 hover:bg-cyan-500 dark:border-cyan-400/30 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-black";
    case "Machine Learning/AI":
      return "border-pink-500/30 hover:bg-pink-500 dark:border-pink-400/30 dark:hover:bg-pink-400 hover:text-white dark:hover:text-black";
    case "Embedded/IoT":
      return "border-amber-500/30 hover:bg-amber-500 dark:border-amber-400/30 dark:hover:bg-amber-400 hover:text-white dark:hover:text-black";
    case "DevOps/Tools":
      return "border-slate-500/30 hover:bg-slate-500 dark:border-slate-400/30 dark:hover:bg-slate-400 hover:text-white dark:hover:text-black";
    case "Project Management":
      return "border-indigo-500/30 hover:bg-indigo-500 dark:border-indigo-400/30 dark:hover:bg-indigo-400 hover:text-white dark:hover:text-black";
  }
}

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  const rows = 4;
  const skillsPerRow = Math.ceil(skillsData.length / rows);
  const skillRows = Array.from({ length: rows }, (_, i) =>
    skillsData.slice(i * skillsPerRow, (i + 1) * skillsPerRow),
  );

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 w-full max-w-[54rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="relative flex flex-col gap-6">
        {skillRows.map((rowSkills, rowIndex) => (
          <div className="relative overflow-hidden" key={rowIndex}>
            {/* Gradient overlays */}
            <div className="to-transparent pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white dark:from-[#0b0b0b]" />
            <div className="to-transparent pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white dark:from-[#0b0b0b]" />

            <Marquee
              autoFill={true}
              gradient={false}
              pauseOnHover={true}
              speed={20}
              direction={rowIndex % 2 === 0 ? "left" : "right"}
            >
              {rowSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`text-gray-800 mx-2 inline-block rounded-xl border bg-light-gray/10 px-5 py-3 text-base transition-colors dark:bg-white/10 dark:text-white sm:text-lg ${getCategoryColorClass(skill.category)}`}
                >
                  {skill.name}
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  );
}
