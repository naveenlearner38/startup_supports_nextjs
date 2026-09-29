import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Startup Supports",
    short_name: "Startup Supports",
    description: "Startup and export-import business consultancy in India.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F2ED",
    theme_color: "#F4F2ED",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
