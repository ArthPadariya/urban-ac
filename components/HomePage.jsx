import Image from "next/image";
import Link from "next/link";
import { HomeServiceCards } from "./HomeServiceCards";
import { RotatingHeroVisual } from "./RotatingHeroVisual";
import { LocationsMotionStyles } from "./LocationsMotionStyles";
import {
  business,
  locations,
  services,
  topLocations
} from "../data/site-data";

const whyCardClass =
  "group relative overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-transparent hover:shadow-[0_18px_38px_rgba(15,23,42,0.1)] active:scale-[0.98]";

const reviewCardClass =
  "group relative rounded-2xl border border-[#e9edf5] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)] active:scale-[0.98]";

const whyChooseUs = [
  {
    title: "Fast local AC service in Vadodara",
    text: "Our area-based routing helps technicians reach locations like Sama, Alkapuri, Karelibaug, and Gotri quickly for faster AC service response."
  },
  {
    title: "Same-day AC repair support",
    text: "We offer same-day AC repair in Vadodara when slots are available, especially for urgent cooling issues and breakdowns."
  },
  {
    title: "Expert AC technicians",
    text: "Our team handles split AC, window AC, and inverter AC units, including repair, installation, cleaning, gas filling, and PCB faults."
  },
  {
    title: "Doorstep AC service",
    text: "Get complete AC service at home or office without moving your unit, including inspection, repair, and maintenance support."
  },
  {
    title: "Transparent AC service process",
    text: "We explain the AC issue, required service, and expected work clearly before starting, ensuring no confusion."
  },
  {
    title: "Coverage across 20+ areas",
    text: "Urban AC serves multiple areas in Vadodara with dedicated pages, local FAQs, and easy booking options for faster service."
  }
];

const reviews = [
  {
    title: "Quick service in Vasna",
    name: "Riya",
    location: "Vasna",
    text: "Booked AC service in the morning and the technician reached our society the same day with a clear explanation of the work."
  },
  {
    title: "Neat split AC repair",
    name: "Amit",
    location: "Akota",
    text: "Our split AC stopped cooling properly and Urban AC diagnosed the issue quickly without making the process confusing."
  },
  {
    title: "Helpful cleaning support",
    name: "Nidhi",
    location: "Harni",
    text: "The AC cleaning service removed the smell and improved airflow noticeably. The visit felt organized and professional."
  }
];

