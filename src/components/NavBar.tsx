"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Github, Linkedin, MessageCircle, SquareDashedMousePointer } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/75 border-b border-black/10 dark:border-white/10"
    >
      <div className="container-px max-w-wrapper h-16 flex items-center justify-between">
        <Link href="#home" className="group inline-flex items-center gap-2">
          <SquareDashedMousePointer className="h-5 w-5 text-teal group-hover:scale-110 transition-transform" />
          <span className="relative font-semibold tracking-tight">
            Divax Shah
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-teal-500 to-amber transition-all duration-500 group-hover:w-full" />
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:text-fg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shahdivax"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-card transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/divax-shah/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-card transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          {/* HuggingFace link in place of chat icon */}
          <a
            href="https://huggingface.co/diabolic6045"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-black/10 dark:border-white/10 hover:bg-card"
            aria-label="HuggingFace"
            title="Hugging Face"
          >
            <span className="text-base">🤗</span>
          </a>
          <ThemeToggle />
          {/* Chat launcher moved to bottom-right; navbar no longer needs this */}
        </div>
      </div>
    </motion.header>
  );
}

