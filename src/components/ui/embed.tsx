"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

type EmbedType = "steam" | "spotify" | "letterboxd";

interface EmbedComponentProps {
  type: EmbedType;
  isVisible: boolean;
  onClose: () => void;
}

const EmbedComponent: React.FC<EmbedComponentProps> = ({
  type,
  isVisible,
  onClose,
}) => {
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setCanClose(false);
      const timer = setTimeout(() => setCanClose(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <motion.div
      data-embed-type={type}
      className="fixed bottom-24 right-[0.2px] z-50 flex w-full justify-center sm:bottom-8 sm:right-8 sm:w-auto sm:justify-end"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.2 }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="relative rounded-lg border border-white/10 bg-[#2B2C28]/60 p-2 text-white shadow-lg shadow-black/50 backdrop-blur-sm dark:border-white/5 dark:bg-[#2B2C28]/50">
        <button
          className="hover:text-gray-300 absolute right-3 top-2 text-lg transition-colors"
          onClick={() => canClose && onClose()}
          disabled={!canClose}
          aria-label="Close"
        >
          [x]
        </button>
        {type === "steam" ? (
          <div>
            <span className="text-md">Steam</span>
            <iframe
              src="https://gamer2810.github.io/steam-miniprofile/?interactive=true&accountId=76561198179349126"
              className="h-[230px] w-[340px] sm:h-[228px] sm:w-[342px]"
              allow="encrypted-media"
              allowFullScreen
              title="Steam Embed"
            />
          </div>
        ) : type === "spotify" ? (
          <div>
            <span className="text-md">Spotify</span>
            <iframe
              src="https://open.spotify.com/embed/playlist/0f2QMtBgbgeTAVyV7YsxMH"
              className="h-[152px] w-[400px]"
              allow="encrypted-media"
              allowFullScreen
              title="Spotify Embed"
            />
          </div>
        ) : (
          <div>
            <span className="text-md">Letterboxd</span>
            <iframe
              src="https://nethanlinggar.github.io/letterboxd-miniprofile/?user=smeggy&favorites=true&unclickable=true"
              className="h-[280px] w-[332px]"
              allow="encrypted-media"
              allowFullScreen
              title="Letterboxd Embed"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EmbedComponent;
