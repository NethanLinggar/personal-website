"use client";

import { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

type ProjectProps = typeof projectsData[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section
        className='max-w-[62rem] rounded-lg overflow-visible sm:pr-8 relative sm:h-[20rem] transition sm:group-even:p-'
      >
        <div className='absolute inset-0 sm:top-8 bg-light-gray/20 group-hover:bg-light-gray/10 group-hover:bg-gray-200 dark:bg-white/10 dark:group-hover:bg-white/20 rounded-lg transition'></div>
        <div className='relative pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-16 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[50%]'>
          <h3 className='text-2xl font-semibold dark:text-white'>{title}</h3>
          <p className='mt-2 leading-relaxed text-dark-gray dark:text-white/70 text-sm sm:text-base sm:leading-relaxed'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="absolute hidden sm:block top-0 bottom-0 right-0 w-1/2 
          overflow-hidden
          group-even:right-[initial] group-even:left-0"
        >
          <Image
            src={imageUrl}
            alt="Project I Worked On"
            quality={95}
            className="
              absolute top-5 left-1/2 -translate-x-1/2 
              w-[75%] min-w-[300px]
              transition
              group-hover:scale-[1.05]
              group-hover:-translate-y-3
            "
          />
        </div>
      </section>
    </motion.div>
  )
};