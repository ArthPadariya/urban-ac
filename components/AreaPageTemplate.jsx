import Link from "next/link";
import {
  business,
  getAreaFaqs,
  getLocationIntro,
  getNearbyLocations,
  getRelatedSubservices,
  getServiceOverview,
  serviceMap
} from "../data/site-data";
import { SectionTitle } from "./SectionTitle";

export function AreaPageTemplate({ entry, location }) {
  const faqs = getAreaFaqs(entry, location);
  const nearbyLocations = getNearbyLocations(location);
  const relatedSubservices = getRelatedSubservices(entry.parentService, location.slug);
  const parentService = serviceMap[entry.parentService];
  const overview =
    entry.kind === "subservice"
      ? null
      : getServiceOverview(entry, location.name, location.landmark);

  return (
    <main className="section-pad">
      <div className="site-container grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <section className="panel-dark p-8 md:p-10">
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">
              {entry.kind === "service" ? "Location Service Page" : "Sub-Service Page"}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              {entry.name} in {location.name}, {business.city}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
              {getLocationIntro(entry, location, location.name.length + entry.name.length)}
            </p>
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
                  {relatedSubservices.length}
                </strong>
                <span className="text-sm text-white/70">related sub-services</span>
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
              title={`Doorstep ${entry.name} in ${location.name}`}
              description={`Area-specific content for ${location.name} with practical service details and local coverage references.`}
            />
            <div className="space-y-4 text-sm leading-7 text-smoke md:text-base">
              {(overview ?? [
                `${entry.name} is one of the most useful targeted AC support options for customers who want ${entry.description} without waiting for the issue to become more expensive or harder to diagnose.`,
                `A doorstep visit may include ${entry.includes.join(", ")}, along with practical checks that help confirm the AC is working better after the service. Near ${location.landmark}, this is especially useful for busy households, offices, and rental properties where cooling downtime is disruptive.`,
                `Customers in ${location.name} commonly book ${entry.sentence} because same-day local support is easier to manage when the technician already covers nearby service pockets.`
              ]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-sm text-smoke">
              {entry.includes.map((item) => (
                <li key={item} className="relative pl-4 before:absolute before:mt-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-ink">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
          </section>

          {entry.kind === "service" ? (
            <section className="panel-card p-6 md:p-8">
              <SectionTitle
                eyebrow="Why Choose Us"
                title={`Why customers in ${location.name} choose ${business.name}`}
              />
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["Fast local response", `We usually target ${location.responseTime} for ${location.name}, depending on traffic and current slots.`],
                  ["Area familiarity", `Our team regularly covers ${location.landmark} and nearby service pockets.`],
                  ["Same-day availability", `Same-day booking is available when open slots remain for ${location.name}.`]
                ].map(([title, text]) => (
                  <article key={title} className="rounded-[1.5rem] border border-line bg-paper p-5">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-smoke">{text}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Related Pages"
              title={entry.kind === "service" ? `Related sub-services in ${location.name}` : `Related ${parentService.name} pages in ${location.name}`}
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {entry.kind === "service" ? (
                relatedSubservices.map((subservice) => (
                  <Link key={subservice.slug} href={subservice.href} className="panel-card p-5">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{subservice.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-smoke">
                      {subservice.focus} with local support near {location.landmark}.
                    </p>
                  </Link>
                ))
              ) : (
                <>
                  <Link href={`/${parentService.slug}/${location.slug}`} className="panel-card p-5">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                      {parentService.name} in {location.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-smoke">
                      Main location page for this service with broader details and nearby links.
                    </p>
                  </Link>
                  {getRelatedSubservices(entry.parentService, location.slug)
                    .filter((item) => item.slug !== entry.slug)
                    .map((subservice) => (
                      <Link key={subservice.slug} href={subservice.href} className="panel-card p-5">
                        <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{subservice.name}</h3>
                        <p className="mt-3 text-sm leading-7 text-smoke">
                          Another focused AC support option for the same local route.
                        </p>
                      </Link>
                    ))}
                </>
              )}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Nearby Areas"
              title={`Nearby areas for ${entry.name}`}
              description="Each area page links the parent service and nearby location routes for stronger SEO coverage."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/${entry.slug}/${nearby.slug}`}
                  className="panel-card p-5"
                >
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                    {entry.name} in {nearby.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">
                    Nearby route for {entry.sentence} around {nearby.landmark}.
                  </p>
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold">
              <Link href={`/${parentService.slug}`}>Back to the main {parentService.name} page for Vadodara</Link>
            </p>
          </section>

          <section id="process" className="panel-card p-6 md:p-8">
            <SectionTitle eyebrow="Process" title="How the visit works" />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["1", "Call", `Share your location in ${location.name} and the AC issue.`],
                ["2", "Visit", "A local technician reaches your doorstep for inspection."],
                ["3", "Service or Repair", "We explain the scope and complete the required work."],
                ["4", "Done", "Cooling and airflow are checked before we close the job."]
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
            <SectionTitle eyebrow="FAQs" title={`Questions about ${entry.name} in ${location.name}`} />
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
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">
              Book your {entry.sentence} in {location.name} today.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              Call or WhatsApp {business.name} for quick doorstep support near {location.landmark}.
            </p>
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
            {entry.name} near {location.landmark} with local response support.
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
            <Link href={`/${parentService.slug}`}>Main Service: {parentService.name} in Vadodara</Link>
            <span>Hours: {business.serviceHours}</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
