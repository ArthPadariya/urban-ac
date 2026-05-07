import { getAllValidSlugs } from "../data/site-data";
import { getAbsoluteUrl, getLocationPageEntries, getStaticPageEntries } from "../lib/seo";

export default function sitemap() {
  const lastModified = new Date();
  const serviceUrls = getAllValidSlugs().map(({ slug }) => ({
    url: getAbsoluteUrl(`/${slug}`),
    changeFrequency: "weekly",
    priority: slug.endsWith("-vadodara") ? 0.9 : 0.8,
    lastModified
  }));

  return [
    ...getStaticPageEntries().map((entry) => ({
      url: getAbsoluteUrl(entry.path),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      lastModified
    })),
    ...getLocationPageEntries().map((entry) => ({
      url: getAbsoluteUrl(entry.path),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      lastModified
    })),
    ...serviceUrls
  ];
}
