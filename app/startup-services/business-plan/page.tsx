import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavbarV1 from "@/components/NavbarV1";
import FooterV1 from "@/components/FooterV1";
import AnimateV1 from "@/components/AnimateV1";
import Card3D from "@/components/Card3D";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "Business Plan & Financial Modeling — Startup Supports V1",
  description: "Comprehensive business plans and financial models for Indian startups. Bank-ready, investor-ready, and built for execution.",
};

const process = [
  { n: "01", title: "Business Analysis", desc: "Market, unit economics, cost structure, growth drivers — a factual foundation for every projection." },
  { n: "02", title: "Strategic Planning", desc: "Go-to-market strategy, revenue streams, pricing model, and milestones for the next 5 years." },
  { n: "03", title: "Financial Modeling", desc: "Dynamic Excel — P&L, balance sheet, cash flow, sensitivity analysis, and three-scenario planning." },
  { n: "04", title: "Document Drafting", desc: "Polished business plan document structured for banks, VCs, and schemes like Mudra and SIDBI." },
  { n: "05", title: "Review & Hand-off", desc: "Two revision rounds, a model walk-through call, and an executive summary for any audience." },
];

const deliverables = [
  "30–50 page comprehensive business plan",
  "5-year P&L, Balance Sheet & Cash Flow",
  "Three-scenario financial model (Excel)",
  "Break-even analysis",
  "Funding requirement & utilisation plan",
  "Go-to-market strategy",
  "Competitive analysis",
  "Risk assessment & mitigation",
  "Executive summary (2 pages)",
  "Bank/investor-ready formatting",
];

