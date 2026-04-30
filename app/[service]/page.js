import { notFound } from "next/navigation";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";
import { business, getAllServiceParams, serviceMap } from "../../data/site-data";

export function generateStaticParams() {
  return getAllServiceParams();
}

export function generateMetadata({ params }) {
  const service = serviceMap[params.service];

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} in ${business.city}`,
    description: `Book ${service.sentence} in ${business.city} with ${business.name}. Quick response, local coverage pages, and direct call or WhatsApp booking.`
  };
}

export default function ServicePage({ params }) {
  const service = serviceMap[params.service];

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
