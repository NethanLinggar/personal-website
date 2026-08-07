"use client";

import { useState } from "react";
import { miniProjectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";
import MiniProjectModal from "./mini-project-modal";

type MiniProjectCardProps = (typeof miniProjectsData)[number] & {
  canOpenModal: boolean;
  onModalClose: () => void;
};

export default function MiniProjectCard({
  title,
  fullDescription,
  tags,
  imageUrl,
  repoUrl,
  canOpenModal,
  onModalClose,
}: MiniProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (canOpenModal) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    onModalClose();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        onClick={handleOpen}
        className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-light-gray/20 transition-colors hover:bg-light-gray/10 dark:border-white/5 dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-3">
          <Image
            src={imageUrl}
            alt={`Project I Worked On - ${title}`}
            quality={75}
            sizes="(max-width: 768px) 50vw, 25vw"
            className="w-[85%] transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/70 via-40% to-transparent px-3 pb-3 pt-10 sm:pb-4 sm:pt-14">
          <h3 className="line-clamp-2 text-sm font-semibold text-white sm:text-base">
            {title}
          </h3>

          {/* Tags - hidden on small screens, shown from sm breakpoint up */}
          <ul className="mt-2 hidden flex-wrap gap-1.5 sm:flex">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <MiniProjectModal
        isOpen={isOpen}
        onClose={handleClose}
        title={title}
        fullDescription={fullDescription}
        tags={tags}
        imageUrl={imageUrl}
        repoUrl={repoUrl}
      />
    </>
  );
}
