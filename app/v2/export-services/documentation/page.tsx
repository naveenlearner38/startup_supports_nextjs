import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/v2/Navbar";
import Footer from "@/components/v2/Footer";
import AnimateOnScroll from "@/components/v2/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Export Documentation Service — Startup Supports",
  description: "IEC, GST+PAN, AD Code, RCMC — all your export licences and registrations handled end-to-end by experts.",
};

const documents = [
  {
    code: "IEC",
    full: "Importer Exporter Code",
    desc: "Mandatory 10-digit code issued by DGFT. Required for every international trade transaction from India.",
  },
  {
    code: "GST + PAN",
    full: "Tax Registrations",
    desc: "GST registration for export rebates (LUT/IGST) and PAN linkage for all trade documentation.",
  },
  {
    code: "AD Code",
    full: "Authorised Dealer Code",
    desc: "Bank-assigned code registered at the port of export. Required for customs filing and foreign remittance.",
  },
  {
    code: "RCMC",
    full: "Registration Cum Membership Certificate",
    desc: "Issued by Export Promotion Councils. Unlocks MEIS/RoDTEP benefits and trade facilitation schemes.",
  },
];

const process = [
  {
    n: "01",
    title: "Requirement Assessment",
    desc: "We map your business type, products, HS codes, and export destinations to identify every registration you need.",
  },
  {
    n: "02",
    title: "Document Checklist",
    desc: "You receive a precise checklist of documents to gather. We handle the filing — you just supply the source documents.",
  },
  {
    n: "03",
    title: "Filing & Submission",
    desc: "Our experts file applications with DGFT, CBIC, your bank, and the relevant Export Promotion Council on your behalf.",
  },
  {
    n: "04",
    title: "Tracking & Follow-up",
    desc: "We actively track every application and follow up with authorities to prevent delays and rejections.",
  },
  {
    n: "05",
    title: "Certificate Delivery",
    desc: "You receive certified digital copies of all registrations, properly organised and ready for use in trade transactions.",
  },
];

export default function DocumentationPage() {
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
                  All Your Export<br />
                  <span className="text-green-gradient">Documents.</span><br />
                  Done Right.
                </h1>
                <p className="text-navy-700/65 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                  IEC. GST+PAN. AD Code. RCMC. Four registrations that unlock India&apos;s entire export ecosystem — and we handle every single one for you.
                </p>
              </div>

              {/* Right — image */}
              <div className="animate-fade-in hidden lg:block" style={{ animationDelay: "200ms" }}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80"
                    alt="Export documentation and compliance paperwork"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-brand-500" />
                    <span className="text-navy-900 text-xs font-bold">IEC · RCMC · AD Code · GST</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── WHAT IS THIS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-extrabold text-navy-900 text-3xl lg:text-4xl mb-4">
                The Four Registrations Every Exporter Needs
              </h2>
              <p className="text-navy-700/60 text-lg">
                Missing even one of these blocks your shipment, payment, or benefits. We make sure you have all of them — correctly registered, on time.
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((doc, i) => (
                <AnimateOnScroll key={doc.code} delay={i * 80}>
                  <div className="flex gap-5 p-6 bg-navy-50 rounded-2xl border border-navy-100 hover:border-navy-400 hover:shadow-lg transition-all">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-navy-800 flex items-center justify-center">
                        <span className="font-display font-black text-brand-400 text-xs text-center leading-tight px-1">{doc.code}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy-900 text-lg">{doc.full}</div>
                      <div className="text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">{doc.code}</div>
                      <p className="text-navy-700/60 text-sm leading-relaxed">{doc.desc}</p>
                    </div>
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
                  The Cost of Getting<br />
                  <span className="text-navy-600">This Wrong</span>
                </h2>
                <p className="text-navy-700/70 leading-relaxed mb-5">
                  Incorrect or incomplete export documentation leads to shipment holds at customs, rejected bank transactions, forfeited government benefits, and costly delays that damage client relationships.
                </p>
                <p className="text-navy-700/70 leading-relaxed mb-8">
                  Most first-time exporters get at least one of these registrations wrong. We have seen it hundreds of times. That is exactly why we exist.
                </p>
                <div className="p-5 bg-navy-800 rounded-2xl text-white">
                  <div className="text-brand-400 text-xs uppercase tracking-widest font-bold mb-2">Our guarantee</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We file accurately or we refile at no charge. Your registrations will be approved, or we make it right.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={100}>
                <div className="bg-white rounded-3xl p-8 border-2 border-navy-100 shadow-lg">
                  <h3 className="font-display font-bold text-navy-900 text-2xl mb-6">Typical Timeline</h3>
                  <div className="space-y-4">
                    {[
                      { doc: "IEC", time: "3–5 working days", color: "bg-brand-500" },
                      { doc: "GST Registration", time: "7–10 working days", color: "bg-brand-600" },
                      { doc: "AD Code Registration", time: "2–3 working days", color: "bg-navy-700" },
                      { doc: "RCMC", time: "7–15 working days", color: "bg-navy-800" },
                    ].map((item) => (
                      <div key={item.doc} className="flex items-center gap-4">
                        <div className={`w-2 h-10 rounded-full ${item.color} shrink-0`} />
                        <div className="flex-1">
                          <div className="font-semibold text-navy-900 text-sm">{item.doc}</div>
                          <div className="text-navy-600/50 text-xs">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-navy-600/50 text-xs mt-4">* Timelines subject to authority processing speed. We expedite wherever possible.</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── PROCESS + CTA ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="font-display font-extrabold text-navy-900 text-3xl mb-4">How We Do It</h2>
              <p className="text-navy-700/60 text-lg">You supply the documents. We handle everything else.</p>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-4">
                {process.map((step, i) => (
                  <AnimateOnScroll key={step.n} delay={i * 70}>
                    <div className="flex gap-5 bg-navy-50 rounded-2xl p-5 border border-navy-100 hover:border-navy-300 transition-colors">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center">
                        <span className="font-display font-black text-brand-400 text-xs">{step.n}</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-navy-900 mb-1">{step.title}</h3>
                        <p className="text-navy-700/60 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll delay={200}>
                <div className="bg-navy-900 rounded-3xl p-8 text-white sticky top-24">
                  <div className="text-brand-400 text-xs uppercase tracking-widest font-bold mb-6">Get started</div>
                  <h3 className="font-display font-bold text-2xl mb-3">Export-ready in weeks.</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    Tell us where you want to export, and we will map every registration you need and file them for you.
                  </p>
                  <a
                    href="mailto:info@startupsupports.com?subject=Export Documentation Enquiry"
                    className="w-full flex items-center justify-center py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 mb-3"
                  >
                    Start Your Registration
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
