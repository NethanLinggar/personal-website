"use client";

import Image from "next/image";
import { motion } from "motion/react";

type ThemeTransitionProps = {
  phase: "rise" | "reveal";
  onCovered: () => void;
  onComplete: () => void;
};

export default function ThemeTransition({
  phase,
  onCovered,
  onComplete,
}: ThemeTransitionProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1000] overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: "100%", rotate: 0 }}
        animate={{ y: 0, rotate: 720, opacity: phase === "reveal" ? 0 : 1 }}
        transition={{
          y: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
          rotate: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.45, ease: "easeOut" },
        }}
      >
        <Image
          src="/flashbang.png"
          alt=""
          width={190}
          height={362}
          priority
          className="h-auto max-h-[65vh] w-auto max-w-[45vw] object-contain"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "reveal" ? 0 : 1 }}
        transition={
          phase === "rise"
            ? { opacity: { duration: 0, delay: 0.85 } }
            : { opacity: { duration: 1.1, delay: 1.1, ease: "easeOut" } }
        }
        onAnimationComplete={() => {
          if (phase === "rise") onCovered();
          else onComplete();
        }}
      />
    </div>
  );
}
