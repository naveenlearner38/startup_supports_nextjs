"use client";

import { useRef } from "react";

export default function MarqueeV1({
  items,
  speed = 35,
  separator = "·",
}: {
  items: string[];
  speed?: number;
  separator?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
      }}
      onMouseLeave={() => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "running";
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "2.5rem",
          whiteSpace: "nowrap",
          animation: `marqueeScroll ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 text-sm tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--font-geist-body), monospace" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0"
              aria-hidden
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
