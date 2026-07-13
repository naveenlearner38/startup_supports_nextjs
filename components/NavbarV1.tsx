"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const startupLinks = [
  { label: "Pitch Deck Creation", href: "/startup-services/pitch-deck", main: true },
  { label: "Business Plan & Financial Modeling", href: "/startup-services/business-plan", main: true },
  { label: "Company Incorporation", href: "/#startup", main: false },
  { label: "DPIIT Certificate", href: "/#startup", main: false },
  { label: "DPR / Market Research", href: "/#startup", main: false },
];

const exportLinks = [
  { label: "Documentation Service", href: "/export-services/documentation", main: true },
  { label: "Freight Forwarding & Logistics", href: "/export-services/freight-forwarding", main: true },
  { label: "International Banking Support", href: "/export-services/international-banking", main: true },
  { label: "Export Consultancy", href: "/#export", main: false },
  { label: "Trade Finance Advisory", href: "/#export", main: false },
];

function Dropdown({ links }: { links: typeof startupLinks }) {
  const mains = links.filter((l) => l.main);
  const others = links.filter((l) => !l.main);
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl py-2 z-50"
      style={{
        background: "#fff",
        border: "1px solid #E8E5DC",
        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        opacity: 0,
        pointerEvents: "none",
        transform: "translateX(-50%) translateY(-4px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
    >
      <div className="px-2">
        {mains.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-ink-2 hover:bg-brand-50 hover:text-brand-700 transition-colors"
            style={{ color: "#2A2A2E", fontFamily: "var(--font-geist-body)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
            {l.label}
          </Link>
        ))}
      </div>
      {others.length > 0 && (
        <>
          <div className="mx-3 border-t border-line-soft my-1" />
          <div className="px-2">
            <p className="px-3 py-1 text-[10px] text-ink-muted uppercase tracking-widest">Also available</p>
            {others.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block px-3 py-2 text-sm rounded-lg transition-colors"
                style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body)" }}
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

function NavGroup({ label, links }: { label: string; links: typeof startupLinks }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition-colors"
        style={{ color: "#2A2A2E", fontFamily: "var(--font-geist-body)" }}
      >
        {label}
        <svg
          className="w-3.5 h-3.5 opacity-50"
          style={{ transform: open ? "rotate(180deg)" : undefined, transition: "transform 0.2s" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          paddingTop: "0.75rem",
          width: "18rem",
          zIndex: 50,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: `translateX(-50%) translateY(${open ? "0" : "-4px"})`,
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        <div
          style={{
            borderRadius: "1rem",
            padding: "0.5rem 0",
            background: "#fff",
            border: "1px solid #E8E5DC",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
        >
          <div className="px-2">
            {links.filter((l) => l.main).map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm hover:bg-brand-50 transition-colors"
                style={{ color: "#2A2A2E", fontFamily: "var(--font-geist-body)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ margin: "0.25rem 0.75rem", borderTop: "1px solid #E8E5DC" }} />
          <div className="px-2">
            <p className="px-3 py-1 text-[10px] tracking-widest uppercase" style={{ color: "#9A9A9F" }}>Also available</p>
            {links.filter((l) => !l.main).map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block px-3 py-2 text-sm rounded-lg transition-colors hover:bg-linen"
                style={{ color: "#9A9A9F", fontFamily: "var(--font-geist-body)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NavbarV1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"startup" | "export" | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 64,
        background: scrolled ? "rgba(244,242,237,0.92)" : "rgba(244,242,237,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "#DDDAD0" : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Startup Supports"
            width={140}
            height={44}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-sm rounded-lg transition-colors hover:bg-linen"
            style={{ color: "#2A2A2E" }}
          >
            Home
          </Link>
          <NavGroup label="Startup Services" links={startupLinks} />
          <NavGroup label="Export Services" links={exportLinks} />
          <Link
            href="/#contact"
            className="ml-3 px-5 py-2.5 bg-ink text-white text-sm font-semibold rounded-full transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-ink/20"
            style={{ color: "#fff", background: "#0A0A0B" }}
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#0A0A0B" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t pb-4 shadow-xl"
          style={{ background: "#F4F2ED", borderColor: "#DDDAD0" }}
        >
          <div className="max-w-7xl mx-auto px-4 pt-3 space-y-0.5">
            <Link href="/" className="block py-2.5 px-3 text-sm rounded-lg" style={{ color: "#2A2A2E" }} onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            {[
              { key: "startup" as const, label: "Startup Services", links: startupLinks },
              { key: "export" as const, label: "Export Services", links: exportLinks },
            ].map(({ key, label, links }) => (
              <div key={key}>
                <button
                  onClick={() => setMobileSection(mobileSection === key ? null : key)}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-sm rounded-lg"
                  style={{ color: "#2A2A2E" }}
                >
                  {label}
                  <svg className="w-4 h-4" style={{ transform: mobileSection === key ? "rotate(180deg)" : undefined }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSection === key && (
                  <div className="pl-4 space-y-0.5">
                    {links.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        className="block py-2 px-3 text-sm rounded-lg"
                        style={{ color: l.main ? "#22c55e" : "#9A9A9F" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="/#contact"
                className="block text-center py-3 text-sm font-semibold rounded-full"
                style={{ background: "#0A0A0B", color: "#fff" }}
                onClick={() => setMobileOpen(false)}
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
