import React from "react";

type SectionSubheadingProps = {
  children: React.ReactNode;
};

export default function SectionSubheading({
  children,
}: SectionSubheadingProps) {
  return (
    <h3
      className={`font-code my-10 text-center text-xl font-medium dark:text-white`}
    >
      {children}
    </h3>
  );
}
