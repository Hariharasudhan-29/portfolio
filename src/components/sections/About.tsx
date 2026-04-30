"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary-500">Me</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-slate-700 dark:text-slate-300"
          >
            <p>
              Hi! I am Hariharasudhan V, a driven and detail-oriented Information Technology student at SRM Madurai College for Engineering and Technology. I have a strong foundation in C++, Java, Python, and modern web development.
            </p>
            <p>
              I am experienced in building full-stack applications and IoT solutions through hands-on project work. As a quick learner focused on writing clean, efficient code, I am seeking an entry-level software developer role to apply my technical skills and contribute to a forward-thinking team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">B.Tech Information Technology</h4>
                <p className="text-slate-500 dark:text-slate-400">2023 &ndash; 2027</p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span>SRM Madurai College for Engineering and Technology</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              <div className="p-3 bg-accent/10 text-accent rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Current CGPA</h4>
                <p className="text-2xl font-extrabold text-gradient">7.61</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
