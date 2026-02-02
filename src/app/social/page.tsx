"use client";

import { motion } from "framer-motion";
import GlassPane from "@/components/GlassPane";
import SimpleFooter from "@/components/SimpleFooter";
import { content } from "@/lib/content";

export default function SocialPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-32">
        {/* Header */}
        <section className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display text-display-lg"
          >
            {content.social.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            {content.social.intro}
          </motion.p>
        </section>

        {/* Social Links */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.social.links.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="block h-full"
              data-hover="true"
            >
              <GlassPane className="h-full p-8 flex flex-col items-center justify-center text-center gap-4 hover:scale-[1.02] transition-transform group">
                <span className="text-display text-2xl">{link.platform}</span>
                <span className="text-mono text-sm text-[var(--accent-orange)] group-hover:tracking-wider transition-all">
                  {link.handle}
                </span>
              </GlassPane>
            </motion.a>
          ))}
        </section>

        {/* Press */}
        <section className="space-y-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-label text-lg"
          >
            INTERCEPTED SIGNALS
          </motion.h2>

          <div className="space-y-6">
            {content.social.press.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassPane className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-label block mb-2">{item.source}</span>
                    <h3 className="text-display text-2xl md:text-3xl">{item.title}</h3>
                  </div>
                  <span className="text-mono text-[var(--text-tertiary)] shrink-0">{item.date}</span>
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
