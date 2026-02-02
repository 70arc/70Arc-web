"use client";

import { motion } from "framer-motion";
import GlassPane from "@/components/GlassPane";
import SimpleFooter from "@/components/SimpleFooter";
import { content } from "@/lib/content";

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-32">
        {/* Header */}
        <section className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display text-display-lg"
          >
            {content.careers.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            {content.careers.intro}
          </motion.p>
        </section>

        {/* Perks */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.careers.perks.map((perk, index) => (
            <motion.div
              key={perk}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassPane size="sm" className="p-8 text-center h-full flex items-center justify-center">
                <span className="text-mono text-sm md:text-base">{perk}</span>
              </GlassPane>
            </motion.div>
          ))}
        </section>

        {/* Open Roles */}
        <section className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-label text-lg mb-8"
          >
            MISSION LOG
          </motion.h2>

          <div className="space-y-4">
            {content.careers.roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassPane className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer hover:border-[var(--accent-orange)] transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-label text-[var(--accent-orange)]">{role.department}</span>
                      <span className="text-label opacity-50">•</span>
                      <span className="text-label opacity-70">{role.location}</span>
                    </div>
                    <h3 className="text-display text-2xl group-hover:pl-2 transition-all">{role.title}</h3>
                    <p className="text-body text-[var(--text-secondary)] max-w-xl text-sm md:text-base">
                      {role.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-mono text-xs opacity-50 hidden md:block">{role.type}</span>
                    <div className="glass-circle w-10 h-10 flex items-center justify-center group-hover:bg-[var(--accent-orange)] group-hover:border-[var(--accent-orange)] transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--text-primary)] group-hover:text-white transition-colors">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </GlassPane>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <SimpleFooter />
    </main>
  );
}
