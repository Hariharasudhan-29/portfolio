"use client";

import { motion } from "framer-motion";

export default function GlowBlobs() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-400/30 dark:bg-primary-900/40 blur-[120px]"
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-400/30 dark:bg-purple-900/40 blur-[150px]"
      />
    </div>
  );
}
