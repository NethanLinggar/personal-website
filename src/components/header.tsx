"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useTheme } from '@/context/theme-context';
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import whiteImg from '/public/whiteFill.svg'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme, toggleTheme } = useTheme()

  return <header className='z-[999] relative'>
    <motion.div 
      className='fixed bottom-9 left-1/2 h-[3.25rem] w-[22.5rem] rounded-full bg-[#151515] bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full dark:bg-[#2B2C28] dark:bg-opacity-50'
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}  // slower transition
    ></motion.div>

    <motion.div
      className="fixed top-3 left-3 sm:hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}  // slower transition
    >
      <button
        className="bg-[#151515] w-[3rem] h-[3rem] mr-5 bg-opacity-60 backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15rem] active:scale-105 transition-all dark:bg-[#2B2C28] dark:bg-opacity-50 text-[#E8EBEA] text-2xl"
      >
        <Image src={whiteImg} alt="White Logo" width={38} height={38} />
      </button>
    </motion.div>

    <nav className="flex fixed bottom-[2.5rem] left-1/2 h-[initial] -translate-x-1/2 sm:top-[1.6rem] sm:bottom-auto py-0">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}  // slower transition
      >
        <button
          className="hidden sm:flex bottom-5 right-5 bg-[#151515] w-[3rem] h-[3rem] mr-5 bg-opacity-60 backdrop-blur-[0.5rem] shadow-2xl rounded-full items-center justify-center hover:scale-[1.15rem] active:scale-105 transition-all dark:bg-[#2B2C28] dark:bg-opacity-50 text-[#E8EBEA] text-2xl"
        >
          <Image src={whiteImg} alt="White Logo" width={38} height={38} />
        </button>
      </motion.div>

      <ul className='flex w-[24rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-[#E8EBEA] sm:w-[initial] sm:flex-nowrap sm:gap-5"'>
        {links.map((link) => (
          <motion.li
            className='h-3/4 flex items-center justify-center relative'
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}  // slower transition
          >
            <Link
              className={clsx('flex w-full items-center justify-center px-3 py-3 transition dark:text-[#E8EBEA] hover:',
                {
                  "text-[#0A0A0A] dark:!text-[#0A0A0A]": activeSection === link.name,
                })}
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name)
                setTimeOfLastClick(Date.now)
              }}
            >
              {link.name}

              {link.name === activeSection && (
                <motion.span
                  className="bg-[#E8EBEA] rounded-full absolute inset-0 -z-10"
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

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}  // slower transition
      >
        <button
          className="hidden sm:flex bottom-5 right-5 bg-[#151515] w-[3rem] h-[3rem] ml-5 bg-opacity-60 backdrop-blur-[0.5rem] shadow-2xl rounded-full items-center justify-center hover:scale-[1.15rem] active:scale-105 transition-all dark:bg-[#2B2C28] dark:bg-opacity-50 text-[#E8EBEA] text-4xl"
          onClick={toggleTheme}
        >
          {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </motion.div>
    </nav>

    <motion.div
      className="fixed top-3 right-3 sm:hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}  // slower transition
    >
      <button
        className="bg-[#151515] w-[3rem] h-[3rem] ml-5 bg-opacity-60 backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15rem] active:scale-105 transition-all dark:bg-[#2B2C28] dark:bg-opacity-50 text-[#E8EBEA] text-4xl"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
      </button>
    </motion.div>
  </header>
}
