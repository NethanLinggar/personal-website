"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Source_Code_Pro } from 'next/font/google';
import { motion } from 'motion/react';
import { BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import TypeIt from 'typeit-react';
import monitorBig from '../../public/monitorBig.png';
import monitorSmall from '../../public/monitorSmall.png';
import name from '../../public/name.png';
import koss from '../../public/koss.png';
import blackOutline from '../../public/blackOutline.png';

const code = Source_Code_Pro({ subsets: ['latin'] });

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on client-side only
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[45rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center mb-12">
        <div className="relative">
          <div className="mt-3 relative">
            {/* Monitor */}
            <motion.div
              className="relative z-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              {!isMobile ? (
                <Image
                  src={monitorBig}
                  alt="Monitor"
                  quality={80}
                  priority={true}
                  className="relative"
                />
              ) : (
                <Image
                  src={monitorSmall}
                  alt="Monitor"
                  quality={70}
                  priority={true}
                  className="relative"
                />
              )}

              {/* Inside Monitor */}
              <div className={`${code.className} absolute inset-0 top-[-35%] flex justify-between items-center overflow-hidden px-[5%]`}>
                <div className="flex justify-between items-center space-x-8 w-full">
                  {/* Logo Image */}
                  {!isMobile && (
                    <div className="w-[200px] text-right">
                      <Image
                        src={blackOutline}
                        alt="Logo Image"
                        width={200}
                        height={200}
                      />
                      <p className="text-xs sm:text-sm font-medium !leading-[1.5] sm:!leading-[2.2] dark:text-black">
                        <br />
                        <span>based in Jakarta,</span>
                        <br />
                        <span>barely a junior,</span>
                        <br />
                        <span>very passionate</span>
                      </p>
                    </div>
                  )}

                  {/* Heading */}
                  {isMobile ? (
                    <div className="text-left w-full text-lg font-medium !leading-[1.2] dark:text-black">
                      <p>a <strong>software engineer</strong> w/ a small interest in <em>machine learning</em>.</p>
                      <br />
                      <p>also a huge <u>nerd</u> & have great taste in <u>design</u>.</p>
                    </div>
                  ) : (
                    <div className="text-left w-full text-[1.8rem] font-medium !leading-[1.4] dark:text-black">
                      <TypeIt
                        getBeforeInit={(instance) => {
                          instance
                            .options({ speed: 10, lifeLike: true })
                            .pause(400)
                            .type("a <strong>software enginer</strong>")
                            .pause(25)
                            .delete(1)
                            .type("<strong>er</strong> ")
                            .pause(150)
                            .type("w/ a small interest in ")
                            .pause(100)
                            .type(".")
                            .pause(100)
                            .type(".")
                            .pause(100)
                            .type(".")
                            .pause(100)
                            .delete(3)
                            .type("<em>machine learning</em>.")
                            .pause(350)
                            .break()
                            .break()
                            .type("also ")
                            .pause(150)
                            .type("a huge <u>geek</u>")
                            .pause(200)
                            .delete(4)
                            .type("<u>nerd</u>")
                            .pause(250)
                            .type(" & have greate")
                            .pause(25)
                            .delete(1)
                            .type(" taste in <u>design</u>")
                            .pause(250)
                            .type(".")

                          return instance;
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          {/* Nametag */}
          <motion.div className="absolute z-20 top-[-3rem] sm:top-[-3.5rem] left-[-1rem]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <Image
              src={name}
              alt="Nametag"
              quality={80}
              priority={true}
              className="w-[20vw] min-w-[120px] max-w-[200px]"
            />
          </motion.div>
          {/* koss */}
          <motion.div
            className="absolute z-20 top-[0.5rem] sm:top-[0.75rem] right-[0rem]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: !isMobile ? [5, -5, 3, -3] : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
              rotate: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            style={{
              transformOrigin: "top center"
            }}
          >
            <Image
              src={koss}
              alt="koss"
              quality={isMobile ? 70 : 80}
              priority={true}
              className="w-[10vw] min-w-[50px] max-w-[100px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:underline active:scale-105 transition"
          href="https://drive.google.com/file/d/1HBvUFSV8CyuP3FJXbCGreTFZYwP1qD7j/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 pb-0.2 group-hover:translate-y-0.5 transition" />
        </a>
        <a
          className="bg-dark-gray/50 p-4 text-white hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/80"
          href="https://www.linkedin.com/in/nethaneel-patricio-linggar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-dark-gray/50 p-4 text-white hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/80"
          href="https://github.com/NethanLinggar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}