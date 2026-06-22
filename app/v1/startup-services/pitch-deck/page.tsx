import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavbarV1 from "@/components/v1/NavbarV1";
import FooterV1 from "@/components/v1/FooterV1";
import AnimateV1 from "@/components/v1/AnimateV1";
import Card3D from "@/components/v1/Card3D";

export const metadata: Metadata = {
  title: "Pitch Deck Creation — Startup Supports V1",
  description: "Investor-ready pitch decks crafted by experts. We help Indian startups tell compelling stories that secure funding.",
};

const process = [
  { n: "01", title: "Discovery Call", desc: "We deep-dive into your business model, target market, traction, team, and funding ask in a 60-minute session." },
  { n: "02", title: "Research & Narrative", desc: "Industry research, competitive landscape, and investor expectations shape a story arc that resonates." },
  { n: "03", title: "Design & Build", desc: "Slides designed to communicate — clear data viz, compelling visuals, and logical flow from problem to ask." },
  { n: "04", title: "Review & Refine", desc: "Two rounds of revisions. We push back where needed and sharpen every slide until it earns its place." },
  { n: "05", title: "Final Delivery", desc: "Editable PPTX + PDF, speaker notes guide, and a one-page executive summary for warm intros." },
];

const deliverables = [
  "10–18 professionally designed slides",
  "Problem / Solution / Market / BM / Traction / Team / Ask",
  "Investor-ready financial summary slide",
  "Competitive landscape analysis",
  "TAM/SAM/SOM market sizing",
  "Two rounds of revisions",
  "Editable PPTX + PDF export",
  "Speaker notes for every slide",
  "One-page executive summary",
];

const problems = [
  "Most decks bury the lede — investors lose interest in the first 3 slides.",
  "Founders tell the story they want, not the story investors want to hear.",
  "Generic templates signal a lack of thought and preparation.",
  "Poor data presentation hides real traction behind vague claims.",
];

function CornerBrackets({ color = "rgba(10,10,11,0.12)" }: { color?: string }) {
  const s: React.CSSProperties = { position: "absolute", width: 24, height: 24, borderColor: color };
  return (
    <>
      <div style={{ ...s, top: 12, left: 12, borderTop: "1px solid", borderLeft: "1px solid" }} />
      <div style={{ ...s, top: 12, right: 12, borderTop: "1px solid", borderRight: "1px solid" }} />
      <div style={{ ...s, bottom: 12, left: 12, borderBottom: "1px solid", borderLeft: "1px solid" }} />
      <div style={{ ...s, bottom: 12, right: 12, borderBottom: "1px solid", borderRight: "1px solid" }} />
    </>
  );
}

