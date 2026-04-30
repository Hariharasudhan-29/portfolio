"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Internships", value: 3, suffix: "+" },
  { label: "Major Projects", value: 5, suffix: "+" },
  { label: "Current CGPA", value: 7.61, decimals: 2 },
  { label: "Problems Solved", value: 100, suffix: "+" },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 glass rounded-2xl"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
