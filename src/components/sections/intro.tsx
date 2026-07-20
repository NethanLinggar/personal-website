"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Source_Code_Pro } from "next/font/google";
import { motion } from "motion/react";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import TypeIt from "typeit-react";
import monitorBig from "../../../public/monitorBig.png";
import monitorSmall from "../../../public/monitorSmall.png";
import name from "../../../public/name.png";
import koss from "../../../public/koss.png";
import blackOutline from "../../../public/blackOutline.png";
import SocialLinks from "../ui/social-links";

const code = Source_Code_Pro({ subsets: ["latin"] });

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on client-side only
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    setMounted(true);
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldAnimate = mounted && !isMobile;

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
              key={"monitor-" + (shouldAnimate ? "animate" : "static")}
              initial={shouldAnimate ? { opacity: 0, scale: 0 } : false}
              animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
              transition={
                shouldAnimate ? { type: "tween", duration: 0.2 } : undefined
              }
            >
              {!isMobile ? (
                <Image
                  src={monitorBig}
                  alt="Monitor"
                  quality={75}
                  priority={true}
                  sizes="(max-width: 640px) 300px, 600px"
                  className="relative"
                />
              ) : (
                <Image
                  src={monitorSmall}
                  alt="Monitor"
                  quality={75}
                  priority={true}
                  sizes="300px"
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
            key={"nametag-" + (shouldAnimate ? "animate" : "static")}
            initial={shouldAnimate ? { opacity: 0, scale: 0 } : false}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
            transition={
              shouldAnimate
                ? { type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }
                : undefined
            }
          >
            <Image
              src={name}
              alt="Nametag"
              quality={75}
              priority={true}
              sizes="(max-width: 640px) 120px, 200px"
              className="w-[20vw] min-w-[120px] max-w-[200px]"
            />
          </motion.div>
          {/* koss */}
          <motion.div
            className="absolute right-[0rem] top-[0.5rem] z-20 sm:top-[0.75rem]"
            key={"koss-" + (shouldAnimate ? "animate" : "static")}
            initial={shouldAnimate ? { opacity: 0, scale: 0 } : false}
            animate={
              shouldAnimate
                ? {
                    opacity: 1,
                    scale: 1,
                    rotate: [5, -5, 3, -3],
                  }
                : undefined
            }
            transition={
              shouldAnimate
                ? {
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
                  }
                : undefined
            }
            style={{
              transformOrigin: "top center",
            }}
          >
            <Image
              src={koss}
              alt="koss"
              quality={75}
              priority={true}
              sizes="(max-width: 640px) 50px, 100px"
              className="w-[10vw] min-w-[50px] max-w-[100px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col items-center justify-center gap-10 px-4 text-lg font-medium"
        key={"buttons-" + (shouldAnimate ? "animate" : "static")}
        initial={shouldAnimate ? { opacity: 0, y: 100 } : false}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        transition={shouldAnimate ? { delay: 0.1 } : undefined}
      >
        <a
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-black px-7 py-3 text-white decoration-2 underline-offset-2 outline-none transition-transform hover:scale-110 hover:underline focus:scale-110 active:scale-105 dark:border-white/5 dark:bg-white dark:text-black dark:hover:text-black"
          href="https://drive.google.com/file/d/1HBvUFSV8CyuP3FJXbCGreTFZYwP1qD7j/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open CV{" "}
          <HiDownload className="transition group-hover:translate-y-0.5" />
        </a>
        <div className="flex flex-row gap-6">
          <SocialLinks />
        </div>
      </motion.div>
    </section>
  );
}
