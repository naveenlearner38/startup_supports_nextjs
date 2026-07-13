import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/v2/Navbar";
import Footer from "@/components/v2/Footer";
import AnimateOnScroll from "@/components/v2/AnimateOnScroll";

export const metadata: Metadata = {
  title: "International Banking Support — Startup Supports",
  description: "Forex accounts, Letters of Credit, and cross-border payment infrastructure for Indian exporters. Seamless global banking setup.",
};

const services = [
  {
    title: "Export Current Account",
    desc: "Setup of a dedicated export current account linked to ECGC and RBI-compliant foreign remittance facilities.",
  },
  {
    title: "Letter of Credit (LC)",
    desc: "End-to-end LC facilitation — advising, confirmation, discounting, and document presentation to the negotiating bank.",
  },
  {
    title: "Forex Management",
    desc: "Forward contracts, hedging guidance, and exchange rate advisory to protect your export realisation.",
  },
  {
    title: "e-BRC & FIRA",
    desc: "Foreign Inward Remittance Account and e-BRC filing for GST refunds and government incentive claims.",
  },
  {
    title: "EEFC Account Setup",
    desc: "Exchange Earners&apos; Foreign Currency account setup — retain your export proceeds in foreign currency for future payables.",
  },
  {
    title: "Bank Guarantee",
    desc: "Assistance with export advance payment guarantees, bid bonds, and performance guarantees for international contracts.",
  },
];

const process = [
  {
    n: "01",
    title: "Banking Needs Assessment",
    desc: "We analyse your export markets, payment terms, and currency risks to map the banking products you actually need.",
  },
  {
    n: "02",
    title: "Bank Coordination",
    desc: "We liaise with your existing bank (or recommend the right one) to set up export accounts, EEFC, and RBI reporting.",
  },
  {
    n: "03",
    title: "LC & Payment Structure",
    desc: "For buyers wanting Letters of Credit, we structure the LC terms, advise on documentation, and coordinate with the LC bank.",
  },
  {
    n: "04",
    title: "Document Presentation",
    desc: "We prepare and present all LC-compliant documents — ensuring zero discrepancies before submission to the negotiating bank.",
  },
  {
    n: "05",
    title: "Realisation & Compliance",
    desc: "Post-shipment — we track payment realisation, file e-BRC, and ensure RBI FEMA compliance for every transaction.",
  },
];

export default function InternationalBankingPage() {
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
                  Seamless Global<br />
                  <span className="text-green-gradient">Payments for</span><br />
                  Indian Exporters.
                </h1>
                <p className="text-navy-700/65 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                  International banking is where many export deals fall apart. Wrong LC terms, missed e-BRC filings, or forex exposure can wipe out your margin. We make sure that does not happen.
                </p>
              </div>

              {/* Right — image */}
              <div className="animate-fade-in hidden lg:block" style={{ animationDelay: "200ms" }}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=900&q=80"
                    alt="International banking and forex transactions"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    <span className="text-navy-900 text-xs font-bold">LC · Forex · e-BRC · FEMA</span>
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
                  Why Export Banking<br />
                  <span className="text-brand-600">Is More Complex Than You Think</span>
                </h2>
                <p className="text-navy-700/70 leading-relaxed mb-5">
                  Receiving an international payment is not as simple as sharing your IBAN. FEMA compliance, RBI reporting, repatriation timelines, LC discrepancies, and forex conversion timing all affect how much you actually keep.
                </p>
                <p className="text-navy-700/70 leading-relaxed mb-8">
                  A single discrepancy in an LC document presentation can freeze payment for months. We have resolved hundreds of such cases — and prevented thousands more.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { stat: "₹0", desc: "Discrepancy losses when we handle your LC" },
                    { stat: "100%", desc: "FEMA compliance on every transaction" },
                    { stat: "48hr", desc: "e-BRC filing after remittance receipt" },
                    { stat: "15+", desc: "Banks we actively work with" },
                  ].map((item) => (
                    <div key={item.desc} className="p-4 bg-navy-50 rounded-2xl border border-navy-100">
                      <div className="font-display font-extrabold text-navy-900 text-2xl">{item.stat}</div>
                      <div className="text-navy-700/60 text-xs mt-1 leading-tight">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={100}>
                <div className="space-y-4">
                  {services.map((svc, i) => (
                    <div key={svc.title} className="flex gap-4 p-5 bg-navy-50 rounded-2xl border border-navy-100 hover:border-brand-300 hover:shadow-md transition-all">
                      <div className="w-8 h-8 rounded-xl bg-navy-800 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-brand-400 text-xs font-black font-display">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <div className="font-display font-bold text-navy-900 mb-1">{svc.title}</div>
                        <div className="text-navy-700/60 text-sm leading-relaxed">{svc.desc}</div>
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
              <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl mb-4">How We Work</h2>
              <p className="text-navy-700/60 text-lg">From account setup to realisation — we stay with you through every transaction.</p>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-4">
                {process.map((step, i) => (
                  <AnimateOnScroll key={step.n} delay={i * 80}>
                    <div className="flex gap-5 bg-white rounded-2xl p-6 border border-navy-100 hover:border-navy-300 hover:shadow-sm transition-all">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
                        <span className="font-display font-black text-brand-400 text-sm">{step.n}</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-navy-900 text-lg mb-1">{step.title}</h3>
                        <p className="text-navy-700/60 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll delay={200}>
                <div className="bg-navy-900 rounded-3xl p-8 text-white sticky top-24">
                  <div className="text-brand-400 text-xs uppercase tracking-widest font-bold mb-6">Get banking-ready</div>
                  <h3 className="font-display font-bold text-2xl mb-3">Protect your export proceeds.</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    Book a consultation and we will audit your current banking setup and identify every risk and opportunity.
                  </p>
                  <a
                    href="mailto:info@startupsupports.in?subject=International Banking Enquiry"
                    className="w-full flex items-center justify-center py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 mb-3"
                  >
                    Book a Consultation
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
