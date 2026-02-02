"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "@/lib/content";

export default function Telemetry() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Slow rotation based on scroll
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section 
      ref={sectionRef}
      id="telemetry"
      className="min-h-screen relative py-20 md:py-40 flex items-center justify-center perspective overflow-hidden"
    >
      {/* Ferrofluid background simulation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, var(--accent-orange) 0%, transparent 70%)",
            left: "30%",
            top: "20%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)",
            right: "20%",
            bottom: "30%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Rotating glass monolith */}
      <motion.div
        className="glass relative w-[90vw] max-w-[800px] p-6 md:p-10 lg:p-16"
        style={{
          rotateY,
          transformPerspective: 1500,
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        data-hover="true"
      >
        {/* Content */}
        <div className="relative z-10 space-y-6 md:space-y-8">
          <span className="text-label block">{content.telemetry.sectionLabel}</span>
          
          <p className="text-display text-lg md:text-2xl lg:text-3xl leading-relaxed">
            {content.telemetry.statement}
          </p>

          <div className="flex flex-wrap gap-6 md:gap-16 pt-6 md:pt-8 border-t border-[var(--text-tertiary)]/20">
            {content.telemetry.stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-mono text-[var(--text-tertiary)] block mb-1">{stat.label}</span>
                <span className={`text-display text-xl md:text-2xl ${stat.highlight ? 'text-[var(--accent-orange)]' : ''}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
