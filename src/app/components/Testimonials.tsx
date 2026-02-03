"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/app/lib/content";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = testimonials.items;

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-charcoal/5 dark:bg-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {testimonials.title}
        </motion.h2>

        <div className="relative min-h-[180px] sm:min-h-[220px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentIndex}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed mb-8 text-balance">
                &ldquo;{items[currentIndex].quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <p className="font-medium text-safety-orange">
                    {items[currentIndex].author}
                  </p>
                  <p className="text-sm opacity-60 mt-1">
                    {items[currentIndex].role}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-safety-orange"
                  : "bg-charcoal/20 dark:bg-white/20 hover:bg-charcoal/40 dark:hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
