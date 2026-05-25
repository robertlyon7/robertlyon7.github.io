'use client';

import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-40">
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8">

        <motion.p variants={item} className="text-[var(--fg-muted)] text-md tracking-wide">
          👋Hi, My name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-3xl"
        >
          <span className="text-steel font-medium">Robert Lyon</span> <br />a developer building{' '}
          <span className="relative inline-block">
            thoughtful
            <svg
              aria-hidden
              viewBox="0 0 300 18"
              preserveAspectRatio="none"
              className="absolute left-0 -bottom-2 w-full h-3 overflow-visible"
            >
              <path
                d="M3 11 C 60 3, 120 16, 180 7 S 280 12, 297 6"
                fill="none"
                stroke="#EE8277"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="300"
                strokeDashoffset="300"
                className="animate-draw"
              />
            </svg>
          </span>{' '}
          things on the web.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-[var(--fg-muted)] max-w-2xl leading-relaxed"
        >
          I'm a computer science student drawn to frontend development and AI/ML. I strive to build interfaces that are a
          pleasure to use, and I'm fascinated by AI models and how they work.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-steel text-white text-sm font-medium hover:bg-steel/90 transition-colors"
          >
            View my work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
