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
    icons: [{ src: "/logo.jpg", sizes: "any", type: "image/jpeg" }],
  };
}
