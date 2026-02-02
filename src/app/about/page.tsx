"use client";

import { motion } from "framer-motion";
import GlassPane from "@/components/GlassPane";
import SimpleFooter from "@/components/SimpleFooter";
import { content } from "@/lib/content";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-40">
        {/* Header */}
        <section className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display text-display-lg"
          >
            {content.about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            {content.about.heroText}
          </motion.p>
        </section>

        {/* Philosophy Monoliths */}
        <section className="space-y-24">
          {content.about.philosophy.map((item, index) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <GlassPane size="lg" className="relative p-10 md:p-14">
                <span className="text-label text-[var(--accent-orange)] mb-4 block">0{index + 1}</span>
                <h2 className="text-display text-3xl mb-6">{item.heading}</h2>
                <p className="text-body text-lg text-[var(--text-secondary)]">
                  {item.text}
                </p>
              </GlassPane>
            </motion.div>
          ))}
        </section>

        {/* Team Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-label mb-16 text-lg"
          >
            THE STEWARDS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.about.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassPane size="sm" className="w-full h-full flex flex-col items-center text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-[var(--text-tertiary)]/10 mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-blue)]/20 to-transparent" />
                  </div>
                  <h3 className="text-display text-xl mb-1">{member.name}</h3>
                  <span className="text-mono text-xs text-[var(--accent-orange)] mb-4">{member.role}</span>
                  <p className="text-body text-sm text-[var(--text-secondary)]">
                    {member.description}
                  </p>
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
