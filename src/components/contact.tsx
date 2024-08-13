"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { RiMailFill } from "react-icons/ri";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';

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
        <span className="font-semibold">You could reach me out through here!</span>
      </motion.h1>

      <motion.div
        className='flex flex-row items-center justify-center gap-3 px-4 text-lg font-medium relative'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{
          delay: 0.1
        }}
      >
        <div className="relative">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black/10"
            target="_blank"
            onClick={handleCopyEmail}
          >
            <RiMailFill />
          </a>
          {showTooltip && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 -mb-2 bg-black text-white text-sm py-1 px-2 rounded-md">
              Email copied!
            </div>
          )}
        </div>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black/10"
          href="https://www.linkedin.com/in/nethaneel-patricio-linggar/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10"
          href="https://github.com/NethanLinggar"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10"
          href="https://www.instagram.com/nethanpat/"
          target="_blank"
        >
          <FaInstagramSquare />
        </a>
      </motion.div>
    </section>
  )
}
