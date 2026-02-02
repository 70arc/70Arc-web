"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { content } from "@/lib/content";

export default function ExitVector() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.8]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[50vh] flex items-center justify-center overflow-hidden"
    >
      {/* Safety Orange gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, var(--accent-orange) 100%)",
          opacity,
        }}
      />

      {/* Entering Atmosphere text */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-mono text-white/80 tracking-widest text-sm md:text-base">
          {content.exitVector.enteringAtmosphere}
        </span>
      </motion.div>

      {/* Floating-away links */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex gap-6 text-xs md:text-sm font-mono tracking-widest text-white/70">
          <a href="/about" className="hover:text-white transition-colors" data-hover="true">ABOUT</a>
          <a href="/careers" className="hover:text-white transition-colors" data-hover="true">CAREERS</a>
          <a href="/social" className="hover:text-white transition-colors" data-hover="true">SOCIAL</a>
        </div>
        
        <span className="hidden md:block text-white/30">|</span>
        
        <div className="flex gap-6">
           <motion.a
            href="#hero"
            className="text-mono text-white/50 hover:text-white transition-colors text-xs md:text-sm"
            whileHover={{ y: -5 }}
            data-hover="true"
          >
            {content.exitVector.returnLink}
          </motion.a>
        </div>

        <span className="hidden md:block text-white/30">|</span>

        <span className="text-mono text-white/30 text-xs md:text-sm">
          {content.exitVector.copyright}
        </span>
      </motion.div>
    </section>
  );
}
