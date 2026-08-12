"use client";

import React, { useState } from "react";
import SectionHeading from "../ui/section-heading";
import { projectsData, miniProjectsData } from "@/lib/data";
import ProjectCard from "../ui/project-card";
import MiniProjectCard from "../ui/mini-project-card";
import { useSectionInView } from "@/lib/hooks";
import SectionSubheading from "../ui/section-subheading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [canOpenModal, setCanOpenModal] = useState(true);

  const handleModalClose = () => {
    setCanOpenModal(false);
    setTimeout(() => {
      setCanOpenModal(true);
    }, 500);
  };

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard
              {...project}
              canOpenModal={canOpenModal}
              onModalClose={handleModalClose}
            />
          </React.Fragment>
        ))}
      </div>

      <SectionSubheading>and also...</SectionSubheading>

      <div className="flex flex-wrap justify-center gap-4">
        {miniProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <div className="w-40 sm:w-64">
              <MiniProjectCard
                {...project}
                canOpenModal={canOpenModal}
                onModalClose={handleModalClose}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
