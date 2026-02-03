"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { meta } from "@/app/lib/content";
import { fadeUpVariant, staggerContainerVariant, staggerItemVariant } from "@/app/lib/animations";

const privacySections = [
  {
    title: "1. Information We Collect",
    content: `At 70Arc, we are committed to protecting your privacy while delivering autonomous creative services. We collect information in the following categories:`,
    list: [
      "Contact Information: Name, email address, phone number, and company details when you reach out to us.",
      "Event Data: Information related to events we orchestrate, including venue details, guest lists, and scheduling preferences.",
      "Visual Content: Images and video captured during events for cinematography and archive services.",
      "Usage Data: Information about how you interact with our website and services.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use collected information for the following purposes:",
    list: [
      "Providing and improving our autonomous event orchestration services",
      "Operating our computational cinematography and memory archive systems",
      "Communicating with you about services, updates, and support",
      "Personalizing your experience with our generative guest concierge",
      "Complying with legal obligations and protecting our rights",
    ],
  },
  {
    title: "3. Facial Recognition & Privacy",
    content: "Our synthetic memory archives utilize facial recognition technology with privacy as a core principle:",
    list: [
      "Facial data is processed locally and not stored in cloud systems",
      "Recognition is used solely for photo organization and privacy filtering",
      "Guests can opt-out of facial recognition at any time",
      "All facial data is automatically deleted within 30 days of event completion",
    ],
  },
  {
    title: "4. Data Security",
    content: "We implement enterprise-grade security measures including end-to-end encryption for all data in transit, secure data centers with SOC 2 Type II certification, regular security audits and penetration testing, and strict access controls with multi-factor authentication. Our systems operate with sub-50ms latency while maintaining full security protocols.",
  },
  {
    title: "5. Data Retention",
    content: "Event data and visual content are retained according to your service agreement, typically ranging from 1 to 5 years for archive services. You may request deletion of your data at any time. Contact information is retained for as long as necessary to provide services and comply with legal obligations.",
  },
  {
    title: "6. Third-Party Sharing",
    content: "We do not sell your personal information. We may share data with:",
    list: [
      "Service providers who assist in delivering our services",
      "Venue partners and vendors as necessary for event orchestration",
      "Legal authorities when required by law or to protect our rights",
    ],
  },
  {
    title: "7. Your Rights",
    content: "Depending on your jurisdiction, you may have the following rights:",
    list: [
      "Access to your personal data",
      "Correction of inaccurate data",
      "Deletion of your data",
      "Objection to processing",
      "Data portability",
    ],
  },
  {
    title: "8. Contact Us",
    content: "For privacy-related inquiries, please contact our Privacy Team at privacy@70arc.com or write to us at 70 Mission Street, Suite 2400, San Francisco, CA 94105.",
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
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
            {privacySections.map((section, index) => (
              <motion.section
                key={index}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8"
                variants={staggerItemVariant}
              >
                <h2 className="font-serif text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">
                  {section.title}
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-4 text-sm sm:text-base">
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
