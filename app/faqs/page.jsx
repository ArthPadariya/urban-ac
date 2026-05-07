import { FaqPage } from "../../components/FaqPage";
import { SeoJsonLd } from "../../components/SeoJsonLd";
import { faqCategories } from "../../data/faq-data";
import { business } from "../../data/site-data";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, createStaticPageMetadata } from "../../lib/seo";

const title = `FAQs | ${business.name} ${business.city}`;
const description = `Frequently asked questions about AC repair, cleaning, installation, and service support from ${business.name} in ${business.city}.`;

export const metadata = createStaticPageMetadata({
  title,
  description,
  path: "/faqs",
  keywords: [
    `${business.name} FAQs`,
    `AC service FAQ ${business.city}`,
    `AC repair questions ${business.city}`
  ]
});

export default function Page() {
  const faqItems = faqCategories.flatMap((category) => category.items);

  return (
    <>
      <SeoJsonLd
        id="faq-seo"
        data={[
          buildWebPageSchema({ title, description, path: "/faqs", type: "FAQPage" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" }
          ]),
          buildFaqSchema(faqItems)
        ]}
      />
      <FaqPage />
    </>
  );
}
