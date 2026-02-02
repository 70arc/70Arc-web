"use client";

import { Variants } from "framer-motion";

// ============================================
// ANIMATION VARIANTS
// ============================================

// Fade up animation for content entering view
export const fadeUpVariant: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { opacity: 0, y: -20 }
};

// Fade in animation
export const fadeInVariant: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { opacity: 0 }
};

// Scale in animation
export const scaleInVariant: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { opacity: 0, scale: 0.95 }
};

// Slide in from left
export const slideInLeftVariant: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { opacity: 0, x: -30 }
};

// Slide in from right
export const slideInRightVariant: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { opacity: 0, x: 30 }
};

// Stagger container for children animations
export const staggerContainerVariant: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item (child of stagger container)
export const staggerItemVariant: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// Hero glass pane animation with spring physics
export const heroPaneVariant = (delay: number, yOffset: number = 0): Variants => ({
  initial: { x: 100, y: 200, rotate: 15, opacity: 0 },
  animate: { 
    x: 0, 
    y: yOffset, 
    rotate: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay,
    },
  },
});

// Float animation for continuous floating effect
export const floatVariant: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Pulse animation
export const pulseVariant: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Page transition variant
export const pageTransitionVariant: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94],
      when: "beforeChildren",
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  },
};

// Card hover animation
export const cardHoverVariant = {
  rest: { 
    scale: 1,
    boxShadow: "0 20px 60px -20px rgba(60, 60, 67, 0.15)",
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 30px 80px -20px rgba(60, 60, 67, 0.25)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Button hover animation
export const buttonHoverVariant = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

// ============================================
// TRANSITION CONFIGS
// ============================================

export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

export const smoothTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const quickTransition = {
  duration: 0.3,
  ease: "easeOut" as const,
};

// ============================================
// VIEWPORT OPTIONS
// ============================================

export const viewportOnce = { once: true, margin: "-50px" };
export const viewportAlways = { once: false, margin: "-100px" };

// ============================================
// SCROLL ANIMATION HELPERS
// ============================================

export const getScrollFloat = (scrollProgress: number, speed: number = 0.2) => {
  return scrollProgress * 100 * speed;
};

export const getMagneticOffset = (
  mouseX: number,
  mouseY: number,
  elementX: number,
  elementY: number,
  radius: number = 200,
  strength: number = 3
) => {
  const distanceX = mouseX - elementX;
  const distanceY = mouseY - elementY;
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
  if (distance < radius && distance > 0) {
    const force = (1 - distance / radius) * strength;
    return {
      x: distanceX * force * 0.02,
      y: distanceY * force * 0.02,
    };
  }
  return { x: 0, y: 0 };
};

// ============================================
// CSS ANIMATION CLASSES
// ============================================

export const animationClasses = {
  fadeIn: "animate-[fadeIn_0.5s_ease-out_forwards]",
  fadeUp: "animate-[fadeUp_0.6s_ease-out_forwards]",
  slideInLeft: "animate-[slideInLeft_0.6s_ease-out_forwards]",
  slideInRight: "animate-[slideInRight_0.6s_ease-out_forwards]",
  float: "animate-[float_6s_ease-in-out_infinite]",
  pulse: "animate-[pulse_2s_ease-in-out_infinite]",
  spin: "animate-[spin_60s_linear_infinite]",
} as const;
