"use client";

import React, { useEffect, useRef, useState } from "react";

interface VerticalTimelineProps {
  children: React.ReactNode;
  lineColor?: string;
}

export function VerticalTimeline({
  children,
  lineColor = "",
}: VerticalTimelineProps) {
  return (
    <div className="relative" role="list" aria-label="Timeline">
      {children}
    </div>
  );
}

interface VerticalTimelineElementProps {
  children: React.ReactNode;
  visible?: boolean;
  className?: string;
  contentStyle?: React.CSSProperties;
  date?: string;
  dateClassName?: string;
  icon?: React.ReactNode;
  iconStyle?: React.CSSProperties;
  isFirst?: boolean;
  lineColor?: string;
  index?: number;
}

export function VerticalTimelineElement({
  children,
  visible = false,
  className = "",
  contentStyle = {},
  icon,
  iconStyle = {},
  isFirst = false,
  lineColor = "",
  index = 0,
}: VerticalTimelineElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // Line starts after current element's icon and content animations complete
  const lineDelay = 550;

  // Calculate line height between icons
  const calculateLineHeight = () => {
    if (!isFirst && iconRef.current && elementRef.current) {
      // Triple RAF ensures all layout calculations are complete
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!iconRef.current || !elementRef.current) return;

            const currentIcon = iconRef.current;
            const currentElement = elementRef.current;

            const previousElement =
              currentElement.previousElementSibling as HTMLElement;

            if (previousElement) {
              const previousIcon = previousElement.querySelector(
                "[data-timeline-icon]",
              ) as HTMLElement;

              if (previousIcon) {
                const currentIconRect = currentIcon.getBoundingClientRect();
                const previousIconRect = previousIcon.getBoundingClientRect();

                // Distance from bottom of previous icon to top of current icon
                const distance = currentIconRect.top - previousIconRect.bottom;

                // Subtract 28px to account for icon positioning and margins
                setLineHeight(distance - 28);
              }
            }
          });
        });
      });
    }
  };

  // Handle scroll-triggered visibility animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger visibility once when element enters viewport
          if (entry.isIntersecting && visible && !isVisible) {
            // Calculate line height FIRST, then trigger visibility
            calculateLineHeight();
            setTimeout(() => {
              setIsVisible(true);
            }, 100);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [visible, isVisible]);

  // Separate effect to trigger line animation with stagger
  useEffect(() => {
    if (isVisible && !lineVisible) {
      const timer = setTimeout(() => {
        setLineVisible(true);
      }, lineDelay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, lineVisible, lineDelay]);

  // Handle window resize recalculation (only when already visible)
  useEffect(() => {
    // Only recalculate when element is already visible
    if (!isVisible) return;

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        calculateLineHeight();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    // Detect content size changes within the element
    let resizeObserver: ResizeObserver | null = null;

    if (elementRef.current) {
      resizeObserver = new ResizeObserver(() => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          calculateLineHeight();
        }, 250);
      });
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [isFirst, isVisible]);

  return (
    <div
      ref={elementRef}
      role="listitem"
      className={`relative mb-8 ml-20 ${className}`}
    >
      {/* Connecting line between icons */}
      {!isFirst && lineHeight > 0 && (
        <div
          className="absolute w-[2px] rounded-full transition-all duration-500"
          style={{
            background: lineColor || "rgba(156, 163, 175, 0.3)",
            height: `${lineHeight}px`,
            transform: lineVisible ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top", // Animates from top to bottom
            opacity: lineVisible ? 1 : 0,
            left: "calc(-4.4rem + 1.625rem - 1px)",
            bottom: "100%",
            marginBottom: "0.75rem",
          }}
          aria-hidden="true"
        />
      )}

      {/* Timeline icon */}
      <div
        ref={iconRef}
        data-timeline-icon
        className="absolute -left-[4.4rem] top-0 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full transition-all duration-500"
        style={{
          ...iconStyle,
          transform: isVisible ? "scale(1)" : "scale(0)",
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Content card */}
      <div
        className="rounded-lg transition-all duration-500"
        style={{
          ...contentStyle,
          transform: isVisible
            ? "translateX(0) translateY(0)"
            : "translateX(-20px) translateY(20px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
