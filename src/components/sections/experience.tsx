"use client";

import React, { useContext, useEffect, useState } from 'react'
import SectionHeading from '../ui/section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.2)
  const { theme } = useTheme()

  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => { if (inView && !hasAnimated) { setHasAnimated(true); } }, [inView]);

  return <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
    <SectionHeading>My Experience</SectionHeading>
    <VerticalTimeline lineColor="">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={hasAnimated ? true : inView}
            className="sm:even:!pl-4 sm:odd:!pr-4"
            contentStyle={{
              background: theme === "light" ? "rgba(43, 44, 40, 0.1)" : "rgba(232, 235, 234, 0.1)",
              boxShadow: "none",
              textAlign: "left",
              padding: "1.3rem 2rem"
            }}
            contentArrowStyle={{
              borderRight: theme === "light" ? "0.4rem solid rgba(43, 44, 40, 0.1)" : "0.4rem solid rgba(232, 235, 234, 0.1)"
            }}
            date={item.date}
            dateClassName="sm:!ml-6 sm:!mr-6"
            icon={item.icon}
            iconStyle={{
              background: theme === "light" ? "#E8EBEA" : "#0A0A0A",
              color: theme === "light" ? "#0A0A0A" : "#E8EBEA",
              fontSize: "1.5rem",
              boxShadow: theme === "light" ? "0 0 0 2px #151515" : "0 0 0 2px #2B2C28"
            }}
          >
            <h3 className="font-bold capitalize dark:text-white">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  </section>

}
