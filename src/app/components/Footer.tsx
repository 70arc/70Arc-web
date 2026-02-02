"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { brand, navigation, newsletter } from "@/app/lib/content";
import { staggerContainerVariant, staggerItemVariant, fadeUpVariant } from "@/app/lib/animations";
import { isValidEmail, sanitizeInput, cn } from "@/app/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const sanitizedEmail = sanitizeInput(email);
    
    if (!isValidEmail(sanitizedEmail)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Simulate subscription
    setIsSubscribed(true);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={staggerContainerVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Column */}
          <motion.div variants={staggerItemVariant} className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white hover:text-safety-orange transition-colors">
                {brand.name}
              </h2>
            </Link>
            <p className="mt-4 text-white/60 leading-relaxed text-sm lg:text-base">
              {brand.tagline}. {brand.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-safety-orange animate-pulse" />
              <span className="text-sm text-white/40">Systems {brand.status}</span>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={staggerItemVariant}>
            <h3 className="text-sm uppercase tracking-wider text-white/40 mb-4 lg:mb-6">Company</h3>
            <ul className="space-y-3 lg:space-y-4">
              {navigation.footer.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-safety-orange transition-colors text-sm lg:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={staggerItemVariant}>
            <h3 className="text-sm uppercase tracking-wider text-white/40 mb-4 lg:mb-6">Services</h3>
            <ul className="space-y-3 lg:space-y-4">
              {navigation.footer.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-safety-orange transition-colors text-sm lg:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={staggerItemVariant}>
            <h3 className="text-sm uppercase tracking-wider text-white/40 mb-4 lg:mb-6">Connect</h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a
                  href={brand.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-safety-orange transition-colors inline-flex items-center gap-2 text-sm lg:text-base"
                >
                  LinkedIn
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-safety-orange transition-colors inline-flex items-center gap-2 text-sm lg:text-base"
                >
                  Instagram
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={brand.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-safety-orange transition-colors inline-flex items-center gap-2 text-sm lg:text-base"
                >
                  X (Twitter)
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-white/10"
          variants={fadeUpVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <h3 className="font-serif text-xl lg:text-2xl mb-3 lg:mb-4">{newsletter.title}</h3>
            <p className="text-white/60 mb-4 lg:mb-6 text-sm lg:text-base">
              {newsletter.description}
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletter.placeholder}
                    className={cn(
                      "w-full bg-white/5 border rounded-full px-4 lg:px-6 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors",
                      error ? "border-red-500" : "border-white/10 focus:border-safety-orange"
                    )}
                    aria-label="Email address"
                    autoComplete="email"
                  />
                  {error && (
                    <p className="text-red-400 text-sm mt-2 pl-4">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-6 lg:px-8 py-3 bg-safety-orange text-white rounded-full font-medium hover:bg-safety-orange/90 transition-colors whitespace-nowrap"
                >
                  {newsletter.buttonText}
                </button>
              </form>
            ) : (
              <motion.p
                className="text-safety-orange font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Thanks for subscribing! Check your inbox.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-white/40 text-center sm:text-left">
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/40">
            {navigation.footer.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Atmosphere Fade Effect */}
      <div className="h-1 bg-gradient-to-r from-safety-orange via-wet-plate-blue to-safety-orange" />
    </footer>
  );
}
