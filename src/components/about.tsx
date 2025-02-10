"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
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
    if (!clicked) {
      setActiveEmbed(null);
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
        My name is Nethan and I (<span className="italic">am trying to</span>) specialize in <span className="font-bold">Software Engineering</span>!
        I had just graduated from{" "}
        <span className="italic">
          Sepuluh Nopember Institute of Technology
        </span>{" "}
        earning my <span className="italic">Bachelor's degree</span> in{" "}
        <span className="font-bold">Computer Science</span>. Known as someone who is critical and enthusiastic, I'm experienced in building <span className="underline">frontend</span>, <span className="underline">backend</span>, and <span className="underline">Android</span> frameworks that's integrated with <span className="underline">machine learning</span> capabilities.
      </p>

      <p>
        Outside of <span className="italic">coding</span>, I have various{" "}
        <span className="font-bold">hobbies</span>, including playing{" "}
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