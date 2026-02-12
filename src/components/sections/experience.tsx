"use client";

import React from "react";
import SectionHeading from "../ui/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "../ui/vertical-timeline";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              isFirst={index === 0}
              lineColor={
                theme === "light"
                  ? "rgba(43, 44, 40, 0.2)"
                  : "rgba(232, 235, 234, 0.2)"
              }
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgba(43, 44, 40, 0.2)"
                    : "rgba(232, 235, 234, 0.1)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid rgba(255, 255, 255, 0.05)"
                    : "1px solid rgba(255, 255, 255, 0.05)",
                textAlign: "left",
                padding: "1.75rem 2rem",
                borderRadius: "0.5rem",
              }}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "rgba(43, 44, 40, 0.2)"
                    : "rgba(232, 235, 234, 0.1)",
                color: theme === "light" ? "#0A0A0A" : "#E8EBEA",
                fontSize: "1.5rem",
                border:
                  theme === "light"
                    ? "1px solid rgba(255, 255, 255, 0.05)"
                    : "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
              }}
            >
              <h3 className="text-2xl font-semibold dark:text-white">
                {item.title}
              </h3>
              <p className="!mt-1 font-semibold text-dark-gray dark:text-white/70">
                {item.company}
              </p>
              <div className="!mt-2 flex flex-wrap gap-x-3 text-sm text-dark-gray dark:text-white/70">
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
              <p className="!mt-4 text-sm leading-relaxed text-dark-gray dark:text-white/70 sm:text-base sm:leading-relaxed">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
