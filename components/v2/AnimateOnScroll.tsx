"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-in-up" | "fade-in" | "slide-left" | "slide-right";

interface Props {
  children: React.ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  threshold?: number;
}

const animMap: Record<Animation, string> = {
  "fade-in-up":   "animate-fade-in-up",
  "fade-in":      "animate-fade-in",
  "slide-left":   "animate-slide-left",
  "slide-right":  "animate-slide-right",
};

// 3 states:
//   "ssr"     — first render, content visible (no flash of invisible content)
//   "waiting" — JS mounted, element is below fold, hidden until scrolled to
//   "playing" — in viewport, animation plays
export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"ssr" | "waiting" | "playing">("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("playing");
          observer.unobserve(el);
        } else {
          // only hide when we first discover element is off-screen
          setPhase((prev) => (prev === "ssr" ? "waiting" : prev));
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const cls =
    phase === "waiting" ? "opacity-0" :
    phase === "playing" ? animMap[animation] :
    ""; // "ssr" — no class, fully visible

  return (
    <div
      ref={ref}
      className={`${className} ${cls}`}
      style={phase === "playing" && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
