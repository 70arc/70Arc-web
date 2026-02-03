"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  // Parse end value - handle strings like "100B+", "<50ms", "99.7%"
  const numericValue = typeof end === "string" 
    ? parseFloat(end.replace(/[^0-9.]/g, "")) || 0
    : end;
  
  const isNumeric = !isNaN(numericValue) && numericValue > 0;

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(eased * numericValue);
      
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, numericValue, duration, isNumeric]);

  // For non-numeric values, just display them directly
  if (!isNumeric) {
    return (
      <span ref={ref} className={className}>
        {prefix}{end}{suffix}
      </span>
    );
  }

  // Format the display value
  const displayValue = typeof end === "string" 
    ? end.replace(String(numericValue), String(count))
    : `${prefix}${count}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {isInView ? displayValue : `${prefix}0${suffix}`}
    </span>
  );
}
