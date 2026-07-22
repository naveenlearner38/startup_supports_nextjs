import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavbarV1 from "@/components/NavbarV1";
import FooterV1 from "@/components/FooterV1";
import AnimateV1 from "@/components/AnimateV1";
import Card3D from "@/components/Card3D";

export const metadata: Metadata = {
  title: "Export Documentation Service — Startup Supports V1",
  description: "IEC, GST+PAN, AD Code, RCMC — all your export licences and registrations handled end-to-end.",
};

const documents = [
  {
    code: "IEC",
    full: "Importer Exporter Code",
    timeline: "3–5 working days",
    desc: "Mandatory 10-digit code issued by DGFT. Required for every international trade transaction from India.",
  },
  {
    code: "GST+PAN",
    full: "Tax Registrations",
    timeline: "7–10 working days",
    desc: "GST registration for export rebates (LUT/IGST) and PAN linkage for all trade documentation.",
  },
  {
    code: "AD Code",
    full: "Authorised Dealer Code",
    timeline: "2–3 working days",
    desc: "Bank-assigned code registered at the port of export. Required for customs filing and foreign remittance.",
  },
  {
    code: "RCMC",
    full: "Registration Cum Membership Certificate",
    timeline: "7–15 working days",
    desc: "Issued by Export Promotion Councils. Unlocks MEIS/RoDTEP benefits and trade facilitation schemes.",
  },
];

