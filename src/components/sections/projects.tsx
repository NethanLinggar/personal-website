"use client";

import React, { useState } from "react";
import SectionHeading from "../ui/section-heading";
import { projectsData } from "@/lib/data";
import ProjectCard from "../ui/project-card";
import { useSectionInView } from "@/lib/hooks";

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
    </section>
  );
}
