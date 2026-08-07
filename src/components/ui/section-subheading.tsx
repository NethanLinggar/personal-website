import React from "react";

import { Source_Code_Pro } from "next/font/google";

const code = Source_Code_Pro({ subsets: ["latin"] });

type SectionSubheadingProps = {
  children: React.ReactNode;
};

export default function SectionSubheading({
  children,
}: SectionSubheadingProps) {
  return (
    <h3
      className={`${code.className} my-10 text-center text-xl font-medium dark:text-white`}
    >
      {children}
    </h3>
  );
}
