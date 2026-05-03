import { getAllValidSlugs, getSiteUrl } from "../data/site-data";

export default function sitemap() {
  const baseUrl = getSiteUrl();
  const pageUrls = getAllValidSlugs().map(({ slug }) => ({
    url: `${baseUrl}/${slug}`,
    changeFrequency: "weekly",
    priority: slug.endsWith("-vadodara") ? 0.9 : 0.8
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1
    },
    ...pageUrls
  ];
}
