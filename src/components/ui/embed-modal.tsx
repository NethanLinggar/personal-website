"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

type EmbedType = "steam" | "spotify" | "letterboxd";

interface EmbedModalProps {
  type: EmbedType;
  isVisible: boolean;
  onClose: () => void;
}

const EmbedModal: React.FC<EmbedModalProps> = ({
  type,
  isVisible,
  onClose,
}) => {
  const [canClose, setCanClose] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      setCanClose(false);
      const timer = setTimeout(() => setCanClose(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    if (canClose) {
      onClose();
    }
  };

  // Prevent hydration mismatch by only rendering on client
  if (!mounted) {
    return null;
  }

  return (
    <Dialog
      static
      open={isVisible}
      onClose={handleClose}
      className={`relative z-50 ${!isVisible ? "pointer-events-none" : ""}`}
      __demoMode
    >
      <motion.div
        className="fixed bottom-24 right-[0.2px] flex w-full justify-center sm:bottom-8 sm:right-8 sm:w-auto sm:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <div className="rounded-lg backdrop-blur-md">
          <DialogPanel className="relative rounded-lg border border-white/10 bg-[#2B2C28]/50 p-2 text-white shadow-lg shadow-black/50">
            <button
              className="absolute right-3 top-2 rounded-lg p-1 text-white/60 transition-colors hover:text-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handleClose}
              disabled={!canClose}
              aria-label="Close"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            {type === "steam" ? (
              <div className="flex flex-col">
                <span className="text-md mb-1 mt-1 pl-2 underline">Steam</span>
                <iframe
                  src="https://gamer2810.github.io/steam-miniprofile/?interactive=true&accountId=76561198179349126"
                  className="h-[230px] w-[340px] sm:h-[228px] sm:w-[342px]"
                  allow="encrypted-media"
                  allowFullScreen
                  title="Steam Embed"
                />
              </div>
            ) : type === "spotify" ? (
              <div className="flex flex-col">
                <span className="text-md mb-1 mt-1 pl-2 underline">
                  Spotify
                </span>
                <iframe
                  src="https://open.spotify.com/embed/playlist/0f2QMtBgbgeTAVyV7YsxMH"
                  className="h-[152px] w-[342px]"
                  allow="encrypted-media"
                  allowFullScreen
                  title="Spotify Embed"
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <span className="text-md mb-1 mt-1 pl-2 underline">
                  Letterboxd
                </span>
                <iframe
                  src="https://nethanlinggar.github.io/letterboxd-miniprofile/?user=smeggy&favorites=true&unclickable=true"
                  className="h-[280px] w-[332px]"
                  allow="encrypted-media"
                  allowFullScreen
                  title="Letterboxd Embed"
                />
              </div>
            )}
          </DialogPanel>
        </div>
      </motion.div>
    </Dialog>
  );
};

export default EmbedModal;
