"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[62rem] overflow-visible rounded-lg transition sm:h-[20rem] sm:pr-8">
        <div className="group-hover:bg-gray-200 absolute inset-0 rounded-lg bg-light-gray/20 transition group-hover:bg-light-gray/10 dark:bg-white/10 dark:group-hover:bg-white/20 sm:top-8"></div>
        <div className="relative flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-16 sm:group-even:ml-[50%]">
          <h3 className="text-2xl font-semibold dark:text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-dark-gray dark:text-white/70 sm:text-base sm:leading-relaxed">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 right-0 top-0 hidden w-1/2 overflow-hidden group-even:left-0 group-even:right-[initial] sm:block">
          <Image
            src={imageUrl}
            alt="Project I Worked On"
            quality={75}
            className="absolute left-1/2 top-5 w-[75%] min-w-[300px] -translate-x-1/2 transition group-hover:-translate-y-2 group-hover:scale-[1.05]"
          />
        </div>
      </section>
    </motion.div>
  );
}
