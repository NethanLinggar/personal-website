"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import ThemeTransition from "@/components/ui/theme-transition";
import { useIsMobile } from "@/lib/hooks";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("theme") as Theme | null;
      if (stored === "dark" || stored === "light") return stored;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        return "dark";
    }
    return "light";
  });
  const [transitionPhase, setTransitionPhase] = useState<
    "rise" | "reveal" | null
  >(null);
  const transitionInProgress = useRef(false);
  const isMobile = useIsMobile();

  const toggleTheme = () => {
    if (transitionInProgress.current) return;

    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      return;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      isMobile
    ) {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      return;
    }

    transitionInProgress.current = true;
    setTransitionPhase("rise");
  };

  const revealLightTheme = () => {
    setTheme("light");
    window.localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    setTransitionPhase("reveal");
  };

  const finishTransition = () => {
    transitionInProgress.current = false;
    setTransitionPhase(null);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
      {transitionPhase && (
        <ThemeTransition
          phase={transitionPhase}
          onCovered={revealLightTheme}
          onComplete={finishTransition}
        />
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