function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mb-9 text-center md:mb-10" : "mb-9 md:mb-10"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe7f5] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
        {eyebrow}
      </span>
      <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#0B0B0B] md:text-4xl">
        {title}
      </h2>
      <p
        className={`text-[15px] leading-relaxed text-[#555] md:text-base ${
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.75a6.25 6.25 0 0 0-6.25 6.25c0 4.4 5.04 10.18 5.25 10.42a1.33 1.33 0 0 0 2 0c.21-.24 5.25-6.02 5.25-10.42A6.25 6.25 0 0 0 12 2.75Zm0 8.5A2.25 2.25 0 1 1 12 6.75a2.25 2.25 0 0 1 0 4.5Z" />
    </svg>
  );
}

export function HomePage() {
  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <LocationsMotionStyles />

      <section className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#F4F8FF_62%,#FFFFFF_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.02fr] lg:gap-12">
          <div className="relative z-10 motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe7f5] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
              Urban AC Vadodara
            </span>
            <h1 className="mb-6 mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-[#0B0B0B] md:text-5xl lg:text-6xl">
              AC Service, Repair & Installation at Your Doorstep
            </h1>
            <p className="mb-6 max-w-xl text-[16px] leading-relaxed text-[#555] md:text-[17px]">
              {business.name} provides professional AC service, repair, installation, gas filling, PCB repair, AMC maintenance, and deep AC cleaning across Vadodara. Our experienced technicians handle split AC, window AC, and inverter AC units with fast diagnosis and reliable solutions.
            
            </p>
            
            <div className="mb-6 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl bg-[#0B0B0B] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(11,11,11,0.14)] transition-all duration-300 hover:scale-[1.03] hover:bg-black hover:shadow-[0_18px_34px_rgba(11,11,11,0.18)] active:scale-[0.97]"
              >
                Call Now
              </Link>
              <a
                href={business.whatsappHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(34,197,94,0.18)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#16a34a] hover:shadow-[0_18px_34px_rgba(34,197,94,0.24)] active:scale-[0.97]"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {[" Same-day AC service in Vadodara", "Expert Split & Window AC Technicians", "Fast Cooling Issue Diagnosis & Repair", "Service coverage across 20+ areas"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dfe7f5] bg-white px-4 py-2 text-sm font-medium text-[#555] shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="motion-safe:animate-[locationsFadeUp_0.82s_ease-out_both] [animation-delay:120ms]">
            <RotatingHeroVisual />
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Clear communication, quick response, and practical AC support."
            description="We keep the process simple so customers can understand the service, the timing, and the likely solution before the work begins."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {whyChooseUs.map((item, index) => (
              <article
                key={item.title}
                className={`${whyCardClass} motion-safe:animate-[locationsFadeUp_0.72s_ease-out_both]`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div
                  className={`absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                    [
                      "bg-[#eef6ff]",
                      "bg-[#f0fdf4]",
                      "bg-[#fff7ed]",
                      "bg-[#f5f3ff]",
                      "bg-[#eef6ff]",
                      "bg-[#f0fdf4]"
                    ][index]
                  }`}
                />
                <div className="relative flex h-full flex-col">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe6f6] bg-white text-sm font-bold text-[#0B0B0B] transition-all duration-300 group-hover:border-[#cfdcf2] group-hover:bg-white group-hover:text-[#111]">
                    0{index + 1}
                  </span>
                  <h3 className="mb-2 text-lg font-extrabold tracking-tight text-[#0B0B0B] transition-colors duration-300 group-hover:text-[#111]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#555] transition-colors duration-300 group-hover:text-[#111]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EEF4FF] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Services"
            title="Professional AC services across Vadodara."
            description="Choose the service you need, then move into the main city page or local area route for quicker booking."
          />
          <HomeServiceCards services={services} />
        </div>
      </section>

      <section id="areas" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Areas We Serve"
            title="AC Service Coverage Across Vadodara Areas & Nearby Locations"
            description="Start with the most searched local routes or move through the city pages to find the right area faster."
          />
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {topLocations.map((slug, index) => {
              const location = locations.find((item) => item.slug === slug);
              return (
                <Link
                  key={slug}
                  href={`/ac-service-${slug}`}
                  className="flex min-h-[44px] w-full items-center justify-center gap-1 whitespace-nowrap rounded-full border border-[#dce4f2] bg-[#F4F8FF] px-3 py-2.5 text-center text-sm font-semibold text-[#555] shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white active:scale-[0.97] active:bg-[#0B0B0B] active:text-white motion-safe:animate-[locationsFadeUp_0.72s_ease-out_both]"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <span className="flex items-center gap-1">
                    📍 {location.name}
                  </span>
                </Link>
              );
            })}
            {locations
              .filter((location) => !topLocations.includes(location.slug))
              .map((location, index) => (
                <Link
                  key={location.slug}
                  href={`/ac-service-${location.slug}`}
                  className="flex min-h-[44px] w-full items-center justify-center gap-1 whitespace-nowrap rounded-full border border-[#dce4f2] bg-[#F4F8FF] px-3 py-2.5 text-center text-sm font-semibold text-[#555] shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white active:scale-[0.97] active:bg-[#0B0B0B] active:text-white motion-safe:animate-[locationsFadeUp_0.72s_ease-out_both]"
                  style={{ animationDelay: `${(index + topLocations.length) * 45}ms` }}
                >
                  <span className="flex items-center gap-1">
                    📍 {location.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#F4F8FF] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="motion-safe:animate-[locationsFadeUp_0.75s_ease-out_both]">
            <SectionHeader
              eyebrow="Expert Care"
              title="Professional AC Service, Repair & Installation in Vadodara"
              description="Every booking is aligned with your AC condition and your service location, allowing faster response across key areas of Vadodara."
            />
            <p className="mb-4 max-w-2xl text-sm leading-7 text-[#555] md:text-base">
              We offer professional AC service in Vadodara covering repair, servicing, installation, gas filling, PCB repair, and complete cleaning solutions for both split and window AC units. Our technicians focus on accurate diagnosis, efficient work, and long-lasting cooling performance.
            </p>
            <p className="max-w-2xl text-sm leading-7 text-[#555] md:text-base">
              Looking for AC service near me in Vadodara? Our structured service pages and local area coverage make it simple to choose the right service and book directly for your neighborhood without confusion.
            </p>
          </div>

          <div className="motion-safe:animate-[locationsFadeUp_0.84s_ease-out_both] [animation-delay:120ms]">
            <div className="group relative overflow-hidden rounded-[28px] border border-[#dfe7f5] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <div className="pointer-events-none absolute -right-14 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_70%)]" />
              <div className="pointer-events-none absolute -left-6 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.12),transparent_72%)]" />
              <Image
                src="/home-tech-expert.jpeg"
                alt="Urban AC service in Vadodara"
                width={474}
                height={560}
                className="relative mx-auto h-auto max-h-[520px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Reviews"
            title="Customer Reviews for AC Service & Repair in Vadoda"
            description="Short, readable reviews help users understand the service experience before they book."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={review.title}
                className={`${reviewCardClass} motion-safe:animate-[locationsFadeUp_0.76s_ease-out_both]`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex gap-1 text-[#16a34a]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg key={starIndex} width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="rounded-full border border-[#dff1e7] bg-[#f3fbf6] px-3 py-1 text-[11px] font-semibold text-[#15803d]">
                    {review.title}
                  </span>
                </div>
                <p className="mb-8 text-[14px] leading-7 tracking-[-0.01em] text-[#303030]">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-[#edf2f7] pt-4">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#0B0B0B] text-[24px] font-extrabold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[15px] font-extrabold text-[#0B0B0B]">{review.name}</div>
                    <div className="text-[13px] text-[#8f98a5]">{review.location}, Vadodara</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(0,0,0,0.26)]">
            <div className="flex flex-col items-center justify-between gap-8 px-6 py-8 md:flex-row md:py-10">
              <div className="max-w-xl">
                <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Book Today
                </span>
                <h3 className="mb-3 text-3xl font-bold tracking-tight text-white">
                  Ready to book AC service in Vadodara?
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                  Call or WhatsApp now for faster support, clear updates, and the right local service route for your area.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0B0B0B] transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5f5f5] active:scale-[0.97]"
                >
                  Call Now
                </Link>
                <a
                  href={business.whatsappHref}
                  className="inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#16a34a] active:scale-[0.97]"
                >
                  WhatsApp
                </a>
              </div>
              <img
                src="/home-cta-1.png"
                alt="AC technician"
                className="w-[180px] max-h-[220px] object-contain md:w-[220px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
