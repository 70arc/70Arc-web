"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { aboutPage } from "@/app/lib/content";
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant, slideInLeftVariant, slideInRightVariant } from "@/app/lib/animations";
import { cn } from "@/app/lib/utils";

export default function AboutPage() {
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
            {aboutPage.hero.badge}
          </motion.span>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl lg:text-7xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {aboutPage.hero.title}
            <br />
            <span className="text-safety-orange">{aboutPage.hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {aboutPage.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-charcoal/5">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeUpVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-6 sm:mb-8 text-balance">
            &ldquo;{aboutPage.mission.quote}&rdquo;
          </blockquote>
          <cite className="text-charcoal/60 not-italic text-sm sm:text-base">— {aboutPage.mission.author}</cite>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-6"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Core Values
          </motion.h2>
          <motion.p
            className="text-center text-charcoal/60 mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            The principles that guide every system we build.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {aboutPage.values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover-lift"
                variants={staggerItemVariant}
              >
                <div className="text-3xl sm:text-4xl mb-4 text-safety-orange">
                  {value.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-3">{value.title}</h3>
                <p className="text-charcoal/60 text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-6"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Leadership
          </motion.h2>
          <motion.p
            className="text-center text-white/60 mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            The team orchestrating the anti-gravity movement.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {aboutPage.team.map((member) => (
              <motion.div
                key={member.name}
                className="text-center"
                variants={staggerItemVariant}
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-1">{member.name}</h3>
                <p className="text-safety-orange text-sm mb-3">{member.role}</p>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-10 sm:mb-16"
            variants={fadeUpVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            The Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-charcoal/10 sm:-translate-x-1/2" />

            {aboutPage.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={cn(
                  "relative mb-8 sm:mb-12 last:mb-0",
                  "pl-10 sm:pl-0",
                  index % 2 === 0 ? "sm:pr-[52%]" : "sm:pl-[52%]"
                )}
                variants={index % 2 === 0 ? slideInLeftVariant : slideInRightVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 sm:left-1/2 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-safety-orange sm:-translate-x-1/2 z-10" />

                <div className={cn(
                  "glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6",
                  index % 2 === 0 ? "sm:text-right" : ""
                )}>
                  <span className="text-safety-orange font-medium text-sm">{milestone.year}</span>
                  <p className="text-charcoal/80 mt-2 text-sm sm:text-base">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-charcoal/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            variants={staggerContainerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {aboutPage.stats.map((stat) => (
              <motion.div
                key={stat.label}
                className={cn(
                  "glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center",
                  stat.color === "orange" && "border-safety-orange/30",
                  stat.color === "blue" && "border-wet-plate-blue/30"
                )}
                variants={staggerItemVariant}
              >
                <div className={cn(
                  "font-serif text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3",
                  stat.color === "orange" && "text-safety-orange",
                  stat.color === "blue" && "text-wet-plate-blue"
                )}>
                  {stat.value}
                </div>
                <p className="text-charcoal/60 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
