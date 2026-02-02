"use client";

export default function Logo() {
  return (
    <a 
      href="/" 
      className="fixed top-4 left-4 md:top-8 md:left-8 z-50 glass px-5 py-3 md:px-6 md:py-3 group hover:scale-105 transition-transform min-h-[44px] flex items-center"
      data-hover="true"
      aria-label="70Arc Home"
    >
      <span className="text-display text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-orange)] transition-colors">
        70<span className="text-mono text-sm">ARC</span>
      </span>
    </a>
  );
}
