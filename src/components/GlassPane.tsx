"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlassPaneProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  floatSpeed?: "slow" | "normal" | "fast";
  delay?: number;
  initialX?: number;
  initialY?: number;
  zIndex?: number;
}

const sizeClasses = {
  sm: "w-[200px] md:w-[280px] p-4 md:p-6",
  md: "w-[280px] md:w-[400px] p-6 md:p-8",
  lg: "w-[350px] md:w-[500px] p-8 md:p-10",
  xl: "w-[400px] md:w-[700px] p-10 md:p-14",
};

const floatAnimations = {
  slow: "animate-float-slow",
  normal: "animate-float",
  fast: "animate-float-fast",
};

export default function GlassPane({
  children,
  className = "",
  size = "md",
  floatSpeed = "normal",
  delay = 0,
  initialX = 0,
  initialY = 0,
  zIndex = 1,
}: GlassPaneProps) {
  const paneRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for tilt
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!paneRef.current || window.matchMedia("(hover: none)").matches) return;
    
    const rect = paneRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={paneRef}
      className={`
        glass relative
        ${sizeClasses[size]}
        ${floatAnimations[floatSpeed]}
        ${className}
      `}
      style={{
        zIndex,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      initial={{
        opacity: 0,
        x: initialX + 200,
        y: initialY + 200,
      }}
      animate={{
        opacity: 1,
        x: initialX,
        y: initialY,
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1], // Expo ease out
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-hover="true"
    >
      {children}
    </motion.div>
  );
}
