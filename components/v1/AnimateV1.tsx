"use client";

import { useEffect, useRef, useState } from "react";

type Anim = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";

const keyframes: Record<Anim, string> = {
  "fade-up":    "opacity:0;transform:translateY(40px)",
  "fade-in":    "opacity:0",
  "slide-left": "opacity:0;transform:translateX(-48px)",
  "slide-right":"opacity:0;transform:translateX(48px)",
  "scale-up":   "opacity:0;transform:scale(0.94)",
};

const playing: Record<Anim, string> = {
  "fade-up":    "opacity:1;transform:translateY(0)",
  "fade-in":    "opacity:1",
  "slide-left": "opacity:1;transform:translateX(0)",
  "slide-right":"opacity:1;transform:translateX(0)",
  "scale-up":   "opacity:1;transform:scale(1)",
};

export default function AnimateV1({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  className = "",
}: {
  children: React.ReactNode;
  animation?: Anim;
  delay?: number;
  threshold?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"ssr" | "hidden" | "visible">("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.unobserve(el);
        } else if (state === "ssr") {
          setState("hidden");
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold]);

  const from = keyframes[animation];
  const to = playing[animation];

  const baseStyle: React.CSSProperties =
    state === "hidden"
      ? Object.fromEntries(from.split(";").map((s) => {
          const [k, v] = s.split(":");
          return [k.trim(), v.trim()];
        }))
      : state === "visible"
      ? {
          ...Object.fromEntries(to.split(";").map((s) => {
            const [k, v] = s.split(":");
            return [k.trim(), v.trim()];
          })),
          transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        }
      : {};

  return (
    <div ref={ref} className={className} style={baseStyle}>
      {children}
    </div>
  );
}
