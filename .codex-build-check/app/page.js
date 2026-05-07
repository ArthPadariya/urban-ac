import { HomePage } from "../components/HomePage";
import { SeoJsonLd } from "../components/SeoJsonLd";
import { business, locationMap, topLocations } from "../data/site-data";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildWebPageSchema,
  createStaticPageMetadata
} from "../lib/seo";

const title = `AC Service, Repair & Installation in ${business.city} | ${business.name}`;
const description =
  `${business.name} provides AC service, AC repair, AC installation, gas filling, AMC, PCB repair, and deep AC cleaning across ${business.city} with fast doorstep support.`;

export const metadata = createStaticPageMetadata({
  title,
  description,
  path: "/",
  keywords: [
    `AC Service in ${business.city}`,
    `AC Repair in ${business.city}`,
    `AC Installation in ${business.city}`,
    `${business.name} ${business.city}`,
    `Split AC Service ${business.city}`
  ]
});

export default function Page() {
  return (
    <>
      <SeoJsonLd
        id="home-seo"
        data={[
          buildWebPageSchema({ title, description, path: "/" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" }
          ]),
          buildCollectionPageSchema({
            title: "Top AC Service Areas in Vadodara",
            description,
            path: "/",
            items: topLocations.map((slug) => ({
              name: `AC Service in ${locationMap[slug].name}`,
              path: `/ac-service-${slug}`
            }))
          })
        ]}
      />
      <HomePage />
    </>
  );
}
