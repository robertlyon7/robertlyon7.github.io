'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-5xl mx-auto px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}
