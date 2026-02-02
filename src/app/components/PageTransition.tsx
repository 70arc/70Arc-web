"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransitionVariant } from "@/app/lib/animations";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        variants={pageTransitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
