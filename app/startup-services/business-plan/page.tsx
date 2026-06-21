import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Business Plan & Financial Modeling — Startup Supports",
  description: "Comprehensive business plans and financial models for Indian startups. Bank-ready, investor-ready, and built for execution.",
};

const process = [
  {
    n: "01",
    title: "Business Analysis",
    desc: "We study your market, unit economics, cost structure, and growth drivers — building a factual foundation for every projection that follows.",
  },
  {
    n: "02",
    title: "Strategic Planning",
    desc: "We define your go-to-market strategy, revenue streams, pricing model, and key milestones for the next 5 years.",
  },
  {
    n: "03",
    title: "Financial Modeling",
    desc: "Dynamic Excel models with P&L, balance sheet, cash flow, sensitivity analysis, and scenario planning (base, bull, bear).",
  },
  {
    n: "04",
    title: "Document Drafting",
    desc: "A polished, professionally written business plan document — structured for banks, VCs, and government schemes like Mudra, SIDBI.",
  },
  {
    n: "05",
    title: "Review & Hand-off",
    desc: "Two rounds of revisions, a model walk-through call, and an executive summary ready for any audience.",
  },
];

const deliverables = [
  "Comprehensive 30–50 page business plan",
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

export default function BusinessPlanPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden border-b border-navy-100 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">

              {/* Left — text */}
              <div>
                <div className="animate-fade-in inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-slow" />
                  Startup Services — Core Service
                </div>
                <h1 className="font-display font-extrabold text-navy-900 text-4xl lg:text-5xl leading-none tracking-tight mb-6 animate-fade-in-up">
                  Blueprint Your<br />
                  <span className="text-green-gradient">Business. Model</span><br />
                  Your Growth.
                </h1>
                <p className="text-navy-700/65 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                  A business plan is not a formality — it is the clearest test of whether you truly understand your own business. We help you build one that passes that test.
                </p>
              </div>

              {/* Right — image */}
              <div className="animate-fade-in hidden lg:block" style={{ animationDelay: "200ms" }}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80"
                    alt="Financial charts and business planning documents"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    <span className="text-navy-900 text-xs font-bold">5-Year Financial Models</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll animation="slide-left">
                <h2 className="font-display font-extrabold text-navy-900 text-3xl leading-tight mb-6">
                  Numbers Are Not Enough.<br />
                  <span className="text-brand-600">You Need a Story Behind Them.</span>
                </h2>
                <p className="text-navy-700/70 leading-relaxed mb-5">
                  Banks want repayment confidence. Investors want growth potential. Government bodies want compliance. Every audience for your business plan has a different question — and your plan needs to answer all of them.
                </p>
                <p className="text-navy-700/70 leading-relaxed">
                  We build business plans that work — for Mudra loan applications, angel rounds, Series A decks, or SIDBI submissions. One rigorous document that speaks every language.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={100}>
                <div className="space-y-4">
                  {[
                    { label: "For Banks & NBFCs", desc: "Structured for credit assessment — DSCR, collateral analysis, repayment schedule." },
                    { label: "For Angel Investors", desc: "Highlights traction, team, and exit potential with investor-first framing." },
                    { label: "For Government Schemes", desc: "Compatible with Mudra, SIDBI, Startup India, and state-level grant formats." },
                    { label: "For Your Own Clarity", desc: "Forces you to think through assumptions you have been avoiding." },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 p-5 bg-navy-50 rounded-2xl border border-navy-100 hover:border-brand-300 transition-colors">
                      <div className="w-2 bg-brand-500 rounded-full shrink-0 self-stretch" />
                      <div>
                        <div className="font-display font-bold text-navy-900 mb-1">{item.label}</div>
                        <div className="text-navy-700/60 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl mb-4">Our Process</h2>
              <p className="text-navy-700/60 text-lg">Rigorous research. Honest numbers. Delivered in 10–15 business days.</p>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-5 gap-4">
              {process.map((step, i) => (
                <AnimateOnScroll key={step.n} delay={i * 80}>
                  <div className="text-center bg-white rounded-2xl p-5 border border-navy-100 hover:border-brand-300 hover:shadow-md transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-4">
                      <span className="font-display font-black text-brand-400 text-lg">{step.n}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy-900 text-base mb-2">{step.title}</h3>
                    <p className="text-navy-700/55 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES + CTA ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateOnScroll>
                <h2 className="font-display font-extrabold text-navy-900 text-3xl mb-4">What You Get</h2>
                <p className="text-navy-700/60 mb-8">A complete, credible, presentation-ready business document backed by real financials.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-2.5 p-3 bg-brand-50 rounded-xl border border-brand-100">
                      <svg className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-navy-800">{d}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="bg-navy-900 rounded-3xl p-8 text-white sticky top-24">
                  <div className="text-brand-400 text-xs uppercase tracking-widest font-bold mb-6">Start today</div>
                  <h3 className="font-display font-bold text-3xl mb-3">Get your business plan.</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    Free 30-minute discovery call to scope your requirements and discuss the right financial model for your stage.
                  </p>
                  <a
                    href="mailto:info@startupsupports.in?subject=Business Plan Enquiry"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 mb-3"
                  >
                    Start Your Business Plan
                  </a>
                  <Link
                    href="/"
                    className="w-full flex items-center justify-center gap-2 py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/40 rounded-full text-sm transition-colors"
                  >
                    ← Back to All Services
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
