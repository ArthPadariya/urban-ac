import { AboutPage } from "../../components/AboutPage";
import { SeoJsonLd } from "../../components/SeoJsonLd";
import { business } from "../../data/site-data";
import { buildBreadcrumbSchema, buildWebPageSchema, createStaticPageMetadata } from "../../lib/seo";

const title = `About ${business.name} | AC Experts in ${business.city}`;
const description =
  `Learn more about ${business.name}, our AC repair, service, installation, and cleaning support across ${business.city}.`;

export const metadata = createStaticPageMetadata({
  title,
  description,
  path: "/about-us",
  keywords: [
    `${business.name} about`,
    `AC experts in ${business.city}`,
    `Urban AC ${business.city}`
  ]
});

export default function Page() {
  return (
    <>
      <SeoJsonLd
        id="about-seo"
        data={[
          buildWebPageSchema({ title, description, path: "/about-us" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" }
          ])
        ]}
      />
      <AboutPage />
    </>
  );
}
