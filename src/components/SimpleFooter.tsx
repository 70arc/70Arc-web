"use client";

import { motion } from "framer-motion";

export default function SimpleFooter() {
  return (
    <footer className="w-full py-16 px-6 mt-40 bg-gradient-to-t from-[var(--void-atmosphere)] to-transparent">
      <motion.div 
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <a href="/" className="text-[var(--text-secondary)] hover:text-[var(--accent-orange)] transition-colors" data-hover="true">
            Home
          </a>
          <a href="/about" className="text-[var(--text-secondary)] hover:text-[var(--accent-orange)] transition-colors" data-hover="true">
            About
          </a>
          <a href="/careers" className="text-[var(--text-secondary)] hover:text-[var(--accent-orange)] transition-colors" data-hover="true">
            Careers
          </a>
          <a href="/social" className="text-[var(--text-secondary)] hover:text-[var(--accent-orange)] transition-colors" data-hover="true">
            Social
          </a>
        </div>
        
        <div className="text-mono text-xs text-[var(--text-tertiary)]">
          © 2025 70Arc. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
