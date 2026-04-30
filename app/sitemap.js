import { getAllLocationParams, getAllServiceParams } from "../data/site-data";

export default function sitemap() {
  const baseUrl = "http://localhost:3000";

  const serviceUrls = getAllServiceParams().map(({ service }) => ({
    url: `${baseUrl}/${service}`,
    changeFrequency: "weekly",
    priority: 0.9
  }));

  const areaUrls = getAllLocationParams().map(({ service, location }) => ({
    url: `${baseUrl}/${service}/${location}`,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1
    },
    ...serviceUrls,
    ...areaUrls
  ];
}
