"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { 
  fadeUpVariant, 
  fadeInVariant, 
  scaleInVariant, 
  slideInLeftVariant, 
  slideInRightVariant,
  staggerContainerVariant,
  staggerItemVariant,
} from "@/app/lib/animations";
import { prefersReducedMotion } from "@/app/lib/utils";

type AnimationType = "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight" | "stagger" | "staggerItem";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

const variantMap: Record<AnimationType, Variants> = {
  fadeUp: fadeUpVariant,
  fadeIn: fadeInVariant,
  scaleIn: scaleInVariant,
  slideLeft: slideInLeftVariant,
  slideRight: slideInRightVariant,
  stagger: staggerContainerVariant,
  staggerItem: staggerItemVariant,
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
  });

  // Check for reduced motion preference
  if (typeof window !== "undefined" && prefersReducedMotion()) {
    return <div className={className}>{children}</div>;
  }

  const variants = variantMap[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Convenience components for common animations
export function FadeUp({ children, className = "", delay = 0 }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="fadeUp" className={className} delay={delay}>
      {children}
    </AnimatedSection>
  );
}

export function FadeIn({ children, className = "", delay = 0 }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="fadeIn" className={className} delay={delay}>
      {children}
    </AnimatedSection>
  );
}

export function ScaleIn({ children, className = "", delay = 0 }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="scaleIn" className={className} delay={delay}>
      {children}
    </AnimatedSection>
  );
}

export function SlideInLeft({ children, className = "", delay = 0 }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="slideLeft" className={className} delay={delay}>
      {children}
    </AnimatedSection>
  );
}

export function SlideInRight({ children, className = "", delay = 0 }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="slideRight" className={className} delay={delay}>
      {children}
    </AnimatedSection>
  );
}

// Stagger wrapper for lists
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = "" }: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  if (typeof window !== "undefined" && prefersReducedMotion()) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainerVariant}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  if (typeof window !== "undefined" && prefersReducedMotion()) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItemVariant}>
      {children}
    </motion.div>
  );
}
