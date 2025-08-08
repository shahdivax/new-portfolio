"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function SkillsParallax({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll({ offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="relative">
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute -inset-x-6 -top-10 -bottom-10 -z-10 rounded-[40px] bg-gradient-to-tr from-teal-500/10 to-amber/10 blur-2xl"
      />
      {children}
    </div>
  );
}

