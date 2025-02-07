"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type EmbedType = "steam" | "spotify";

interface EmbedComponentProps {
  type: EmbedType;
  isVisible: boolean;
  onClose: () => void;
}

const EmbedComponent: React.FC<EmbedComponentProps> = ({ type, isVisible, onClose }) => {
  return (
    <motion.div
      className="fixed bottom-24 right-[0.2px] w-full flex justify-center sm:w-auto sm:bottom-8 sm:right-8 sm:justify-end z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-[#151515] bg-opacity-60 dark:bg-[#2B2C28] dark:bg-opacity-50 rounded-lg shadow-lg p-2 relative">
        <button
          className="absolute top-2 left-3 text-gray-700 hover:text-gray-900 text-lg"
          onClick={onClose}
        >
          [x]
        </button>
        {type === "steam" ? (
          <div>
            <span className="text-md">Steam</span>
            <iframe
              src="https://gamer2810.github.io/steam-miniprofile/?interactive=true&accountId=76561198179349126"
              className="w-[340px] h-[230px] sm:w-[342px] sm:h-[228px]"
              style={{ zoom: "0.9", border: "none" }}
              allowFullScreen
              title="Steam Embed"
            />
          </div>
        ) : (
          <div>
            <span className="text-md">Spotify</span>
            <iframe
              src="https://open.spotify.com/embed/playlist/0f2QMtBgbgeTAVyV7YsxMH"
              className="w-full h-[80px] sm:w-[400px] sm:h-[152px]"
              allow="encrypted-media"
              title="Spotify Embed"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EmbedComponent;