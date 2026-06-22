"use client";

import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
  intensity?: number;
  style?: React.CSSProperties;
}

export default function Card3D({
  children,
  className = "",
  shadowColor = "rgba(34,197,94,0.4)",
  intensity = 14,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: "transform",
        transition: "transform 0.55s cubic-bezier(0.18,0.9,0.32,1.15), box-shadow 0.55s ease",
        ...style,
      }}
      onMouseEnter={() => {
        if (ref.current) ref.current.style.transition = "none";
      }}
      onMouseMove={(e) => {
        const el = ref.current!;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(10px) scale(1.02)`;
        const sx = -x * 28;
        const sy = y * 28;
        el.style.boxShadow = `${sx}px ${sy}px 52px ${shadowColor}, ${sx * 0.4}px ${sy * 0.4}px 20px ${shadowColor.replace("0.4", "0.15")}`;
      }}
      onMouseLeave={() => {
        const el = ref.current!;
        el.style.transition = "transform 0.55s cubic-bezier(0.18,0.9,0.32,1.15), box-shadow 0.55s ease";
        el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0) scale(1)";
        el.style.boxShadow = "0 12px 36px rgba(0,0,0,0.1)";
      }}
    >
      {children}
    </div>
  );
}
