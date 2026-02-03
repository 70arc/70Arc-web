"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-warm-white flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated 404 Number */}
          <motion.div 
            className="relative mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <span className="font-serif text-[7rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] font-bold leading-none text-charcoal/5 dark:text-white/5 select-none">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient">
              404
            </span>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4">
              Signal Lost
            </h1>
            <p className="text-lg opacity-70 mb-8 max-w-md mx-auto">
              The coordinates you&apos;re searching for don&apos;t exist in our system. 
              The page may have been moved or deleted.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-3 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-full font-medium hover:bg-safety-orange dark:hover:bg-safety-orange dark:hover:text-white transition-colors"
              >
                Return Home
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-charcoal/20 dark:border-white/20 rounded-full font-medium text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/5 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-safety-orange/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-wet-plate-blue/10 rounded-full blur-3xl animate-blob-delayed" />
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
