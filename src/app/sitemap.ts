import type { MetadataRoute } from "next";
import { profile } from "@/data/portfolio";
import { siteLastModified, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}${profile.image}`],
    },
    {
      url: `${siteUrl}/cv.pdf`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
