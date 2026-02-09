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

      {/* Container - centered for all screen sizes */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 0.2,
          }}
          className="flex max-h-[calc(100vh-10rem)] w-full max-w-4xl flex-col pb-5 sm:max-h-[90vh] sm:pb-0 sm:pt-14"
        >
          <DialogPanel className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#2B2C28]/50 shadow-lg shadow-black/50 backdrop-blur-md">
            {/* Header */}
            <div className="flex flex-shrink-0 items-center justify-between bg-transparent px-6 pb-3 pt-5">
              <DialogTitle className="text-2xl font-semibold text-white">
                {title}
              </DialogTitle>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-white/60 transition-colors hover:text-white/90"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div
              className="modal-content flex-1 overflow-y-auto px-6 py-6"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {/* Project Info */}
              {(date || team) && (
                <div className="mb-6 flex flex-wrap gap-4 text-sm text-white/70">
                  {date && (
                    <div>
                      <span className="font-semibold text-white">Date:</span>{" "}
                      {date}
                    </div>
                  )}
                  {team && (
                    <div>
                      <span className="font-semibold text-white">Team:</span>{" "}
                      {team}
                    </div>
                  )}
                </div>
              )}

              {/* Main Image */}
              <div className="mb-6 overflow-hidden rounded-lg bg-black/20">
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
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    About this project
                  </h3>
                  <p className="whitespace-pre-line leading-relaxed text-white/80">
                    {fullDescription}
                  </p>
                </div>
              )}

              {/* Additional Images */}
              {images && images.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-black/20"
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
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Technologies
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <li
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/80"
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
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .modal-content::-webkit-scrollbar-button {
          display: none;
        }
      `}</style>
    </Dialog>
  );
}
