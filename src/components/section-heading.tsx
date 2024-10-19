import React from 'react'

import { Source_Code_Pro } from 'next/font/google'

const code = Source_Code_Pro({ subsets: ['latin'] })

type SectionHeadingProps = {
  children: React.ReactNode;
}

export default function SectionHeading({
  children }: SectionHeadingProps) {
  return (
    <h2 className={`${code.className} text-3xl font-medium capitalize mb-8 text-center dark:text-white`}>{children}</h2>
  )
}
