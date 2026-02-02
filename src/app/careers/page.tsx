"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { careersPage } from "@/app/lib/content";
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/app/lib/animations";
import { cn } from "@/app/lib/utils";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-sm text-safety-orange font-medium mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {careersPage.hero.badge}
          </motion.span>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl lg:text-7xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {careersPage.hero.title}
            <br />
            <span className="text-safety-orange">{careersPage.hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {careersPage.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-10 sm:mb-16"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Culture
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            variants={staggerContainerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {careersPage.culture.map((item) => (
              <motion.div
                key={item.title}
                className="glass-card-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8"
                variants={staggerItemVariant}
              >
                <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4 text-safety-orange">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-6"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Benefits
          </motion.h2>
          <motion.p
            className="text-center text-charcoal/60 mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            We take care of our crew so they can focus on removing gravity.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {careersPage.benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-lift"
                variants={staggerItemVariant}
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl sm:text-2xl text-safety-orange flex-shrink-0">
                    {benefit.icon}
                  </span>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg mb-2">{benefit.title}</h3>
                    <p className="text-charcoal/60 text-xs sm:text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-charcoal/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-6"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Open Positions
          </motion.h2>
          <motion.p
            className="text-center text-charcoal/60 mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Find your orbit. Join the mission.
          </motion.p>

          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={staggerContainerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {careersPage.positions.map((position) => (
              <motion.div
                key={position.id}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover-lift cursor-pointer"
                variants={staggerItemVariant}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-safety-orange/10 text-safety-orange">
                        {position.department}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-charcoal/5 text-charcoal/60">
                        {position.type}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl mb-2">{position.title}</h3>
                    <p className="text-charcoal/60 text-xs sm:text-sm mb-4">{position.location}</p>
                    <p className="text-charcoal/70 text-sm mb-4 sm:mb-6 leading-relaxed">{position.description}</p>

                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold mb-3 text-charcoal/50 uppercase tracking-wider">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-charcoal/70 text-xs sm:text-sm"
                          >
                            <span className="text-safety-orange mt-1 flex-shrink-0">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/contact?position=${encodeURIComponent(position.title)}`}
                      className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-safety-orange transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeUpVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">
            {careersPage.cta.title}
          </h2>
          <p className="text-charcoal/70 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {careersPage.cta.description}
          </p>
          <Link
            href={careersPage.cta.buttonHref}
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-charcoal text-white rounded-full font-medium hover:bg-safety-orange transition-colors"
          >
            {careersPage.cta.buttonText}
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
