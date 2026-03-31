"use client";

import { type ReactNode } from "react";
import { motion } from "@/lib/motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function BlogHero({ children }: { children: ReactNode }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="mb-12"
    >
      {children}
    </motion.header>
  );
}

export function BlogContent({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function BlogRelated({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease }}
      className="mt-20 pt-12 border-t border-white/8"
    >
      {children}
    </motion.section>
  );
}

export function BlogRelatedCard({ children, index }: { children: ReactNode; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export function BlogBackLink({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </motion.div>
  );
}
