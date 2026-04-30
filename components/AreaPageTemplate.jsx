import Link from "next/link";
import {
  business,
  getAreaFaqs,
  getCtaContent,
  getEntryLocationHref,
  getLocationContentBlocks,
  getLocationIntro,
  getMainServiceHref,
  getNearbyLocations,
  getRelatedServices,
  getTrustHighlights
} from "../data/site-data";
import { SectionTitle } from "./SectionTitle";

export function AreaPageTemplate({ service, location }) {
  const intro = getLocationIntro(service, location);
  const contentBlocks = getLocationContentBlocks(service, location);
  const faqs = getAreaFaqs(service, location);
  const nearbyLocations = getNearbyLocations(location);
  const relatedServices = getRelatedServices(service.slug, location.slug);
  const trustHighlights = getTrustHighlights(service, location);
  const cta = getCtaContent(service, location);

  return (
    <main className="section-pad">
      <div className="site-container grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <section className="panel-dark p-8 md:p-10">
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">Location Service Page</span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              {service.name} in {location.name}, {business.city}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.whatsappHref} className="btn-whatsapp">
                WhatsApp for {location.name}
              </a>
              <a href={business.phoneHref} className="btn-secondary border-white/10 bg-white/5 text-white">
                Call for Fast Booking
              </a>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <strong className="block font-display text-2xl font-semibold tracking-[-0.04em]">
                  {location.responseTime}
                </strong>
                <span className="text-sm text-white/70">expected response window</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <strong className="block font-display text-2xl font-semibold tracking-[-0.04em]">
                  {nearbyLocations.length}
                </strong>
                <span className="text-sm text-white/70">nearby linked areas</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <strong className="block font-display text-2xl font-semibold tracking-[-0.04em]">
                  {location.landmark}
                </strong>
                <span className="text-sm text-white/70">local landmark reference</span>
              </div>
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Local Intro"
              title={`Doorstep ${service.name} in ${location.name}`}
              description={`Localized content for ${location.name} with real service context, nearby links, and local booking relevance.`}
            />
            <div className="space-y-4 text-sm leading-7 text-smoke md:text-base">
              {contentBlocks.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Types Covered"
              title={`Types of ${service.name}`}
              description="Local pages include service variants so the page answers real user intent instead of only repeating one keyword."
            />
            <div className="grid gap-3 md:grid-cols-2">
              {service.types.map((type) => (
                <div key={type} className="rounded-3xl border border-line bg-paper px-4 py-3 text-sm font-medium">
                  {type}
                </div>
              ))}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Why Choose Us"
              title={`Why customers in ${location.name} choose ${business.name}`}
            />
            <div className="grid gap-4 md:grid-cols-3">
              {trustHighlights.map((item) => (
                <article key={item.title} className="rounded-[1.5rem] border border-line bg-paper p-5">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Related Services"
              title={`Related AC services in ${location.name}`}
              description="Each area page links related services for the same location to strengthen internal linking and cross-service discovery."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link key={related.slug} href={related.href} className="panel-card p-5">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{related.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">{related.shortDescription}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Nearby Areas"
              title={`Nearby areas for ${service.name}`}
              description="Local pages always link the main city page and nearby area pages for the same service."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={getEntryLocationHref(service.slug, nearby.slug)}
                  className="panel-card p-5"
                >
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                    {service.name} in {nearby.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">
                    Nearby route for {service.sentence} around {nearby.landmark}.
                  </p>
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold">
              <Link href={getMainServiceHref(service.slug)}>
                Back to the main {service.name} page for Vadodara
              </Link>
            </p>
          </section>

          <section id="process" className="panel-card p-6 md:p-8">
            <SectionTitle eyebrow="Process" title="How the visit works" />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["1", "Call", `Share your location in ${location.name} and the AC issue.`],
                ["2", "Visit", "A local technician reaches your doorstep for inspection."],
                ["3", "Service or Repair", "We explain the scope and complete the required AC support."],
                ["4", "Done", "Cooling and airflow are checked before the job is closed."]
              ].map(([num, title, text]) => (
                <article key={num} className="rounded-[1.5rem] border border-line bg-paper p-5">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-ink text-sm font-bold text-white">
                    {num}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle eyebrow="FAQs" title={`Questions about ${service.name} in ${location.name}`} />
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-line bg-paper p-5">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel-dark p-8">
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">Call To Action</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">{cta.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{cta.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.whatsappHref} className="btn-whatsapp">
                WhatsApp Booking
              </a>
              <a href={business.phoneHref} className="btn-secondary border-white/10 bg-white/5 text-white">
                Call Now
              </a>
            </div>
          </section>
        </div>

        <aside className="panel-dark h-fit p-6 lg:sticky lg:top-24">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">{location.name} Quick Info</h3>
          <p className="mt-3 text-sm leading-7 text-white/70">
            {service.name} near {location.landmark} with local response support.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href={business.whatsappHref} className="btn-whatsapp">
              WhatsApp
            </a>
            <a href={business.phoneHref} className="btn-secondary border-white/10 bg-white/5 text-white">
              Call
            </a>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-white/70">
            <span>Response Time: {location.responseTime}</span>
            <span>Coverage: {location.context}</span>
            <Link href={getMainServiceHref(service.slug)}>
              Main Service: {service.name} in Vadodara
            </Link>
            <span>Hours: {business.serviceHours}</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
