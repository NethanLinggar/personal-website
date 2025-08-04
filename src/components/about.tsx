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
        Hi! I'm <span className="font-medium">Nethan</span>, a <span className="font-medium">Software Engineer</span>. As a <span className="italic">Computer Science</span> graduate, I'm currently building a career for myself in <span className="font-medium">Frontend Development</span>. I've gained solid experience in developing software (like <span className="italic">web apps</span> or even <span className="italic">Android apps</span>) integrated with <span className="font-medium">machine learning capabilities</span> throughout my education and career. I've also recently got into tweaking <span className="italic">microcontrollers</span>, like ESP32s.
      </p>

      <p className="mb-3">
        Ever since I was a kid, I've always <span className="italic">loved building stuff</span>. Whether it was <span className="italic">LEGOs</span>, <span className="italic">robots</span>, or even just <span className="italic">plain ol' drawing</span>, I loved it. It was a way for me to <span className="font-medium">express myself</span> and <span className="font-medium">share experiences with others</span>. Now, I hope the stuff that I build (whether it be software or not) can be <span className="font-medium">meaningful and useful</span> for others, in one way or another.
      </p>

      <p>
        Outside of coding, I have various{" "}
        <span className="italic">hobbies</span>, including playing{" "}
        <span
          className={`cursor-pointer underline underline-offset-2 decoration-2 transition-all duration-300 hover:brightness-110 active:scale-95 ${activeEmbed === "steam" ? "text-steam-blue animate-color-change" : "hover:text-steam-blue text-red"
            }`}
          onMouseEnter={() => handleMouseEnter("steam")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("steam")}
        >
          video games
        </span>
        , watching{" "}
        <span
          className={`cursor-pointer underline underline-offset-2 decoration-2 transition-all duration-300 hover:brightness-110 active:scale-95 ${activeEmbed === "letterboxd" ? "text-letterboxd-orange animate-color-change" : "hover:text-letterboxd-orange text-red"
            }`}
          onMouseEnter={() => handleMouseEnter("letterboxd")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("letterboxd")}
        >
          movies
        </span>
        {" "}or TV series, listening to{" "}
        <span
          className={`cursor-pointer underline underline-offset-2 decoration-2 transition-all duration-300 hover:brightness-110 active:scale-95 ${activeEmbed === "spotify" ? "text-spotify-green animate-color-change" : "hover:text-spotify-green text-red"
            }`}
          onMouseEnter={() => handleMouseEnter("spotify")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("spotify")}
        >
          music
        </span>
        , and reading <span className="font-medium">comics</span>! Do <span className="font-medium">mention</span> those to me if we ever <span className="italic">meet</span> in person.
      </p>

      <EmbedComponent type="steam" isVisible={activeEmbed === "steam"} onClose={handleClose} />
      <EmbedComponent type="spotify" isVisible={activeEmbed === "spotify"} onClose={handleClose} />
      <EmbedComponent type="letterboxd" isVisible={activeEmbed === "letterboxd"} onClose={handleClose} />

    </motion.section>
  );
}