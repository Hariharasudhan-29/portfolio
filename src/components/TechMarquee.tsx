"use client";

import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", 
  "C++", "Java", "Express", "Firebase", "MySQL", "OpenCV"
];

export default function TechMarquee() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full py-8 border-y border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-black/30 backdrop-blur-md">
      <Marquee
        gradient={true}
        gradientColor={resolvedTheme === "dark" ? "#020617" : "#f8fafc"}
        speed={40}
        pauseOnHover={true}
      >
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="mx-8 text-xl font-bold text-slate-400 dark:text-slate-600 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
          >
            {tech}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
