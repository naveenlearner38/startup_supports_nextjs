import type { Metadata } from "next";

export const SITE_URL = "https://startupsupports.com";
export const SITE_NAME = "Startup Supports";
export const SITE_TAGLINE = "Empowering founders. Fueling growth.";
export const CONTACT_EMAIL = "info@startupsupports.com";
export const OG_IMAGE = "/og-image.png";

export const ORG_ID = `${SITE_URL}/#organization`;

/** Full per-page metadata (title, description, canonical, Open Graph, Twitter). */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const ogTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title: ogTitle,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}${OG_IMAGE}`,
    slogan: SITE_TAGLINE,
    description:
      "Startup and export-import business consultancy in India — pitch decks, business plans, fundraising support, IEC and DGFT compliance, freight forwarding and international banking.",
    email: CONTACT_EMAIL,
    telephone: "+918149574967",
    areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
    knowsAbout: [
      "Startup consulting",
      "Pitch deck creation",
      "Business plan and financial modelling",
      "Export and import consultancy",
      "IEC registration",
      "DGFT compliance",
      "Freight forwarding",
      "International banking",
    ],
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      serviceType,
      url: `${SITE_URL}${path}`,
      areaServed: { "@type": "Country", name: "India" },
      provider: { "@id": ORG_ID },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
      ],
    },
  ];
}
