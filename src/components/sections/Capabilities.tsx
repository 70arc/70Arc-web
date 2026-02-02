"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassPane from "@/components/GlassPane";
import { content } from "@/lib/content";

// Define positions and configs separate from content to keep content pure text
const capabilityConfigs = [
  { size: "xl" as const, position: { x: 0, y: 0 }, zIndex: 5, floatSpeed: "slow" as const },
  { size: "lg" as const, position: { x: -150, y: 200 }, zIndex: 4, floatSpeed: "normal" as const },
  { size: "md" as const, position: { x: 200, y: 150 }, zIndex: 3, floatSpeed: "fast" as const },
  { size: "md" as const, position: { x: -100, y: 450 }, zIndex: 2, floatSpeed: "normal" as const },
  { size: "lg" as const, position: { x: 100, y: 400 }, zIndex: 4, floatSpeed: "slow" as const },
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for depth (disabled on mobile via layout change)
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const parallaxValues = [y1, y2, y3, y2, y1];

  return (
    <section 
      ref={sectionRef}
      id="capabilities"
      className="min-h-[200vh] relative py-20 md:py-40 perspective overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        className="text-center mb-10 md:mb-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-label block mb-4">{content.capabilities.sectionLabel}</span>
        <h2 className="text-display text-display-md md:text-display-lg">
          {content.capabilities.headline}
        </h2>
      </motion.div>

      {/* Container - Relative for Desktop, Flex Col for Mobile */}
      <div className={`relative max-w-6xl mx-auto px-6 ${isMobile ? 'flex flex-col gap-8 items-center' : ''}`}>
        {content.capabilities.items.map((item, index) => {
          const config = capabilityConfigs[index];
          
          return (
            <motion.div
              key={item.title}
              className={isMobile ? "w-full max-w-md" : "absolute"}
              style={!isMobile ? {
                left: `calc(50% + ${config.position.x}px)`,
                top: config.position.y,
                y: parallaxValues[index],
                transform: "translateX(-50%)",
              } : {}}
              initial={isMobile ? { opacity: 0, y: 50 } : undefined}
              whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <GlassPane
                size={config.size}
                zIndex={config.zIndex}
                floatSpeed={config.floatSpeed}
                delay={0.1 * index}
                className="w-full"
              >
                <div className="space-y-4">
                  <span className="text-label text-[var(--accent-orange)]">
                    {item.subtitle}
                  </span>
                  <h3 className="text-display text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-body text-[var(--text-secondary)] text-sm md:text-base">
                    {item.description}
                  </p>
                  <span className="text-mono text-[var(--accent-blue)] block pt-2">
                    {item.spec}
                  </span>
                </div>
              </GlassPane>
            </motion.div>
          );
        })}
      </div>

      {/* Spacer for scroll length on desktop only */}
      {!isMobile && <div className="h-[100vh]" />}
    </section>
  );
}
