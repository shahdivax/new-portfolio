"use client";

import { experiences } from "@/lib/content";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <ol className="relative ml-4 border-l border-white/10">
      {experiences.map((exp, idx) => (
        <motion.li
          key={exp.company + idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className="mb-10 ml-4"
        >
          <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-teal-500 to-amber shadow" />
          <h3 className="text-lg font-medium">
            {exp.role} <span className="text-muted">@ {exp.company}</span>
          </h3>
          <p className="text-xs text-muted mt-0.5">{exp.date}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted/90 max-w-prose">
            {exp.details}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}

