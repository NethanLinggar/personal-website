"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Switch } from "@headlessui/react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      className="dark:bg-gray-950/30 fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white/10 bg-white/40 shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-105 dark:border-white/5"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <BsMoon className="h-5 w-5" /> : <BsSun className="h-5 w-5" />}
    </Switch>
  );
}
