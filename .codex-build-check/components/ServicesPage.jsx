import Link from "next/link";
import { getMainServiceHref } from "../data/site-data";
import { LocationsMotionStyles } from "./LocationsMotionStyles";

const serviceCardClass =
  "service-hover-card group relative mx-auto block h-full w-full max-w-[90%] cursor-pointer overflow-hidden rounded-xl border border-[#e5e7eb] bg-white px-4 py-4 text-[#111] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-200 ease-out active:scale-[0.97] md:max-w-none md:rounded-2xl md:px-6 md:py-6 md:duration-300 md:hover:-translate-y-2 md:hover:scale-[1.01] md:hover:border-transparent";

const servicesPageData = [
  {
    slug: "ac-repair",
    title: "AC Repair",
    description:
      "Fast fault diagnosis and same-day repair support for split and window AC units across Vadodara.",
    bullets: ["Split AC Repair", "Window AC Repair", "Cooling Issue Repair"]
  },
  {
    slug: "ac-service",
    title: "AC Service",
    description:
      "Routine AC service with cleaning, inspection, and performance checks for healthier and more efficient cooling.",
    bullets: ["Split AC Service", "Window AC Service", "AC Performance Check"]
  },
  {
    slug: "ac-installation",
    title: "AC Installation",
    description:
      "Professional installation and relocation support for split and window AC units with proper setup and testing.",
    bullets: ["Split AC Installation", "Window AC Installation", "AC Reinstallation"]
  },
  {
    slug: "ac-gas-filling",
    title: "AC Gas Filling",
    description:
      "Refrigerant inspection and gas filling service for weak cooling, pressure issues, and leak-related performance drops.",
    bullets: ["Split AC Gas Filling", "Window AC Gas Filling", "R32 Filling"]
  },
  {
    slug: "ac-maintenance-amc",
    title: "AC Maintenance (AMC)",
    description:
      "Annual maintenance support with scheduled visits, periodic servicing, and priority assistance across Vadodara.",
    bullets: ["Home AMC Plan", "Office AMC Plan", "Periodic AC Maintenance"]
  },
  {
    slug: "split-ac-repair",
    title: "Split AC Repair",
    description:
      "Targeted repair support for split AC cooling faults, leakage, sensor issues, and indoor-outdoor unit problems.",
    bullets: ["Indoor Unit Repair", "Outdoor Unit Repair", "Sensor Fault Repair"]
  },
  {
    slug: "ac-pcb-repair",
    title: "AC PCB Repair",
    description:
      "Electronic control board diagnosis and repair for error codes, voltage damage, and unpredictable AC behavior.",
    bullets: ["Inverter PCB Repair", "Sensor Circuit Repair", "Relay & Voltage Fault Work"]
  },
  {
    slug: "ac-cleaning-service",
    title: "AC Cleaning Service",
    description:
      "Deep AC cleaning for filters, coils, blower, and drain lines to improve cooling and air quality.",
    bullets: ["Split AC Cleaning", "Window AC Cleaning", "Deep Coil Cleaning"]
  }
];

export function ServicesPage() {
  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <LocationsMotionStyles />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center md:mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#111] md:text-5xl">
              Professional AC services across Vadodara.
            </h1>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
              Choose the service you need, then move into the main city page or local area route for quicker booking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {servicesPageData.map((service, index) => (
              <Link
                key={service.slug}
                href={getMainServiceHref(service.slug)}
                className={`${serviceCardClass} motion-safe:animate-[locationsFadeUp_0.74s_ease-out_both]`}
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="service-hover-card-overlay absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 md:rounded-2xl md:group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-3 md:gap-4">
                  <span className="service-hover-badge inline-flex w-fit rounded-full border border-[#dfe7f5] bg-[#F4F8FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#555]">
                    URBAN AC SERVICE
                  </span>
                  <h2 className="text-lg font-bold tracking-tight text-[#111] transition-colors duration-300 group-active:text-white md:text-2xl md:group-hover:text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[#555] transition-colors duration-300 group-active:text-white/90 md:text-base md:leading-7 md:group-hover:text-white/85">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm leading-relaxed text-[#666] transition-colors duration-300 group-active:text-white/85 md:group-hover:text-white/80"
                      >
                        <span className="service-hover-dot mt-2 h-1.5 w-1.5 rounded-full bg-[#0B0B0B]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#0B0B0B] transition-all duration-300 group-active:text-white md:group-hover:gap-2 md:group-hover:text-white">
                    <span>Explore</span>
                    <svg
                      className="transition-transform duration-300 md:group-hover:translate-x-1"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
