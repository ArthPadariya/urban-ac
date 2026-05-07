import { serviceData } from "./serviceData";
import {
  business,
  citySlug,
  getEntryLocationHref,
  getMainServiceHref,
  getSiteUrl,
  locations,
  services
} from "../data/site-data";

const SITE_URL = getSiteUrl();
const DEFAULT_OG_IMAGE = "/home-tech-expert.jpeg";
const OPENING_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function cleanAddressLine(value) {
  return value.replace(/â€“|–/g, "-").trim();
}

function getBusinessAddress() {
  const lines = business.address.split("\n").map(cleanAddressLine).filter(Boolean);
  const lastLine = lines.at(-1) ?? "";
  const postalCode = lastLine.match(/\b(\d{6})\b/)?.[1] ?? "";
  const streetAddress = lines.join(", ").replace(/\s+/g, " ").trim();

  return {
    "@type": "PostalAddress",
    streetAddress,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode,
    addressCountry: "IN"
  };
}

function getNormalizedPath(path = "/") {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function getAbsoluteUrl(path = "/") {
  return new URL(getNormalizedPath(path), SITE_URL).toString();
}

function getPrimaryImage(title, image = DEFAULT_OG_IMAGE) {
  return {
    url: getAbsoluteUrl(image),
    width: 1200,
    height: 630,
    alt: title
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  image = DEFAULT_OG_IMAGE
}) {
  return {
    title,
    description,
    keywords: unique([
      ...keywords,
      business.name,
      `${business.name} ${business.city}`,
      `AC Service in ${business.city}`
    ]),
    alternates: {
      canonical: getNormalizedPath(path)
    },
    openGraph: {
      title,
      description,
      url: getAbsoluteUrl(path),
      siteName: business.name,
      locale: "en_IN",
      type,
      images: [getPrimaryImage(title, image)]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getAbsoluteUrl(image)]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

function getServiceTypeKeywords(service) {
  return service.types.slice(0, 3);
}

export function createServiceCityMetadata(service) {
  const title = `${service.name} in ${business.city} | ${business.name}`;
  const description = `${service.name} in ${business.city} by ${business.name}. ${service.shortDescription} Book fast doorstep support for homes, offices, and nearby areas across ${business.city}.`;

  return createPageMetadata({
    title,
    description,
    path: getMainServiceHref(service.slug),
    type: "article",
    keywords: unique([
      `${service.name} in ${business.city}`,
      `${service.sentence} in ${business.city}`,
      `${service.name} near me`,
      `${service.name} ${business.city}`,
      `Urban AC ${service.name}`,
      ...getServiceTypeKeywords(service)
    ])
  });
}

export function createServiceAreaMetadata(service, location) {
  const title = `${service.name} in ${location.name} | ${business.name} ${business.city}`;
  const description = `Best ${service.name} in ${location.name}, ${business.city}. Fast ${service.sentence}, local technician support, doorstep visits, and quick booking from ${business.name}.`;

  return createPageMetadata({
    title,
    description,
    path: getEntryLocationHref(service.slug, location.slug),
    type: "article",
    keywords: unique([
      `${service.name} in ${location.name}`,
      `${service.sentence} in ${location.name}`,
      `AC Technician in ${location.name}`,
      `${service.name} ${business.city}`,
      `Urban AC ${location.name}`,
      `Split AC Service ${location.name}`,
      ...getServiceTypeKeywords(service)
    ])
  });
}

export function createLocationMetadata(location) {
  const title = `AC Services in ${location.name}, ${business.city} | ${business.name}`;
  const description = `Book AC repair, AC service, AC installation, gas filling, AMC, PCB repair, split AC repair, and cleaning in ${location.name}, ${business.city} with ${business.name}.`;

  return createPageMetadata({
    title,
    description,
    path: `/locations/${location.slug}`,
    keywords: [
      `AC Service in ${location.name}`,
      `AC Repair in ${location.name}`,
      `AC Installation in ${location.name}`,
      `${location.name} ${business.city} AC Service`,
      `Urban AC ${location.name}`
    ]
  });
}

export function createStaticPageMetadata({ title, description, path, keywords = [], image = DEFAULT_OG_IMAGE }) {
  return createPageMetadata({
    title,
    description,
    path,
    keywords,
    image
  });
}

export function interpolateTemplateValue(value, replacements) {
  if (typeof value === "string") {
    return Object.entries(replacements).reduce(
      (result, [token, replacement]) => result.replaceAll(`{{${token}}}`, replacement),
      value
    );
  }

  if (Array.isArray(value)) {
    return value.map((item) => interpolateTemplateValue(item, replacements));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, interpolateTemplateValue(entry, replacements)])
    );
  }

  return value;
}

