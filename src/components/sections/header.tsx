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
import { Transition } from "@headlessui/react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  // Trigger animation on mount
  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative z-[999]">
      {/* Navigation Bar Background */}
      <Transition show={isVisible} appear>
        <div
          className="fixed bottom-9 left-1/2 h-[3.25rem] w-[22.5rem] -translate-x-1/2 rounded-full border border-white/10 bg-[#151515]/60 shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 ease-out data-[closed]:-translate-y-20 data-[closed]:opacity-0 dark:border-white/5 dark:bg-[#2B2C28]/50 dark:shadow-black/40 sm:top-6"
          style={{ willChange: "transform, opacity" }}
        />
      </Transition>

      {/* Mobile Logo */}
      <Transition show={isVisible} appear>
        <div className="fixed left-3 top-3 sm:hidden">
          <button
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white/10 bg-[#151515]/60 text-[#E8EBEA] shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-110 active:scale-105 data-[closed]:-translate-y-20 data-[closed]:opacity-0 dark:border-white/5 dark:bg-[#2B2C28]/50 dark:shadow-black/40"
            aria-label="Home"
          >
            <Image src={whiteImg} alt="Logo" width={38} height={38} priority />
          </button>
        </div>
      </Transition>

      {/* Navigation */}
      <nav className="fixed bottom-[2.5rem] left-1/2 flex h-[initial] -translate-x-1/2 py-0 sm:bottom-auto sm:top-[1.6rem]">
        {/* Desktop Logo */}
        <Transition show={isVisible} appear>
          <button
            className="mr-5 hidden h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white/10 bg-[#151515]/60 text-[#E8EBEA] shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-110 active:scale-105 data-[closed]:-translate-y-20 data-[closed]:opacity-0 dark:border-white/5 dark:bg-[#2B2C28]/50 dark:shadow-black/40 sm:flex"
            aria-label="Home"
          >
            <Image src={whiteImg} alt="Logo" width={38} height={38} priority />
          </button>
        </Transition>

        {/* Navigation Links */}
        <Transition show={isVisible} appear>
          <ul className="flex w-[24rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-[#E8EBEA] transition-all duration-300 ease-out data-[closed]:-translate-y-20 data-[closed]:opacity-0 sm:w-[initial] sm:flex-nowrap">
            {links.map((link) => (
              <li
                className="relative flex h-3/4 items-center justify-center"
                key={link.hash}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-[0.725rem] transition-colors dark:text-[#E8EBEA] sm:py-3",
                    {
                      "text-[#0A0A0A] dark:!text-[#0A0A0A]":
                        activeSection === link.name,
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-[#E8EBEA]"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                      style={{ willChange: "transform" }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </Transition>

        {/* Desktop Theme Toggle */}
        <Transition show={isVisible} appear>
          <button
            className="ml-5 hidden h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white/10 bg-[#151515]/60 text-4xl text-[#E8EBEA] shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-110 active:scale-105 data-[closed]:-translate-y-20 data-[closed]:opacity-0 dark:border-white/5 dark:bg-[#2B2C28]/50 dark:shadow-black/40 sm:flex"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
          </button>
        </Transition>
      </nav>

      {/* Mobile Theme Toggle */}
      <Transition show={isVisible} appear>
        <div className="fixed right-3 top-3 sm:hidden">
          <button
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white/10 bg-[#151515]/60 text-4xl text-[#E8EBEA] shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-110 active:scale-105 data-[closed]:-translate-y-20 data-[closed]:opacity-0 dark:border-white/5 dark:bg-[#2B2C28]/50 dark:shadow-black/40"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
          </button>
        </div>
      </Transition>
    </header>
  );
}
