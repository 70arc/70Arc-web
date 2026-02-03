"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FloatingCard from "@/app/components/FloatingCard";
import CompassNav from "@/app/components/CompassNav";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { homepage, brand, features } from "@/app/lib/content";

// Horizontal Bento Grid Gallery
function BentoGallery({ images }: { images: readonly string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Auto-scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    let direction = 1;
    let scrollPos = 0;
    
    const animate = () => {
      if (!container) return;
      
      const maxScroll = container.scrollWidth - container.clientWidth;
      scrollPos += direction * 0.5;
      
      // Reverse direction at ends
      if (scrollPos >= maxScroll) {
        direction = -1;
      } else if (scrollPos <= 0) {
        direction = 1;
      }
      
      container.scrollLeft = scrollPos;
    };
    
    const interval = setInterval(animate, 20);
    
    // Pause on hover
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      scrollPos = container.scrollLeft;
    };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Create bento layout pattern (alternating sizes)
  const getSize = (index: number) => {
    const pattern = index % 5;
    if (pattern === 0 || pattern === 3) return 'w-80 h-64'; // Large
    if (pattern === 1 || pattern === 4) return 'w-64 h-48'; // Medium
    return 'w-52 h-40'; // Small
  };

  return (
    <>
      {/* Scrolling Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-6 hide-scrollbar scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`${getSize(index)} flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer relative group`}
            style={{ scrollSnapAlign: 'start' }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Scroll hint */}
      <p className="text-center text-sm opacity-40 mt-4">
        Scroll to explore • Click to view
      </p>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected gallery image"
              className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            />
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-2xl text-white">×</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const [inputValue, setInputValue] = useState("");
  const [isTransmitted, setIsTransmitted] = useState(false);

  const handleTransmit = () => {
    if (inputValue.trim()) {
      setIsTransmitted(true);
      setTimeout(() => {
        setInputValue("");
        setIsTransmitted(false);
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-warm-white overflow-x-hidden">
      <Header />
      
      {features.showCompassNav && <CompassNav />}

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-safety-orange/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-wet-plate-blue/10 rounded-full blur-3xl animate-blob-delayed" />
        </div>

        {/* Floating Glass Panes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 md:w-64 h-56 md:h-80 glass-card rounded-3xl"
              initial={{ x: 100, y: 200, rotate: 15, opacity: 0 }}
              animate={{ 
                x: 0, 
                y: i * 20 - 40, 
                rotate: 0, 
                opacity: 0.6 
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2 + i * 0.1,
              }}
              style={{
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 2) * 15}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl">
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-sm text-safety-orange font-medium mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {homepage.hero.badge}
          </motion.span>

          <motion.h1
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {homepage.hero.title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.1 }}
          >
            {homepage.hero.subtitle}
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-charcoal/30 dark:border-white/30 flex items-start justify-center p-2">
            <motion.div 
              className="w-1 h-2 bg-charcoal/50 dark:bg-white/50 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Capabilities Section */}
      <section id="capabilities" className="relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {homepage.capabilities.map((capability, index) => (
              <FloatingCard
                key={capability.title}
                title={capability.title}
                subtitle={capability.subtitle}
                description={capability.description}
                metric={capability.metric}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Synthesis Gallery Section */}
      <section id="atmosphere" className="relative min-h-screen py-32 px-6 overflow-hidden">
        <motion.h2
          className="font-serif text-5xl md:text-7xl text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Synthesis Gallery
        </motion.h2>
        
        <motion.p
          className="text-center opacity-60 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
        >
          Visual artifacts from our neural synthesis pipeline
        </motion.p>

        <BentoGallery images={homepage.atmosphereImages} />
      </section>

      {/* Telemetry Section - NO ROTATION */}
      <section id="telemetry" className="relative py-32 px-6 flex items-center justify-center min-h-screen">
        {/* Animated gradient blob background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] bg-safety-orange/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute w-[500px] h-[500px] bg-wet-plate-blue/20 rounded-full blur-3xl animate-blob-delayed" />
        </div>

        {/* Static glass card - NO ROTATION */}
        <motion.div
          className="relative glass-card w-full max-w-3xl p-8 md:p-16 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-serif text-2xl sm:text-3xl md:text-5xl text-center mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {homepage.telemetry.quote}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {homepage.telemetry.stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-sm uppercase tracking-wider opacity-50">{stat.label}</span>
                <p className={`font-serif text-2xl md:text-3xl mt-2 ${stat.highlight ? "text-safety-orange" : ""}`}>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Transmission Section */}
      <section id="transmission" className="relative py-32 px-6 flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-2xl">
          <motion.h2
            className="font-serif text-5xl md:text-7xl text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {homepage.transmission.title}
          </motion.h2>

          <motion.p
            className="text-center opacity-60 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
          >
            {homepage.transmission.description}
          </motion.p>

          <motion.div
            className="glass-card rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {!isTransmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={homepage.transmission.placeholder}
                    className="w-full bg-transparent border-b-2 border-charcoal/20 dark:border-white/20 focus:border-safety-orange outline-none text-xl md:text-2xl py-4 transition-colors placeholder:opacity-30"
                    onKeyDown={(e) => e.key === "Enter" && handleTransmit()}
                  />
                  
                  <div className="flex justify-center mt-12">
                    <motion.button
                      className="w-16 h-16 rounded-full glass-card flex items-center justify-center hover:bg-white/60 dark:hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleTransmit}
                      aria-label="Send transmission"
                    >
                      <svg 
                        className="w-6 h-6 text-safety-orange" 
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
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-safety-orange/20 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <svg className="w-8 h-8 text-safety-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <p className="font-serif text-2xl">{homepage.transmission.successMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
