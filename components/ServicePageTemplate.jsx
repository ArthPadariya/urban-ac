import Link from "next/link";
import {
  business,
  getCityContentBlocks,
  getCityFaqs,
  getCityIntro,
  getCtaContent,
  getMainServiceHref,
  getRelatedServices,
  getTrustHighlights,
  locations
} from "../data/site-data";
import { SectionTitle } from "./SectionTitle";

export function ServicePageTemplate({ service }) {
  const intro = getCityIntro(service);
  const contentBlocks = getCityContentBlocks(service);
  const faqs = getCityFaqs(service);
  const trustHighlights = getTrustHighlights(service);
  const relatedServices = getRelatedServices(service.slug);
  const cta = getCtaContent(service);

  return (
    <main className="section-pad">
      <div className="site-container grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <section className="panel-dark p-8 md:p-10">
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">Main Service Page</span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              {service.name} in {business.city}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.whatsappHref} className="btn-whatsapp">
                Book on WhatsApp
              </a>
              <a href={business.phoneHref} className="btn-secondary border-white/10 bg-white/5 text-white">
                Call {business.phoneDisplay}
              </a>
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Service Details"
              title={`How ${service.name} works in ${business.city}`}
              description="This city page explains the service scope, the AC issues it addresses, and why users move from this hub into local coverage pages."
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
              description="Every service page includes AC variants and use cases so the content stays more useful than a thin keyword page."
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
              title={`Why customers choose ${business.name} for ${service.name}`}
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
              eyebrow="Areas Covered"
              title={`${service.name} in top areas of ${business.city}`}
              description="This main service page links into every local area route for strong internal linking and easier user navigation."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/${service.slug}-${location.slug}`}
                  className="panel-card p-5"
                >
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                    {service.name} in {location.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">
                    Local support near {location.landmark} with an expected response window of {location.responseTime}.
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Related Services"
              title="Explore related AC services"
              description="Service pages connect to relevant city-level routes so users can compare broader support options."
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

          <section className="panel-card p-6 md:p-8" id="process">
            <SectionTitle
              eyebrow="How It Works"
              title="Simple 4-step booking"
              description="The same process carries through every city route and local route."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["1", "Call or WhatsApp", "Tell us the AC type, issue, and preferred area."],
                ["2", "Schedule Visit", "We confirm a practical slot based on service need and route coverage."],
                ["3", "Inspection & Work", "The technician checks the unit and completes the relevant support."],
                ["4", "Testing & Close", "Cooling, airflow, and final performance are checked before the visit ends."]
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
            <SectionTitle eyebrow="FAQs" title={`Questions about ${service.name} in ${business.city}`} />
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
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">Book Today</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">{cta.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{cta.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.whatsappHref} className="btn-whatsapp">
                WhatsApp Now
              </a>
              <a href={business.phoneHref} className="btn-secondary border-white/10 bg-white/5 text-white">
                Call Now
              </a>
            </div>
          </section>
        </div>

        <aside className="panel-dark h-fit p-6 lg:sticky lg:top-24">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">Quick Booking</h3>
          <p className="mt-3 text-sm leading-7 text-white/70">
            {service.name} available across {business.city} with direct call and WhatsApp support.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href={business.whatsappHref} className="btn-whatsapp">
              WhatsApp Booking
            </a>
            <a href={business.phoneHref} className="btn-secondary border-white/10 bg-white/5 text-white">
              Call {business.phoneDisplay}
            </a>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-white/70">
            <span>Response Goal: 30-60 minutes</span>
            <span>Hours: {business.serviceHours}</span>
            <span>Address: {business.address}</span>
            <Link href={getMainServiceHref(service.slug)}>{service.name} main city page</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
