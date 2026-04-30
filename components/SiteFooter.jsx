import Link from "next/link";
import { business, services, topLocations, locationMap } from "../data/site-data";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-black/10 py-16">
      <div className="site-container space-y-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div className="panel-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-sm font-bold text-white">
                UA
              </span>
              <span className="font-display text-lg font-semibold tracking-[-0.03em]">{business.name}</span>
            </div>
            <p className="text-sm text-smoke">
              Doorstep AC service, AC repair, installation, gas filling, maintenance, and AMC support
              across {business.city}, {business.state}.
            </p>
          </div>

          <div className="panel-card p-6">
            <h3 className="font-display text-lg font-semibold">Services</h3>
            <div className="mt-4 grid gap-3 text-sm text-smoke">
              {services.map((service) => (
                <Link key={service.slug} href={`/${service.slug}`}>
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="panel-card p-6">
            <h3 className="font-display text-lg font-semibold">Top Areas</h3>
            <div className="mt-4 grid gap-3 text-sm text-smoke">
              {topLocations.map((slug) => (
                <Link key={slug} href={`/ac-service/${slug}`}>
                  {locationMap[slug].name}
                </Link>
              ))}
            </div>
          </div>

          <div className="panel-card p-6">
            <h3 className="font-display text-lg font-semibold">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-smoke">
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.whatsappHref}>WhatsApp Booking</a>
              <span>{business.address}</span>
              <span>Daily: {business.serviceHours}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-smoke md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>Next.js local SEO website structure for AC services in Vadodara.</span>
        </div>
      </div>
    </footer>
  );
}
