"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/content";

export default function Transmission() {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLaunching(true);
    
    // Launch animation
    setTimeout(() => {
      setIsLaunching(false);
      setIsSubmitted(true);
      setMessage("");
    }, 800);

    // Reset after showing confirmation
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section 
      id="transmission"
      className="min-h-screen relative py-20 md:py-40 flex items-center justify-center"
    >
      <div className="max-w-2xl mx-auto px-6 w-full">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-label block mb-4">{content.transmission.sectionLabel}</span>
          <h2 className="text-display text-display-current text-[2.5rem] md:text-display-md">
            {content.transmission.headline}
          </h2>
        </motion.div>

        {/* Glass teletype form */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass p-6 md:p-10 relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            {/* Input field - stretches when focused */}
            <motion.div
              className="relative"
              animate={{
                scaleX: isFocused ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <label htmlFor="contact-message" className="sr-only">
                Your message
              </label>
              <input
                ref={inputRef}
                id="contact-message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={content.transmission.placeholder}
                className="w-full bg-transparent border-b-2 border-[var(--text-tertiary)]/30 focus:border-[var(--accent-orange)] py-4 px-2 text-lg md:text-xl outline-none transition-colors font-body rounded-none"
                style={{ cursor: "text" }}
                data-hover="true"
                aria-label="Contact message input"
              />
              
              {/* Animated cursor indicator */}
              <motion.div
                className="absolute bottom-4 right-2 w-0.5 h-6 bg-[var(--accent-orange)]"
                animate={{ opacity: isFocused ? [1, 0] : 0 }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              />
            </motion.div>

            {/* Submit button - glass sphere */}
            <div className="flex justify-center pt-4">
              <AnimatePresence mode="wait">
                {!isLaunching && !isSubmitted ? (
                  <motion.button
                    key="submit"
                    type="submit"
                    className="glass-circle w-14 h-14 md:w-16 md:h-16 flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    data-hover="true"
                    aria-label="Send message"
                    disabled={!message.trim()}
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-orange)] group-hover:translate-y-[-2px] transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </motion.button>
                ) : isLaunching ? (
                  <motion.div
                    key="launching"
                    className="glass-circle w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[var(--accent-orange)]"
                    initial={{ y: 0 }}
                    animate={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-display text-lg text-[var(--accent-orange)]">
                      {content.transmission.successMessage}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
