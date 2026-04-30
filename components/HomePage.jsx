import Link from "next/link";
import { business, getHomepageStats, locations, services, topLocations } from "../data/site-data";
import { SectionTitle } from "./SectionTitle";

export function HomePage() {
  const stats = getHomepageStats();

  return (
    <main>
      <section className="section-pad">
        <div className="site-container grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Local AC Experts</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Expert AC Service & Repair in Vadodara
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-smoke md:text-lg">
              Book fast doorstep AC service in Vadodara for homes, offices, clinics, and shops.
              {` ${business.name}`} handles AC cleaning, repair, installation, maintenance, gas filling,
              and AMC support with quick local response.
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
              <span>30-60 min response in major zones</span>
              <span>Same-day service slots</span>
              <span>Home and office AC support</span>
            </div>
          </div>

          <aside className="panel-dark p-8">
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">Why Customers Choose Us</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Cleaner service flow, faster follow-up, better cooling results.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
              We keep the process simple: tell us the issue, pick a slot, and our technicians reach
              your doorstep with the tools needed for inspection, cleaning, repair, or installation
              support.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <strong className="block font-display text-3xl font-semibold tracking-[-0.04em]">
                    {stat.value}
                  </strong>
                  <span className="text-sm text-white/70">{stat.label}</span>
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
            title="Full AC support, from cleaning to repair and installation."
            description="Each service page is connected to location pages and sub-service pages so the content stays useful for users and scalable for SEO."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="panel-card flex flex-col gap-4 p-6">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">{service.name}</h3>
                <p className="text-sm leading-7 text-smoke">{service.description}</p>
                <ul className="space-y-2 text-sm text-smoke">
                  {service.subservices.map((subservice) => (
                    <li key={subservice.slug} className="pl-4 before:absolute before:mt-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-ink relative">
                      {subservice.name}
                    </li>
                  ))}
                </ul>
                <Link href={`/${service.slug}`} className="mt-auto text-sm font-semibold">
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
            title="Local coverage across Vadodara’s major residential and commercial zones."
            description="The homepage links top areas directly, while each service route expands into location-specific pages with nearby area linking."
            dark
          />
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {topLocations.map((slug) => {
              const location = locations.find((item) => item.slug === slug);
              return (
                <Link
                  key={slug}
                  href={`/ac-service/${slug}`}
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
            title="Built like a trusted local service site, not a thin SEO page farm."
            description="The layout stays clean, mobile-first, and conversion-ready while preserving useful local context and internal linking."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Fast local response", "Area-specific pages mention realistic response windows and known service pockets."],
              ["Clear internal linking", "Homepage to services, services to locations, and locations to nearby areas and sub-services."],
              ["Useful content blocks", "Every page includes FAQs, types of service, benefits, and direct booking CTAs."],
              ["Doorstep support", "Home and office AC visits across Vadodara with simple booking by call or WhatsApp."],
              ["Black & white theme", "High contrast cards, generous spacing, and premium local service styling."],
              ["SEO-ready structure", "Each page uses unique metadata, headings, local references, and schema markup."]
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
            title="Short booking flow that works well on both mobile and desktop."
            description="Every main page and local page repeats the same clear process for better conversions."
            dark
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["1", "Call or WhatsApp", "Share your location, AC type, and whether you need service, repair, or installation support."],
              ["2", "Doorstep Visit", "A local technician reaches your address for inspection and confirms the scope."],
              ["3", "Work & Testing", "Cleaning, repair, filling, or fitting is completed with cooling and airflow checks."],
              ["4", "Cooling Restored", "You get a cleaner, better-performing AC and clear advice for the next service cycle."]
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
            title="Trust signals placed where users expect them."
            description="Social proof works best when it feels grounded and readable, so the site uses short testimonial cards instead of cluttered blocks."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Quick Vasna service", "Booked AC service in the morning and the technician reached our Vasna society the same day."],
              ["Clean installation follow-up", "The new split AC installation was neat, and the team explained drainage and usage clearly."],
              ["Helpful office AMC support", "Urban AC helped us organize maintenance for multiple office units without repeated follow-up."]
            ].map(([title, text]) => (
              <article key={title} className="panel-card p-6">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-smoke">“{text}”</p>
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
              Call now or start on WhatsApp to book AC cleaning, repair, installation, gas filling,
              maintenance, or AMC support with {business.name}.
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
