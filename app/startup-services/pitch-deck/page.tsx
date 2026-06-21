import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Pitch Deck Creation — Startup Supports",
  description: "Investor-ready pitch decks crafted by experts. We help Indian startups tell compelling stories that secure funding.",
};

const process = [
  {
    n: "01",
    title: "Discovery Call",
    desc: "We deep-dive into your business model, target market, traction, team, and funding ask. This 60-minute session shapes everything that follows.",
  },
  {
    n: "02",
    title: "Research & Narrative",
    desc: "Our team researches your industry, competitive landscape, and investor expectations to craft a story arc that resonates with your ideal investor.",
  },
  {
    n: "03",
    title: "Design & Build",
    desc: "Slides are designed to communicate, not just look good — clear data visualizations, compelling visuals, and a logical flow from problem to ask.",
  },
  {
    n: "04",
    title: "Review & Refine",
    desc: "You get two rounds of revisions. We push back where needed and sharpen every slide until it earns its place in the deck.",
  },
  {
    n: "05",
    title: "Final Delivery",
    desc: "You receive editable PowerPoint + PDF exports, a speaker notes guide, and a one-page summary for warm intros.",
  },
];

const deliverables = [
  "10–18 professionally designed slides",
  "Problem / Solution / Market / Business Model / Traction / Team / Ask structure",
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
  "Founders tell the story they want to tell, not the story investors want to hear.",
  "Generic templates signal a lack of thought and preparation.",
  "Poor data presentation hides real traction behind vague claims.",
];

export default function PitchDeckPage() {
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
                  Pitch Decks<br />
                  <span className="text-green-gradient">That Open Doors.</span>
                </h1>
                <p className="text-navy-700/65 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                  Investors see hundreds of decks a month. Yours needs to stop them in their tracks — with a story so clear, so compelling, that the next step writes itself.
                </p>
              </div>

              {/* Right — image */}
              <div className="animate-fade-in hidden lg:block" style={{ animationDelay: "200ms" }}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80"
                    alt="Team presenting a pitch deck to investors"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    <span className="text-navy-900 text-xs font-bold">Investor-Ready Decks</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll animation="slide-left">
                <h2 className="font-display font-extrabold text-navy-900 text-3xl leading-tight mb-6">
                  Why Most Decks<br />
                  <span className="text-brand-600">Never Get a Second Look</span>
                </h2>
                <p className="text-navy-700/70 leading-relaxed mb-8">
                  It is not your idea. It is not your team. It is the presentation. Investors decide in 90 seconds whether a deck deserves a deeper read. If your story is not immediately clear, you have already lost.
                </p>
                <div className="space-y-3">
                  {problems.map((p) => (
                    <div key={p} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                      <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-sm text-red-800/80">{p}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={100}>
                <div className="bg-brand-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h3 className="font-display font-bold text-2xl mb-3">The Startup Supports Difference</h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    We do not make pretty slides. We build persuasion engines — structured around how investors actually think, designed to answer their questions before they ask them.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Narrative-first approach",
                      "Investor-tested slide structure",
                      "Real data, real traction emphasis",
                      "Industry-specific tailoring",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/85 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
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
              <p className="text-navy-700/60 text-lg">From blank page to investor-ready in 7–10 business days.</p>
            </AnimateOnScroll>
            <div className="space-y-4 max-w-3xl mx-auto">
              {process.map((step, i) => (
                <AnimateOnScroll key={step.n} delay={i * 80}>
                  <div className="flex gap-5 bg-white rounded-2xl p-6 border border-navy-100 hover:border-brand-300 hover:shadow-md transition-all">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center">
                      <span className="font-display font-black text-white text-sm">{step.n}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-navy-900 text-lg mb-1">{step.title}</h3>
                      <p className="text-navy-700/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateOnScroll>
                <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl leading-tight mb-4">
                  What You Get
                </h2>
                <p className="text-navy-700/60 text-lg mb-8">
                  Everything you need to walk into any investor meeting with absolute confidence.
                </p>
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
                  <div className="text-brand-400 text-xs uppercase tracking-widest font-bold mb-6">Ready to start?</div>
                  <h3 className="font-display font-bold text-3xl mb-3">Let&apos;s build your deck.</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    Reach out today and get a free 30-minute consultation on your pitch narrative.
                  </p>
                  <a
                    href="mailto:info@startupsupports.in?subject=Pitch Deck Enquiry"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 mb-3"
                  >
                    Start Your Pitch Deck
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
