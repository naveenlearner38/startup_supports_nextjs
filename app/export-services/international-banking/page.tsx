import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavbarV1 from "@/components/NavbarV1";
import FooterV1 from "@/components/FooterV1";
import AnimateV1 from "@/components/AnimateV1";
import Card3D from "@/components/Card3D";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "International Banking Support — Startup Supports V1",
  description: "Forex accounts, Letters of Credit, and cross-border payment infrastructure for Indian exporters.",
};

const services = [
  { title: "Export Current Account", desc: "Dedicated export current account linked to ECGC and RBI-compliant foreign remittance facilities." },
  { title: "Letter of Credit (LC)", desc: "End-to-end LC facilitation — advising, confirmation, discounting, and document presentation." },
  { title: "Forex Management", desc: "Forward contracts, hedging guidance, and exchange rate advisory to protect your export realisation." },
  { title: "e-BRC & FIRA", desc: "Foreign Inward Remittance Account and e-BRC filing for GST refunds and government incentive claims." },
  { title: "EEFC Account Setup", desc: "Exchange Earners' Foreign Currency account — retain export proceeds in foreign currency for future payables." },
  { title: "Bank Guarantee", desc: "Assistance with export advance payment guarantees, bid bonds, and performance guarantees." },
];

const process = [
  { n: "01", title: "Banking Needs Assessment", desc: "We analyse your export markets, payment terms, and currency risks to map the banking products you need." },
  { n: "02", title: "Bank Coordination", desc: "We liaise with your existing bank to set up export accounts, EEFC, and RBI reporting requirements." },
  { n: "03", title: "LC & Payment Structure", desc: "For buyers wanting Letters of Credit, we structure LC terms, advise on documentation, and coordinate with the LC bank." },
  { n: "04", title: "Document Presentation", desc: "We prepare and present all LC-compliant documents — ensuring zero discrepancies before submission." },
  { n: "05", title: "Realisation & Compliance", desc: "Post-shipment — we track payment realisation, file e-BRC, and ensure RBI FEMA compliance for every transaction." },
];

