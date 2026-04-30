import { notFound } from "next/navigation";
import { AreaPageTemplate } from "../../../components/AreaPageTemplate";
import {
  business,
  getAllLocationParams,
  locationMap,
  serviceEntryMap
} from "../../../data/site-data";

export function generateStaticParams() {
  return getAllLocationParams();
}

export function generateMetadata({ params }) {
  const entry = serviceEntryMap[params.service];
  const location = locationMap[params.location];

  if (!entry || !location) {
    return {};
  }

  return {
    title: `${entry.name} in ${location.name}, ${business.city}`,
    description: `Get ${entry.sentence} in ${location.name}, ${business.city} with fast local response, nearby area links, and direct call or WhatsApp booking.`
  };
}

export default function AreaPage({ params }) {
  const entry = serviceEntryMap[params.service];
  const location = locationMap[params.location];

  if (!entry || !location) {
    notFound();
  }

  return <AreaPageTemplate entry={entry} location={location} />;
}
