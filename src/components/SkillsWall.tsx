"use client";

import { skills } from "@/lib/content";
import { motion } from "framer-motion";

export function SkillsWall() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((s, idx) => (
        <motion.span
          key={s}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: idx * 0.02 }}
          className="rounded-full border border-black/10 dark:border-white/10 bg-card px-3 py-1.5 text-xs md:text-sm text-muted hover:border-black/20 dark:hover:border-white/20 hover:text-fg transition-colors"
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}

