import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/v2/Navbar";
import Footer from "@/components/v2/Footer";
import AnimateOnScroll from "@/components/v2/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Freight Forwarding & Logistics — Startup Supports",
  description: "End-to-end freight forwarding, logistics, and customs clearance for Indian exporters. Sea, air, and road — we move your cargo globally.",
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
  },
  {
    title: "Air Freight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5c-1.5-1.5-3.5-1.5-5 0L11 6 2.8 6.2l2.4 2.4L8 9l-4 4 4 1 1 4 4-4 .6 2.8 2.4 2.4z" strokeWidth={1.5} strokeLinejoin="round" />
      </svg>
    ),
    desc: "Express and standard air freight for time-sensitive cargo. Door-to-door tracking included.",
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
  },
];

const process = [
  { n: "01", title: "Cargo Assessment", desc: "We assess your cargo type, HS code, weight, dimensions, and destination to identify the best route and mode." },
  { n: "02", title: "Quote & Booking", desc: "Competitive freight quotes across carriers. Once confirmed, we book and coordinate pickup from your facility." },
  { n: "03", title: "Documentation", desc: "We prepare all export documentation — shipping bills, packing lists, certificates of origin, and commercial invoices." },
  { n: "04", title: "Customs Filing", desc: "Our licensed customs brokers file the shipping bill, manage IGST/LUT, and handle port authority correspondence." },
  { n: "05", title: "Transit & Tracking", desc: "Real-time shipment updates from port of origin to destination. We manage exceptions, delays, and transshipments." },
  { n: "06", title: "Proof of Export", desc: "You receive final Bill of Lading, proof of export, and e-BRC for GST refund claims." },
];

export default function FreightForwardingPage() {
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
                <div className="animate-fade-in inline-flex items-center gap-2 bg-navy-100 border border-navy-200 text-navy-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-slow" />
                  Export Services — Core Service
                </div>
                <h1 className="font-display font-extrabold text-navy-900 text-4xl lg:text-5xl leading-none tracking-tight mb-6 animate-fade-in-up">
                  Your Cargo.<br />
                  <span className="text-green-gradient">Expertly Moved.</span>
                </h1>
                <p className="text-navy-700/65 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                  Logistics is not just about moving boxes. It is about moving them on time, at the right cost, with every document in order — so your buyer never has a reason to complain.
                </p>
              </div>

              {/* Right — image */}
              <div className="animate-fade-in hidden lg:block" style={{ animationDelay: "200ms" }}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80"
                    alt="Cargo shipping containers at a port"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    <span className="text-navy-900 text-xs font-bold">Sea · Air · Road Freight</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── MODES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl mb-4">Every Mode. Every Route.</h2>
              <p className="text-navy-700/60 text-lg">Sea, air, or road — we find the most efficient route for your cargo and destination.</p>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {modes.map((mode, i) => (
                <AnimateOnScroll key={mode.title} delay={i * 80}>
                  <div className="p-6 bg-navy-50 rounded-2xl border border-navy-100 hover:border-navy-400 hover:bg-white hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 text-brand-400 flex items-center justify-center mb-4">
                      {mode.icon}
                    </div>
                    <h3 className="font-display font-bold text-navy-900 text-lg mb-2">{mode.title}</h3>
                    <p className="text-navy-700/60 text-sm leading-relaxed">{mode.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll animation="slide-left">
                <h2 className="font-display font-extrabold text-navy-900 text-3xl leading-tight mb-6">
                  One Missed Document.<br />
                  <span className="text-navy-600">Shipment Held. Order Cancelled.</span>
                </h2>
                <p className="text-navy-700/70 leading-relaxed mb-5">
                  Customs authorities reject shipments for missing packing lists, incorrect HS codes, or expired certificates of origin. These are not small errors — they can hold your goods for weeks and cost lakhs in demurrage.
                </p>
                <p className="text-navy-700/70 leading-relaxed">
                  Our customs brokers have handled thousands of shipments. They know what each destination country&apos;s customs looks for, and they file it right the first time.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={100}>
                <div className="bg-navy-800 rounded-3xl p-8 text-white">
                  <h3 className="font-display font-bold text-2xl mb-6">What we cover</h3>
                  <div className="space-y-3">
                    {[
                      "Shipping Bill filing (manual & EDI)",
                      "Pre-shipment inspection coordination",
                      "Certificate of Origin (CO) assistance",
                      "Packing list & commercial invoice prep",
                      "IGST refund / LUT management",
                      "Port handling & transport coordination",
                      "Marine insurance facilitation",
                      "Post-shipment documentation (BL, AWB, e-BRC)",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
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

        {/* ── PROCESS + CTA ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="font-display font-extrabold text-navy-900 text-3xl">From Pickup to Proof of Export</h2>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {process.map((step, i) => (
                  <AnimateOnScroll key={step.n} delay={i * 70}>
                    <div className="p-5 bg-navy-50 rounded-2xl border border-navy-100 hover:border-navy-400 transition-colors">
                      <div className="font-display font-black text-4xl text-navy-200 mb-2 leading-none">{step.n}</div>
                      <h3 className="font-display font-bold text-navy-900 text-base mb-1">{step.title}</h3>
                      <p className="text-navy-700/55 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll delay={200}>
                <div className="bg-navy-900 rounded-3xl p-8 text-white sticky top-24">
                  <div className="text-brand-400 text-xs uppercase tracking-widest font-bold mb-6">Move your cargo</div>
                  <h3 className="font-display font-bold text-2xl mb-3">Get a freight quote.</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    Share your cargo details and destination — we will respond with a competitive quote within 24 hours.
                  </p>
                  <a
                    href="mailto:info@startupsupports.in?subject=Freight Forwarding Enquiry"
                    className="w-full flex items-center justify-center py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 mb-3"
                  >
                    Request a Quote
                  </a>
                  <Link
                    href="/v2"
                    className="w-full flex items-center justify-center py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/40 rounded-full text-sm transition-colors"
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
