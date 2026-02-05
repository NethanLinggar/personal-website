"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { RiMailFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import SocialButton from "../ui/social-button";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

export default function Contact() {
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

  return (
    <section className="mb-32 max-w-[50rem] scroll-mt-[100rem] text-center">
      <motion.h1
        className="mb-5 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ willChange: "transform, opacity" }}
      >
        <span className="font-semibold dark:text-white">
          You could reach me out through here!
        </span>
      </motion.h1>

      <motion.div
        className="relative flex flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ willChange: "transform, opacity" }}
      >
        <Popover className="relative">
          <PopoverButton
            as={SocialButton}
            onClick={handleCopyEmail}
            platform="email"
          >
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
          platform="linkedin"
        >
          <BsLinkedin />
        </SocialButton>

        <SocialButton
          href="https://github.com/NethanLinggar"
          target="_blank"
          rel="noopener noreferrer"
          platform="github"
        >
          <FaGithubSquare />
        </SocialButton>

        <SocialButton
          href="https://www.instagram.com/nethanpat/"
          target="_blank"
          rel="noopener noreferrer"
          platform="instagram"
        >
          <FaInstagramSquare />
        </SocialButton>
      </motion.div>
    </section>
  );
}
