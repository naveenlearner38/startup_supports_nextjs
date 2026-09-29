import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, DM_Sans } from "next/font/google";
import ClarityInit from "@/components/ClarityInit";
import JsonLd from "@/components/JsonLd";
import { OG_IMAGE, SITE_NAME, SITE_URL, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const geist = DM_Sans({
  variable: "--font-geist-body",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Startup and export-import consultancy in India — pitch decks, business plans, fundraising, IEC and DGFT compliance, freight and forex support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Startup Supports — Startup & Export-Import Consultancy in India",
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "startup consultancy India",
    "export import consultancy",
    "IEC registration",
    "pitch deck creation",
    "business plan and financial modelling",
    "DGFT compliance",
    "freight forwarding",
    "DPIIT recognition",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: "/",
    title: "Startup Supports — Turning Business Ideas into Global Success Stories",
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Supports — Turning Business Ideas into Global Success Stories",
    description,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F2ED",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${bricolage.variable} ${instrument.variable} ${geist.variable} h-full scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-geist-body), system-ui, sans-serif" }}
      >
        {children}
        <JsonLd data={organizationJsonLd()} />
        <ClarityInit />
      </body>
    </html>
  );
}
