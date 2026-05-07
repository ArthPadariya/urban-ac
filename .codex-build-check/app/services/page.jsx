import { ServicesPage } from "../../components/ServicesPage";
import { SeoJsonLd } from "../../components/SeoJsonLd";
import { business, getMainServiceHref, services } from "../../data/site-data";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildWebPageSchema,
  createStaticPageMetadata
} from "../../lib/seo";

const title = `AC Services in ${business.city} | ${business.name}`;
const description =
  `Explore ${business.name} AC repair, service, installation, gas filling, AMC, PCB repair, split AC repair, and cleaning support across ${business.city}.`;

export const metadata = createStaticPageMetadata({
  title,
  description,
  path: "/services",
  keywords: [
    `AC Services in ${business.city}`,
    `AC Repair in ${business.city}`,
    `AC Installation in ${business.city}`,
    `${business.name} services`
  ]
});

export default function Page() {
  return (
    <>
      <SeoJsonLd
        id="services-seo"
        data={[
          buildWebPageSchema({ title, description, path: "/services", type: "CollectionPage" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" }
          ]),
          buildCollectionPageSchema({
            title,
            description,
            path: "/services",
            items: services.map((service) => ({
              name: `${service.name} in ${business.city}`,
              path: getMainServiceHref(service.slug)
            }))
          })
        ]}
      />
      <ServicesPage />
    </>
  );
}