export default function PitchDeckV1() {
  return (
    <>
      <NavbarV1 />
      <main>

        {/* ── HERO — full dark, editorial magazine ── */}
        <section
          className="relative overflow-hidden pt-16"
          style={{ background: "#08080A", minHeight: "100vh" }}
        >
          <CornerBrackets color="rgba(244,242,237,0.1)" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(34,197,94,0.07), transparent)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center min-h-[calc(100vh-64px)]">
            <div
              className="text-xs tracking-[0.18em] uppercase mb-8"
              style={{ color: "#5A5A5F", fontFamily: "var(--font-geist-body), monospace" }}
            >
              — Startup Services · Core Service · 01
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-end">
              <div>
                <h1
                  className="font-extrabold text-white leading-[0.9] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-bricolage), system-ui",
                    fontSize: "clamp(3rem, 2rem + 4vw, 6rem)",
                  }}
                >
                  The Deck{" "}
                  <br />
                  <em
                    style={{
                      fontFamily: "var(--font-instrument), Georgia",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "#22c55e",
                    }}
                  >
                    That Opens
                  </em>
                  <br />
                  Doors<span style={{ color: "#22c55e" }}>.</span>
                </h1>

                <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(244,242,237,0.5)" }}>
                  Investors see hundreds of decks a month. Yours needs to stop them — with a story so clear, so compelling, the next step writes itself.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@startupsupports.in?subject=Pitch Deck Enquiry"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.4)" }}
                  >
                    Start Your Deck →
                  </a>
                  <Link
                    href="/v1"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all hover:border-white/40"
                    style={{ border: "1.5px solid rgba(244,242,237,0.2)", color: "rgba(244,242,237,0.7)" }}
                  >
                    ← All Services
                  </Link>
                </div>
              </div>

              {/* Right — image card */}
              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80"
                    alt="Team presenting pitch deck to investors"
                    fill
                    className="object-cover"
                    priority
                    style={{ filter: "saturate(0.75)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(8,8,10,0.4), transparent)" }}
                  />
                  <div
                    className="absolute bottom-5 left-5 flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full"
                    style={{ background: "rgba(8,8,10,0.7)", border: "1px solid rgba(34,197,94,0.3)" }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
                    <span className="text-xs font-bold" style={{ color: "#F4F2ED" }}>Investor-Ready Decks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat chips */}
            <div className="mt-16 flex flex-wrap gap-4">
              {[
                { n: "7–10", l: "Business Days" },
                { n: "18", l: "Slides Max" },
                { n: "2x", l: "Revision Rounds" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex items-center gap-3 px-5 py-3 rounded-full"
                  style={{ background: "#101013", border: "1px solid #1F1F22" }}
                >
                  <span
                    className="font-bold text-white"
                    style={{ fontFamily: "var(--font-bricolage)" }}
                  >
                    {s.n}
                  </span>
                  <span className="text-xs tracking-widest uppercase" style={{ color: "#5A5A5F", fontFamily: "var(--font-geist-body), monospace" }}>
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── linen section ── */}
        <section className="py-24" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateV1 animation="slide-left">
                <div
                  className="text-xs tracking-[0.15em] uppercase mb-5"
                  style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}
                >
                  — The Problem
                </div>
                <h2
                  className="font-extrabold leading-tight mb-6"
                  style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)", color: "#0A0A0B" }}
                >
                  Why Most Decks{" "}
                  <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                    Never Get
                  </em>{" "}
                  a Second Look
                </h2>
                <p className="leading-relaxed mb-8" style={{ color: "#9A9A9F" }}>
                  It is not your idea. It is not your team. It is the presentation. Investors decide in 90 seconds whether a deck deserves a deeper read.
                </p>
                <div className="space-y-3">
                  {problems.map((p) => (
                    <div key={p} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.1)" }}>
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(239,68,68,0.1)" }}>
                        <span style={{ color: "#ef4444", fontSize: 10 }}>✕</span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#5A5A5F" }}>{p}</p>
                    </div>
                  ))}
                </div>
              </AnimateV1>

              <AnimateV1 animation="slide-right" delay={100}>
                <Card3D
                  className="rounded-2xl p-8 relative overflow-hidden"
                  shadowColor="rgba(34,197,94,0.45)"
                  style={{ background: "#0A0A0B" }}
                >
                  <CornerBrackets color="rgba(34,197,94,0.15)" />
                  <div
                    className="text-xs tracking-widest uppercase mb-5"
                    style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}
                  >
                    — The Startup Supports Difference
                  </div>
                  <h3
                    className="font-bold text-white text-2xl mb-3"
                    style={{ fontFamily: "var(--font-bricolage)" }}
                  >
                    Persuasion engines,{" "}
                    <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400 }}>not pretty slides.</em>
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(244,242,237,0.5)" }}>
                    Structured around how investors actually think, designed to answer their questions before they ask them.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Narrative-first approach",
                      "Investor-tested slide structure",
                      "Real data, real traction emphasis",
                      "Industry-specific tailoring",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.3)" }}
                        >
                          <svg className="w-3 h-3" style={{ color: "#22c55e" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: "rgba(244,242,237,0.75)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card3D>
              </AnimateV1>
            </div>
          </div>
        </section>

        {/* ── PROCESS — dark, large numbered cards ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#08080A" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(34,197,94,0.05) 1.5px, transparent 1.5px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center mb-14">
              <h2
                className="font-extrabold text-white"
                style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)" }}
              >
                Our Process
              </h2>
              <p className="mt-3 text-lg" style={{ color: "#5A5A5F" }}>
                Blank page to investor-ready in{" "}
                <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", color: "#22c55e" }}>7–10 business days</em>.
              </p>
            </AnimateV1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {process.map((step, i) => (
                <AnimateV1 key={step.n} animation="fade-up" delay={i * 70}>
                  <Card3D
                    className="rounded-2xl p-7 relative overflow-hidden"
                    shadowColor="rgba(34,197,94,0.4)"
                    style={{ background: "#101013", border: "1px solid #1F1F22", height: "100%" }}
                  >
                    <div
                      className="absolute -right-2 -top-3 font-black select-none pointer-events-none"
                      style={{ fontFamily: "var(--font-bricolage)", fontSize: "6rem", lineHeight: 1, color: "#1F1F22" }}
                    >
                      {step.n}
                    </div>
                    <div
                      className="font-black mb-5"
                      style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.5rem", color: "#22c55e" }}
                    >
                      {step.n}
                    </div>
                    <h3
                      className="font-bold text-white text-lg mb-2"
                      style={{ fontFamily: "var(--font-bricolage)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5A5A5F" }}>{step.desc}</p>
                  </Card3D>
                </AnimateV1>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES + CTA ── linen ── */}
        <section className="py-24" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateV1>
                <div
                  className="text-xs tracking-[0.15em] uppercase mb-5"
                  style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}
                >
                  — What You Get
                </div>
                <h2
                  className="font-extrabold leading-tight mb-4"
                  style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)", color: "#0A0A0B" }}
                >
                  Everything to walk into{" "}
                  <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                    any investor meeting
                  </em>.
                </h2>
                <p className="leading-relaxed mb-8" style={{ color: "#9A9A9F" }}>
                  With absolute confidence — every deliverable included.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-start gap-2.5 p-3 rounded-xl"
                      style={{ background: "#fff", border: "1px solid #E8E5DC" }}
                    >
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(34,197,94,0.15)" }}>
                        <svg className="w-2.5 h-2.5" style={{ color: "#22c55e" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: "#2A2A2E" }}>{d}</span>
                    </div>
                  ))}
                </div>
              </AnimateV1>

              <AnimateV1 delay={100}>
                <Card3D
                  className="rounded-2xl p-8 sticky top-24"
                  shadowColor="rgba(34,197,94,0.45)"
                  style={{ background: "#0A0A0B" }}
                >
                  <CornerBrackets color="rgba(34,197,94,0.2)" />
                  <div
                    className="text-xs tracking-widest uppercase mb-6"
                    style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}
                  >
                    — Ready to Start?
                  </div>
                  <h3
                    className="font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.75rem" }}
                  >
                    Let&apos;s build your deck<span style={{ color: "#22c55e" }}>.</span>
                  </h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(244,242,237,0.4)" }}>
                    Get a free 30-minute consultation on your pitch narrative.
                  </p>
                  <a
                    href="mailto:info@startupsupports.in?subject=Pitch Deck Enquiry"
                    className="w-full flex items-center justify-center gap-2 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5 mb-3"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.35)" }}
                  >
                    Start Your Pitch Deck
                  </a>
                  <Link
                    href="/v1"
                    className="w-full flex items-center justify-center py-3 rounded-full text-sm transition-colors"
                    style={{ border: "1px solid rgba(244,242,237,0.15)", color: "rgba(244,242,237,0.5)" }}
                  >
                    ← Back to All Services
                  </Link>
                </Card3D>
              </AnimateV1>
            </div>
          </div>
        </section>

      </main>
      <FooterV1 />
    </>
  );
}
