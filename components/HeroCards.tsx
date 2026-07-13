"use client";

import Card3D from "./Card3D";

const startupItems = [
  "Pitch Deck Creation",
  "Business Plan",
  "Incorporation",
  "DPIIT Certificate",
];
const exportItems = [
  "IEC / RCMC / AD Code",
  "Freight Forwarding",
  "International Banking",
  "Export Compliance",
];

export default function HeroCards() {
  return (
    <div className="relative h-[460px] lg:h-[520px]">
      {/* Startup card */}
      <Card3D
        className="absolute top-0 left-0 w-60 bg-white rounded-2xl p-6 border border-line"
        shadowColor="rgba(34,197,94,0.45)"
        style={{ animation: "floatIdle 3.2s ease-in-out infinite" }}
      >
        <div
          className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center mb-4"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div
          className="font-bold text-ink text-sm mb-1 tracking-tight"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Startup Services
        </div>
        <div className="text-ink-3 text-[10px] uppercase tracking-widest mb-4">For Founders</div>
        <ul className="space-y-2">
          {startupItems.map((s) => (
            <li key={s} className="flex items-center gap-2 text-[11px] text-ink-2">
              <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </Card3D>

      {/* Stats badge center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 rounded-2xl px-5 py-4 shadow-2xl shadow-brand-500/50 z-10"
        style={{ animation: "floatIdle 2.6s ease-in-out infinite 0.8s" }}
      >
        <div
          className="text-white font-black text-3xl leading-none"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          500+
        </div>
        <div className="text-white/75 text-xs mt-0.5 tracking-wider uppercase">Clients</div>
      </div>

      {/* Export card */}
      <Card3D
        className="absolute bottom-0 right-0 w-60 rounded-2xl p-6 border border-dark-line"
        shadowColor="rgba(34,197,94,0.45)"
        style={{
          background: "#08080A",
          animation: "floatIdle 3.8s ease-in-out infinite 1.4s",
        }}
      >
        <div className="w-9 h-9 rounded-xl border border-dark-line flex items-center justify-center mb-4">
          <svg className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10A15.3 15.3 0 018 12 15.3 15.3 0 0112 2z" strokeWidth={1.5} />
          </svg>
        </div>
        <div
          className="font-bold text-white text-sm mb-1 tracking-tight"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Export Services
        </div>
        <div className="text-brand-400 text-[10px] uppercase tracking-widest mb-4">For Exporters</div>
        <ul className="space-y-2">
          {exportItems.map((s) => (
            <li key={s} className="flex items-center gap-2 text-[11px] text-white/60">
              <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </Card3D>

      {/* Tagline chip */}
      <div
        className="absolute top-12 right-6 bg-white/90 backdrop-blur-sm border border-line px-3 py-1.5 rounded-full"
      >
        <span className="text-[10px] text-ink/60 uppercase tracking-widest font-mono">India&apos;s Dual-Service Partner</span>
      </div>
    </div>
  );
}
