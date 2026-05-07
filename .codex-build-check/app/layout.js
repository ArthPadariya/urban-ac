import "./globals.css";
import { FloatingActions } from "../components/FloatingActions";
import { SeoJsonLd } from "../components/SeoJsonLd";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { business, getSiteUrl } from "../data/site-data";
import { buildLocalBusinessSchema, buildWebSiteSchema } from "../lib/seo";

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: `${business.name} | AC Service & Repair in ${business.city}`,
  applicationName: business.name,
  description:
    "Urban AC provides AC service, AC repair, AC installation, gas filling, AMC, and maintenance across Vadodara with same-day doorstep support.",
  keywords: [
    `${business.name}`,
    `AC Service in ${business.city}`,
    `AC Repair in ${business.city}`,
    `AC Installation in ${business.city}`,
    `Urban AC ${business.city}`
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${business.name} | AC Service & Repair in ${business.city}`,
    description:
      "Urban AC provides AC service, AC repair, AC installation, gas filling, AMC, and maintenance across Vadodara with same-day doorstep support.",
    url: getSiteUrl(),
    siteName: business.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${getSiteUrl()}/home-tech-expert.jpeg`,
        width: 1200,
        height: 630,
        alt: `${business.name} AC services in ${business.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | AC Service & Repair in ${business.city}`,
    description:
      "Urban AC provides AC service, AC repair, AC installation, gas filling, AMC, and maintenance across Vadodara with same-day doorstep support.",
    images: [`${getSiteUrl()}/home-tech-expert.jpeg`]
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION
      }
    : undefined
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <SeoJsonLd data={[buildWebSiteSchema(), buildLocalBusinessSchema({ path: "/" })]} id="global-seo" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
