"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to avoid layout shift on initial load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    try {
      localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    } catch (e) {
      // localStorage may be unavailable in some browsers
    }
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    try {
      localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary));
    } catch (e) {
      // localStorage may be unavailable
    }
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    try {
      localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    } catch (e) {
      // localStorage may be unavailable
    }
    setIsVisible(false);
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
        >
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-4 sm:p-6 shadow-2xl safe-area-inset">
            {!showPreferences ? (
              <>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg mb-2 text-charcoal dark:text-white">We value your privacy</h3>
                    <p className="text-sm text-charcoal/70 dark:text-white/70">
                      We use cookies to enhance your experience. By continuing, you agree to our{" "}
                      <Link href="/privacy" className="text-safety-orange hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-3 py-2 text-xs sm:text-sm font-medium rounded-full border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/5 transition-colors whitespace-nowrap"
                    >
                      Preferences
                    </button>
                    <button
                      onClick={handleAcceptNecessary}
                      className="px-3 py-2 text-xs sm:text-sm font-medium rounded-full border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/5 transition-colors whitespace-nowrap"
                    >
                      Necessary Only
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-3 py-2 text-xs sm:text-sm font-medium rounded-full bg-safety-orange text-white hover:bg-safety-orange/90 transition-colors whitespace-nowrap"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-serif text-lg mb-4 text-charcoal dark:text-white">Cookie Preferences</h3>
                <div className="space-y-3 mb-6">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-charcoal/5 dark:bg-white/5">
                    <div>
                      <p className="font-medium text-sm text-charcoal dark:text-white">Necessary</p>
                      <p className="text-xs text-charcoal/60 dark:text-white/60">Required for the website to function</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="w-5 h-5 accent-safety-orange"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-xl bg-charcoal/5 dark:bg-white/5 cursor-pointer">
                    <div>
                      <p className="font-medium text-sm text-charcoal dark:text-white">Analytics</p>
                      <p className="text-xs text-charcoal/60 dark:text-white/60">Help us improve with anonymous data</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="w-5 h-5 accent-safety-orange cursor-pointer"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-xl bg-charcoal/5 dark:bg-white/5 cursor-pointer">
                    <div>
                      <p className="font-medium text-sm text-charcoal dark:text-white">Marketing</p>
                      <p className="text-xs text-charcoal/60 dark:text-white/60">Personalized content and ads</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="w-5 h-5 accent-safety-orange cursor-pointer"
                    />
                  </label>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 text-sm font-medium rounded-full border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/5 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-safety-orange text-white hover:bg-safety-orange/90 transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
