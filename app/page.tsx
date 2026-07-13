import Link from "next/link";
import NavbarV1 from "@/components/NavbarV1";
import FooterV1 from "@/components/FooterV1";
import HeroCards from "@/components/HeroCards";
import MarqueeV1 from "@/components/MarqueeV1";
import AnimateV1 from "@/components/AnimateV1";
import Counter from "@/components/Counter";
import Card3D from "@/components/Card3D";

/* ── Data ─────────────────────────────────────────────────────── */

const marqueeItems = [
  "Pitch Deck Creation",
  "Business Plan & Financials",
  "Company Incorporation",
  "DPIIT Recognition",
  "IEC Registration",
  "RCMC Certificate",
  "Freight Forwarding",
  "International Banking",
  "Export Compliance",
  "Market Research",
];

const capabilities = [
  {
    n: "01",
    title: "Startup Foundations",
    desc: "From idea to investor-ready — pitch decks, business plans, company incorporation, DPIIT recognition, and DPR.",
    tags: ["Pitch Deck", "Business Plan", "Incorporation", "DPIIT"],
    href: "/#startup",
  },
  {
    n: "02",
    title: "Export Documentation",
    desc: "IEC, GST+PAN, AD Code, RCMC — every registration an exporter needs, filed end-to-end by our experts.",
    tags: ["IEC", "RCMC", "AD Code", "GST"],
    href: "/export-services/documentation",
  },
  {
    n: "03",
    title: "Freight & Logistics",
    desc: "Sea, air, road — global cargo movement with full customs clearance and proof-of-export handling.",
    tags: ["Sea Freight", "Air Freight", "Customs", "BL / AWB"],
    href: "/export-services/freight-forwarding",
  },
  {
    n: "04",
    title: "International Banking",
    desc: "Forex accounts, Letters of Credit, e-BRC, FEMA compliance — protect every dollar of your export earnings.",
    tags: ["LC Facilitation", "Forex", "e-BRC", "EEFC"],
    href: "/export-services/international-banking",
  },
];

