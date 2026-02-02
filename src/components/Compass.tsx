"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/content";
import { useRouter } from "next/navigation";

interface CompassProps {
  sections?: typeof content.navigation.compass;
}

const directionPositions = {
  N: { top: "8px", left: "50%", transform: "translateX(-50%)" },
  E: { top: "50%", right: "8px", transform: "translateY(-50%)" },
  S: { bottom: "8px", left: "50%", transform: "translateX(-50%)" },
  W: { top: "50%", left: "8px", transform: "translateY(-50%)}" },
};

// Reduced offsets to prevent overflow
const expandDirections: Record<"N" | "E" | "S" | "W", { x?: number; y?: number }> = {
  N: { y: -50 },
  E: { x: 60 },
  S: { y: 50 },
  W: { x: -120 },
};

export default function Compass({ sections = content.navigation.compass }: CompassProps) {
  const [hoveredDirection, setHoveredDirection] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleNavigation = (section: typeof content.navigation.compass[0]) => {
    // 1. External Page Link
    if (section.type === "page") {
      router.push(section.path);
      return;
    }

    // 2. Scroll Link (Anchor)
    if (section.type === "scroll") {
      // Extract target ID (remove # or /#)
      const targetId = section.path.replace(/^.*#/, "");
      
      // Check if target exists on current page
      const element = document.getElementById(targetId);
      
      if (element) {
        // Element exists -> Scroll to it
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Element missing -> We are likely not on home page -> Navigate to home with hash
        // Ensure path starts with / for routing
        const routePath = section.path.startsWith("/") ? section.path : "/" + section.path;
        router.push(routePath);
      }
    }
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <motion.nav
      className="fixed top-4 right-4 md:top-8 md:right-8 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <motion.div
        className="glass-circle w-20 h-20 md:w-20 md:h-20 relative flex items-center justify-center cursor-pointer group"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onClick={handleHomeClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Navigation Compass - Click to go Home"
      >
        {/* Home icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 text-[var(--text-tertiary)] group-hover:text-[var(--accent-orange)] transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>

        {/* Compass needle */}
        <motion.div
          className="absolute w-0.5 h-6 md:h-8 bg-gradient-to-b from-[var(--accent-orange)] to-transparent rounded-full pointer-events-none"
          style={{ originY: 1 }}
          animate={{
            rotate: hoveredDirection === "N" ? 0 
              : hoveredDirection === "E" ? 90 
              : hoveredDirection === "S" ? 180 
              : hoveredDirection === "W" ? 270 
              : 0
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />

        {/* Cardinal directions */}
        {sections.map((section) => (
          <motion.button
            key={section.direction}
            className="absolute text-[10px] md:text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-orange)] transition-colors p-1 z-10"
            style={directionPositions[section.direction]}
            onHoverStart={() => setHoveredDirection(section.direction)}
            onHoverEnd={() => setHoveredDirection(null)}
            onClick={(e) => {
              e.stopPropagation();
              handleNavigation(section);
            }}
            data-hover="true"
          >
            {section.direction}
          </motion.button>
        ))}

        {/* Expanded labels */}
        <AnimatePresence>
          {isExpanded && sections.map((section) => (
            <motion.div
              key={`label-${section.direction}`}
              className="absolute glass px-3 py-1 md:px-4 md:py-2 whitespace-nowrap z-20"
              style={{
                ...directionPositions[section.direction],
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                ...(expandDirections[section.direction] || {})
              }}
              animate={{ 
                opacity: hoveredDirection === section.direction ? 1 : 0.7, 
                scale: hoveredDirection === section.direction ? 1.05 : 1,
                x: expandDirections[section.direction]?.x || 0,
                y: expandDirections[section.direction]?.y || 0,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigation(section);
                }}
                className="text-xs md:text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-orange)] transition-colors"
                data-hover="true"
              >
                {section.label}
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
