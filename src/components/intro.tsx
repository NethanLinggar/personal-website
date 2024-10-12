"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  const faceImg = require('public/faceImg.png');

  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={faceImg}
              alt='Nethan Portrait'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>

          <motion.span className='absolute text-2xl bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: "125",
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey there, I'm Nethan!</span> A{" "}
        <span className="font-bold">computer science fresh graduate</span> that's interested in {" "}
        <span className="italic">Software Engineering</span> and <span className="italic">Machine Learning</span>. Welcome to my{" "}
        <span className="underline">website</span>!
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <a
          className="group bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:underline active:scale-105 transition"
          href="/CV_Nethaneel_Patricio_Linggar.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 pb-0.2 group-hover:translate-y-0.5 transition" />
        </a>
        <a
          className="bg-dark-gray/50 p-4 text-white hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/80"
          href="https://www.linkedin.com/in/nethaneel-patricio-linggar/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-dark-gray/50 p-4 text-white hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/80"
          href="https://github.com/NethanLinggar"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
