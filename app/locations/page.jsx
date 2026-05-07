import { LocationsPage } from "../../components/LocationsPage";
import { SeoJsonLd } from "../../components/SeoJsonLd";
import { business, locations } from "../../data/site-data";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildWebPageSchema,
  createStaticPageMetadata
} from "../../lib/seo";

const title = `AC Service Areas in ${business.city} | ${business.name}`;
const description = `Browse AC service coverage across ${business.city} and open your local area page for faster booking with ${business.name}.`;

export const metadata = createStaticPageMetadata({
  title,
  description,
  path: "/locations",
  keywords: [
    `AC Service Areas in ${business.city}`,
    `AC Repair Locations ${business.city}`,
    `${business.name} locations`,
    `AC Technician near me ${business.city}`
  ]
});

export default function Page() {
  return (
    <>
      <SeoJsonLd
        id="locations-seo"
        data={[
          buildWebPageSchema({ title, description, path: "/locations", type: "CollectionPage" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" }
          ]),
          buildCollectionPageSchema({
            title,
            description,
            path: "/locations",
            items: locations.map((location) => ({
              name: `AC Services in ${location.name}`,
              path: `/locations/${location.slug}`
            }))
          })
        ]}
      />
      <LocationsPage />
    </>
  );
}