const whyUs = [
  {
    title: "End-to-End Support",
    desc: "From ideation to execution — every stage handled so you can focus on what matters.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "India-Specific Expertise",
    desc: "Deep knowledge of Indian regulatory frameworks, government schemes, and export policies.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
  },
  {
    title: "Proven Track Record",
    desc: "Hundreds of startups launched and exporters scaled across industries and geographies.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Speed Without Compromise",
    desc: "Fast turnarounds on documentation, decks, and plans — without cutting corners on quality.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const statsData = [
  { target: 500, suffix: "+", label: "Clients Served" },
  { target: 50,  suffix: "+", label: "Countries Reached" },
  { target: 95,  suffix: "%", label: "Success Rate" },
  { target: 8,   suffix: "+", label: "Years of Expertise" },
];

/* ── Components ────────────────────────────────────────────────── */

function CornerBrackets({ color = "rgba(10,10,11,0.15)" }: { color?: string }) {
  const s: React.CSSProperties = { position: "absolute", width: 28, height: 28, borderColor: color };
  return (
    <>
      <div style={{ ...s, top: 16, left: 16, borderTop: "1px solid", borderLeft: "1px solid" }} />
      <div style={{ ...s, top: 16, right: 16, borderTop: "1px solid", borderRight: "1px solid" }} />
      <div style={{ ...s, bottom: 16, left: 16, borderBottom: "1px solid", borderLeft: "1px solid" }} />
      <div style={{ ...s, bottom: 16, right: 16, borderBottom: "1px solid", borderRight: "1px solid" }} />
    </>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function HomeV1() {
  return (
    <>
      <NavbarV1 />
      <main>

        {/* ── 1. HERO ────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center pt-16 overflow-hidden"
          style={{ background: "#F4F2ED" }}
        >
          <CornerBrackets />

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(34,197,94,0.1) 1.5px, transparent 1.5px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — editorial */}
              <div>
                {/* Mono label */}
                <div
                  className="text-xs tracking-[0.15em] uppercase mb-6"
                  style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}
                >
                  — Startup Services · Export Solutions · India
                </div>

                {/* Headline */}
                <h1
                  className="font-extrabold leading-[0.9] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-bricolage), system-ui",
                    fontSize: "clamp(3rem, 2.2rem + 4vw, 5.5rem)",
                    color: "#0A0A0B",
                  }}
                >
                  Build Bold.{" "}
                  <br />
                  <em
                    style={{
                      fontFamily: "var(--font-instrument), Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "#0A0A0B",
                    }}
                  >
                    Export
                  </em>{" "}
                  Global
                  <span className="text-brand-500">.</span>
                </h1>

                <p
                  className="text-lg leading-relaxed max-w-lg mb-10"
                  style={{ color: "rgba(10,10,11,0.6)" }}
                >
                  India&apos;s dual-service business partner — from zero to funded startup,
                  and from local business to international exporter.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#startup"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all hover:-translate-y-0.5"
                    style={{ background: "#0A0A0B", color: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
                  >
                    Startup Services →
                  </Link>
                  <Link
                    href="/#export"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all hover:border-brand-500 hover:text-brand-600"
                    style={{ border: "1.5px solid rgba(10,10,11,0.2)", color: "#0A0A0B" }}
                  >
                    Export Services →
                  </Link>
                </div>

                <div
                  className="mt-12 text-xs tracking-[0.18em] uppercase"
                  style={{ color: "#DDDAD0", fontFamily: "var(--font-geist-body), monospace" }}
                >
                  01 / 02 &nbsp;&nbsp; Startup Supports
                </div>
              </div>

              {/* Right — floating 3D cards */}
              <div className="hidden lg:block">
                <HeroCards />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. MARQUEE ─────────────────────────────────────── */}
        <div style={{ background: "#EDEBE4", borderTop: "1px solid #DDDAD0", borderBottom: "1px solid #DDDAD0" }}>
          <div className="py-5">
            <MarqueeV1 items={marqueeItems} speed={40} />
          </div>
        </div>

        {/* ── 3. DARK STATS (parallax bg) ────────────────────── */}
        <section
          className="relative overflow-hidden py-28"
          style={{ background: "#08080A" }}
          id="stats"
        >
          <CornerBrackets color="rgba(244,242,237,0.1)" />

          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(34,197,94,0.06), transparent)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center mb-16">
              <div
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{ color: "#5A5A5F", fontFamily: "var(--font-geist-body), monospace" }}
              >
                — By the Numbers
              </div>
              <h2
                className="font-extrabold text-white"
                style={{
                  fontFamily: "var(--font-bricolage), system-ui",
                  fontSize: "clamp(2rem, 1.6rem + 2vw, 3rem)",
                }}
              >
                Trusted by hundreds.{" "}
                <em
                  style={{
                    fontFamily: "var(--font-instrument), Georgia",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Proven
                </em>{" "}
                across borders.
              </h2>
            </AnimateV1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((s, i) => (
                <AnimateV1 key={s.label} animation="scale-up" delay={i * 80}>
                  <Card3D
                    className="rounded-2xl p-8 text-center border"
                    shadowColor="rgba(34,197,94,0.5)"
                    style={{
                      background: "#101013",
                      borderColor: "#1F1F22",
                    }}
                  >
                    {/* Corner brackets on card */}
                    <div style={{ position: "absolute", top: 8, left: 8, width: 12, height: 12, borderTop: "1px solid #1F1F22", borderLeft: "1px solid #1F1F22" }} />
                    <div style={{ position: "absolute", top: 8, right: 8, width: 12, height: 12, borderTop: "1px solid #1F1F22", borderRight: "1px solid #1F1F22" }} />
                    <div style={{ position: "absolute", bottom: 8, left: 8, width: 12, height: 12, borderBottom: "1px solid #1F1F22", borderLeft: "1px solid #1F1F22" }} />
                    <div style={{ position: "absolute", bottom: 8, right: 8, width: 12, height: 12, borderBottom: "1px solid #1F1F22", borderRight: "1px solid #1F1F22" }} />

                    <div
                      className="font-extrabold text-white mb-1"
                      style={{
                        fontFamily: "var(--font-bricolage), system-ui",
                        fontSize: "clamp(2.2rem, 1.8rem + 2vw, 3.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      <Counter target={s.target} suffix={s.suffix} />
                    </div>
                    <div
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "#5A5A5F", fontFamily: "var(--font-geist-body), monospace" }}
                    >
                      {s.label}
                    </div>
                    <div className="mt-3 w-6 h-6 rounded-full bg-brand-500 mx-auto opacity-60" style={{ transform: "scale(0.6)" }} />
                  </Card3D>
                </AnimateV1>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CAPABILITIES ────────────────────────────────── */}
        <section
          id="startup"
          className="py-24 relative"
          style={{ background: "#F4F2ED" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="mb-16">
              <div
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}
              >
                — What We Offer
              </div>
              <h2
                className="font-extrabold leading-tight"
                style={{
                  fontFamily: "var(--font-bricolage), system-ui",
                  fontSize: "clamp(2rem, 1.6rem + 2vw, 3rem)",
                  color: "#0A0A0B",
                }}
              >
                Two Specialisations.{" "}
                <em
                  style={{
                    fontFamily: "var(--font-instrument), Georgia",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  One
                </em>{" "}
                Partner.
              </h2>
            </AnimateV1>

            <div
              className="space-y-0"
              style={{ borderLeft: "3px solid #22c55e" }}
            >
              {capabilities.map((cap, i) => (
                <AnimateV1 key={cap.n} animation="slide-left" delay={i * 60}>
                  <Link
                    href={cap.href}
                    className="group flex gap-6 lg:gap-10 items-start py-8 px-6 lg:px-10 transition-all hover:bg-white/60"
                    style={{ borderBottom: "1px solid #DDDAD0" }}
                  >
                    <div
                      className="shrink-0 text-xs tracking-widest uppercase pt-1"
                      style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace", minWidth: "2rem" }}
                    >
                      — {cap.n}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-bold mb-2 group-hover:text-brand-600 transition-colors"
                        style={{
                          fontFamily: "var(--font-bricolage), system-ui",
                          fontSize: "clamp(1.1rem, 0.9rem + 0.8vw, 1.5rem)",
                          color: "#0A0A0B",
                        }}
                      >
                        {cap.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#9A9A9F" }}>
                        {cap.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cap.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase border"
                            style={{ borderColor: "#DDDAD0", color: "#5A5A5F", fontFamily: "var(--font-geist-body), monospace" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className="shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white"
                      style={{ borderColor: "#DDDAD0", color: "#9A9A9F" }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </AnimateV1>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. EXPORT SECTION (dark panel) ─────────────────── */}
        <section
          id="export"
          className="py-24 relative overflow-hidden"
          style={{ background: "#08080A" }}
        >
          <CornerBrackets color="rgba(244,242,237,0.1)" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(34,197,94,0.05), transparent)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <AnimateV1 animation="slide-left">
                <div
                  className="text-xs tracking-[0.15em] uppercase mb-6"
                  style={{ color: "#5A5A5F", fontFamily: "var(--font-geist-body), monospace" }}
                >
                  — Export Division
                </div>
                <h2
                  className="font-extrabold text-white leading-tight mb-6"
                  style={{
                    fontFamily: "var(--font-bricolage), system-ui",
                    fontSize: "clamp(2rem, 1.6rem + 2vw, 3.2rem)",
                  }}
                >
                  Go Global.{" "}
                  <br />
                  <em
                    style={{
                      fontFamily: "var(--font-instrument), Georgia",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    With Confidence.
                  </em>
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(244,242,237,0.55)" }}>
                  Export is complex — paperwork, logistics, banking, compliance. We cut through it all so Indian businesses can access international markets without friction.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/export-services/documentation"
                    className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-full transition-all hover:-translate-y-0.5"
                    style={{ background: "#22c55e", color: "#fff", boxShadow: "0 4px 20px rgba(34,197,94,0.4)" }}
                  >
                    Start Exporting →
                  </Link>
                </div>
              </AnimateV1>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Documentation", sub: "IEC · RCMC · AD Code", href: "/export-services/documentation" },
                  { label: "Freight", sub: "Sea · Air · Road", href: "/export-services/freight-forwarding" },
                  { label: "Banking", sub: "LC · Forex · e-BRC", href: "/export-services/international-banking" },
                  { label: "Compliance", sub: "Advisory & Support", href: "/#export" },
                ].map((item, i) => (
                  <AnimateV1 key={item.label} animation="scale-up" delay={i * 80}>
                    <Card3D
                      className="rounded-2xl p-6 border"
                      shadowColor="rgba(34,197,94,0.5)"
                      style={{ background: "#101013", borderColor: "#1F1F22" }}
                    >
                      <div
                        className="font-bold text-white mb-1"
                        style={{ fontFamily: "var(--font-bricolage), system-ui" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-xs mb-4 tracking-wider"
                        style={{ color: "#22c55e", fontFamily: "var(--font-geist-body), monospace" }}
                      >
                        {item.sub}
                      </div>
                      <Link
                        href={item.href}
                        className="text-xs tracking-widest uppercase transition-colors hover:text-brand-400"
                        style={{ color: "#5A5A5F" }}
                      >
                        Explore →
                      </Link>
                    </Card3D>
                  </AnimateV1>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. WHY US (3D cards + colored shadows) ─────────── */}
        <section className="py-24 relative" style={{ background: "#F4F2ED" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="max-w-xl mb-14">
              <div
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}
              >
                — Why Startup Supports
              </div>
              <h2
                className="font-extrabold leading-tight"
                style={{
                  fontFamily: "var(--font-bricolage), system-ui",
                  fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)",
                  color: "#0A0A0B",
                }}
              >
                Not a generic consultancy.{" "}
                <em
                  style={{
                    fontFamily: "var(--font-instrument), Georgia",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Specialists.
                </em>
              </h2>
            </AnimateV1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyUs.map((item, i) => (
                <AnimateV1 key={item.title} animation="fade-up" delay={i * 80}>
                  <Card3D
                    className="rounded-2xl p-7 h-full"
                    shadowColor="rgba(34,197,94,0.45)"
                    style={{ background: "#fff", border: "1px solid #E8E5DC" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: "#22c55e" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h3
                      className="font-bold mb-2"
                      style={{ fontFamily: "var(--font-bricolage), system-ui", color: "#0A0A0B", fontSize: "1rem" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#9A9A9F" }}>
                      {item.desc}
                    </p>
                  </Card3D>
                </AnimateV1>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. HOW WE WORK ─────────────────────────────────── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#0A0A0B" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(34,197,94,0.06) 1.5px, transparent 1.5px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateV1 className="text-center mb-16">
              <h2
                className="font-extrabold text-white"
                style={{ fontFamily: "var(--font-bricolage), system-ui", fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.8rem)" }}
              >
                How We Work
              </h2>
              <p className="mt-3" style={{ color: "#5A5A5F" }}>Simple process. Serious results.</p>
            </AnimateV1>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: "01", t: "Consult", d: "We understand your goals, challenges, and timeline in a free discovery call." },
                { n: "02", t: "Plan",    d: "Our experts craft a tailored roadmap with clear milestones and deliverables." },
                { n: "03", t: "Execute", d: "We deliver — and stay with you through revisions, approvals, and beyond." },
              ].map((step, i) => (
                <AnimateV1 key={step.n} animation="fade-up" delay={i * 100}>
                  <Card3D
                    className="rounded-2xl p-8 relative overflow-hidden"
                    shadowColor="rgba(34,197,94,0.45)"
                    style={{ background: "#101013", border: "1px solid #1F1F22" }}
                  >
                    <div
                      className="absolute -right-2 -top-4 font-black text-7xl leading-none select-none pointer-events-none"
                      style={{ fontFamily: "var(--font-bricolage)", color: "#1F1F22" }}
                    >
                      {step.n}
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: "#0A0A0B", border: "1px solid #22c55e" }}
                    >
                      <span
                        className="font-black text-lg"
                        style={{ fontFamily: "var(--font-bricolage)", color: "#22c55e" }}
                      >
                        {step.n}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-white text-xl mb-3"
                      style={{ fontFamily: "var(--font-bricolage), system-ui" }}
                    >
                      {step.t}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5A5A5F" }}>{step.d}</p>
                  </Card3D>
                </AnimateV1>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. CTA ─────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-32 relative overflow-hidden"
          style={{ background: "#F4F2ED" }}
        >
          <CornerBrackets />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <AnimateV1>
              <div
                className="text-xs tracking-[0.15em] uppercase mb-6"
                style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body), monospace" }}
              >
                — Ready to Begin
              </div>
              <h2
                className="font-extrabold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-bricolage), system-ui",
                  fontSize: "clamp(2.5rem, 2rem + 3vw, 5rem)",
                  color: "#0A0A0B",
                }}
              >
                Let&apos;s build{" "}
                <em
                  style={{
                    fontFamily: "var(--font-instrument), Georgia",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#22c55e",
                  }}
                >
                  something
                </em>{" "}
                great<span style={{ color: "#22c55e" }}>.</span>
              </h2>
              <p className="text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "rgba(10,10,11,0.55)" }}>
                Whether you are building a startup or scaling exports, we have the expertise to get you there faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@startupsupports.in"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5"
                  style={{ background: "#0A0A0B", color: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 font-bold rounded-full transition-all hover:-translate-y-0.5 hover:border-brand-500"
                  style={{ border: "1.5px solid #DDDAD0", color: "#0A0A0B" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </AnimateV1>
          </div>
        </section>

        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <span
            className="absolute inset-0 rounded-full opacity-30"
            style={{ background: "#22c55e", animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }}
          />
          <a
            href="mailto:info@startupsupports.in?subject=Discovery Call"
            className="relative flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full transition-all hover:-translate-y-0.5"
            style={{
              background: "#22c55e",
              color: "#fff",
              boxShadow: "0 8px 24px rgba(34,197,94,0.5)",
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Free Discovery Call
          </a>
        </div>

      </main>
      <FooterV1 />
    </>
  );
}
