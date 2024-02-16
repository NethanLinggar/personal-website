"use client";

import React, { useEffect } from 'react';
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
        Right now, I'm in the middle of getting my <span className="underline">Bachelor's degree</span> in <span className="italic">Computer Science</span> at <span className="font-medium">Sepuluh Nopember Institute of Technology</span>. I'm a bit of a critical thinker, and I'm super hyped about making a career in this field. I'm always on the lookout for chances to level up my <span className="italic">technical skills</span> and work on those <span className="italic">soft skills</span> too. I'm really into stuff like <span className="font-medium">Software Development</span> and <span className="font-medium">Machine Learning</span>. The whole idea of <span className="italic">pushing the envelope</span> in Software Development really excites me, and Machine Learning? That's where the <span className="italic">real magic</span> happens. As I keep on this academic journey, my goal is to be <span className="underline">a part of tech's evolution</span> and make <span className="underline">a good impact</span> on the world.
      </p>
      
      <p>
       Outside of <span className="italic">coding</span>, I have various <span className="font-medium">hobbies</span>, including playing video games, watching movies, listening to music, and reading comics. I derive great satisfaction from <span className="font-medium">learning new things</span>, as I believe it's essential to remain <span className="underline">aware of our surroundings</span> beyond our comfort zone and typical workplace.
      </p>
      
    </motion.section>
  )
}
