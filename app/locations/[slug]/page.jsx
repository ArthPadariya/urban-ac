import { notFound } from "next/navigation";
import { LocationSlugPage } from "../../../components/LocationSlugPage";
import { business, locationMap, locations } from "../../../data/site-data";

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
      title: `Location not found | ${business.name}`
    };
  }

  return {
    title: `AC Services in ${location.name}, ${business.city} | ${business.name}`,
    description: `Explore AC repair, AC service, AC installation, gas filling, AMC, PCB repair, split AC repair, and cleaning support in ${location.name}, ${business.city}.`
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const location = locationMap[slug];

  if (!location) {
    notFound();
  }

  return <LocationSlugPage location={location} />;
}
