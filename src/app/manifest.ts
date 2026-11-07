import type { MetadataRoute } from "next";
import { siteDescription } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Huzaifa Rehan, Full-Stack AI Engineer",
    short_name: "Huzaifa Rehan",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#060B10",
    theme_color: "#060B10",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
