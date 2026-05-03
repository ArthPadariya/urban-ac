import Image from "next/image";
import Link from "next/link";
import {
  business,
  getEntryLocationHref,
  getNearbyLocations,
  services
} from "../data/site-data";
import { LocationsMotionStyles } from "./LocationsMotionStyles";

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555]">
      {children}
    </span>
  );
}

export function LocationSlugPage({ location }) {
  const nearbyAreas = getNearbyLocations(location);

  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <LocationsMotionStyles />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
          <div className="motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]">
            <SectionEyebrow>Area Coverage</SectionEyebrow>
            <h1 className="mb-6 mt-5 text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.03em] text-[#111]">
              AC Services in {location.name}
            </h1>
            <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-[#555] md:text-[17px]">
              Explore AC repair, AC service, AC installation, gas filling, AMC, split AC repair,
              PCB repair, and AC cleaning support around {location.landmark} with local booking
              options in {location.name}, Vadodara.
            </p>
            <div className="flex flex-wrap gap-3">
              {[location.responseTime, "Local service routing", "Call + WhatsApp booking"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#555]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="motion-safe:animate-[locationsFadeUp_0.8s_ease-out_both] [animation-delay:120ms]">
            <div className="group relative overflow-hidden rounded-[28px] border border-[#eee] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
              <Image
                src="/ac-installation2.jpg"
                alt={`AC service support in ${location.name}`}
                width={1120}
                height={820}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-12">
            <SectionEyebrow>Services in {location.name}</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Choose the AC service you need in {location.name}
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
              Jump directly into the right local service route and book faster with area-specific coverage details.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={getEntryLocationHref(service.slug, location.slug)}
                className="group relative overflow-hidden rounded-2xl border border-[#eee] bg-white p-7 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] active:scale-[0.97] motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(34,197,94,0.06))] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <span className="mb-4 inline-flex w-fit rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#555]">
                    {location.name}
                  </span>
                  <h3 className="mb-3 text-xl font-extrabold tracking-tight text-[#111]">{service.name}</h3>
                  <p className="mb-5 text-sm leading-7 text-[#555]">{service.shortDescription}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#111] transition-all duration-300 group-hover:gap-3">
                    <span>Open local page</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16">
          <div className="motion-safe:animate-[locationsFadeUp_0.8s_ease-out_both]">
            <SectionEyebrow>Trusted in {location.name}</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Local AC support built for quicker conversions
            </h2>
            <p className="mb-4 max-w-xl text-[15px] leading-relaxed text-[#555] md:text-base">
              This location page connects customers from {location.name} directly to the right service route, so they can book without bouncing through unrelated pages.
            </p>
            <div className="space-y-3">
              {[
                `Coverage around ${location.landmark}`,
                `Response planning around ${location.responseTime}`,
                "Fast call and WhatsApp booking support"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-[#555]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="motion-safe:animate-[locationsFadeUp_0.9s_ease-out_both] [animation-delay:120ms]">
            <div className="group relative overflow-hidden rounded-[28px] border border-[#eee] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
              <Image
                src="/ac-installation3.jpg"
                alt={`AC technician support in ${location.name}`}
                width={1120}
                height={840}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-12">
            <SectionEyebrow>Nearby Areas</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Explore nearby AC coverage around {location.name}
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
              Move into nearby area routes if your property is closer to another part of Vadodara.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="rounded-full border border-[#ddd] bg-white px-5 py-2.5 text-sm font-semibold text-[#555] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111] hover:bg-[#111] hover:text-white active:scale-[0.97] active:bg-[#111] active:text-white"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] px-8 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.24)] md:px-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="mb-4 text-[clamp(1.9rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em] text-white">
                  Book AC Service in {location.name}
                </h2>
                <p className="max-w-2xl text-[15px] leading-7 text-white/72 md:text-base">
                  Call or WhatsApp now and get connected to the right service page for {location.name}, Vadodara.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center justify-center rounded-[14px] bg-white px-6 py-3.5 text-sm font-bold text-[#111] transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5f5f5] active:scale-[0.97]"
                >
                  Call Now
                </a>
                <a
                  href={business.whatsappHref}
                  className="inline-flex items-center justify-center rounded-[14px] bg-[#22c55e] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#16a34a] active:scale-[0.97]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

