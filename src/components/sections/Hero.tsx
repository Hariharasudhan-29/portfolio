"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Briefcase } from "lucide-react";
import Image from "next/image";
import ParticleBackground from "../ParticleBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary-500 mb-2">Hello, I am</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Hariharasudhan V<br />
              <span className="text-gradient">Developer</span>
            </h1>
            
            <div className="text-xl md:text-3xl font-semibold mb-6 h-[40px] text-slate-700 dark:text-slate-300">
              <TypeAnimation
                sequence={[
                  "B.Tech IT Student",
                  1000,
                  "Aspiring Software Developer",
                  1000,
                  "Tech Enthusiast",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
              Driven and detail-oriented Information Technology student with a strong foundation in C++, Java, Python, and modern web development. A quick learner focused on writing clean, efficient code.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#projects" className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-primary-500/30">
                <Briefcase className="w-5 h-5" />
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 font-medium flex items-center gap-2 transition-all hover:scale-105 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                Contact Me <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/Hariharasudhan-Resume.pdf" target="_blank" className="px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors hover:text-primary-500 underline underline-offset-4">
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>
          </motion.div>
          
          {/* Image / Visual */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-accent blur-3xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="Hariharasudhan V"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
