"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center text-sm leading-8 sm:text-base sm:leading-8 sm:mb-32 scroll-mt-28 dark:text-white'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        At the time of this writing, I am really excited on making a career for myself in <span className="font-medium">Software Engineering</span>. I just had graduated from <span className="font-medium">Sepuluh Nopember Institute of Technology</span> earning my <span className="underline">Bachelor's degree</span> in <span className="italic">Computer Science</span>. As a critical thinker and enthusiastic person, I'm always on the lookout for chances to grow my <span className="italic">hard and soft skills</span>. I'm into both <span className="font-medium">Software Development</span> and <span className="font-medium">Machine Learning</span>.
      </p>

      <p>
        Outside of <span className="italic">coding</span>, I have various <span className="font-medium">hobbies</span>, including playing video games, watching a movie or TV series, listening to music, and reading comics. Do mention those to me if we ever meet in person!
      </p>

    </motion.section>
  )
}
