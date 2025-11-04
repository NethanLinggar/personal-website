import React from "react";

export default function Footer() {
  return (
    <footer className="mb-32 px-4 text-center sm:mb-10">
      <small className="mb-2 block text-xs">
        &copy; 2025 Nethaneel Patricio Linggar. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Motion, and Vercel hosting.
      </p>
    </footer>
  );
}
