"use client";

// Cleaned: hero now uses EarthCanvas only
import { motion } from "framer-motion";
import Link from "next/link";
import { EarthCanvas } from "./Earth";

// Placeholder removed; no extra 3D in hero besides Earth

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container-px max-w-wrapper grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center py-20 md:py-28">
        <div className="z-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            Building thoughtful AI experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-muted max-w-[60ch]"
          >
            AI Enthusiast crafting premium-grade solutions in LLM fine-tuning, NLP, CV, and Generative AI. Passionate about bringing ideas to life with precision and elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-5 py-2.5 text-sm font-medium hover:brightness-110 transition"
            >
              View Projects
            </Link>
            <a
              href="https://huggingface.co/datasets/diabolic6045/divax-portfolio/resolve/main/public/resume.pdf"
              download="resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-card transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
        <div className="aspect-square relative">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
}

