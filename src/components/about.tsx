"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";
import EmbedComponent from "./embed"; // Import here

type EmbedType = "steam" | "spotify" | "letterboxd" | null;

export default function About() {
  const { ref } = useSectionInView("About");
  const [activeEmbed, setActiveEmbed] = useState<EmbedType>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleMouseEnter = (type: EmbedType) => {
    if (!clicked) {
      setActiveEmbed(type);
    }
  };

  const handleMouseLeave = () => {
    // Only hide embed if it wasn't clicked and if we're not hovering the embed itself
    if (!clicked) {
      // Small delay to check if we're hovering the embed
      setTimeout(() => {
        const embedElement = document.querySelector('[data-embed-type="' + activeEmbed + '"]');
        if (embedElement && !embedElement.matches(':hover')) {
          setActiveEmbed(null);
        }
      }, 100);
    }
  };

  const handleClick = (type: EmbedType) => {
    if (activeEmbed === type && clicked) {
      setClicked(false);
      setActiveEmbed(null);
    } else {
      setClicked(true);
      setActiveEmbed(type);
    }
  };

  const handleClose = () => {
    setActiveEmbed(null);
    setClicked(false); // Reset clicked state
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center text-sm leading-8 sm:text-base sm:leading-8 sm:mb-32 scroll-mt-28 dark:text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        My name is <span className="font-bold">Nethan</span>, and I specialize in <span className="font-bold">Software Engineering</span>. I recently graduated from Sepuluh Nopember Institute of Technology with a Bachelor's in <span className="italic">Computer Science</span>. Known for being both critical and enthusiastic, I've gained solid experience in developing <span className="italic">software</span> integrated with <span className="italic">machine learning</span> capabilities throughout my career so far.
      </p>

      <p>
        Outside of coding, I have various{" "}
        <span className="italic">hobbies</span>, including playing{" "}
        <span
          className={`cursor-pointer underline transition-colors duration-300 ${activeEmbed === "steam" ? "text-steam-blue animate-color-change" : "hover:text-steam-blue text-red"
            }`}
          onMouseEnter={() => handleMouseEnter("steam")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("steam")}
        >
          video games
        </span>
        , watching{" "}
        <span
          className={`cursor-pointer underline transition-colors duration-300 ${activeEmbed === "letterboxd" ? "text-letterboxd-orange animate-color-change" : "hover:text-letterboxd-orange text-red"
            }`}
          onMouseEnter={() => handleMouseEnter("letterboxd")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("letterboxd")}
        >
          movies
        </span>
        {" "}or TV series, listening to{" "}
        <span
          className={`cursor-pointer underline transition-colors duration-300 ${activeEmbed === "spotify" ? "text-spotify-green animate-color-change" : "hover:text-spotify-green text-red"
            }`}
          onMouseEnter={() => handleMouseEnter("spotify")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("spotify")}
        >
          music
        </span>
        , and reading comics! Do mention those to me if we ever meet in person.
      </p>

      <EmbedComponent type="steam" isVisible={activeEmbed === "steam"} onClose={handleClose} />
      <EmbedComponent type="spotify" isVisible={activeEmbed === "spotify"} onClose={handleClose} />
      <EmbedComponent type="letterboxd" isVisible={activeEmbed === "letterboxd"} onClose={handleClose} />

    </motion.section>
  );
}