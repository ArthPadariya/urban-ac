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

const cardEdgeVariants = [
  "bg-gradient-to-b from-green-500 to-green-400",
  "bg-gradient-to-b from-blue-500 to-blue-400",
  "bg-gradient-to-b from-orange-500 to-orange-400",
  "bg-gradient-to-b from-purple-500 to-purple-400"
];

function ChecklistCard({ title, text, index }) {
  const edgeClassName = cardEdgeVariants[index % cardEdgeVariants.length];

  return (
    <div className="group relative flex items-start gap-3 overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
      <span className={`absolute left-0 top-0 h-full w-[4px] opacity-0 transition-all duration-300 group-hover:opacity-100 ${edgeClassName}`} />
      <span className={`absolute right-0 top-0 h-full w-[4px] opacity-0 transition-all duration-300 group-hover:opacity-100 ${edgeClassName}`} />
      <div>
        <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">{title}</h3>
        {text ? <p className="mt-2 text-sm leading-7 text-smoke">{text}</p> : null}
      </div>
    </div>
  );
}

function FaqCard({ question, answer }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-green-500 hover:shadow-sm">
      <span className="absolute left-0 top-0 h-full w-[3px] bg-green-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">{question}</h3>
      <p className="mt-3 text-sm leading-7 text-smoke">{answer}</p>
    </div>
  );
}

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
      <div className="site-container">
        <section className="border-b border-black/10 pb-12">
          <span className="eyebrow">Local Service Page</span>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-5">
              <h1 className="font-display text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
                {service.name} in {location.name}, {business.city}
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-smoke md:text-base">{intro}</p>
              <div className="flex flex-wrap gap-3">
                <a href={business.phoneHref} className="btn-primary">
                  Call Now
                </a>
                <a href={business.whatsappHref} className="btn-whatsapp">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-3 border-t border-black/10 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <p className="text-sm font-medium text-smoke">Local Response Window</p>
              <p className="font-display text-3xl font-semibold tracking-[-0.03em]">{location.responseTime}</p>
              <p className="text-sm leading-7 text-smoke">
                Coverage around {location.landmark} and nearby streets in {location.name}.
              </p>
            </div>
          </div>
        </section>

        <section className="surface-line">
          <SectionTitle
            eyebrow="Service Details"
            title={`How ${service.name} works in ${location.name}`}
            description="This page combines local service context, real issue coverage, and nearby area links for users searching within the location."
          />
          <div className="space-y-4 text-sm leading-7 text-smoke md:text-base">
            {contentBlocks.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="surface-line">
          <SectionTitle
            eyebrow="Types Covered"
            title={`Types of ${service.name}`}
            description="We support both split AC and window AC needs, depending on the model and condition of the unit."
          />
          <div className="grid gap-3 md:grid-cols-2">
            {service.types.map((type, index) => (
              <ChecklistCard key={type} title={type} index={index} />
            ))}
          </div>
        </section>

        <section className="surface-line">
          <SectionTitle
            eyebrow="Why Choose Us"
            title={`Why customers in ${location.name} choose ${business.name}`}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {trustHighlights.map((item, index) => (
              <ChecklistCard key={item.title} title={item.title} text={item.text} index={index} />
            ))}
          </div>
        </section>

        <section className="surface-line">
          <SectionTitle
            eyebrow="Related Services"
            title={`Related AC services in ${location.name}`}
            description="Use these local links if you are comparing the right service before booking."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((related) => (
              <div key={related.slug} className="space-y-3 border-b border-black/10 pb-5">
                <Link href={related.href} className="font-display text-2xl font-semibold tracking-[-0.03em] hover:underline">
                  {related.name}
                </Link>
                <p className="text-sm leading-7 text-smoke">{related.shortDescription}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="surface-line">
          <SectionTitle
            eyebrow="Nearby Areas"
            title={`Nearby areas for ${service.name}`}
            description="Each local page links nearby areas and the main city service page for smoother internal navigation."
          />
          <div className="flex flex-wrap gap-3">
            {nearbyLocations.map((nearby) => (
              <Link
                key={nearby.slug}
                href={getEntryLocationHref(service.slug, nearby.slug)}
                className="pill-link inline-flex min-h-[44px] w-auto items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-center text-sm hover:border-ink"
              >
                <span className="inline-flex items-center gap-2 whitespace-nowrap">📍 {nearby.name}</span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-smoke">
            <Link href={getMainServiceHref(service.slug)} className="underline underline-offset-4">
              Back to the main {service.name} page for Vadodara
            </Link>
          </p>
        </section>

        <section id="process" className="surface-line">
          <SectionTitle eyebrow="Process" title="How the visit works" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["1", "Call", `Share your location in ${location.name} and the AC issue.`],
              ["2", "Visit", "A local technician reaches your doorstep for inspection."],
              ["3", "Service or Repair", "We explain the scope and complete the required support."],
              ["4", "Done", "Cooling and airflow are checked before the job is closed."]
            ].map(([num, title, text]) => (
              <div key={num} className="space-y-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-bold text-white">
                  {num}
                </div>
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="text-sm leading-7 text-smoke">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="surface-line">
          <SectionTitle eyebrow="FAQs" title={`Questions about ${service.name} in ${location.name}`} />
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <FaqCard key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-2xl bg-ink text-white">
          <div className="flex flex-col items-center justify-between gap-8 px-6 py-8 md:flex-row md:py-10">
            <div className="max-w-xl">
              <span className="eyebrow border-white/10 bg-white/5 text-white/70">Book Today</span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">{cta.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{cta.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={business.phoneHref} className="btn-primary">
                  Call Now
                </a>
                <a href={business.whatsappHref} className="btn-whatsapp">
                  WhatsApp
                </a>
              </div>
            </div>
            <img
              src="/home-cta-1.png"
              alt="Urban AC technician"
              className="w-[180px] max-h-[220px] object-contain md:w-[220px]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

