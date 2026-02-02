"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/app/lib/content";

type Direction = "N" | "E" | "S" | "W";

const directionMap: Record<Direction, number> = {
  N: 0,
  E: 1,
  S: 2,
  W: 3,
};

export default function CompassNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDirection, setActiveDirection] = useState<Direction | null>(null);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getDirectionPosition = (direction: Direction) => {
    switch (direction) {
      case "N": return { x: 0, y: -32 };
      case "E": return { x: 32, y: 0 };
      case "S": return { x: 0, y: 32 };
      case "W": return { x: -32, y: 0 };
    }
  };

  const getExpandedPosition = (direction: Direction) => {
    switch (direction) {
      case "N": return { x: 0, y: -60 };
      case "E": return { x: 60, y: 0 };  // Reduced from 100 to prevent overflow
      case "S": return { x: 0, y: 60 };
      case "W": return { x: -60, y: 0 };
    }
  };

  // Get label position - labels appear inside the compass area, not outside
  const getLabelPosition = (direction: Direction) => {
    switch (direction) {
      case "N": return { x: 0, y: -100 };
      case "E": return { x: 0, y: 40 };  // Below East button instead of to the right
      case "S": return { x: 0, y: 100 };
      case "W": return { x: 0, y: 40 };  // Below West button
    }
  };

  // Get section data from content.ts
  const sections = navigation.sections;

  return (
    <motion.nav
      className="fixed top-20 right-4 z-40 hidden md:block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.div
        className="relative w-16 h-16 rounded-full glass-card flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => {
          setIsExpanded(false);
          setActiveDirection(null);
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Center Logo */}
        <span className="text-xs font-semibold tracking-wider">70°</span>

        {/* Direction Buttons */}
        {sections.map((section) => {
          const direction = section.direction;
          const pos = isExpanded ? getExpandedPosition(direction) : getDirectionPosition(direction);

          return (
            <motion.button
              key={direction}
              className="absolute w-7 h-7 rounded-full bg-white/60 dark:bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-medium hover:bg-safety-orange hover:text-white transition-colors"
              style={{ originX: 0.5, originY: 0.5 }}
              animate={{
                x: pos.x,
                y: pos.y,
                scale: activeDirection === direction ? 1.2 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onMouseEnter={() => setActiveDirection(direction)}
              onMouseLeave={() => setActiveDirection(null)}
              onClick={() => handleNavClick(`#${section.id}`)}
              aria-label={`Navigate to ${section.label}`}
            >
              {direction}
            </motion.button>
          );
        })}

        {/* Expanded Label - appears below the compass */}
        <AnimatePresence>
          {activeDirection && isExpanded && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap bg-charcoal dark:bg-white text-white dark:text-charcoal px-3 py-1 rounded-full text-xs"
              style={{ top: "calc(100% + 12px)" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {sections[directionMap[activeDirection]]?.label || activeDirection}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
