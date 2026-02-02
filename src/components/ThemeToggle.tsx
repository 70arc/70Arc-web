"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      className="fixed bottom-4 right-4 md:bottom-8 md:left-8 z-50 glass-circle w-14 h-14 md:w-12 md:h-12 flex items-center justify-center group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      data-hover="true"
      aria-label="Toggle Theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun (Light Mode) */}
        <motion.div
          className="absolute"
          animate={{
            scale: theme === "dark" ? 0 : 1,
            opacity: theme === "dark" ? 0 : 1,
            rotate: theme === "dark" ? 90 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-4 h-4 bg-[var(--accent-orange)] rounded-full shadow-[0_0_10px_var(--accent-orange)]" />
        </motion.div>

        {/* Moon (Dark Mode) */}
        <motion.div
          className="absolute"
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -90,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-4 h-4 bg-[var(--accent-blue)] rounded-full shadow-[0_0_10px_var(--accent-blue)] relative overflow-hidden">
             <div className="absolute top-0 right-1 w-4 h-4 bg-black rounded-full translate-x-1" />
          </div>
        </motion.div>
      </div>
    </motion.button>
  );
}
