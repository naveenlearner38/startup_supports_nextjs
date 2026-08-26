import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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

export const metadata: Metadata = {
  title: "Startup Supports — Build Bold. Export Global.",
  description:
    "India's trusted partner for startup success and international trade excellence. Pitch decks, business plans, export documentation, freight forwarding, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${geist.variable} h-full scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-geist-body), system-ui, sans-serif" }}
      >
        {children}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "y8dnjk5qtq");`}
        </Script>
      </body>
    </html>
  );
}
