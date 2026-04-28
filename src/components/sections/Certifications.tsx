"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "FutureLearn",
    date: "May 2024",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Internet of Things",
    issuer: "SRM IST Chennai",
    date: "Mar 2024",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Python for Data Science",
    issuer: "SRM IST Chennai",
    date: "Feb 2024",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Data Science Foundation",
    issuer: "Great Learning",
    date: "Feb 2024",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Placement Preparation",
    issuer: "Internshala Trainings",
    date: "Feb 2024",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Jan 2024",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Java Programming",
    issuer: "Great Learning",
    date: "Oct 2023",
    color: "from-red-500 to-orange-600",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Continuously learning and validating skills through recognized platforms and institutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-snug mb-1">{cert.title}</h3>
                <p className="text-sm text-primary-500 font-medium">{cert.issuer}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
