"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useMousePositionRaw } from "@/app/hooks/useMousePosition";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  description: string;
  metric: string | null;
  index?: number;
  className?: string;
  floatSpeed?: number;
  magneticStrength?: number;
}

export default function FloatingCard({
  title,
  subtitle,
  description,
  metric,
  index = 0,
  className = "",
  floatSpeed = 0.2,
  magneticStrength = 3,
}: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePositionRaw();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Float upward as user scrolls down (anti-gravity effect)
  const floatY = useTransform(scrollYProgress, [0, 1], [100 * floatSpeed, -100 * floatSpeed]);
  
  // Magnetic cursor effect
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  const smoothX = useSpring(magneticX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(magneticY, { stiffness: 150, damping: 15 });

  const handleMouseMove = () => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = mousePosition.x - centerX;
    const distanceY = mousePosition.y - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Only apply magnetic effect when cursor is within 200px
    if (distance < 200) {
      const strength = (1 - distance / 200) * magneticStrength;
      magneticX.set(distanceX * strength * 0.02);
      magneticY.set(distanceY * strength * 0.02);
    } else {
      magneticX.set(0);
      magneticY.set(0);
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift ${className}`}
      style={{
        y: floatY,
        x: smoothX,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        magneticX.set(0);
        magneticY.set(0);
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      {/* Subtitle */}
      <span className="text-xs uppercase tracking-wider text-safety-orange font-medium">
        {subtitle}
      </span>
      
      {/* Title */}
      <h3 className="font-serif text-xl sm:text-2xl mt-3 mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm sm:text-base opacity-70 leading-relaxed">
        {description}
      </p>
      
      {/* Metric */}
      {metric && (
        <div className="mt-6 pt-4 border-t border-charcoal/10 dark:border-white/10">
          <span className="text-sm font-medium text-safety-orange">
            {metric}
          </span>
        </div>
      )}
    </motion.div>
  );
}
