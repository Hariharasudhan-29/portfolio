"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const skills = [
  { category: "Languages", items: ["C++", "Java", "Python", "C"] },
  { category: "Web Technologies", items: ["React", "Node.js", "Express", "JavaScript", "HTML5", "CSS3"] },
  { category: "Databases", items: ["MySQL", "SQLite"] },
  { category: "Developer Tools", items: ["Git", "VS Code", "Arduino IDE"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary-500">Skills</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={2500}
                className="glass p-6 rounded-2xl h-full"
              >
                <h3 className="text-xl font-bold mb-6 text-primary-500">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-1 text-sm font-medium">
                        <span>{skill}</span>
                        <span className="text-slate-500">
                          {/* We could use actual percentages, but for now we'll do random/fixed or omit */}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-accent h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
