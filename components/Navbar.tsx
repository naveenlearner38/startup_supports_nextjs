"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const startupLinks = [
  { label: "Pitch Deck Creation", href: "/startup-services/pitch-deck", main: true },
  { label: "Business Plan & Financial Modeling", href: "/startup-services/business-plan", main: true },
  { label: "Company Incorporation", href: "/#startup", main: false },
  { label: "DPIIT Certificate", href: "/#startup", main: false },
  { label: "DPR", href: "/#startup", main: false },
  { label: "Market Research", href: "/#startup", main: false },
];

const exportLinks = [
  { label: "Documentation Service", href: "/export-services/documentation", main: true },
  { label: "Freight Forwarding & Logistics", href: "/export-services/freight-forwarding", main: true },
  { label: "International Banking Support", href: "/export-services/international-banking", main: true },
  { label: "Export Consultancy", href: "/#export", main: false },
  { label: "Export Compliance", href: "/#export", main: false },
  { label: "Trade Finance Consultancy", href: "/#export", main: false },
];

function ChevronIcon() {
  return (
    <svg className="w-3.5 h-3.5 ml-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DropdownMenu({ links }: { links: typeof startupLinks }) {
  const mains = links.filter((l) => l.main);
  const others = links.filter((l) => !l.main);
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl shadow-navy-900/10 border border-navy-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
      <div className="px-3 pt-1 pb-2">
        {mains.map((l) => (
          <Link
            key={l.href + l.label}
            href={l.href}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-navy-800 hover:bg-brand-50 hover:text-brand-700 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            {l.label}
          </Link>
        ))}
      </div>
      {others.length > 0 && (
        <>
          <div className="mx-3 border-t border-navy-100" />
          <div className="px-3 pt-2 pb-1">
            <p className="px-3 text-[10px] text-navy-600/40 uppercase tracking-widest font-semibold mb-1">Also available</p>
            {others.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className="block px-3 py-2 text-sm text-navy-600/60 hover:text-navy-800 hover:bg-navy-50 rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSection, setMobileSection] = useState<"startup" | "export" | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md shadow-navy-900/8 border-b border-navy-100"
          : "bg-white/90 backdrop-blur-md border-b border-navy-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Startup Supports"
              width={150}
              height={48}
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors">
                Startup Services <ChevronIcon />
              </button>
              <DropdownMenu links={startupLinks} />
            </div>

            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors">
                Export Services <ChevronIcon />
              </button>
              <DropdownMenu links={exportLinks} />
            </div>

            <Link
              href="#contact"
              className="ml-3 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-px"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-navy-700 p-2 rounded-lg hover:bg-navy-50 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-navy-100 pb-4 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 pt-3 space-y-1">
            <Link href="/" className="block py-2.5 px-3 text-navy-700 text-sm font-medium rounded-lg hover:bg-navy-50" onClick={() => setOpen(false)}>
              Home
            </Link>

            <button
              onClick={() => setMobileSection(mobileSection === "startup" ? null : "startup")}
              className="w-full flex items-center justify-between py-2.5 px-3 text-navy-700 text-sm font-medium rounded-lg hover:bg-navy-50"
            >
              Startup Services
              <svg className={`w-4 h-4 transition-transform ${mobileSection === "startup" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileSection === "startup" && (
              <div className="pl-4 space-y-0.5">
                {startupLinks.map((l) => (
                  <Link key={l.href + l.label} href={l.href}
                    className={`block py-2 px-3 text-sm rounded-lg transition-colors ${l.main ? "text-brand-600 font-medium hover:bg-brand-50" : "text-navy-600/60 hover:text-navy-800"}`}
                    onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileSection(mobileSection === "export" ? null : "export")}
              className="w-full flex items-center justify-between py-2.5 px-3 text-navy-700 text-sm font-medium rounded-lg hover:bg-navy-50"
            >
              Export Services
              <svg className={`w-4 h-4 transition-transform ${mobileSection === "export" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileSection === "export" && (
              <div className="pl-4 space-y-0.5">
                {exportLinks.map((l) => (
                  <Link key={l.href + l.label} href={l.href}
                    className={`block py-2 px-3 text-sm rounded-lg transition-colors ${l.main ? "text-brand-600 font-medium hover:bg-brand-50" : "text-navy-600/60 hover:text-navy-800"}`}
                    onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="pt-2">
              <Link href="#contact" className="block text-center py-3 bg-brand-500 text-white text-sm font-semibold rounded-full hover:bg-brand-600 transition-colors" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
