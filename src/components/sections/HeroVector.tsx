"use client";

import { motion } from "framer-motion";
import GlassPane from "@/components/GlassPane";
import { content } from "@/lib/content";

export default function HeroVector() {
  return (
    <section 
      id="hero"
      className="min-h-screen relative flex items-center justify-center perspective overflow-hidden"
    >
      {/* Floating panes container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20 h-[80vh] flex flex-col md:block justify-center">
        {/* Pane 1: Main Logo - Large, Left */}
        <div className="md:absolute md:left-0 lg:left-20 md:top-1/2 md:-translate-y-1/2 z-30 mb-8 md:mb-0">
          <GlassPane 
            size="xl"
            delay={0.8}
            initialX={-100}
            initialY={100}
            zIndex={3}
            floatSpeed="slow"
            className="w-full max-w-[90vw] md:w-auto"
          >
            <h1 className="text-display text-display-xl text-engraved text-center md:text-left">
              {content.hero.title}
            </h1>
          </GlassPane>
        </div>

        {/* Pane 2: Pill Badge - Small, floating above */}
        <motion.div
          className="md:absolute md:right-10 lg:right-40 md:top-20 lg:top-32 z-20 mb-6 md:mb-0 flex justify-center md:block"
          initial={{ opacity: 0, x: 200, y: 150 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ 
            delay: 1.0, 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="pill animate-float-fast">
            {content.hero.badge}
          </div>
        </motion.div>

        {/* Pane 3: Tagline - Medium, Lower right */}
        <div className="md:absolute md:right-0 lg:right-10 md:bottom-20 lg:bottom-40 z-10 flex justify-end">
          <GlassPane 
            size="md"
            delay={1.2}
            initialX={150}
            initialY={120}
            zIndex={2}
            floatSpeed="normal"
            className="w-full max-w-[85vw] md:w-auto"
          >
            <p className="text-body text-lg md:text-xl text-[var(--text-secondary)] text-center md:text-left">
              {content.hero.tagline}
            </p>
          </GlassPane>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-[var(--text-tertiary)] flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-[var(--text-tertiary)]"
            animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