export function getInterpolatedAreaServiceData(service, location) {
  const config = serviceData[service.slug];

  if (!config) {
    return null;
  }

  return interpolateTemplateValue(config, {
    area: location.name,
    AREA: location.name.toUpperCase(),
    city: business.city
  });
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getAbsoluteUrl("/")}#website`,
    name: business.name,
    url: getAbsoluteUrl("/"),
    inLanguage: "en-IN",
    publisher: {
      "@id": `${getAbsoluteUrl("/")}#localbusiness`
    }
  };
}

export function buildLocalBusinessSchema({ path = "/", description, image = DEFAULT_OG_IMAGE, location = null } = {}) {
  const areaServed = location
    ? [{ "@type": "Place", name: `${location.name}, ${business.city}, ${business.state}` }]
    : locations.map((item) => ({
        "@type": "Place",
        name: `${item.name}, ${business.city}, ${business.state}`
      }));

  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": `${getAbsoluteUrl("/")}#localbusiness`,
    name: business.name,
    url: getAbsoluteUrl("/"),
    image: getAbsoluteUrl(image),
    description:
      description ??
      `${business.name} provides AC service, repair, installation, gas filling, AMC, PCB repair, and cleaning support across ${business.city}, ${business.state}.`,
    telephone: business.phoneDisplay,
    areaServed,
    serviceArea: areaServed,
    address: getBusinessAddress(),
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: OPENING_DAYS,
        opens: "07:00",
        closes: "22:00"
      }
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: business.phoneDisplay,
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"]
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `AC Services in ${business.city}`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: getAbsoluteUrl(getMainServiceHref(service.slug))
        }
      }))
    },
    mainEntityOfPage: getAbsoluteUrl(path)
  };
}

export function buildWebPageSchema({ title, description, path, type = "WebPage" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: getAbsoluteUrl(path),
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${getAbsoluteUrl("/")}#website`
    },
    about: {
      "@id": `${getAbsoluteUrl("/")}#localbusiness`
    },
    primaryImageOfPage: getAbsoluteUrl(DEFAULT_OG_IMAGE)
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path)
    }))
  };
}

export function buildFaqSchema(items) {
  const faqs = items
    .map((item) => ({
      question: item.question ?? item.q,
      answer: item.answer ?? item.a
    }))
    .filter((item) => item.question && item.answer);

  if (!faqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildServiceSchema({ service, path, description, location = null }) {
  const areaServed = location
    ? [{ "@type": "Place", name: `${location.name}, ${business.city}, ${business.state}` }]
    : [{ "@type": "Place", name: `${business.city}, ${business.state}` }];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: location ? `${service.name} in ${location.name}, ${business.city}` : `${service.name} in ${business.city}`,
    serviceType: service.name,
    description,
    url: getAbsoluteUrl(path),
    areaServed,
    provider: {
      "@id": `${getAbsoluteUrl("/")}#localbusiness`
    },
    category: "Air conditioning service",
    termsOfService: getAbsoluteUrl("/terms-and-conditions"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.types.map((type) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: type
        }
      }))
    }
  };
}

export function buildCollectionPageSchema({ title, description, path, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: getAbsoluteUrl(path),
    isPartOf: {
      "@id": `${getAbsoluteUrl("/")}#website`
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: getAbsoluteUrl(item.path)
      }))
    }
  };
}

export function buildLocationCollectionSchema(location) {
  return buildCollectionPageSchema({
    title: `AC Services in ${location.name}, ${business.city}`,
    description: `Local AC service routes in ${location.name}, ${business.city}.`,
    path: `/locations/${location.slug}`,
    items: services.map((service) => ({
      name: `${service.name} in ${location.name}`,
      path: getEntryLocationHref(service.slug, location.slug)
    }))
  });
}

export function getStaticPageEntries() {
  return [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faqs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/locations", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
    { path: "/refund-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" }
  ];
}

export function getLocationPageEntries() {
  return locations.map((location) => ({
    path: `/locations/${location.slug}`,
    priority: 0.75,
    changeFrequency: "weekly"
  }));
}

export { DEFAULT_OG_IMAGE, SITE_URL, citySlug };
