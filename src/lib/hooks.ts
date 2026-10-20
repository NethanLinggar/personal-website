"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";
import type { SectionName } from "./types";

export type EmbedType = "steam" | "spotify" | "letterboxd" | null;

const mobileQuery = "(max-width: 767px)";

function subscribeToMobileChange(callback: () => void) {
  const mediaQuery = window.matchMedia(mobileQuery);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getIsMobileSnapshot() {
  return window.matchMedia(mobileQuery).matches;
}

export function useIsMobile() {
  return useSyncExternalStore(
    subscribeToMobileChange,
    getIsMobileSnapshot,
    () => false,
  );
}

const subscribeToClient = () => () => {};

export function useIsClient() {
  return useSyncExternalStore(subscribeToClient, () => true, () => false);
}

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const { threshold, root, rootMargin } = options ?? {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, root, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin]);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    ref.current = node;
  }, []);

  return { ref: setRef, inView };
}

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref, inView };
}

export function useCopyEmail() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("nethan.linggar@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      })
      .catch(() => {
        setCopyFailed(true);
        setTimeout(() => setCopyFailed(false), 2000);
      });
  };

  return { emailCopied, copyFailed, handleCopyEmail };
}

export const useEmbed = () => {
  const [activeEmbed, setActiveEmbed] = useState<EmbedType>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleMouseEnter = (type: EmbedType) => {
    if (!clicked) {
      setActiveEmbed(type);
    }
  };

  const handleMouseLeave = () => {
    if (!clicked) {
      setTimeout(() => {
        const embedElement = document.querySelector(
          '[data-embed-type="' + activeEmbed + '"]',
        );
        if (embedElement && !embedElement.matches(":hover")) {
          setActiveEmbed(null);
        }
      }, 100);
    }
  };

  const handleClick = (type: EmbedType) => {
    if (activeEmbed === type && clicked) {
      setClicked(false);
      setActiveEmbed(null);
    } else {
      setClicked(true);
      setActiveEmbed(type);
    }
  };

  const handleClose = () => {
    setActiveEmbed(null);
    setClicked(false);
  };

  return {
    activeEmbed,
    clicked,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    handleClose,
  };
};
