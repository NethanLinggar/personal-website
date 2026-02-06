"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  fullDescription: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  images: readonly StaticImageData[];
  date: string;
  team: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  fullDescription,
  tags,
  imageUrl,
  images,
  date,
  team,
}: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/70 dark:bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />

      {/* Container */}
      <div className="fixed inset-0 flex items-end justify-center sm:items-start sm:p-4 sm:pt-24">
        {/* Mobile: Slide up animation */}
        <motion.div
          initial={{
            opacity: 0,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: "100%",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="w-full max-w-4xl sm:hidden"
        >
          <DialogPanel className="w-full transform overflow-hidden rounded-t-2xl bg-white shadow-xl dark:bg-light-gray">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-4 dark:bg-light-gray">
              <DialogTitle className="text-2xl font-semibold text-dark-gray dark:text-white">
                {title}
              </DialogTitle>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-dark-gray/60 transition-colors hover:bg-light-gray/10 dark:text-white/60 dark:hover:bg-dark-gray"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div
              className="modal-content max-h-[75vh] overflow-y-auto px-6 py-6 pb-28"
              style={
                {
                  scrollbarWidth: "thin",
                  scrollbarColor:
                    "var(--scrollbar-thumb) var(--scrollbar-track)",
                } as React.CSSProperties & {
                  scrollbarWidth: string;
                  scrollbarColor: string;
                }
              }
            >
              {/* Project Info */}
              {(date || team) && (
                <div className="mb-6 flex flex-wrap gap-4 text-sm text-dark-gray/70 dark:text-white/70">
                  {date && (
                    <div>
                      <span className="font-semibold text-dark-gray dark:text-white">
                        Date:
                      </span>{" "}
                      {date}
                    </div>
                  )}
                  {team && (
                    <div>
                      <span className="font-semibold text-dark-gray dark:text-white">
                        Team:
                      </span>{" "}
                      {team}
                    </div>
                  )}
                </div>
              )}

              {/* Main Image */}
              <div className="mb-6 overflow-hidden rounded-lg bg-light-gray/10 dark:bg-dark-gray">
                <Image
                  src={imageUrl}
                  alt={title}
                  quality={75}
                  className="mx-auto w-2/3 max-w-2xl sm:w-[45%] sm:pt-2"
                />
              </div>

              {/* Full Description */}
              {fullDescription && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-dark-gray dark:text-white">
                    About this project
                  </h3>
                  <p className="whitespace-pre-line leading-relaxed text-dark-gray/80 dark:text-white/80">
                    {fullDescription}
                  </p>
                </div>
              )}

              {/* Additional Images */}
              {images && images.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-dark-gray dark:text-white">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-light-gray/10 dark:bg-dark-gray"
                      >
                        <Image
                          src={img}
                          alt={`${title} - Image ${index + 1}`}
                          quality={95}
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-dark-gray dark:text-white">
                  Technologies
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <li
                      className="rounded-full border border-light-gray/30 bg-light-gray/10 px-3 py-1 text-sm text-dark-gray dark:border-white/10 dark:bg-dark-gray dark:text-white/80"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogPanel>
        </motion.div>

        {/* Desktop: Scale/pop animation */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 0.2,
          }}
          className="hidden w-full max-w-4xl sm:block"
        >
          <DialogPanel className="w-full transform overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-light-gray sm:max-h-[calc(100vh-5rem)]">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-4 dark:bg-light-gray">
              <DialogTitle className="text-2xl font-semibold text-dark-gray dark:text-white">
                {title}
              </DialogTitle>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-dark-gray/60 transition-colors hover:bg-light-gray/10 dark:text-white/60 dark:hover:bg-dark-gray"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div
              className="modal-content max-h-[calc(100vh-13rem)] overflow-y-auto px-6 py-6 pb-6"
              style={
                {
                  scrollbarWidth: "thin",
                  scrollbarColor:
                    "var(--scrollbar-thumb) var(--scrollbar-track)",
                } as React.CSSProperties & {
                  scrollbarWidth: string;
                  scrollbarColor: string;
                }
              }
            >
              {/* Project Info */}
              {(date || team) && (
                <div className="mb-6 flex flex-wrap gap-4 text-sm text-dark-gray/70 dark:text-white/70">
                  {date && (
                    <div>
                      <span className="font-semibold text-dark-gray dark:text-white">
                        Date:
                      </span>{" "}
                      {date}
                    </div>
                  )}
                  {team && (
                    <div>
                      <span className="font-semibold text-dark-gray dark:text-white">
                        Team:
                      </span>{" "}
                      {team}
                    </div>
                  )}
                </div>
              )}

              {/* Main Image */}
              <div className="mb-6 overflow-hidden rounded-lg bg-light-gray/10 dark:bg-dark-gray">
                <Image
                  src={imageUrl}
                  alt={title}
                  quality={75}
                  className="mx-auto w-2/3 max-w-2xl sm:w-[45%] sm:pt-2"
                />
              </div>

              {/* Full Description */}
              {fullDescription && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-dark-gray dark:text-white">
                    About this project
                  </h3>
                  <p className="whitespace-pre-line leading-relaxed text-dark-gray/80 dark:text-white/80">
                    {fullDescription}
                  </p>
                </div>
              )}

              {/* Additional Images */}
              {images && images.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-dark-gray dark:text-white">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-light-gray/10 dark:bg-dark-gray"
                      >
                        <Image
                          src={img}
                          alt={`${title} - Image ${index + 1}`}
                          quality={95}
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-dark-gray dark:text-white">
                  Technologies
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <li
                      className="rounded-full border border-light-gray/30 bg-light-gray/10 px-3 py-1 text-sm text-dark-gray dark:border-white/10 dark:bg-dark-gray dark:text-white/80"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogPanel>
        </motion.div>
      </div>
      <style jsx>{`
        .modal-content {
          --scrollbar-track: #e8ebea;
          --scrollbar-thumb: #2b2c28;
        }

        :global(.dark) .modal-content {
          --scrollbar-track: #2b2c28;
          --scrollbar-thumb: #151515;
        }

        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: var(--scrollbar-track);
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: var(--scrollbar-thumb);
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #151515;
        }

        :global(.dark) .modal-content::-webkit-scrollbar-thumb:hover {
          background: #0a0a0a;
        }

        .modal-content::-webkit-scrollbar-button {
          display: none;
        }
      `}</style>
    </Dialog>
  );
}
