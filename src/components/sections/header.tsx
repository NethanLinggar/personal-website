"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import whiteImg from "../../../public/whiteFill.svg";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="relative z-[999]">
      {/* Navigation Bar Background */}
      <motion.div
        className="fixed bottom-9 left-1/2 h-[3.25rem] w-[22.5rem] rounded-full bg-[#151515] bg-opacity-60 shadow-lg shadow-black/[0.5] backdrop-blur-[0.5rem] dark:bg-[#2B2C28] dark:bg-opacity-50 dark:shadow-black/[0.6] sm:top-6"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // slower transition
      ></motion.div>

      {/* Mobile Logo */}
      <motion.div
        className="fixed left-3 top-3 sm:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // slower transition
      >
        <button className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#151515] bg-opacity-60 text-[#E8EBEA] shadow-lg shadow-black/[0.5] backdrop-blur-[0.5rem] transition-all hover:scale-[1.15rem] active:scale-105 dark:bg-[#2B2C28] dark:bg-opacity-50 dark:shadow-black/[0.6]">
          <Image src={whiteImg} alt="White Logo" width={38} height={38} />
        </button>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed bottom-[2.5rem] left-1/2 flex h-[initial] -translate-x-1/2 py-0 sm:bottom-auto sm:top-[1.6rem]">
        {/* Desktop Logo */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // slower transition
        >
          <button className="mr-5 hidden h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#151515] bg-opacity-60 text-[#E8EBEA] shadow-lg shadow-black/[0.5] backdrop-blur-[0.5rem] transition-all hover:scale-[1.15rem] active:scale-105 dark:bg-[#2B2C28] dark:bg-opacity-50 dark:shadow-black/[0.6] sm:flex">
            <Image src={whiteImg} alt="White Logo" width={38} height={38} />
          </button>
        </motion.div>

        {/* Navigation Links */}
        <ul className="flex w-[24rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-[#E8EBEA] sm:w-[initial] sm:flex-nowrap">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }} // slower transition
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition dark:text-[#E8EBEA]",
                  {
                    "text-[#0A0A0A] dark:!text-[#0A0A0A]":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now);
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-[#E8EBEA]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Theme Toggle */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // slower transition
        >
          <button
            className="ml-5 hidden h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#151515] bg-opacity-60 text-4xl text-[#E8EBEA] shadow-lg shadow-black/[0.5] backdrop-blur-[0.5rem] transition-all hover:scale-[1.15rem] active:scale-105 dark:bg-[#2B2C28] dark:bg-opacity-50 dark:shadow-black/[0.6] sm:flex"
            onClick={toggleTheme}
          >
            {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Theme Toggle */}
      <motion.div
        className="fixed right-3 top-3 sm:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // slower transition
      >
        <button
          className="ml-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#151515] bg-opacity-60 text-4xl text-[#E8EBEA] shadow-lg shadow-black/[0.5] backdrop-blur-[0.5rem] transition-all hover:scale-[1.15rem] active:scale-105 dark:bg-[#2B2C28] dark:bg-opacity-50 dark:shadow-black/[0.6]"
          onClick={toggleTheme}
        >
          {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </motion.div>
    </header>
  );
}
