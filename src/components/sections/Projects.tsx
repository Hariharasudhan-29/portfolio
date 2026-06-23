"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "Built an automated attendance system using Python, OpenCV, and face recognition to eliminate manual tracking and automate attendance logging.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    github: "https://github.com/Hariharasudhan-29",
    demo: "#",
    image: "/project-1.png",
  },
  {
    title: "TRANS-IT: Real-Time Bus Tracking",
    description: "A real-time college bus tracking system with live GPS tracking, ETA-based monitoring, and QR code attendance system.",
    tech: ["Next.js", "Firebase", "React", "Node.js"],
    github: "https://github.com/Hariharasudhan-29",
    demo: "#",
    image: "/project-2.png",
  },

  {
    title: "V Schedule: Timetable Generator",
    description: "A full-stack academic scheduling platform with an algorithm to auto-generate conflict-free timetables, RBAC, and intelligent substitution logic.",
    tech: ["React 19", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Hariharasudhan-29",
    demo: "#",
    image: "/project-4.png",
  }
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary-500">Projects</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Tilt
                tiltEnable={!isMobile}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2000}
                className="glass rounded-2xl overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 hover:bg-primary-500 rounded-full backdrop-blur-sm text-white transition-all hover:scale-110">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 hover:bg-primary-500 rounded-full backdrop-blur-sm text-white transition-all hover:scale-110">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-md border border-primary-200 dark:border-primary-800/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
