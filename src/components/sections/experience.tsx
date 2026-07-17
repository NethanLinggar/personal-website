"use client";

import React from "react";
import SectionHeading from "../ui/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "../ui/vertical-timeline";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              isFirst={index === 0}
              icon={item.icon}
            >
              <h3 className="text-lg font-semibold dark:text-white sm:text-xl md:text-2xl">
                {item.title}
              </h3>
              <p className="!mt-1 text-sm font-semibold text-dark-gray dark:text-white/70 sm:text-base">
                {item.company}
              </p>
              <div className="!mt-2 flex flex-wrap gap-x-2 text-xs text-dark-gray dark:text-white/70 sm:gap-x-3 sm:text-sm">
                <p>{item.date}</p>
                <span>•</span>
                <p>{item.location}</p>
                {"locationType" in item && item.locationType && (
                  <>
                    <span>•</span>
                    <p>{item.locationType}</p>
                  </>
                )}
              </div>
              <p className="!mt-3 text-sm leading-relaxed text-dark-gray dark:text-white/70 sm:!mt-4 sm:leading-relaxed md:text-base">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