const keyStats = [
  { stat: "₹0", desc: "Discrepancy losses when we handle your LC", target: 0, prefix: "₹" },
  { stat: "100%", desc: "FEMA compliance on every transaction", target: 100, suffix: "%" },
  { stat: "48hr", desc: "e-BRC filing after remittance receipt" },
  { stat: "15+", desc: "Banks we actively work with", target: 15, suffix: "+" },
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

export default function InternationalBankingV1() {
  return (
    <>
      <NavbarV1 />
      <main>

        {/* ── HERO — premium dark, circuit/grid pattern ── */}
        <section
          className="relative overflow-hidden pt-16"
          style={{ background: "#08080A", minHeight: "90vh" }}
        >
          <CornerBrackets color="rgba(34,197,94,0.15)" />

          {/* Radial grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(34,197,94,0.08), transparent)" }}
          />

          <div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center"
            style={{ minHeight: "calc(90vh - 64px)" }}
          >
            <div
              className="text-xs tracking-[0.18em] uppercase mb-8"
              style={{ color: "rgba(244,242,237,0.3)", fontFamily: "var(--font-geist-body), monospace" }}
            >
              — Export Services · Core Service · 05
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1
                  className="font-extrabold text-white leading-[0.9] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-bricolage), system-ui",
                    fontSize: "clamp(2.8rem, 2rem + 4vw, 5.5rem)",
                  }}
                >
                  Seamless{" "}
                  <em style={{ fontFamily: "var(--font-instrument), Georgia", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                    Global
                  </em>
                  <br />
                  Payments<span style={{ color: "#22c55e" }}>.</span>
                </h1>

                <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(244,242,237,0.5)" }}>
                  International banking is where many export deals fall apart. Wrong LC terms, missed e-BRC filings, or forex exposure can wipe out your margin. We make sure that does not happen.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a
                    href="mailto:info@startupsupports.com?subject=International Banking Enquiry"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.4)" }}
                  >
                    Book a Consultation →
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full"
                    style={{ border: "1.5px solid rgba(244,242,237,0.15)", color: "rgba(244,242,237,0.6)" }}
                  >
                    ← All Services
                  </Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["LC Facilitation", "Forex Management", "e-BRC Filing", "EEFC Account", "Bank Guarantee", "FEMA Compliance"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-[10px] tracking-widest uppercase"
                      style={{
                        background: "rgba(34,197,94,0.08)",
                        border: "1px solid rgba(34,197,94,0.2)",
                        color: "rgba(244,242,237,0.5)",
                        fontFamily: "var(--font-geist-body), monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — stat grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {keyStats.map((s, i) => (
                  <AnimateV1 key={s.desc} animation="scale-up" delay={i * 70}>
                    <Card3D
                      className="rounded-2xl p-6"
                      shadowColor="rgba(34,197,94,0.45)"
                      style={{ background: "#101013", border: "1px solid #1F1F22" }}
                    >
                      <div
                        className="font-extrabold mb-2"
                        style={{ fontFamily: "var(--font-bricolage)", fontSize: "2.5rem", lineHeight: 1, color: "#22c55e" }}
                      >
                        {s.stat}
                      </div>
                      <div className="text-xs leading-relaxed" style={{ color: "#5A5A5F" }}>{s.desc}</div>
                    </Card3D>
                  </AnimateV1>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY COMPLEX — linen with services grid ── */}
        <section className="py-24" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateV1 animation="slide-left">
                <div
                  className="text-xs tracking-[0.15em] uppercase mb-5"
                  style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}
                >
                  — The Complexity Problem
                </div>
                <h2
                  className="font-extrabold leading-tight mb-6"
                  style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)", color: "#0A0A0B" }}
                >
                  Why Export Banking{" "}
                  <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                    Is More Complex
                  </em>{" "}
                  Than You Think
                </h2>
                <p className="leading-relaxed mb-5" style={{ color: "#9A9A9F" }}>
                  Receiving an international payment is not as simple as sharing your IBAN. FEMA compliance, RBI reporting, repatriation timelines, LC discrepancies, and forex conversion timing all affect how much you actually keep.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: "#9A9A9F" }}>
                  A single discrepancy in an LC document presentation can freeze payment for months. We have resolved hundreds of such cases — and prevented thousands more.
                </p>

                {/* Mini stat row */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { n: "₹0", l: "Discrepancy losses under our watch" },
                    { n: "100%", l: "FEMA compliance guaranteed" },
                    { n: "48hr", l: "e-BRC after remittance" },
                    { n: "15+", l: "Active banking partners" },
                  ].map((s) => (
                    <div key={s.l} className="p-4 rounded-2xl" style={{ background: "#fff", border: "1px solid #E8E5DC" }}>
                      <div
                        className="font-extrabold mb-1"
                        style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.8rem", lineHeight: 1, color: "#0A0A0B" }}
                      >
                        {s.n}
                      </div>
                      <div className="text-xs leading-tight" style={{ color: "#9A9A9F" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </AnimateV1>

              <div className="space-y-4">
                {services.map((svc, i) => (
                  <AnimateV1 key={svc.title} animation="slide-right" delay={i * 60}>
                    <Card3D
                      className="rounded-2xl p-5 flex gap-4"
                      shadowColor="rgba(34,197,94,0.35)"
                      style={{ background: "#fff", border: "1px solid #E8E5DC" }}
                    >
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "#0A0A0B" }}
                      >
                        <span
                          className="text-xs font-black"
                          style={{ fontFamily: "var(--font-bricolage)", color: "#22c55e" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <div
                          className="font-bold mb-1"
                          style={{ fontFamily: "var(--font-bricolage)", color: "#0A0A0B" }}
                        >
                          {svc.title}
                        </div>
                        <div className="text-sm leading-relaxed" style={{ color: "#9A9A9F" }}>{svc.desc}</div>
                      </div>
                    </Card3D>
                  </AnimateV1>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS + CTA — dark ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#08080A" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(34,197,94,0.06), transparent)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center mb-14">
              <h2
                className="font-extrabold text-white"
                style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)" }}
              >
                How We Work
              </h2>
              <p className="mt-3" style={{ color: "#5A5A5F" }}>
                From account setup to realisation — we stay with you through{" "}
                <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", color: "#22c55e" }}>every transaction</em>.
              </p>
            </AnimateV1>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-4">
                {process.map((step, i) => (
                  <AnimateV1 key={step.n} animation="slide-left" delay={i * 70}>
                    <div
                      className="flex gap-5 p-6 rounded-2xl"
                      style={{ background: "#101013", border: "1px solid #1F1F22" }}
                    >
                      <div
                        className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: "#0A0A0B", border: "1px solid rgba(34,197,94,0.25)" }}
                      >
                        <span
                          className="font-black text-sm"
                          style={{ fontFamily: "var(--font-bricolage)", color: "#22c55e" }}
                        >
                          {step.n}
                        </span>
                      </div>
                      <div>
                        <h3
                          className="font-bold text-white text-lg mb-1"
                          style={{ fontFamily: "var(--font-bricolage)" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#5A5A5F" }}>{step.desc}</p>
                      </div>
                    </div>
                  </AnimateV1>
                ))}
              </div>

              <AnimateV1 delay={200}>
                <Card3D
                  className="rounded-2xl p-8 sticky top-24"
                  shadowColor="rgba(34,197,94,0.45)"
                  style={{ background: "#101013", border: "1px solid #1F1F22" }}
                >
                  <CornerBrackets color="rgba(34,197,94,0.15)" />
                  <div className="text-xs tracking-widest uppercase mb-6" style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}>— Get Banking-Ready</div>
                  <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.5rem" }}>
                    Protect your export proceeds<span style={{ color: "#22c55e" }}>.</span>
                  </h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(244,242,237,0.4)" }}>
                    Book a consultation and we will audit your current banking setup and identify every risk and opportunity.
                  </p>
                  <a
                    href="mailto:info@startupsupports.com?subject=International Banking Enquiry"
                    className="w-full flex items-center justify-center py-4 font-bold rounded-full transition-all hover:-translate-y-0.5 mb-3"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.35)" }}
                  >
                    Book a Consultation
                  </a>
                  <Link
                    href="/"
                    className="w-full flex items-center justify-center py-3 rounded-full text-sm"
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
