import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jmkautogallery.com";

  const cars = [
    "toyota-alphard-g",
    "bmw-320i-sport",
    "mercedes-e300",
    "mitsubishi-pajero",
    "honda-cr-v-turbo",
    "bmw-x5-xdrive40i",
    "land-cruiser-300",
  ];

  const blogs = [
    "tips-membeli-mobil-bekas",
    "perawatan-mobil-berkala",
    " simulasi-kredit-mobil",
  ];

  const carPages = cars.map((slug) => ({
    url: `${baseUrl}/mobil/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = blogs.map((slug) => ({
    url: `${baseUrl}/blog/${slug.trim()}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/katalog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...carPages,
    ...blogPages,
  ];
}
