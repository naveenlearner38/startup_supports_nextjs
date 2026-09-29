import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/startup-services/pitch-deck", priority: 0.8, changeFrequency: "monthly" },
  { path: "/startup-services/business-plan", priority: 0.8, changeFrequency: "monthly" },
  { path: "/export-services/documentation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/export-services/freight-forwarding", priority: 0.8, changeFrequency: "monthly" },
  { path: "/export-services/international-banking", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
