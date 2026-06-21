import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/* ─── Data ─────────────────────────────────────────────────── */

const startupCoreServices = [
  { num: "01", title: "Pitch Deck Creation",               desc: "Investor-ready presentations that open wallets.",       href: "/startup-services/pitch-deck" },
  { num: "02", title: "Business Plan & Financial Modeling", desc: "Five-year growth blueprints backed by real projections.", href: "/startup-services/business-plan" },
];

const exportCoreServices = [
  { num: "03", title: "Documentation Service",           desc: "IEC, GST+PAN, AD Code, RCMC — handled end-to-end.",      href: "/export-services/documentation" },
  { num: "04", title: "Freight Forwarding & Logistics",  desc: "Sea, air, road — global cargo movement, customs cleared.", href: "/export-services/freight-forwarding" },
  { num: "05", title: "International Banking Support",   desc: "Forex accounts, Letters of Credit, cross-border payments.", href: "/export-services/international-banking" },
];

const startupOtherServices = [
  "Company Incorporation",
  "DPIIT Recognition",
  "Detailed Project Report (DPR)",
  "Market Research",
  "Export Compliance",
];

const exportOtherServices = [
  "Export Consultancy & Support",
  "Export Compliance Advisory",
  "Trade Finance Consultancy",
  "International Market Entry",
  "Regulatory Guidance",
];

const whyUs = [
  {
    title: "End-to-End Support",
    desc: "From ideation to execution — we handle every stage so you can focus on what matters.",
  },
  {
    title: "India-Specific Expertise",
    desc: "Deep knowledge of Indian regulatory frameworks, government schemes, and export policies.",
  },
  {
    title: "Proven Track Record",
    desc: "Hundreds of startups launched and exporters scaled across industries and geographies.",
  },
  {
    title: "Speed Without Compromise",
    desc: "Fast turnarounds on documentation, decks, and plans — without cutting corners on quality.",
  },
];

