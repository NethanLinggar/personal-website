"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Source_Code_Pro } from "next/font/google";
import { RiMailFill } from "react-icons/ri";
import { motion } from "motion/react";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView, useEmbed } from "@/lib/hooks";
import TypeIt from "typeit-react";
import monitorBig from "../../../public/monitorBig.png";
import monitorSmall from "../../../public/monitorSmall.png";
import name from "../../../public/name.png";
import koss from "../../../public/koss.png";
import blackOutline from "../../../public/blackOutline.png";
import SocialButton from "../ui/social";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

const code = Source_Code_Pro({ subsets: ["latin"] });

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const [isMobile, setIsMobile] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("nethan.linggar@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  // Check for mobile device on client-side only
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[45rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="mb-12 flex items-center justify-center">
        <div className="relative">
          <div className="relative mt-3">
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
                  quality={75}
                  priority={true}
                  className="relative"
                />
              ) : (
                <Image
                  src={monitorSmall}
                  alt="Monitor"
                  quality={75}
                  priority={true}
                  className="relative"
                />
              )}

              {/* Inside Monitor */}
              <div
                className={`${code.className} absolute inset-0 top-[-35%] flex items-center justify-between overflow-hidden px-[5%]`}
              >
                <div className="flex w-full items-center justify-between space-x-8">
                  {/* Logo Image */}
                  {!isMobile && (
                    <div className="w-[200px] text-right">
                      <Image
                        src={blackOutline}
                        alt="Logo Image"
                        width={200}
                        height={200}
                      />
                      <p className="text-xs font-medium !leading-[1.5] dark:text-black sm:text-sm sm:!leading-[2.2]">
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
                    <div className="w-full text-left text-lg font-medium !leading-[1.2] dark:text-black">
                      <p>
                        a <strong>software engineer</strong> w/ a small interest
                        in <em>machine learning</em>.
                      </p>
                      <br />
                      <p>
                        also a huge <u>nerd</u> & have great taste in{" "}
                        <u>design</u>.
                      </p>
                    </div>
                  ) : (
                    <div className="w-full text-left text-[1.8rem] font-medium !leading-[1.4] dark:text-black">
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
                            .type(".");

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
          <motion.div
            className="absolute left-[-1rem] top-[-3rem] z-20 sm:top-[-3.5rem]"
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
              quality={75}
              priority={true}
              className="w-[20vw] min-w-[120px] max-w-[200px]"
            />
          </motion.div>
          {/* koss */}
          <motion.div
            className="absolute right-[0rem] top-[0.5rem] z-20 sm:top-[0.75rem]"
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
                ease: "easeInOut",
              },
            }}
            style={{
              transformOrigin: "top center",
            }}
          >
            <Image
              src={koss}
              alt="koss"
              quality={75}
              priority={true}
              className="w-[10vw] min-w-[50px] max-w-[100px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-black px-7 py-3 text-white decoration-2 underline-offset-2 outline-none transition-transform hover:scale-110 hover:underline focus:scale-110 active:scale-105 dark:border-white/5 dark:bg-white dark:text-black dark:hover:text-black"
          href="https://drive.google.com/file/d/1HBvUFSV8CyuP3FJXbCGreTFZYwP1qD7j/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV{" "}
          <HiDownload className="transition group-hover:translate-y-0.5" />
        </a>

        {/* Email Button with Popover */}
        <Popover className="relative">
          <PopoverButton as={SocialButton} onClick={handleCopyEmail}>
            <RiMailFill />
          </PopoverButton>

          <Transition
            show={emailCopied}
            enter="transition-all duration-150 ease-out"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <PopoverPanel
              static
              className="absolute left-1/2 top-16 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-3 py-1.5 text-sm text-white dark:bg-white/80 dark:text-black"
            >
              Email copied!
            </PopoverPanel>
          </Transition>
        </Popover>

        <SocialButton
          href="https://www.linkedin.com/in/nethaneel-patricio-linggar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </SocialButton>
        <SocialButton
          href="https://github.com/NethanLinggar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </SocialButton>
      </motion.div>
    </section>
  );
}
