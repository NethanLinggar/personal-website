"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import SocialLinks from "../ui/social-links";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="mb-32 max-w-[50rem] scroll-mt-[100rem] text-center">
      <motion.h1
        className="mb-5 px-4 text-2xl font-medium !leading-[1.5]"
        initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 100 }}
        animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
        style={{ willChange: isMobile ? "opacity" : "transform, opacity" }}
      >
        <span className="font-semibold dark:text-white">
          You could reach me out through here!
        </span>
      </motion.h1>

      <motion.div
        className="relative flex flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 100 }}
        animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ willChange: isMobile ? "opacity" : "transform, opacity" }}
      >
        <SocialLinks />
      </motion.div>
    </section>
  );
}
