import { notFound } from "next/navigation";
import { LocationSlugPage } from "../../../components/LocationSlugPage";
import { SeoJsonLd } from "../../../components/SeoJsonLd";
import { business, locationMap, locations } from "../../../data/site-data";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildLocationCollectionSchema,
  buildWebPageSchema,
  createLocationMetadata
} from "../../../lib/seo";

export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locationMap[slug];

  if (!location) {
    return {
      title: `Location not found | ${business.name}`,
      robots: {
        index: false,
        follow: false
      }
    };
  }

  return createLocationMetadata(location);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const location = locationMap[slug];

  if (!location) {
    notFound();
  }

  const title = `AC Services in ${location.name}, ${business.city} | ${business.name}`;
  const description = `Explore AC repair, AC service, AC installation, gas filling, AMC, PCB repair, split AC repair, and cleaning support in ${location.name}, ${business.city}.`;
  const path = `/locations/${location.slug}`;

  return (
    <>
      <SeoJsonLd
        id={`location-${location.slug}-seo`}
        data={[
          buildWebPageSchema({ title, description, path, type: "CollectionPage" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: location.name, path }
          ]),
          buildLocalBusinessSchema({ path, description, location }),
          buildLocationCollectionSchema(location)
        ]}
      />
      <LocationSlugPage location={location} />
    </>
  );
}
