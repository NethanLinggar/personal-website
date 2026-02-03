"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import ProjectModal from "./project-modal";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  fullDescription,
  tags,
  imageUrl,
  images,
  date,
  team,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          willChange: "transform, opacity",
        }}
        className="group mb-5 last:mb-0 sm:mb-8"
      >
        <section
          onClick={() => setIsOpen(true)}
          className="relative max-w-[62rem] cursor-pointer overflow-visible rounded-lg transition-colors sm:h-[20rem] sm:pr-8"
        >
          {/* Image for mobile - behind the card, peeking at top */}
          <div className="absolute inset-x-0 top-0 z-0 h-[16rem] overflow-hidden sm:hidden">
            <div className="absolute left-1/2 top-4 flex -translate-x-1/2 justify-center transition-transform group-hover:-translate-y-2 group-hover:scale-105">
              <Image
                src={imageUrl}
                alt={`Project I Worked On - ${title}`}
                quality={75}
                className="w-full min-w-[280px] max-w-[4000px]"
              />
            </div>
          </div>

          <div className="absolute inset-0 top-[16rem] z-10 rounded-lg border border-white/5 bg-light-gray/20 transition-colors group-hover:bg-light-gray/10 dark:border-white/5 dark:bg-white/10 dark:group-hover:bg-white/20 sm:top-8"></div>

          <div className="relative z-10 flex h-full flex-col px-5 pb-4 pt-[17rem] sm:max-w-[50%] sm:pb-7 sm:pl-10 sm:pr-2 sm:pt-16 sm:group-even:ml-[50%]">
            <h3 className="text-2xl font-semibold dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-dark-gray dark:text-white/70 sm:text-base sm:leading-relaxed">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:border-white/5 dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Image for desktop - on the side */}
          <div className="absolute bottom-0 right-0 top-0 z-20 hidden w-1/2 overflow-hidden group-even:left-0 group-even:right-[initial] sm:block">
            <Image
              src={imageUrl}
              alt={`Project I Worked On - ${title}`}
              quality={75}
              className="absolute left-1/2 top-5 w-[70%] min-w-[300px] -translate-x-1/2 transition-transform group-hover:-translate-y-2 group-hover:scale-105"
            />
          </div>
        </section>
      </motion.div>

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        fullDescription={fullDescription}
        tags={tags}
        imageUrl={imageUrl}
        images={images}
        date={date}
        team={team}
      />
    </>
  );
}
