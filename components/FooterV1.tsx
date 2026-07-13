import Link from "next/link";
import Image from "next/image";

const startup = [
  { label: "Pitch Deck Creation", href: "/startup-services/pitch-deck" },
  { label: "Business Plan & Financial Modeling", href: "/startup-services/business-plan" },
  { label: "Company Incorporation", href: "/#startup" },
  { label: "DPIIT Certificate", href: "/#startup" },
  { label: "Market Research", href: "/#startup" },
];

const exports = [
  { label: "Documentation Service", href: "/export-services/documentation" },
  { label: "Freight Forwarding & Logistics", href: "/export-services/freight-forwarding" },
  { label: "International Banking Support", href: "/export-services/international-banking" },
  { label: "Export Consultancy", href: "/#export" },
  { label: "Trade Finance Advisory", href: "/#export" },
];

export default function FooterV1() {
  return (
    <footer style={{ background: "#F4F2ED", borderTop: "1px solid #DDDAD0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image src="/logo.png" alt="Startup Supports" width={140} height={44} className="h-9 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#9A9A9F" }}>
              India&apos;s trusted partner for startup growth and global trade excellence.
            </p>
            <p
              className="text-xs italic tracking-wide"
              style={{ color: "#DDDAD0", fontFamily: "var(--font-instrument)" }}
            >
              &ldquo;Support Today. Grow Tomorrow.&rdquo;
            </p>
          </div>

          {/* Startup */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ color: "#0A0A0B", fontFamily: "var(--font-bricolage)" }}
            >
              Startup Services
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "#9A9A9F" }}>
              {startup.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-brand-500 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ color: "#0A0A0B", fontFamily: "var(--font-bricolage)" }}
            >
              Export Services
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "#9A9A9F" }}>
              {exports.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-brand-500 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ color: "#0A0A0B", fontFamily: "var(--font-bricolage)" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "#9A9A9F" }}>
              <li>
                <a href="mailto:info@startupsupports.in" className="hover:text-brand-500 transition-colors flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@startupsupports.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                India
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid #DDDAD0" }}
        >
          <p className="text-xs tracking-widest uppercase" style={{ color: "#DDDAD0" }}>
            © {new Date().getFullYear()} Startup Supports. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-widest uppercase" style={{ color: "#DDDAD0" }}>
            <Link href="#" className="hover:text-ink-3 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-ink-3 transition-colors">Terms</Link>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