const audiences = [
  { label: "For Banks & NBFCs", desc: "Structured for credit assessment — DSCR, collateral analysis, repayment schedule." },
  { label: "For Angel Investors", desc: "Highlights traction, team, and exit potential with investor-first framing." },
  { label: "For Government Schemes", desc: "Compatible with Mudra, SIDBI, Startup India, and state-level grant formats." },
  { label: "For Your Own Clarity", desc: "Forces you to think through the assumptions you have been avoiding." },
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

export default function BusinessPlanV1() {
  return (
    <>
      <NavbarV1 />
      <main>

        {/* ── HERO — linen + data feel ── */}
        <section
          className="relative overflow-hidden pt-16"
          style={{ background: "#F4F2ED", minHeight: "100vh" }}
        >
          <CornerBrackets />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(10,10,11,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,11,0.03) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center min-h-[calc(100vh-64px)]">
            <div
              className="text-xs tracking-[0.18em] uppercase mb-8"
              style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}
            >
              — Startup Services · Core Service · 02
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1
                  className="font-extrabold leading-[0.9] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-bricolage), system-ui",
                    fontSize: "clamp(2.8rem, 2rem + 4vw, 5.5rem)",
                    color: "#0A0A0B",
                  }}
                >
                  Blueprint Your{" "}
                  <em
                    style={{
                      fontFamily: "var(--font-instrument), Georgia",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "#22c55e",
                    }}
                  >
                    Business.
                  </em>
                  <br />
                  Model Your Growth<span style={{ color: "#22c55e" }}>.</span>
                </h1>

                <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(10,10,11,0.55)" }}>
                  A business plan is the clearest test of whether you truly understand your own business. We help you build one that passes every test.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@startupsupports.in?subject=Business Plan Enquiry"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5"
                    style={{ background: "#0A0A0B", color: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                  >
                    Start Your Business Plan →
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all"
                    style={{ border: "1.5px solid rgba(10,10,11,0.15)", color: "#0A0A0B" }}
                  >
                    ← All Services
                  </Link>
                </div>
              </div>

              {/* Right — data stat grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "50", suffix: "+", label: "Pages", sub: "Comprehensive document" },
                  { n: "5",  suffix: " Yr", label: "Model", sub: "P&L · Balance Sheet · Cash Flow" },
                  { n: "3",  suffix: "x",  label: "Scenarios", sub: "Base · Bull · Bear" },
                  { n: "10", suffix: "", label: "Days",  sub: "Average delivery time" },
                ].map((s, i) => (
                  <AnimateV1 key={s.label} animation="scale-up" delay={i * 60}>
                    <Card3D
                      className="rounded-2xl p-6"
                      shadowColor="rgba(34,197,94,0.4)"
                      style={{ background: "#fff", border: "1px solid #E8E5DC" }}
                    >
                      <div
                        className="font-extrabold mb-1"
                        style={{ fontFamily: "var(--font-bricolage)", fontSize: "2.5rem", lineHeight: 1, color: "#0A0A0B" }}
                      >
                        <Counter target={parseInt(s.n)} suffix={s.suffix} />
                      </div>
                      <div className="font-bold text-sm mb-1" style={{ color: "#0A0A0B" }}>{s.label}</div>
                      <div className="text-xs" style={{ color: "#9A9A9F" }}>{s.sub}</div>
                    </Card3D>
                  </AnimateV1>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── AUDIENCE — who it's for ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#0A0A0B" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(34,197,94,0.06), transparent)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateV1 animation="slide-left">
                <div
                  className="text-xs tracking-[0.15em] uppercase mb-5"
                  style={{ color: "#5A5A5F", fontFamily: "var(--font-geist-body), monospace" }}
                >
                  — The Story Behind the Numbers
                </div>
                <h2
                  className="font-extrabold text-white leading-tight mb-6"
                  style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)" }}
                >
                  Numbers Are Not Enough.{" "}
                  <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                    You Need a Story.
                  </em>
                </h2>
                <p className="leading-relaxed mb-5" style={{ color: "rgba(244,242,237,0.5)" }}>
                  Banks want repayment confidence. Investors want growth potential. Government bodies want compliance. Every audience has a different question — your plan needs to answer all of them.
                </p>
                <p className="leading-relaxed" style={{ color: "rgba(244,242,237,0.5)" }}>
                  One rigorous document that speaks every language — for Mudra loans, angel rounds, Series A decks, or SIDBI submissions.
                </p>
              </AnimateV1>

              <div className="space-y-4">
                {audiences.map((a, i) => (
                  <AnimateV1 key={a.label} animation="slide-right" delay={i * 70}>
                    <div
                      className="flex gap-4 p-5 rounded-2xl"
                      style={{ background: "#101013", border: "1px solid #1F1F22" }}
                    >
                      <div className="w-1 rounded-full shrink-0" style={{ background: "#22c55e", alignSelf: "stretch" }} />
                      <div>
                        <div
                          className="font-bold text-white mb-1"
                          style={{ fontFamily: "var(--font-bricolage)" }}
                        >
                          {a.label}
                        </div>
                        <div className="text-sm" style={{ color: "#5A5A5F" }}>{a.desc}</div>
                      </div>
                    </div>
                  </AnimateV1>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS — horizontal timeline ── */}
        <section className="py-24" style={{ background: "#EDEBE4" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center mb-14">
              <h2
                className="font-extrabold"
                style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)", color: "#0A0A0B" }}
              >
                Our Process
              </h2>
              <p className="mt-3" style={{ color: "#9A9A9F" }}>
                Rigorous research. Honest numbers. Delivered in{" "}
                <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", color: "#22c55e" }}>10–15 business days</em>.
              </p>
            </AnimateV1>

            <div className="grid md:grid-cols-5 gap-4">
              {process.map((step, i) => (
                <AnimateV1 key={step.n} animation="fade-up" delay={i * 70}>
                  <Card3D
                    className="text-center rounded-2xl p-5 h-full"
                    shadowColor="rgba(34,197,94,0.35)"
                    style={{ background: "#fff", border: "1px solid #DDDAD0" }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: "#0A0A0B" }}
                    >
                      <span
                        className="font-black text-base"
                        style={{ fontFamily: "var(--font-bricolage)", color: "#22c55e" }}
                      >
                        {step.n}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ fontFamily: "var(--font-bricolage)", color: "#0A0A0B" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#9A9A9F" }}>{step.desc}</p>
                  </Card3D>
                </AnimateV1>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES + CTA ── */}
        <section className="py-24" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateV1>
                <h2
                  className="font-extrabold leading-tight mb-4"
                  style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)", color: "#0A0A0B" }}
                >
                  What You Get
                </h2>
                <p className="mb-8" style={{ color: "#9A9A9F" }}>
                  Complete, credible, presentation-ready document backed by real financials.
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
                  <CornerBrackets color="rgba(34,197,94,0.15)" />
                  <div
                    className="text-xs tracking-widest uppercase mb-6"
                    style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}
                  >
                    — Start Today
                  </div>
                  <h3
                    className="font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.75rem" }}
                  >
                    Get your business plan<span style={{ color: "#22c55e" }}>.</span>
                  </h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(244,242,237,0.4)" }}>
                    Free 30-minute discovery call to scope your requirements and discuss the right financial model for your stage.
                  </p>
                  <a
                    href="mailto:info@startupsupports.in?subject=Business Plan Enquiry"
                    className="w-full flex items-center justify-center gap-2 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5 mb-3"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.35)" }}
                  >
                    Start Your Business Plan
                  </a>
                  <Link
                    href="/"
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
