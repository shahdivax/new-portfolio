"use client";

import { projects } from "@/lib/content";
import { motion } from "framer-motion";
import { ProjectAccent } from "./ProjectAccent";

export function ProjectGrid() {
  return (
    <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectAccent />
      {projects.map((p, idx) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: idx * 0.03 }}
          className="rounded-2xl border border-white/10 bg-card p-5 hover:border-white/20 transition-colors"
        >
          {p.url ? (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-base font-semibold tracking-tight hover:underline">
              {p.title}
            </a>
          ) : (
            <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
          )}
          <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10 px-2.5 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

