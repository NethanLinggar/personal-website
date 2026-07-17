"use client";

import { RiMailFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import SocialButton from "./social-button";
import { useCopyEmail } from "@/lib/hooks";

export default function SocialLinks() {
  const { emailCopied, copyFailed, handleCopyEmail } = useCopyEmail();

  return (
    <>
      <Popover className="relative">
        <PopoverButton
          as={SocialButton}
          onClick={handleCopyEmail}
          platform="email"
        >
          <RiMailFill />
        </PopoverButton>
        <Transition
          show={emailCopied || copyFailed}
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
            {copyFailed ? "Failed to copy" : "Email copied!"}
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
    </>
  );
}
