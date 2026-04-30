"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted || !init) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Particles
      key={resolvedTheme}
      id="tsparticles"
      className="absolute inset-0 z-0 transition-opacity duration-500"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60, // Reduced from 120 for better performance
        interactivity: {
          events: {
            onHover: {
              enable: !isMobile, // Disable hover interaction on mobile
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: isDark ? "#ffffff" : "#3b82f6",
          },
          links: {
            color: isDark ? "#ffffff" : "#3b82f6",
            distance: 150,
            enable: true,
            opacity: isDark ? 0.2 : 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: isMobile ? 0.5 : 1, // Slower on mobile
          },
          number: {
            density: {
              enable: true,
            },
            value: isMobile ? 30 : 80, // Dramatically reduced on mobile
          },
          opacity: {
            value: isDark ? 0.3 : 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
