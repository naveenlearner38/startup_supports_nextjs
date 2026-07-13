import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavbarV1 from "@/components/NavbarV1";
import FooterV1 from "@/components/FooterV1";
import AnimateV1 from "@/components/AnimateV1";
import Card3D from "@/components/Card3D";

export const metadata: Metadata = {
  title: "Freight Forwarding & Logistics — Startup Supports V1",
  description: "End-to-end freight forwarding, logistics, and customs clearance for Indian exporters. Sea, air, and road.",
};

const modes = [
  {
    title: "Sea Freight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M4 18l-1-6h18l-1 6" strokeWidth={1.5} strokeLinejoin="round" />
        <path d="M8 12V8l4-2 4 2v4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    desc: "FCL and LCL consolidation. Best for high-volume, cost-sensitive shipments to 150+ global ports.",
    stat: "150+",
    statLabel: "Ports",
  },
  {
    title: "Air Freight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5c-1.5-1.5-3.5-1.5-5 0L11 6 2.8 6.2l2.4 2.4L8 9l-4 4 4 1 1 4 4-4 .6 2.8 2.4 2.4z" strokeWidth={1.5} strokeLinejoin="round" />
      </svg>
    ),
    desc: "Express and standard air freight for time-sensitive cargo. Door-to-door tracking included.",
    stat: "24hr",
    statLabel: "Response",
  },
  {
    title: "Land / Road",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="1" strokeWidth={1.5} />
        <path d="M16 8h4l3 5v3h-7V8z" strokeWidth={1.5} strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" strokeWidth={1.5} />
        <circle cx="18.5" cy="18.5" r="2.5" strokeWidth={1.5} />
      </svg>
    ),
    desc: "Cross-border road freight for SAARC markets. Bangladesh, Nepal, Sri Lanka, and Myanmar corridors.",
    stat: "5+",
    statLabel: "Corridors",
  },
  {
    title: "Customs Clearance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeWidth={1.5} />
        <path d="M14 2v6h6M9 15l2 2 4-4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    desc: "Complete customs documentation — shipping bills, packing lists, COO, BL, AWB, and all export formalities.",
    stat: "100%",
    statLabel: "Accuracy",
  },
];

const process = [
  { n: "01", title: "Cargo Assessment", desc: "We assess your cargo type, HS code, weight, dimensions, and destination to identify the best route." },
  { n: "02", title: "Quote & Booking", desc: "Competitive freight quotes across carriers. Once confirmed, we book and coordinate pickup from your facility." },
  { n: "03", title: "Documentation", desc: "We prepare all export documentation — shipping bills, packing lists, certificates of origin, commercial invoices." },
  { n: "04", title: "Customs Filing", desc: "Our licensed customs brokers file the shipping bill, manage IGST/LUT, and handle port authority correspondence." },
  { n: "05", title: "Transit & Tracking", desc: "Real-time shipment updates from port of origin to destination. We manage exceptions, delays, and transshipments." },
  { n: "06", title: "Proof of Export", desc: "You receive the final Bill of Lading, proof of export, and e-BRC for GST refund claims." },
];

