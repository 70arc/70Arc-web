"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { contactPage, brand } from "@/app/lib/content";
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/app/lib/animations";
import { isValidEmail, sanitizeInput, cn } from "@/app/lib/utils";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    reason: "general",
    message: "",
    website: "", // Honeypot field - should remain empty
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formState.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Check honeypot field - if filled, it's likely a bot
    if (formState.website) {
      // Silently reject bot submissions
      setIsSubmitted(true);
      setIsSubmitting(false);
      return;
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formState.name),
      email: sanitizeInput(formState.email),
      company: sanitizeInput(formState.company),
      reason: formState.reason,
      message: sanitizeInput(formState.message),
    };
    
    // Simulate API call (in production, send to actual endpoint)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Form data is ready for submission - send to your backend API
    // TODO: Replace with actual API call
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-sm text-safety-orange font-medium mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {contactPage.hero.badge}
          </motion.span>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl lg:text-7xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {contactPage.hero.title}
            <br />
            <span className="text-safety-orange">{contactPage.hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {contactPage.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 order-2 lg:order-1"
              variants={fadeUpVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 text-charcoal dark:text-white">
                      {contactPage.form.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-charcoal dark:text-white">
                          Name <span className="text-safety-orange">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className={cn(
                            "w-full px-4 py-3 bg-white/50 dark:bg-white/10 border rounded-xl focus:outline-none transition-colors text-charcoal dark:text-white placeholder:text-charcoal/50 dark:placeholder:text-white/50",
                            errors.name 
                              ? "border-red-500 focus:border-red-500" 
                              : "border-charcoal/10 dark:border-white/10 focus:border-safety-orange"
                          )}
                          placeholder="Your name"
                          autoComplete="name"
                          maxLength={100}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-charcoal dark:text-white">
                          Email <span className="text-safety-orange">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className={cn(
                            "w-full px-4 py-3 bg-white/50 dark:bg-white/10 border rounded-xl focus:outline-none transition-colors text-charcoal dark:text-white placeholder:text-charcoal/50 dark:placeholder:text-white/50",
                            errors.email 
                              ? "border-red-500 focus:border-red-500" 
                              : "border-charcoal/10 dark:border-white/10 focus:border-safety-orange"
                          )}
                          placeholder="your@email.com"
                          autoComplete="email"
                          maxLength={254}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-charcoal dark:text-white">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-charcoal/10 dark:border-white/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors text-charcoal dark:text-white placeholder:text-charcoal/50 dark:placeholder:text-white/50"
                        placeholder="Your company (optional)"
                        autoComplete="organization"
                        maxLength={100}
                      />
                    </div>

                    {/* Honeypot field - hidden from users, bots will fill this */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formState.website}
                        onChange={handleInputChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium mb-2 text-charcoal dark:text-white">
                        Inquiry Type <span className="text-safety-orange">*</span>
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={formState.reason}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-white/10 border border-charcoal/10 dark:border-white/10 rounded-xl focus:border-safety-orange focus:outline-none transition-colors appearance-none cursor-pointer text-charcoal dark:text-white"
                      >
                        {contactPage.reasons.map((reason) => (
                          <option key={reason.value} value={reason.value}>
                            {reason.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-charcoal dark:text-white">
                        Message <span className="text-safety-orange">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={cn(
                          "w-full px-4 py-3 bg-white/50 dark:bg-white/10 border rounded-xl focus:outline-none transition-colors resize-none text-charcoal dark:text-white placeholder:text-charcoal/50 dark:placeholder:text-white/50",
                          errors.message 
                            ? "border-red-500 focus:border-red-500" 
                            : "border-charcoal/10 dark:border-white/10 focus:border-safety-orange"
                        )}
                        placeholder="Tell us about your vision..."
                        maxLength={2000}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                      <p className="text-charcoal/40 dark:text-white/40 text-xs mt-1 text-right">
                        {formState.message.length}/2000
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full py-4 text-white rounded-full font-medium transition-all",
                        isSubmitting 
                          ? "bg-charcoal/50 cursor-not-allowed" 
                          : "bg-charcoal hover:bg-safety-orange"
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        contactPage.form.submitButton
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center py-12 sm:py-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 rounded-full bg-safety-orange/10 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <svg className="w-8 sm:w-10 h-8 sm:h-10 text-safety-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="font-serif text-2xl sm:text-3xl mb-4">{contactPage.form.successTitle}</h3>
                    <p className="text-charcoal/70">
                      {contactPage.form.successMessage}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              className="order-1 lg:order-2"
              variants={fadeUpVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8">Our Offices</h2>

              <motion.div 
                className="space-y-4 sm:space-y-6"
                variants={staggerContainerVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {contactPage.offices.map((office) => (
                  <motion.div
                    key={office.city}
                    className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6"
                    variants={staggerItemVariant}
                  >
                    <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">{office.city}</h3>
                    <address className="not-italic space-y-2 sm:space-y-3 text-charcoal/70 text-sm sm:text-base">
                      <p>{office.address}</p>
                      <p>{office.zip}</p>
                      <div className="pt-3 sm:pt-4 space-y-2">
                        <a
                          href={`mailto:${office.email}`}
                          className="block hover:text-safety-orange transition-colors"
                        >
                          {office.email}
                        </a>
                        <a
                          href={`tel:${office.phone.replace(/\D/g, "")}`}
                          className="block hover:text-safety-orange transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </address>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8">
                <h3 className="font-serif text-lg sm:text-xl mb-4">{contactPage.socialTitle}</h3>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={brand.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover:bg-safety-orange hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={brand.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover:bg-safety-orange hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={brand.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover:bg-safety-orange hover:text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-charcoal/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-6"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Frequently Asked
          </motion.h2>
          <motion.p
            className="text-center text-charcoal/60 mb-8 sm:mb-12"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Quick answers to common questions.
          </motion.p>

          <motion.div 
            className="space-y-3 sm:space-y-4"
            variants={staggerContainerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactPage.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl sm:rounded-2xl overflow-hidden"
                variants={staggerItemVariant}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-serif text-base sm:text-lg pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    className="text-safety-orange flex-shrink-0"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 sm:px-6 pb-4 text-charcoal/70 text-sm sm:text-base">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
