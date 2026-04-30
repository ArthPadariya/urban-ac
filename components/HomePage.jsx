import Link from "next/link";
import {
  business,
  getMainServiceHref,
  locations,
  services,
  topLocations
} from "../data/site-data";
import { SectionTitle } from "./SectionTitle";

export function HomePage() {
  return (
    <main>
      <section className="section-pad">
        <div className="site-container grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Urban AC Vadodara</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Expert AC Service, Repair & Installation in Vadodara
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-smoke md:text-lg">
              {business.name} provides fast doorstep AC repair, AC service, AC installation,
              gas filling, AMC support, PCB repair, and deep cleaning across key areas of Vadodara.
              Book by call or WhatsApp for local technicians and same-day slots when available.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="btn-primary">
                Call for Fast Booking
              </a>
              <a href={business.whatsappHref} className="btn-whatsapp">
                WhatsApp Urban AC
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-smoke">
              <span>20 major service areas covered</span>
              <span>8 high-intent service routes</span>
              <span>Doorstep support for split and window AC</span>
            </div>
          </div>

          <aside className="panel-dark p-8">
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">Why Customers Choose Us</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Local coverage, cleaner pages, faster booking.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
              The site is built around real service intent: city pages for core services, local pages
              for high-converting area keywords, clear internal linking, and mobile-first booking CTAs.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {[
                ["20", "coverage areas"],
                ["8", "service categories"],
                ["30-60 min", "response goal"],
                ["Call + WhatsApp", "booking options"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <strong className="block font-display text-3xl font-semibold tracking-[-0.04em]">
                    {value}
                  </strong>
                  <span className="text-sm text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="site-container">
          <SectionTitle
            eyebrow="Main Services"
            title="Complete AC support for homes, offices, and commercial spaces."
            description="Each service has a main city page and localized area pages, so users can move from broad service intent to neighborhood-level booking quickly."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.slug} className="panel-card flex flex-col gap-4 p-6">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">{service.name}</h3>
                <p className="text-sm leading-7 text-smoke">{service.shortDescription}</p>
                <ul className="space-y-2 text-sm text-smoke">
                  {service.types.slice(0, 3).map((type) => (
                    <li
                      key={type}
                      className="relative pl-4 before:absolute before:mt-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-ink"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
                <Link href={getMainServiceHref(service.slug)} className="mt-auto text-sm font-semibold">
                  Explore {service.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="section-pad bg-ink">
        <div className="site-container">
          <SectionTitle
            eyebrow="Areas We Serve"
            title="Coverage across Vadodara's busy residential and commercial pockets."
            description="Top location pages link directly from the homepage, while every service page expands into deeper local routes with nearby-area linking."
            dark
          />
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {topLocations.map((slug) => {
              const location = locations.find((item) => item.slug === slug);
              return (
                <Link
                  key={slug}
                  href={`/ac-service-${slug}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  {location.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionTitle
            eyebrow="Why Urban AC"
            title="Built for readability, local intent, and high-conversion service pages."
            description="The architecture uses one clean slug route, on-demand ISR for long-tail pages, and stronger localized copy instead of copy-paste SEO blocks."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Single route architecture", "One slug route powers city pages and location pages without route duplication or folder confusion."],
              ["Localized service copy", "Every page adapts service content with nearby landmarks, response windows, and natural area references."],
              ["Useful internal links", "Homepage links services and areas, service pages link all locations, and local pages connect nearby areas and related services."],
              ["Mobile-first booking flow", "Sticky header, floating CTAs, short sections, and strong contrast make the site easier to use on phones."],
              ["ISR-friendly setup", "Only high-priority pages are prerendered; the rest render on demand and revalidate to reduce build load."],
              ["Conversion-focused structure", "Each page includes service details, trust points, FAQs, and repeated Call + WhatsApp CTAs."]
            ].map(([title, text]) => (
              <article key={title} className="panel-card p-6">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-smoke">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad bg-ink">
        <div className="site-container">
          <SectionTitle
            eyebrow="Simple Process"
            title="A short booking flow that works across every service page."
            description="The process remains consistent whether someone lands on a city page or a local long-tail page."
            dark
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["1", "Call or WhatsApp", "Share the area, AC type, and whether you need service, repair, installation, or cleaning."],
              ["2", "Schedule Visit", "We confirm the nearest available slot based on the service needed and local response coverage."],
              ["3", "Inspection & Work", "The technician checks the AC, explains the scope, and completes the required service support."],
              ["4", "Testing & Close", "Cooling, airflow, and final performance are checked before the job is wrapped up."]
            ].map(([num, title, text]) => (
              <article key={num} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-sm font-bold text-ink">
                  {num}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section-pad">
        <div className="site-container">
          <SectionTitle
            eyebrow="Customer Stories"
            title="Short trust signals placed where users expect them."
            description="Service websites convert better when reviews are clear, local, and easy to scan."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Quick Vasna support", "Booked AC service for our Vasna apartment and the technician arrived the same day with a clear explanation of the work."],
              ["Neat split AC installation", "The installation team handled piping, drainage, and testing cleanly, which made the setup feel much more reliable."],
              ["Helpful AMC follow-up", "Urban AC organized maintenance for multiple office units and kept the service schedule easy to manage."]
            ].map(([title, text]) => (
              <article key={title} className="panel-card p-6">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-smoke">"{text}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="site-container">
          <div className="panel-dark p-8 md:p-10">
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">Book Today</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              Need AC service in Vadodara today?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Call now or start on WhatsApp to book AC repair, service, installation, gas filling,
              AMC support, PCB repair, split AC repair, or deep cleaning with {business.name}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.whatsappHref} className="btn-whatsapp">
                WhatsApp Booking
              </a>
              <a href={business.phoneHref} className="btn-secondary border-white/10 bg-white/5 text-white">
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
