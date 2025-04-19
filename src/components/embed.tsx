"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

type EmbedType = "steam" | "spotify" | "letterboxd";

interface EmbedComponentProps {
  type: EmbedType;
  isVisible: boolean;
  onClose: () => void;
}

const EmbedComponent: React.FC<EmbedComponentProps> = ({ type, isVisible, onClose }) => {
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
      className="fixed bottom-24 right-[0.2px] w-full flex justify-center sm:w-auto sm:bottom-8 sm:right-8 sm:justify-end z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-[#151515] bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-[#2B2C28] dark:bg-opacity-50 rounded-lg p-2 relative">
        <button
          className="absolute top-2 right-3 text-lg"
          onClick={() => canClose && onClose()}
          disabled={!canClose}
        >
          [x]
        </button>
        {type === "steam" ? (
          <div>
            <span className="text-md">Steam</span>
            <iframe
              src="https://gamer2810.github.io/steam-miniprofile/?interactive=true&accountId=76561198179349126"
              className="w-[340px] h-[230px] sm:w-[342px] sm:h-[228px]"
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
              className="w-full h-[80px] sm:w-[400px] sm:h-[152px]"
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
              className="w-[332px] h-[280px]"
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