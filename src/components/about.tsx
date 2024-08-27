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
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I recently graduated <span className="italic">cum laude</span> with a <span className="font-medium">GPA of 3.62</span>, earning my <span className="underline">Bachelor's degree</span> in <span className="italic">Computer Science</span> from <span className="font-medium">Sepuluh Nopember Institute of Technology</span>. Right now, I am really excited on making a career for myself in Software Engineering. As a critical thinker and enthusiastic person, I'm always on the lookout for chances to grow my <span className="italic">hard and soft skills</span>. I'm into <span className="font-medium">Software Development</span> and <span className="font-medium">Machine Learning</span>. <span className="italic">Creating things</span> in Software Development and <span className="italic">understanding while processing data</span> through Machine Learning <span className="underline">really draws me</span> into it.
      </p>
      
      <p>
       Outside of <span className="italic">coding</span>, I have various <span className="font-medium">hobbies</span>, including playing video games, watching a movie or TV series, listening to music, and reading comics. I derive great satisfaction from <span className="font-medium">learning new things</span>, as I believe it's essential to remain <span className="underline">aware of our surroundings</span> beyond our comfort zone and typical workplace.
      </p>
      
    </motion.section>
  )
}
