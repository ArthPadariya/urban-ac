import { notFound } from "next/navigation";
import { SeoJsonLd } from "../../components/SeoJsonLd";
import { ServiceAreaPage } from "../../components/ServiceAreaPage";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";
import {
  business,
  getAllValidSlugs,
  getCityFaqs,
  getMainServiceHref,
  getSlugContent
} from "../../data/site-data";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildWebPageSchema,
  createServiceAreaMetadata,
  createServiceCityMetadata,
  getInterpolatedAreaServiceData
} from "../../lib/seo";

export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return getAllValidSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resolved = getSlugContent(slug);

  if (!resolved) {
    return {
      title: `Page not found | ${business.name}`,
      robots: {
        index: false,
        follow: false
      }
    };
  }

  if (resolved.type === "service") {
    return createServiceCityMetadata(resolved.service);
  }

  return createServiceAreaMetadata(resolved.service, resolved.location);
}

export default async function SlugPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const resolved = getSlugContent(slug);

  if (!resolved) {
    notFound();
  }

  if (resolved.type === "service") {
    const { service } = resolved;
    const path = getMainServiceHref(service.slug);
    const metadata = createServiceCityMetadata(service);
    const faqs = getCityFaqs(service);

    return (
      <>
        <SeoJsonLd
          id={`${service.slug}-city-seo`}
          data={[
            buildWebPageSchema({
              title: metadata.title,
              description: metadata.description,
              path
            }),
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path }
            ]),
            buildLocalBusinessSchema({ path, description: metadata.description }),
            buildServiceSchema({ service, path, description: metadata.description }),
            buildFaqSchema(faqs)
          ]}
        />
        <ServicePageTemplate service={service} />
      </>
    );
  }

  const { service, location } = resolved;
  const content = getInterpolatedAreaServiceData(service, location);
  const path = `/${slug}`;
  const metadata = createServiceAreaMetadata(service, location);

  if (!content) {
    notFound();
  }

  return (
    <>
      <SeoJsonLd
        id={`${service.slug}-${location.slug}-seo`}
        data={[
          buildWebPageSchema({
            title: metadata.title,
            description: metadata.description,
            path
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: service.name, path: getMainServiceHref(service.slug) },
            { name: location.name, path }
          ]),
          buildLocalBusinessSchema({ path, description: metadata.description, location }),
          buildServiceSchema({
            service,
            path,
            description: content.details?.paragraphs?.[0] ?? metadata.description,
            location
          }),
          buildFaqSchema(content.faqs?.items ?? [])
        ]}
      />
      <ServiceAreaPage service={service} area={location} />
    </>
  );
}
