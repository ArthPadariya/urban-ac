import { SITE_URL, getAbsoluteUrl } from "../lib/seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: SITE_URL
  };
}
