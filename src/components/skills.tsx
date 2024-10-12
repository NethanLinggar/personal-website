"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  inital: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5)

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[54rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-gray-800">
        {
          skillsData.map((skill, index) => (
            <motion.li
              className="bg-light-gray/10 hover:bg-black/90 hover:text-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/90 dark:hover:text-black dark:border-white/[0.1]"
              key={index}
              variants={fadeInAnimationVariants}
              initial="inital"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
