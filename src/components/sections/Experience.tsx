"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    title: "Web designing Intern",
    company: "Four Step solutions",
    date: "Dec 2024 - Jan 2025",
    description: "Contributed to real-time projects, improving proficiency in UI/UX, wireframing, and design optimization in a collaborative team setting.",
  },
  {
    title: "Full Stack Development Intern",
    company: "Arutra Solutions",
    date: "Jun 2025 - Jul 2025",
    description: "Acquired practical full-stack development experience, improving coding and debugging skills through teamwork on live projects.",
  },
  {
    title: "IoT, Drone & Robotics Intern",
    company: "AITRA",
    date: "Dec 2025 - Jan 2026",
    description: "Worked on IoT, drone, and robotics projects with sensor integration and automation, developing skills in real-time systems and hardware–software interfacing.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & <span className="text-primary-500">Achievements</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 mb-12">
                <div className="md:col-span-1 flex md:justify-end md:pr-8 md:pt-1">
                  <span className="text-sm font-bold text-primary-500">{item.date}</span>
                </div>
                
                <div className="md:col-span-4 relative mt-2 md:mt-0 glass p-6 rounded-2xl md:ml-8 border-l-4 border-l-primary-500 hover:-translate-y-1 transition-transform">
                  {/* Timeline Dot (desktop) */}
                  <div className="hidden md:block absolute w-4 h-4 rounded-full bg-primary-500 border-4 border-background top-1 -left-[41px]"></div>
                  {/* Timeline Dot (mobile) */}
                  <div className="md:hidden absolute w-4 h-4 rounded-full bg-primary-500 border-4 border-background top-2 -left-[41px]"></div>
                  
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{item.company}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