const process = [
  { n: "01", title: "Requirement Assessment", desc: "We map your business type, products, HS codes, and export destinations to identify every registration you need." },
  { n: "02", title: "Document Checklist", desc: "You receive a precise checklist of documents to gather. We handle the filing — you supply the source documents." },
  { n: "03", title: "Filing & Submission", desc: "Our experts file applications with DGFT, CBIC, your bank, and the relevant Export Promotion Council." },
  { n: "04", title: "Tracking & Follow-up", desc: "We actively track every application and follow up with authorities to prevent delays and rejections." },
  { n: "05", title: "Certificate Delivery", desc: "You receive certified digital copies of all registrations, properly organised and ready for trade." },
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

export default function DocumentationV1() {
  return (
    <>
      <NavbarV1 />
      <main>

        {/* ── HERO — navy official/document feel ── */}
        <section
          className="relative overflow-hidden pt-16"
          style={{ background: "#0a1530", minHeight: "90vh" }}
        >
          <CornerBrackets color="rgba(244,242,237,0.1)" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center" style={{ minHeight: "calc(90vh - 64px)" }}>
            <div
              className="text-xs tracking-[0.18em] uppercase mb-8"
              style={{ color: "rgba(244,242,237,0.3)", fontFamily: "var(--font-geist-body), monospace" }}
            >
              — Export Services · Core Service · 03
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
                  All Your Export
                  <br />
                  <em style={{ fontFamily: "var(--font-instrument), Georgia", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                    Documents.
                  </em>
                  <br />
                  Done Right<span style={{ color: "#22c55e" }}>.</span>
                </h1>

                <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(244,242,237,0.5)" }}>
                  IEC. GST+PAN. AD Code. RCMC. Four registrations that unlock India&apos;s entire export ecosystem — and we handle every single one for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@startupsupports.com?subject=Export Documentation Enquiry"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.4)" }}
                  >
                    Start Your Registration →
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full"
                    style={{ border: "1.5px solid rgba(244,242,237,0.15)", color: "rgba(244,242,237,0.6)" }}
                  >
                    ← All Services
                  </Link>
                </div>
              </div>

              {/* Right — doc code chips */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {documents.map((doc, i) => (
                  <AnimateV1 key={doc.code} animation="scale-up" delay={i * 70}>
                    <div
                      className="rounded-2xl p-5"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="font-black text-xl mb-2"
                        style={{ fontFamily: "var(--font-bricolage)", color: "#22c55e" }}
                      >
                        {doc.code}
                      </div>
                      <div className="font-semibold text-white text-sm mb-1" style={{ fontFamily: "var(--font-bricolage)" }}>
                        {doc.full}
                      </div>
                      <div
                        className="text-xs tracking-widest uppercase"
                        style={{ color: "rgba(244,242,237,0.3)", fontFamily: "var(--font-geist-body), monospace" }}
                      >
                        {doc.timeline}
                      </div>
                    </div>
                  </AnimateV1>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── THE 4 REGISTRATIONS ── linen ── */}
        <section className="py-24" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="font-extrabold leading-tight mb-4"
                style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)", color: "#0A0A0B" }}
              >
                The Four Registrations{" "}
                <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400, color: "#22c55e" }}>
                  Every Exporter Needs
                </em>
              </h2>
              <p style={{ color: "#9A9A9F" }}>
                Missing even one blocks your shipment, payment, or benefits. We make sure you have all — correctly registered, on time.
              </p>
            </AnimateV1>

            <div className="grid md:grid-cols-2 gap-5">
              {documents.map((doc, i) => (
                <AnimateV1 key={doc.code} animation="fade-up" delay={i * 70}>
                  <Card3D
                    className="rounded-2xl p-6 flex gap-5"
                    shadowColor="rgba(34,197,94,0.4)"
                    style={{ background: "#fff", border: "1px solid #E8E5DC" }}
                  >
                    <div
                      className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: "#0a1530" }}
                    >
                      <span
                        className="font-black text-xs text-center leading-tight px-1"
                        style={{ fontFamily: "var(--font-bricolage)", color: "#22c55e" }}
                      >
                        {doc.code}
                      </span>
                    </div>
                    <div>
                      <div
                        className="font-bold text-lg mb-0.5"
                        style={{ fontFamily: "var(--font-bricolage)", color: "#0A0A0B" }}
                      >
                        {doc.full}
                      </div>
                      <div
                        className="text-xs tracking-widest uppercase mb-2"
                        style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}
                      >
                        {doc.timeline}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#9A9A9F" }}>{doc.desc}</p>
                    </div>
                  </Card3D>
                </AnimateV1>
              ))}
            </div>
          </div>
        </section>

        {/* ── COST OF GETTING IT WRONG ── dark ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#08080A" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(34,197,94,0.05), transparent)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateV1 animation="slide-left">
                <h2
                  className="font-extrabold text-white leading-tight mb-6"
                  style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)" }}
                >
                  The Cost of Getting{" "}
                  <em style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontWeight: 400 }}>
                    This Wrong
                  </em>
                </h2>
                <p className="leading-relaxed mb-5" style={{ color: "rgba(244,242,237,0.5)" }}>
                  Incorrect or incomplete export documentation leads to shipment holds at customs, rejected bank transactions, forfeited government benefits, and costly delays.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: "rgba(244,242,237,0.5)" }}>
                  Most first-time exporters get at least one registration wrong. We have seen it hundreds of times — which is exactly why we exist.
                </p>
                <div className="rounded-2xl p-5" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
                  <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}>Our Guarantee</div>
                  <p className="text-sm" style={{ color: "rgba(244,242,237,0.7)" }}>
                    We file accurately or we refile at no charge. Your registrations will be approved, or we make it right.
                  </p>
                </div>
              </AnimateV1>

              <AnimateV1 animation="slide-right" delay={100}>
                <Card3D
                  className="rounded-2xl p-8"
                  shadowColor="rgba(34,197,94,0.45)"
                  style={{ background: "#fff" }}
                >
                  <h3
                    className="font-bold text-2xl mb-6"
                    style={{ fontFamily: "var(--font-bricolage)", color: "#0A0A0B" }}
                  >
                    Typical Timeline
                  </h3>
                  <div className="space-y-4">
                    {[
                      { doc: "IEC", time: "3–5 working days", pct: 35 },
                      { doc: "GST Registration", time: "7–10 working days", pct: 70 },
                      { doc: "AD Code Registration", time: "2–3 working days", pct: 25 },
                      { doc: "RCMC", time: "7–15 working days", pct: 90 },
                    ].map((item) => (
                      <div key={item.doc}>
                        <div className="flex justify-between mb-1.5">
                          <span className="font-semibold text-sm" style={{ color: "#0A0A0B" }}>{item.doc}</span>
                          <span className="text-xs" style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}>{item.time}</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: "#EDEBE4" }}>
                          <div
                            className="h-1.5 rounded-full"
                            style={{ width: `${item.pct}%`, background: "#22c55e" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs mt-4" style={{ color: "#9A9A9F" }}>* Timelines subject to authority processing speed. We expedite wherever possible.</p>
                </Card3D>
              </AnimateV1>
            </div>
          </div>
        </section>

        {/* ── PROCESS + CTA ── */}
        <section className="py-24" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center mb-14">
              <h2 style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.4rem)", color: "#0A0A0B", fontWeight: 800 }}>
                How We Do It
              </h2>
              <p className="mt-3" style={{ color: "#9A9A9F" }}>You supply the documents. We handle everything else.</p>
            </AnimateV1>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-4">
                {process.map((step, i) => (
                  <AnimateV1 key={step.n} animation="slide-left" delay={i * 60}>
                    <div
                      className="flex gap-5 p-5 rounded-2xl"
                      style={{ background: "#fff", border: "1px solid #E8E5DC" }}
                    >
                      <div
                        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "#0a1530" }}
                      >
                        <span className="font-black text-xs" style={{ fontFamily: "var(--font-bricolage)", color: "#22c55e" }}>{step.n}</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-bricolage)", color: "#0A0A0B" }}>{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#9A9A9F" }}>{step.desc}</p>
                      </div>
                    </div>
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
                  <div className="text-xs tracking-widest uppercase mb-6" style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}>— Get Started</div>
                  <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.5rem" }}>
                    Export-ready in weeks<span style={{ color: "#22c55e" }}>.</span>
                  </h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(244,242,237,0.4)" }}>
                    Tell us where you want to export, and we will map every registration you need.
                  </p>
                  <a
                    href="mailto:info@startupsupports.com?subject=Export Documentation Enquiry"
                    className="w-full flex items-center justify-center py-4 font-bold rounded-full transition-all hover:-translate-y-0.5 mb-3"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 8px 28px rgba(34,197,94,0.35)" }}
                  >
                    Start Your Registration
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
