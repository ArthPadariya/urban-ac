import { notFound } from "next/navigation";
import { AreaPageTemplate } from "../../components/AreaPageTemplate";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";
import { business, getSlugContent } from "../../data/site-data";

export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export function generateMetadata({ params }) {
  const resolved = getSlugContent(params.slug);

  if (!resolved) {
    return {
      title: `Page not found | ${business.name}`
    };
  }

  if (resolved.type === "service") {
    const { service } = resolved;

    return {
      title: `${service.name} in ${business.city} | Local AC Experts`,
      description: `${service.shortDescription} Book ${service.sentence} in ${business.city} with ${business.name} for local support, clear service details, and quick call or WhatsApp booking.`
    };
  }

  const { service, location } = resolved;

  return {
    title: `${service.name} in ${location.name}, ${business.city} | Fast Local Support`,
    description: `Book ${service.sentence} in ${location.name}, ${business.city} with ${business.name}. Get localized service details, nearby area links, and direct booking by call or WhatsApp.`
  };
}

export default function SlugPage({ params }) {
  const resolved = getSlugContent(params.slug);

  if (!resolved) {
    notFound();
  }

  if (resolved.type === "service") {
    return <ServicePageTemplate service={resolved.service} />;
  }

  return <AreaPageTemplate service={resolved.service} location={resolved.location} />;
}
