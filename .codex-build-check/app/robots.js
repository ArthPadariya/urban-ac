import { getSiteUrl } from "../data/site-data";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`
  };
}