const steps = [
  { n: "01", title: "Consult", desc: "We understand your goals, challenges, and timeline in a free discovery call." },
  { n: "02", title: "Plan",    desc: "Our experts craft a tailored roadmap with clear milestones and deliverables." },
  { n: "03", title: "Execute", desc: "We deliver — and stay with you through revisions, approvals, and beyond." },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
          {/* Subtle background gradient blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-100/60 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-100/40 blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — text */}
              <div>
                <div className="animate-fade-in inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-slow" />
                  India&apos;s Dual-Service Business Partner
                </div>

                <h1 className="font-display font-extrabold text-navy-900 text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight mb-6 animate-fade-in-up">
                  Build Bold.{" "}
                  <span className="text-green-gradient">Export Global.</span>
                </h1>

                <p className="text-navy-700/65 text-lg sm:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up"
                   style={{ animationDelay: "150ms" }}>
                  Startup Supports powers two journeys — from zero to funded startup, and from local business to international exporter.
                </p>

                <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4"
                     style={{ animationDelay: "280ms" }}>
                  <Link
                    href="#startup"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Startup Services
                  </Link>
                  <Link
                    href="#export"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-navy-800 hover:bg-navy-900 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-navy-800/20 hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10A15.3 15.3 0 018 12 15.3 15.3 0 0112 2z" strokeWidth={1.5} />
                    </svg>
                    Export Services
                  </Link>
                </div>
              </div>

              {/* Right — service cards visual */}
              <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                {/* Startup card */}
                <div className="p-5 bg-brand-50 border-2 border-brand-200 rounded-2xl">
                  <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="font-display font-bold text-navy-900 mb-2">Startup Services</div>
                  <ul className="space-y-1.5">
                    {["Pitch Deck Creation", "Business Plan", "Incorporation", "DPIIT Certificate"].map(s => (
                      <li key={s} className="flex items-center gap-2 text-xs text-navy-700/70">
                        <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Export card */}
                <div className="p-5 bg-navy-50 border-2 border-navy-200 rounded-2xl mt-6">
                  <div className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10A15.3 15.3 0 018 12 15.3 15.3 0 0112 2z" strokeWidth={1.5} />
                    </svg>
                  </div>
                  <div className="font-display font-bold text-navy-900 mb-2">Export Services</div>
                  <ul className="space-y-1.5">
                    {["Documentation (IEC/RCMC)", "Freight & Logistics", "International Banking", "Compliance"].map(s => (
                      <li key={s} className="flex items-center gap-2 text-xs text-navy-700/70">
                        <span className="w-1 h-1 rounded-full bg-navy-500 shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tagline bar */}
                <div className="col-span-2 p-4 bg-navy-900 rounded-2xl text-center">
                  <p className="text-white/80 text-sm font-medium italic">&ldquo;Support Today. Grow Tomorrow.&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ───────────────────────────────────── */}
        <div className="bg-brand-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
              {[
                { num: "500+", label: "Clients Served" },
                { num: "50+",  label: "Countries Reached" },
                { num: "95%",  label: "Success Rate" },
                { num: "8+",   label: "Years of Expertise" },
              ].map((s) => (
                <div key={s.label} className="text-center px-4">
                  <div className="font-display font-extrabold text-white text-3xl lg:text-4xl leading-none">{s.num}</div>
                  <div className="text-white/70 text-sm mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── STARTUP SERVICES ──────────────────────────────── */}
        <section id="startup" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <AnimateOnScroll animation="slide-left">
                <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  For Founders
                </div>
                <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl leading-tight mb-6">
                  Your Startup,<br />
                  <span className="text-brand-600">Expertly Launched.</span>
                </h2>
                <p className="text-navy-700/65 text-lg leading-relaxed mb-8">
                  From your first pitch deck to regulatory approvals and market entry — we are the co-pilot every founder needs.
                </p>
                <div className="space-y-3 mb-8">
                  <Link href="/startup-services/pitch-deck"
                    className="flex items-center justify-between p-4 border-2 border-brand-200 bg-brand-50 rounded-xl hover:border-brand-500 hover:bg-brand-100/50 transition-all group">
                    <div>
                      <div className="font-semibold text-navy-900 group-hover:text-brand-700 transition-colors">Pitch Deck Creation</div>
                      <div className="text-sm text-navy-600/55 mt-0.5">Core service — investor-ready presentations</div>
                    </div>
                    <svg className="w-5 h-5 text-brand-500 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/startup-services/business-plan"
                    className="flex items-center justify-between p-4 border-2 border-brand-200 bg-brand-50 rounded-xl hover:border-brand-500 hover:bg-brand-100/50 transition-all group">
                    <div>
                      <div className="font-semibold text-navy-900 group-hover:text-brand-700 transition-colors">Business Plan & Financial Modeling</div>
                      <div className="text-sm text-navy-600/55 mt-0.5">Core service — 5-year financial projections</div>
                    </div>
                    <svg className="w-5 h-5 text-brand-500 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {startupOtherServices.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-navy-50 text-navy-700 text-xs font-medium rounded-full border border-navy-100">
                      {s}
                    </span>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={100}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-brand-100 rounded-3xl" />
                  <div className="relative bg-navy-900 rounded-3xl p-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="text-brand-400 text-xs uppercase tracking-widest font-bold mb-4">What we deliver</div>
                    {[
                      "Investor-grade pitch decks (10–18 slides)",
                      "Complete business plan & financials",
                      "Company incorporation in 7 days",
                      "DPIIT recognition & tax benefits",
                      "Market research reports",
                      "Detailed Project Reports (DPR)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 py-3 border-b border-white/8 last:border-0">
                        <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── EXPORT SERVICES ───────────────────────────────── */}
        <section id="export" className="py-24 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <AnimateOnScroll animation="slide-left" className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full bg-navy-200/40 rounded-3xl" />
                  <div className="relative bg-navy-800 rounded-3xl p-8 overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-500/8 rounded-full translate-y-1/2 -translate-x-1/2" />
                    <div className="text-brand-400 text-xs uppercase tracking-widest font-bold mb-4">What we handle</div>
                    {[
                      "IEC, GST+PAN, AD Code, RCMC registration",
                      "Freight forwarding — sea, air & road",
                      "Customs clearance & documentation",
                      "International banking & forex setup",
                      "Letter of Credit (LC) facilitation",
                      "Export compliance & trade advisory",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 py-3 border-b border-white/8 last:border-0">
                        <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={100} className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-600" />
                  For Exporters
                </div>
                <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl leading-tight mb-6">
                  Go Global.<br />
                  <span className="text-navy-700">With Confidence.</span>
                </h2>
                <p className="text-navy-700/65 text-lg leading-relaxed mb-8">
                  Export is complex — paperwork, logistics, banking, compliance. We cut through it all, so Indian businesses can access international markets without friction.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    { href: "/export-services/documentation",        label: "Documentation Service",             sub: "Core service — IEC, RCMC, AD Code & more" },
                    { href: "/export-services/freight-forwarding",   label: "Freight Forwarding & Logistics",    sub: "Core service — global cargo movement" },
                    { href: "/export-services/international-banking", label: "International Banking Support",     sub: "Core service — forex, LC, remittance" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href}
                      className="flex items-center justify-between p-4 bg-white border-2 border-navy-100 rounded-xl hover:border-navy-400 hover:bg-navy-50 transition-all group">
                      <div>
                        <div className="font-semibold text-navy-900 group-hover:text-navy-700 transition-colors">{l.label}</div>
                        <div className="text-sm text-navy-600/55 mt-0.5">{l.sub}</div>
                      </div>
                      <svg className="w-5 h-5 text-navy-400 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exportOtherServices.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-white text-navy-700 text-xs font-medium rounded-full border border-navy-100">
                      {s}
                    </span>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ─────────────────────────────────── */}
        <section className="py-24 bg-navy-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-white/15">
                What We Offer
              </div>
              <h2 className="font-display font-extrabold text-white text-3xl lg:text-4xl leading-tight">
                Two Specialisations.<br className="hidden sm:block" /> One Partner.
              </h2>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-2 gap-6">

              {/* — Startup Services — */}
              <AnimateOnScroll animation="slide-left">
                <div className="rounded-3xl bg-navy-900 border border-white/8 p-8 h-full flex flex-col overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/8 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  {/* header */}
                  <div className="flex items-center gap-3 mb-7 relative z-10">
                    <div className="w-11 h-11 bg-brand-500 rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-display font-bold text-white text-xl leading-none mb-0.5">Startup Services</div>
                      <div className="text-brand-400 text-xs font-bold uppercase tracking-widest">For Founders</div>
                    </div>
                  </div>

                  {/* core services */}
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3 relative z-10">Core Services</div>
                  <div className="space-y-2.5 mb-7 relative z-10">
                    {startupCoreServices.map((svc) => (
                      <Link key={svc.num} href={svc.href}
                        className="group relative flex items-center gap-4 p-4 bg-white/6 hover:bg-brand-500/15 rounded-2xl border border-white/8 hover:border-brand-500/40 transition-all overflow-hidden">
                        <span className="num-glow-green font-display font-black text-6xl leading-none select-none absolute -right-1 -top-2 pointer-events-none group-hover:[animation:none] group-hover:text-brand-400 transition-colors">
                          {svc.num}
                        </span>
                        <div className="relative z-10 flex-1 min-w-0">
                          <div className="font-semibold text-white text-sm group-hover:text-brand-300 transition-colors">{svc.title}</div>
                          <div className="text-xs text-white/45 mt-0.5 leading-relaxed">{svc.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* we also provide */}
                  <div className="mt-auto relative z-10">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">We Also Provide</div>
                    <div className="flex flex-wrap gap-2">
                      {startupOtherServices.map((s) => (
                        <span key={s} className="px-3 py-1.5 bg-white/8 text-white/65 text-xs font-medium rounded-full border border-white/12 hover:bg-brand-500/20 hover:text-brand-300 hover:border-brand-500/30 transition-all cursor-default">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* — Export Services — */}
              <AnimateOnScroll animation="slide-right" delay={100}>
                <div className="rounded-3xl bg-navy-800 border border-white/8 p-8 h-full flex flex-col overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-500/6 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                  {/* header */}
                  <div className="flex items-center gap-3 mb-7 relative z-10">
                    <div className="w-11 h-11 bg-navy-700 rounded-2xl border border-white/15 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10A15.3 15.3 0 018 12 15.3 15.3 0 0112 2z" strokeWidth={1.5} />
                      </svg>
                    </div>
                    <div>
                      <div className="font-display font-bold text-white text-xl leading-none mb-0.5">Export Services</div>
                      <div className="text-brand-400 text-xs font-bold uppercase tracking-widest">For Exporters</div>
                    </div>
                  </div>

                  {/* core services */}
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3 relative z-10">Core Services</div>
                  <div className="space-y-2.5 mb-7 relative z-10">
                    {exportCoreServices.map((svc) => (
                      <Link key={svc.num} href={svc.href}
                        className="group relative flex items-center gap-4 p-4 bg-white/6 hover:bg-brand-500/12 rounded-2xl border border-white/8 hover:border-brand-500/30 transition-all overflow-hidden">
                        <span className="num-glow-navy font-display font-black text-6xl leading-none select-none absolute -right-1 -top-2 pointer-events-none group-hover:[animation:none] group-hover:text-brand-400 transition-colors">
                          {svc.num}
                        </span>
                        <div className="relative z-10 flex-1 min-w-0">
                          <div className="font-semibold text-white text-sm group-hover:text-brand-300 transition-colors">{svc.title}</div>
                          <div className="text-xs text-white/45 mt-0.5 leading-relaxed">{svc.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* we also provide */}
                  <div className="mt-auto relative z-10">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">We Also Provide</div>
                    <div className="flex flex-wrap gap-2">
                      {exportOtherServices.map((s) => (
                        <span key={s} className="px-3 py-1.5 bg-white/8 text-white/65 text-xs font-medium rounded-full border border-white/12 hover:bg-brand-500/15 hover:text-brand-300 hover:border-brand-500/30 transition-all cursor-default">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ───────────────────────────────────── */}
        <section className="py-24 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl mb-4">How We Work</h2>
              <p className="text-navy-700/60 text-lg">Simple process. Serious results.</p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((step, i) => (
                <AnimateOnScroll key={step.n} delay={i * 120}>
                  <div className="relative bg-white rounded-2xl p-8 border-2 border-navy-100 hover:border-brand-300 hover:shadow-lg transition-all text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-900 mb-6">
                      <span className="font-display font-black text-2xl text-brand-400">{step.n}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy-900 text-2xl mb-3">{step.title}</h3>
                    <p className="text-navy-700/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ─────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="max-w-xl mb-14">
              <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl leading-tight mb-4">
                Why Startup Supports?
              </h2>
              <p className="text-navy-700/60 text-lg">
                We are not a generic consultancy. We are specialists at the intersection of entrepreneurship and international trade.
              </p>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 80}>
                  <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100 hover:border-brand-300 hover:bg-white hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-navy-700/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section id="contact" className="py-24 bg-brand-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <AnimateOnScroll>
              <h2 className="font-display font-extrabold text-white text-4xl lg:text-5xl leading-tight mb-6">
                Ready to begin?
              </h2>
              <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                Whether you are building a startup or scaling exports, we have the expertise to get you there faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@startupsupports.in"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white text-brand-700 font-bold rounded-full hover:bg-brand-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 border-2 border-white/50 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

      </main>

      {/* ── FLOATING DISCOVERY CALL ───────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* ping ring */}
        <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-25" />
        <a
          href="mailto:info@startupsupports.in?subject=Discovery Call Request"
          className="relative flex items-center gap-2.5 px-5 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-full shadow-lg shadow-brand-500/50 hover:shadow-xl hover:shadow-brand-500/40 transition-all hover:-translate-y-0.5"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Free Discovery Call
        </a>
      </div>

      <Footer />
    </>
  );
}
