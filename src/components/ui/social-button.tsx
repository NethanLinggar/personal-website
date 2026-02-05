"use client";

import React, { ReactNode } from "react";

interface SocialButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  platform?: "email" | "linkedin" | "github" | "instagram";
}

const SocialButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  SocialButtonProps
>((props, ref) => {
  const {
    href,
    onClick,
    children,
    className = "",
    target,
    rel,
    platform,
  } = props;
  const baseClasses =
    "bg-dark-gray/50 p-4 text-white flex items-center gap-2 rounded-full transition-all hover:scale-110 active:scale-105 cursor-pointer dark:bg-white/10 dark:text-white/80 focus:outline-none";

  // Platform-specific border and hover colors
  const platformStyles = {
    email:
      "border-slate-500/50 dark:border-slate-400/30 hover:bg-slate-500 dark:hover:bg-slate-400 hover:text-white dark:hover:text-black",
    linkedin:
      "border-blue-500/50 dark:border-blue-400/30 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white dark:hover:text-black",
    github:
      "border-purple-500/50 dark:border-purple-400/30 hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white dark:hover:text-black",
    instagram:
      "border-pink-500/50 dark:border-pink-400/30 hover:bg-pink-500 dark:hover:bg-pink-400 hover:text-white dark:hover:text-black",
  };

  const platformClass = platform
    ? platformStyles[platform]
    : "border-white/10 dark:border-white/5 hover:text-gray-950";

  const combinedClasses = `${baseClasses} border ${platformClass} ${className}`;

  if (href && href !== "#") {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={combinedClasses}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

SocialButton.displayName = "SocialButton";

export default SocialButton;
