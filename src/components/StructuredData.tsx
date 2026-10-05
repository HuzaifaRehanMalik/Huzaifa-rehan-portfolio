import {
  contactContent,
  expertiseCategories,
  profile,
  projects,
  services,
  socialLinks,
} from "@/data/portfolio";
import { siteDescription, siteUrl } from "@/lib/site";

// schema.org JSON-LD so Google can show Huzaifa as a person/professional with linked profiles and work.
export default function StructuredData() {
  const personId = `${siteUrl}/#person`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: siteUrl,
        image: `${siteUrl}${profile.image}`,
        jobTitle: "Full-Stack AI Engineer",
        description: siteDescription,
        email: `mailto:${contactContent.email}`,
        sameAs: socialLinks.map((link) => link.href),
        knowsAbout: expertiseCategories.flatMap((category) => category.skills),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Huzaifa Rehan",
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: "Huzaifa Rehan, Full-Stack AI Engineer",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Huzaifa Rehan, AI & Full-Stack Development",
        url: siteUrl,
        image: `${siteUrl}${profile.image}`,
        description: siteDescription,
        founder: { "@id": personId },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI and web development services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Projects by Huzaifa Rehan",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.description,
            url: project.url,
            image: `${siteUrl}${project.image}`,
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            author: { "@id": personId },
            keywords: project.techStack.join(", "),
            ...(project.repo ? { sameAs: project.repo } : {}),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values come from our own static data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
