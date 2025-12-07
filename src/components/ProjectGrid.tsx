"use client";

import { projects } from "@/lib/content";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
          className={`rounded-2xl border bg-card p-5 transition-colors ${
            p.deprecated
              ? "border-teal/40 dark:border-amber/40 hover:border-teal/60 dark:hover:border-amber/60 opacity-75"
              : "border-white/10 hover:border-white/20"
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 text-base font-semibold tracking-tight hover:underline transition-colors flex-1"
              >
                <span className="flex-1">{p.title}</span>
                <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
              </a>
            ) : (
              <h3 className="text-base font-semibold tracking-tight flex-1">{p.title}</h3>
            )}
            {p.deprecated && (
              <span className="text-xs text-teal dark:text-amber font-medium px-2 py-0.5 rounded-full bg-teal/10 dark:bg-amber/10">
                Deprecated
              </span>
            )}
          </div>
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

