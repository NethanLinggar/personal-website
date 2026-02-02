"use client";

import React, { ReactNode } from "react";

interface SocialButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
  target,
  rel,
}) => {
  const baseClasses =
    "bg-dark-gray/50 p-4 text-white hover:text-gray-950 flex items-center gap-2 rounded-full border border-white/10 transition-transform hover:scale-110 active:scale-105 cursor-pointer dark:border-white/5 dark:bg-white/10 dark:text-white/80";

  const combinedClasses = `${baseClasses} ${className}`;

  if (href && href !== "#") {
    return (
      <a
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
    <button type="button" className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default SocialButton;
