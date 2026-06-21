import Link from "next/link";
import Image from "next/image";

const startup = [
  { label: "Pitch Deck Creation", href: "/startup-services/pitch-deck" },
  { label: "Business Plan & Financial Modeling", href: "/startup-services/business-plan" },
  { label: "Company Incorporation", href: "/#startup" },
  { label: "DPIIT Certificate", href: "/#startup" },
  { label: "DPR", href: "/#startup" },
  { label: "Market Research", href: "/#startup" },
];

const exports = [
  { label: "Documentation Service", href: "/export-services/documentation" },
  { label: "Freight Forwarding & Logistics", href: "/export-services/freight-forwarding" },
  { label: "International Banking Support", href: "/export-services/international-banking" },
  { label: "Export Consultancy", href: "/#export" },
  { label: "Export Compliance", href: "/#export" },
  { label: "Trade Finance Consultancy", href: "/#export" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span className="inline-flex bg-white rounded-xl px-2 py-1 mb-5">
              <Image src="/logo.png" alt="Startup Supports" width={140} height={44} className="h-10 w-auto object-contain" />
            </span>
            <p className="text-sm leading-relaxed text-white/40 mb-4">
              India&apos;s trusted partner for startup growth and global trade excellence.
            </p>
            <p className="text-xs text-white/25 italic tracking-wide">"Support Today. Grow Tomorrow."</p>
          </div>

          {/* Startup services */}
          <div>
            <h4 className="font-display text-white text-xs uppercase tracking-widest font-semibold mb-5">Startup Services</h4>
            <ul className="space-y-2.5 text-sm">
              {startup.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="hover:text-brand-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export services */}
          <div>
            <h4 className="font-display text-white text-xs uppercase tracking-widest font-semibold mb-5">Export Services</h4>
            <ul className="space-y-2.5 text-sm">
              {exports.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="hover:text-brand-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-xs uppercase tracking-widest font-semibold mb-5">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@startupsupports.in</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} Startup Supports. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/25">
            <Link href="#" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
