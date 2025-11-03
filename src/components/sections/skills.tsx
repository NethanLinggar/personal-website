"use client";

import React from "react";
import SectionHeading from "../ui/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Marquee from "react-fast-marquee";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  const rows = 4;
  const skillsPerRow = Math.ceil(skillsData.length / rows);
  const skillRows = Array.from({ length: rows }, (_, i) =>
    skillsData.slice(i * skillsPerRow, (i + 1) * skillsPerRow)
  );

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 w-full max-w-[54rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="flex flex-col gap-6 relative">
        {skillRows.map((rowSkills, rowIndex) => (
          <div className="relative overflow-hidden" key={rowIndex}>

            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white dark:from-[#0b0b0b] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white dark:from-[#0b0b0b] to-transparent z-10" />

            <Marquee
              autoFill={true}
              gradient={false}
              speed={20}
              direction={rowIndex % 2 === 0 ? "left" : "right"}
            >
              {rowSkills.map((skill, index) => (
                <div
                  key={index}
                  className="mx-2 inline-block px-5 py-3 text-base sm:text-lg text-gray-800 dark:text-white bg-light-gray/10 dark:bg-white/10 hover:bg-black/90 hover:text-white dark:hover:bg-white/90 dark:hover:text-black rounded-xl"
                >
                  {skill}
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  );
}