const covers = [
  "Shipping Bill filing (manual & EDI)",
  "Pre-shipment inspection coordination",
  "Certificate of Origin (CO) assistance",
  "Packing list & commercial invoice prep",
  "IGST refund / LUT management",
  "Port handling & transport coordination",
  "Marine insurance facilitation",
  "Post-shipment documentation (BL, AWB, e-BRC)",
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

export default function FreightV1() {
  return (
    <>
      <NavbarV1 />
      <main>

        {/* ── HERO — full-width image + parallax overlay ── */}
        <section className="relative overflow-hidden pt-16" style={{ minHeight: "90vh" }}>
          {/* Parallax bg image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
              alt="Cargo shipping containers at a port"
              fill
              className="object-cover"
              style={{ filter: "saturate(0.6) brightness(0.4)" }}
              priority
            />
          </div>

          {/* Green gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(8,8,10,0.9) 0%, rgba(10,21,48,0.7) 60%, rgba(8,8,10,0.5) 100%)" }}
          />
          <CornerBrackets color="rgba(34,197,94,0.2)" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center" style={{ minHeight: "calc(90vh - 64px)" }}>
            <div
              className="text-xs tracking-[0.18em] uppercase mb-8"
              style={{ color: "rgba(244,242,237,0.3)", fontFamily: "var(--font-geist-body), monospace" }}
            >
              — Export Services · Core Service · 04
            </div>

            <h1
              className="font-extrabold text-white leading-[0.9] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-bricolage), system-ui",
                fontSize: "clamp(3rem, 2rem + 4vw, 6rem)",
                maxWidth: "700px",
              }}
            >
              Your Cargo.{" "}
              <br />
              <em style={{ fontFamily: "var(--font-instrument), Georgia", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                Expertly
              </em>{" "}
              Moved<span style={{ color: "#22c55e" }}>.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: "rgba(244,242,237,0.55)" }}>
              Logistics is not just about moving boxes. It is about moving them on time, at the right cost, with every document in order — so your buyer never has a reason to complain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@startupsupports.in?subject=Freight Forwarding Enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5"
                style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.4)" }}
              >
                Request a Quote →
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full"
                style={{ border: "1.5px solid rgba(244,242,237,0.2)", color: "rgba(244,242,237,0.6)" }}
              >
                ← All Services
              </Link>
            </div>

            {/* Mode chips */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Sea Freight", "Air Freight", "Land / Road", "Customs Clearance"].map((m) => (
                <span
                  key={m}
                  className="px-4 py-2 rounded-full text-xs tracking-widest uppercase"
                  style={{
                    background: "rgba(244,242,237,0.06)",
                    border: "1px solid rgba(244,242,237,0.15)",
                    color: "rgba(244,242,237,0.6)",
                    fontFamily: "var(--font-geist-body), monospace",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODES GRID ── linen ── */}
        <section className="py-24" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="font-extrabold leading-tight mb-4"
                style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)", color: "#0A0A0B" }}
              >
                Every Mode.{" "}
                <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>Every Route.</em>
              </h2>
              <p style={{ color: "#9A9A9F" }}>Sea, air, or road — the most efficient route for your cargo and destination.</p>
            </AnimateV1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {modes.map((mode, i) => (
                <AnimateV1 key={mode.title} animation="fade-up" delay={i * 80}>
                  <Card3D
                    className="rounded-2xl p-6 flex flex-col"
                    shadowColor="rgba(34,197,94,0.4)"
                    style={{ background: "#fff", border: "1px solid #E8E5DC", height: "100%" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "#0a1530", color: "#22c55e" }}
                    >
                      {mode.icon}
                    </div>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ fontFamily: "var(--font-bricolage)", color: "#0A0A0B" }}
                    >
                      {mode.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#9A9A9F" }}>{mode.desc}</p>
                    <div className="flex items-end gap-1">
                      <span className="font-extrabold text-2xl" style={{ fontFamily: "var(--font-bricolage)", color: "#22c55e" }}>
                        {mode.stat}
                      </span>
                      <span className="text-xs pb-1 tracking-widest uppercase" style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}>
                        {mode.statLabel}
                      </span>
                    </div>
                  </Card3D>
                </AnimateV1>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE COVER ── dark ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#0a1530" }}>
          <CornerBrackets color="rgba(34,197,94,0.1)" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateV1 animation="slide-left">
                <h2
                  className="font-extrabold text-white leading-tight mb-6"
                  style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)" }}
                >
                  One Missed Document.{" "}
                  <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                    Shipment Held.
                  </em>
                </h2>
                <p className="leading-relaxed mb-5" style={{ color: "rgba(244,242,237,0.5)" }}>
                  Customs authorities reject shipments for missing packing lists, incorrect HS codes, or expired certificates. These hold your goods for weeks and cost lakhs in demurrage.
                </p>
                <p className="leading-relaxed" style={{ color: "rgba(244,242,237,0.5)" }}>
                  Our customs brokers have handled thousands of shipments. They know what each destination country&apos;s customs looks for, and they file it right the first time.
                </p>
              </AnimateV1>

              <AnimateV1 animation="slide-right" delay={100}>
                <Card3D
                  className="rounded-2xl p-8"
                  shadowColor="rgba(34,197,94,0.45)"
                  style={{ background: "#101013", border: "1px solid #1F1F22" }}
                >
                  <h3
                    className="font-bold text-white text-xl mb-6"
                    style={{ fontFamily: "var(--font-bricolage)" }}
                  >
                    What We Cover
                  </h3>
                  <div className="space-y-3">
                    {covers.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(34,197,94,0.15)" }}>
                          <svg className="w-2.5 h-2.5" style={{ color: "#22c55e" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: "rgba(244,242,237,0.7)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card3D>
              </AnimateV1>
            </div>
          </div>
        </section>

        {/* ── PROCESS + CTA ── linen ── */}
        <section className="py-24" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center mb-14">
              <h2
                style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.4rem)", color: "#0A0A0B", fontWeight: 800 }}
              >
                From Pickup to{" "}
                <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                  Proof of Export
                </em>
              </h2>
            </AnimateV1>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {process.map((step, i) => (
                  <AnimateV1 key={step.n} animation="fade-up" delay={i * 60}>
                    <Card3D
                      className="p-5 rounded-2xl"
                      shadowColor="rgba(34,197,94,0.35)"
                      style={{ background: "#fff", border: "1px solid #E8E5DC" }}
                    >
                      <div
                        className="font-black text-4xl leading-none mb-3"
                        style={{ fontFamily: "var(--font-bricolage)", color: "#DDDAD0" }}
                      >
                        {step.n}
                      </div>
                      <h3
                        className="font-bold text-base mb-1"
                        style={{ fontFamily: "var(--font-bricolage)", color: "#0A0A0B" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#9A9A9F" }}>{step.desc}</p>
                    </Card3D>
                  </AnimateV1>
                ))}
              </div>

              <AnimateV1 delay={200}>
                <Card3D
                  className="rounded-2xl p-8 sticky top-24"
                  shadowColor="rgba(34,197,94,0.45)"
                  style={{ background: "#0A0A0B" }}
                >
                  <CornerBrackets color="rgba(34,197,94,0.15)" />
                  <div className="text-xs tracking-widest uppercase mb-6" style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}>— Move Your Cargo</div>
                  <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.5rem" }}>
                    Get a freight quote<span style={{ color: "#22c55e" }}>.</span>
                  </h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(244,242,237,0.4)" }}>
                    Share your cargo details and destination — we respond with a competitive quote within 24 hours.
                  </p>
                  <a
                    href="mailto:info@startupsupports.in?subject=Freight Forwarding Enquiry"
                    className="w-full flex items-center justify-center py-4 font-bold rounded-full transition-all hover:-translate-y-0.5 mb-3"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.35)" }}
                  >
                    Request a Quote
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
