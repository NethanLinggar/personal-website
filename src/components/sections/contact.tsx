"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { RiMailFill } from "react-icons/ri";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';
import SocialButton from '../ui/social';

export default function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nethan.linggar@gmail.com").then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }).catch((err) => {
      console.error("Failed to copy email: ", err);
    });
  };

  return (
    <section className='mb-32 max-w-[50rem] text-center scroll-mt-[100rem]'>
      <motion.h1
        className="mb-5 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-semibold dark:text-white">You could reach me out through here!</span>
      </motion.h1>

      <motion.div
        className='flex flex-row items-center justify-center gap-3 px-4 text-lg font-medium relative'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <div className="relative">
          <SocialButton onClick={handleCopyEmail}>
            <RiMailFill />
          </SocialButton>
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                className="absolute top-16 -left-1/2 mb-2 center bg-black/80 text-white text-sm py-1 px-2 rounded-md w-max box-border dark:bg-white/80 dark:text-black"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Email copied!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <SocialButton
          href="https://www.linkedin.com/in/nethaneel-patricio-linggar/"
          target="_blank"
        >
          <BsLinkedin />
        </SocialButton>

        <SocialButton
          href="https://github.com/NethanLinggar"
          target="_blank"
        >
          <FaGithubSquare />
        </SocialButton>

        <SocialButton
          href="https://www.instagram.com/nethanpat/"
          target="_blank"
        >
          <FaInstagramSquare />
        </SocialButton>
      </motion.div>
    </section>
  );
}