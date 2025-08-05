"use client";

import React, { ReactNode } from 'react';

interface SocialButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  className = "",
  target,
  rel
}) => {
  const baseClasses = "bg-dark-gray/50 p-4 text-white hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/80";

  const combinedClasses = `${baseClasses} ${className}`;

  if (href && href !== "#") {
    return (
      <a
        className={combinedClasses}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={combinedClasses}
      href="#"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default SocialButton;