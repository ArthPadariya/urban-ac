import { notFound } from "next/navigation";
import { ServiceAreaPage } from "../../components/ServiceAreaPage";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";
import { business, locationMap, serviceMap } from "../../data/site-data";

export const revalidate = 3600;
export const dynamicParams = true;
const serviceSlugs = Object.keys(serviceMap).sort((a, b) => b.length - a.length);

function resolveSlugParts(slug) {
  const matchedService = serviceSlugs.find((service) => slug.startsWith(`${service}-`));

  if (!matchedService) {
    return null;
  }

  const area = slug.slice(matchedService.length + 1);

  if (!area) {
    return null;
  }

  if (area === "vadodara") {
    return {
      service: matchedService,
      area
    };
  }

  if (!locationMap[area]) {
    return null;
  }

  return {
    service: matchedService,
    area
  };
}

export function generateStaticParams() {
  const services = Object.keys(serviceMap);
  const areas = Object.keys(locationMap).filter((area) => area !== "vadodara");
  const paths = [];

  for (const service of services) {
    for (const area of areas) {
      paths.push({
        slug: `${service}-${area}`
      });
    }
  }

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resolved = resolveSlugParts(slug);

  if (!resolved) {
    return {
      title: `Page not found | ${business.name}`
    };
  }

  const { service, area } = resolved;

  if (area === "vadodara") {
    const cityService = serviceMap[service];

    if (!cityService) {
      return {
        title: `Page not found | ${business.name}`
      };
    }

    return {
      title: `${cityService.name} in ${business.city} | Urban AC`,
      description: `${cityService.shortDescription} Book ${cityService.sentence} in ${business.city} with ${business.name} for local support and direct call or WhatsApp booking.`
    };
  }

  if (!serviceMap[service] || !locationMap[area]) {
    return {
      title: `Page not found | ${business.name}`
    };
  }

  return {
    title: `${service.replaceAll("-", " ")} in ${area} | Urban AC`,
    description: `Best ${service.replaceAll("-", " ")} service in ${area}. Fast, reliable AC services by Urban AC.`
  };
}

export default async function SlugPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const resolved = resolveSlugParts(slug);

  if (!resolved) {
    notFound();
  }

  const { service, area } = resolved;

  if (area === "vadodara") {
    const cityService = serviceMap[service];

    if (!cityService) {
      return null;
    }

    return <ServicePageTemplate service={cityService} />;
  }

  if (!serviceMap[service] || !locationMap[area]) {
    notFound();
  }

  return <ServiceAreaPage service={service} area={area} />;
}
