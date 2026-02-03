"use client";

import { cn } from "@/app/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

export function Skeleton({ className, variant = "rectangular" }: SkeletonProps) {
  const baseClasses = "animate-shimmer bg-charcoal/10 dark:bg-white/10";
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-xl",
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)} />
  );
}

// Pre-built skeleton components for common use cases
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("glass-card rounded-2xl p-6 space-y-4", className)}>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function SkeletonImage({ className }: { className?: string }) {
  return (
    <Skeleton className={cn("aspect-video", className)} />
  );
}

export function SkeletonAvatar({ className }: { className?: string }) {
  return (
    <Skeleton variant="circular" className={cn("w-12 h-12", className)} />
  );
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          variant="text" 
          className={cn("h-4", i === lines - 1 ? "w-2/3" : "w-full")} 
        />
      ))}
    </div>
  );
}
