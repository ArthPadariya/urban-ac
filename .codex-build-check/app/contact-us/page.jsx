import { ContactPage } from "../../components/ContactPage";
import { SeoJsonLd } from "../../components/SeoJsonLd";
import { miniFaqs } from "../../data/faq-data";
import { business } from "../../data/site-data";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, createStaticPageMetadata } from "../../lib/seo";

const title = `Contact ${business.name} | AC Service Booking in ${business.city}`;
const description = `Contact ${business.name} for AC repair, service, installation, and cleaning support across ${business.city}.`;

export const metadata = createStaticPageMetadata({
  title,
  description,
  path: "/contact-us",
  keywords: [
    `Contact ${business.name}`,
    `AC Service Booking ${business.city}`,
    `AC Repair Contact ${business.city}`
  ]
});

export default function Page() {
  return (
    <>
      <SeoJsonLd
        id="contact-seo"
        data={[
          buildWebPageSchema({ title, description, path: "/contact-us", type: "ContactPage" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact-us" }
          ]),
          buildFaqSchema(miniFaqs)
        ]}
      />
      <ContactPage />
    </>
  );
}
