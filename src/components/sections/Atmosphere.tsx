"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "@/lib/content";

// Placeholder images with gradient backgrounds
const gradients = [
  "linear-gradient(135deg, #f5f5f5 0%, #e8e4df 100%)",
  "linear-gradient(135deg, #e8e4df 0%, #d4cfc7 100%)",
  "linear-gradient(135deg, #f0ece6 0%, #e0dbd3 100%)",
];

export default function Atmosphere() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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

  return (
    <section 
      ref={sectionRef}
      id="atmosphere"
      className="min-h-[150vh] relative py-20 md:py-40 overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        className="text-center mb-10 md:mb-20 relative z-10 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-label block mb-4">{content.atmosphere.sectionLabel}</span>
        <h2 className="text-display text-display-md md:text-display-lg">
          {content.atmosphere.headline}
        </h2>
      </motion.div>

      {/* Floating bubbles */}
      <div className="relative max-w-7xl mx-auto px-6 h-[80vh] md:h-[100vh]">
        {content.atmosphere.bubbles.map((bubble, index) => {
          // Create parallax effect based on scroll
          const yOffset = useTransform(
            scrollYProgress,
            [0, 1],
            [bubble.y, bubble.y - (200 * bubble.speed)]
          );

          // Adjust size for mobile
          const size = isMobile ? bubble.size * 0.6 : bubble.size;
          
          return (
            <motion.div
              key={bubble.id}
              className="absolute"
              style={{
                left: `${bubble.x}%`,
                y: yOffset,
                width: size,
                height: size,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              onHoverStart={() => setHoveredId(bubble.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setHoveredId(hoveredId === bubble.id ? null : bubble.id)} // Tap to toggle on mobile
            >
              <motion.div
                className="w-full h-full rounded-full overflow-hidden relative cursor-pointer md:cursor-none"
                style={{
                  background: gradients[index % gradients.length],
                  boxShadow: "0 20px 60px -20px rgba(60, 60, 67, 0.2)",
                  mixBlendMode: hoveredId === bubble.id ? "normal" : "multiply",
                }}
                animate={{
                  scale: hoveredId === bubble.id ? 1.05 : 1,
                  zIndex: hoveredId === bubble.id ? 10 : 1,
                }}
                transition={{ duration: 0.3 }}
                data-hover="true"
              >
                {/* Film grain overlay */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Label on hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === bubble.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-center text-xs md:text-sm lg:text-base font-medium text-[var(--text-primary)] leading-tight">
                    {bubble.label}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
