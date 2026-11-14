import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nadeerep.in";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/images/nadeer_front_portrait.jpg`,
        `${baseUrl}/images/nadeer_cutout.png`,
        `${baseUrl}/images/dr-plus-home-healthcare.png`,
        `${baseUrl}/images/dr-plus-team-preview.png`,
        `${baseUrl}/images/finovision-preview.png`,
        `${baseUrl}/images/duotek-preview.png`,
        `${baseUrl}/images/dirham-package.png`,
        `${baseUrl}/images/quick-pitch.png`,
        `${baseUrl}/images/invo-zoyo.png`,
        `${baseUrl}/images/interview-mind-pro.png`,
        `${baseUrl}/images/coordinator.png`,
        `${baseUrl}/images/certificates/cert-google-play-store-listing.png`,
        `${baseUrl}/images/certificates/cert-ibm-devops.jpg`,
      ],
    },
    {
      url: `${baseUrl}#about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}#process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#education`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

