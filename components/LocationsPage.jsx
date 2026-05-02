import Image from "next/image";
import Link from "next/link";
import { business, locations } from "../data/site-data";
import { LocationCard } from "./LocationCard";
import { LocationsMotionStyles } from "./LocationsMotionStyles";

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555]">
      {children}
    </span>
  );
}

export function LocationsPage() {
  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <LocationsMotionStyles />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
          <div className="motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]">
            <SectionEyebrow>Areas We Serve</SectionEyebrow>
            <h1 className="mb-6 mt-5 text-[clamp(2.5rem,5vw,4.2rem)] font-black leading-[1.04] tracking-[-0.03em] text-[#111]">
              AC Services Across Vadodara
            </h1>
            <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-[#555] md:text-[17px]">
              Find your area and book AC repair, AC service, AC installation, gas filling, AMC,
              PCB repair, split AC repair, and AC cleaning support with faster local routing.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "20+ location pages",
                "Doorstep AC support",
                "Call or WhatsApp booking"
              ].map((item) => (
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
                src="/ac-installation1.jpg"
                alt="AC technician providing service in Vadodara"
                width={1120}
                height={820}
                priority
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-[16px] border border-white/15 bg-black/70 px-5 py-4 backdrop-blur-xl">
                <div className="text-[13px] font-bold text-white">Localized AC Coverage</div>
                <div className="mt-1 text-[12px] text-white/70">
                  Faster routes, clearer service pages, and local booking support across Vadodara.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="group relative rounded-[28px] bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] px-8 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(0,0,0,0.28)] md:px-10 lg:px-12">
            <div className="pointer-events-none absolute -right-20 -top-16 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.22),transparent_70%)]" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_260px]">
              <div className="relative z-10 max-w-2xl">
                <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                  Quick Booking
                </span>
                <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em] text-white">
                  Need fast AC help anywhere in Vadodara?
                </h2>
                <p className="max-w-xl text-[15px] leading-7 text-white/72 md:text-base">
                  Book by call or WhatsApp and get connected instantly.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-[14px] bg-white px-6 py-3.5 text-sm font-bold text-[#111] shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5f5f5] active:scale-[0.97]"
                  >
                    Call Now
                  </Link>
                  <a
                    href={business.whatsappHref}
                    className="inline-flex items-center justify-center rounded-[14px] bg-[#22c55e] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#16a34a] active:scale-[0.97]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative z-10 hidden justify-center md:flex md:justify-end">
                <Image
                  src="/tech2.png"
                  alt="Urban AC technician illustration"
                  width={240}
                  height={390}
                  className="h-auto w-[200px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] motion-safe:animate-[locationsFloat_3.2s_ease-in-out_infinite] md:-mb-10 md:-mr-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <SectionEyebrow>Locations</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Choose your area in Vadodara
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
              Open your location page, review local AC coverage, and jump straight into the service you need.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {locations.map((location, index) => (
              <LocationCard key={location.slug} location={location} index={index} />
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[26px] border border-[#eee] bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
            <div className="relative text-center">
              <div className="pointer-events-none absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.14),transparent_72%)]" />
              <span className="relative inline-flex rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555] shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
                Smart Support
              </span>
              <h3 className="relative mb-3 mt-5 text-[1.9rem] font-black tracking-tight text-[#111]">
                Can&apos;t find your area?
              </h3>
              <p className="relative mx-auto mb-6 max-w-xl text-[15px] leading-relaxed text-[#666]">
                Share your location by call or WhatsApp and we&apos;ll guide you to the closest service route in Vadodara.
              </p>
              <div className="relative flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] active:scale-[0.97]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16">
          <div className="motion-safe:animate-[locationsFadeUp_0.8s_ease-out_both]">
            <SectionEyebrow>Trusted Local Service</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Reliable AC support with cleaner local routing
            </h2>
            <p className="mb-4 max-w-xl text-[15px] leading-relaxed text-[#555] md:text-base">
              Every area page is designed to make booking simpler, with clear service choices, nearby
              coverage, and fast contact options for households, offices, and commercial spaces.
            </p>
            <div className="space-y-3">
              {[
                "Faster booking based on your exact location",
                "Direct links to service-specific area pages",
                "Call and WhatsApp CTAs visible across the flow"
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
                alt="AC technician supporting local service coverage"
                width={1120}
                height={840}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

