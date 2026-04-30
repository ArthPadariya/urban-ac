import Link from "next/link";
import { business, getServiceFaqs, locations, topLocations } from "../data/site-data";
import { SectionTitle } from "./SectionTitle";

export function ServicePageTemplate({ service }) {
  const faqs = getServiceFaqs(service);

  return (
    <main className="section-pad">
      <div className="site-container grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <section className="panel-dark p-8 md:p-10">
            <span className="eyebrow border-white/10 bg-white/5 text-white/70">Main Service Page</span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              {service.name} in {business.city}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
              {business.name} provides {service.sentence} across {business.city}, {business.state} with
              local doorstep technicians, quick scheduling, and a cleaner booking flow. This page acts
              as the main city-level service hub for users looking for {service.keyword}, AC service
              near me, or a dependable AC technician who can handle homes and offices in major service
              pockets across the city.
            </p>
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
              title={`What ${service.name} Includes`}
              description={`This main service page explains the scope of ${service.sentence}, its common problems, and the location pages connected to it.`}
            />
            <div className="space-y-4 text-sm leading-7 text-smoke md:text-base">
              <p>
                {service.name} usually includes {service.includes.join(", ")}, depending on the unit
                condition and whether the visit is routine or issue-based.
              </p>
              <p>
                Timely {service.sentence} can {service.benefits[0]}, {service.benefits[1]}, {service.benefits[2]}, and{" "}
                {service.benefits[3]}. It also helps address complaints like {service.problems.join(", ")}.
              </p>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {service.types.map((type) => (
                <div key={type} className="rounded-3xl border border-line bg-paper px-4 py-3 text-sm font-medium">
                  {type}
                </div>
              ))}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8">
            <SectionTitle
              eyebrow="Areas Covered"
              title={`${service.name} in Top Areas of ${business.city}`}
              description="Service pages link location pages directly for strong internal linking and better local visibility."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {locations.map((location) => (
                <Link key={location.slug} href={`/${service.slug}/${location.slug}`} className="panel-card p-5">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                    {service.name} in {location.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">
                    Doorstep {service.sentence} near {location.landmark} with response support around{" "}
                    {location.responseTime}.
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="panel-card p-6 md:p-8" id="process">
            <SectionTitle
              eyebrow="How It Works"
              title="Simple 4-Step Booking"
              description="Every service page and location page repeats the same clear flow."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["1", "Call or WhatsApp", "Tell us the AC type, issue, and preferred area."],
                ["2", "Schedule Visit", "We confirm a time slot based on location and urgency."],
                ["3", "Inspection & Work", "Our technician checks the unit and completes the required support."],
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
            <SectionTitle
              eyebrow="FAQs"
              title={`Questions About ${service.name} in ${business.city}`}
            />
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
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">
              Book your {service.sentence} in {business.city} today.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              Use the main service page to compare areas, visit local landing pages, and contact {business.name} in one step.
            </p>
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
            <span>Response Goal: {service.responseTime}</span>
            <span>Top Areas: {topLocations.map((slug) => slug.replace("-", " ")).join(", ")}</span>
            <span>Hours: {business.serviceHours}</span>
            <span>Address: {business.address}</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
