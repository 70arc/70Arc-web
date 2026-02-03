"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { staggerContainerVariant, staggerItemVariant } from "@/app/lib/animations";

const termsSections = [
  {
    title: "1. Agreement to Terms",
    content: "By accessing or using 70Arc's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and 70Arc, Inc.",
  },
  {
    title: "2. Description of Services",
    content: "70Arc provides autonomous creative systems including:",
    list: [
      "Neural Event Orchestration: AI-powered logistics and coordination services with sub-50ms response times",
      "Computational Cinematography: Automated video capture and post-production at 4K/120fps",
      "Generative Guest Concierge: LLM-powered guest interaction and support systems",
      "Synthetic Memory Archives: Automated curation and storage of event memories",
    ],
  },
  {
    title: "3. User Responsibilities",
    content: "When using our services, you agree to:",
    list: [
      "Provide accurate and complete information about your events",
      "Obtain necessary consents from event attendees for photography and recording",
      "Comply with all applicable laws and venue requirements",
      "Not use our services for any unlawful or prohibited purpose",
      "Maintain confidentiality of any account credentials",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: "Our Property: All technology, algorithms, and systems powering 70Arc services remain our exclusive property. This includes our neural orchestration systems, computer vision algorithms, and AI models.\n\nYour Content: You retain ownership of all content captured at your events. We grant you a perpetual, non-exclusive license to use, share, and distribute this content. We may use anonymized data to improve our services.",
  },
  {
    title: "5. Service Availability",
    content: "We strive to maintain 99.9% uptime for our autonomous systems. However, we do not guarantee uninterrupted service. We reserve the right to modify, suspend, or discontinue services with reasonable notice. Scheduled maintenance will be communicated in advance whenever possible.",
  },
  {
    title: "6. Payment Terms",
    content: "Payment terms are specified in individual service agreements. General terms include:",
    list: [
      "50% deposit required to secure event dates",
      "Remaining balance due 14 days before event",
      "Additional services billed within 30 days of completion",
      "Late payments subject to 1.5% monthly interest",
    ],
  },
  {
    title: "7. Cancellation Policy",
    content: "Cancellation refunds are provided as follows:",
    list: [
      "60+ days before event: Full refund minus 10% administrative fee",
      "30-59 days before event: 50% refund",
      "Less than 30 days: No refund (credit may be applied to future events)",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: "To the maximum extent permitted by law, 70Arc shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the amount paid for services in the 12 months preceding the claim. This limitation applies regardless of the form of action.",
  },
  {
    title: "9. Indemnification",
    content: "You agree to indemnify and hold harmless 70Arc, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.",
  },
  {
    title: "10. Governing Law",
    content: "These terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in San Francisco County, California.",
  },
  {
    title: "11. Changes to Terms",
    content: "We may modify these terms at any time by posting updated terms on our website. Continued use of our services after changes constitutes acceptance of the modified terms. We will provide notice of material changes via email or prominent website notice.",
  },
  {
    title: "12. Contact",
    content: "For questions about these terms, please contact our Legal Team at legal@70arc.com or write to us at 70 Mission Street, Suite 2400, San Francisco, CA 94105.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      <Breadcrumbs />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-sm text-safety-orange font-medium mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Legal
          </motion.span>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Terms of Service
          </motion.h1>
          <motion.p
            className="text-charcoal/60 mb-8 sm:mb-12 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Last updated: February 2, 2024
          </motion.p>

          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={staggerContainerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {termsSections.map((section, index) => (
              <motion.section
                key={index}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8"
                variants={staggerItemVariant}
              >
                <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">
                  {section.title}
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-4 text-sm sm:text-base whitespace-pre-line">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="space-y-2 ml-4 sm:ml-6">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-charcoal/70 text-sm sm:text-base">
                        <span className="text-safety-orange mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
