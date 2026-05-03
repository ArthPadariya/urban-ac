import Image from "next/image";
import Link from "next/link";
import { business } from "../data/site-data";
import { LocationsMotionStyles } from "./LocationsMotionStyles";

const featureRows = [
  "Fast doorstep service",
  "Verified technicians",
  "Affordable pricing",
  "Same-day availability",
  "Quality tools & techniques"
];

const benefitPoints = [
  "Professional AC technicians",
  "Deep cleaning & repair",
  "Eco-friendly solutions",
  "Better cooling performance",
  "Longer AC life",
  "Transparent pricing"
];

const processPoints = [
  {
    title: "Inspection and issue review",
    text: "We start with a quick check of cooling performance, airflow, drainage, wiring, and the overall unit condition."
  },
  {
    title: "Service, cleaning, or repair",
    text: "Based on the complaint, the technician handles dust buildup, weak cooling, gas pressure checks, component faults, or installation support."
  },
  {
    title: "Testing before completion",
    text: "Every job ends with a final cooling and performance test so the customer understands the result before we leave."
  }
];

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555]">
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#22c55e]/25 bg-[#22c55e]/10">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export function AboutPage() {
  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <LocationsMotionStyles />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div className="motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]">
            <SectionEyebrow>About Urban AC</SectionEyebrow>
            <h1 className="mb-6 mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
              Reliable AC Services in Vadodara You Can Trust
            </h1>
            <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-[#555] md:text-[17px]">
              We provide fast, professional AC repair, installation, and cleaning services across Vadodara.
              Our goal is simple - deliver reliable cooling solutions with honest pricing and expert technicians.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-black active:scale-[0.97]"
              >
                Call Now
              </a>
              <a
                href={business.whatsappHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#16a34a] active:scale-[0.97]"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Same-day service support", "Doorstep AC technicians", "Coverage across Vadodara"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#555]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="motion-safe:animate-[locationsFadeUp_0.8s_ease-out_both] [animation-delay:120ms]">
            <div className="group relative overflow-hidden rounded-[28px] border border-[#eee] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
              <div className="pointer-events-none absolute -right-16 top-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_70%)]" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.14),transparent_72%)]" />
              <div className="relative">
                <Image
                  src="/about-tech-cleaning.jpeg"
                  alt="Urban AC technician illustration cleaning an AC unit"
                  width={832}
                  height={1280}
                  priority
                  className="mx-auto h-auto max-h-[620px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-4 left-4 max-w-[220px] rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.12)] backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[#eee]">
                      <Image
                        src="/sama-installation-tech-real.jpg"
                        alt="Real AC technician support"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#111]">Real local support</div>
                      <div className="text-xs text-[#666]">Professional doorstep technicians across Vadodara.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center md:mb-12">
            <SectionEyebrow>Every Time With Us</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Every Time with Urban AC
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="motion-safe:animate-[locationsFadeUp_0.8s_ease-out_both]">
              <div className="group relative overflow-hidden rounded-[28px] border border-[#eee] bg-white p-6 shadow-[0_20px_55px_rgba(0,0,0,0.1)]">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-36 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_72%)]" />
                <Image
                  src="/about-tech-repair.jpeg"
                  alt="Urban AC technician illustration repairing an AC unit"
                  width={832}
                  height={1280}
                  className="relative mx-auto h-auto max-h-[580px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="motion-safe:animate-[locationsFadeUp_0.9s_ease-out_both] [animation-delay:120ms]">
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-[#111] md:text-[2.2rem]">
                Why Choose Our AC Services
              </h3>
              <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
                Urban AC is built around dependable service, clear communication, and local response planning
                that helps customers feel confident before the visit even begins.
              </p>
              <div className="space-y-4">
                {featureRows.map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-4 rounded-2xl border border-[#eee] bg-white px-5 py-4 shadow-[0_8px_22px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] active:scale-[0.98]"
                  >
                    <CheckIcon />
                    <div>
                      <div className="text-[15px] font-semibold text-[#111]">{item}</div>
                      <p className="mt-1 text-sm leading-6 text-[#666]">
                        Designed to keep the service experience simple, fast, and professional.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center md:mb-12">
            <SectionEyebrow>Service Process</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              How Our AC Service Works
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.96fr] lg:gap-16">
            <div className="motion-safe:animate-[locationsFadeUp_0.8s_ease-out_both]">
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-[#111] md:text-[2.1rem]">
                Professional AC Service Process in Vadodara
              </h3>
              <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
                Our process covers inspection, cleaning, repair, installation checks, and gas-filling support
                with a practical focus on restoring cooling performance and avoiding repeat issues.
              </p>
              <div className="space-y-4">
                {processPoints.map((item, index) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-[#eee] bg-[#fafafa] p-5 shadow-[0_8px_22px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_42px_rgba(0,0,0,0.08)] active:scale-[0.98]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-sm font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#22c55e]">
                        0{index + 1}
                      </span>
                      <h4 className="text-[17px] font-bold tracking-tight text-[#111]">{item.title}</h4>
                    </div>
                    <p className="text-sm leading-7 text-[#666]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="motion-safe:animate-[locationsFadeUp_0.9s_ease-out_both] [animation-delay:120ms]">
              <div className="group relative overflow-hidden rounded-[28px] border border-[#eee] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
                <div className="pointer-events-none absolute -bottom-10 right-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.14),transparent_70%)]" />
                <Image
                  src="/about-tech-cleaning.jpeg"
                  alt="Technician illustration working on AC service process"
                  width={832}
                  height={1280}
                  className="relative mx-auto h-auto max-h-[560px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center md:mb-12">
            <SectionEyebrow>Benefits</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              What You Get With Our Service
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="motion-safe:animate-[locationsFadeUp_0.8s_ease-out_both]">
              <div className="rounded-[28px] border border-[#eee] bg-white p-8 shadow-[0_16px_45px_rgba(0,0,0,0.08)]">
                <p className="mb-4 text-[15px] leading-8 text-[#555] md:text-base">
                  We focus on practical AC service that improves cooling, protects long-term performance,
                  and keeps the booking experience clear from the first call to final testing.
                </p>
                <p className="text-[15px] leading-8 text-[#555] md:text-base">
                  Whether the need is routine servicing, deep cleaning, repair work, installation support,
                  or gas filling, the goal stays the same: deliver dependable help without confusing the customer.
                </p>
              </div>
            </div>

            <div className="motion-safe:animate-[locationsFadeUp_0.9s_ease-out_both] [animation-delay:120ms]">
              <div className="grid gap-4 sm:grid-cols-2">
                {benefitPoints.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-2xl border border-[#eee] bg-white px-5 py-4 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_42px_rgba(0,0,0,0.08)] active:scale-[0.98]"
                  >
                    <CheckIcon />
                    <span className="text-sm font-semibold text-[#111]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="group relative overflow-hidden rounded-[28px] bg-[#0f172a] px-8 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 md:bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] md:hover:-translate-y-1 md:hover:shadow-[0_32px_90px_rgba(0,0,0,0.28)] md:px-10 lg:px-12">
            <div className="pointer-events-none absolute -left-14 top-0 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)] md:block" />
            <div className="pointer-events-none absolute right-20 top-10 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.2),transparent_72%)] md:block" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_320px]">
              <div className="relative z-10 max-w-2xl">
                <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                  Quick Booking
                </span>
                <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em] text-white">
                  Need Fast AC Service in Vadodara?
                </h2>
                <p className="max-w-xl text-[15px] leading-7 text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] md:text-base md:text-white/72 md:[text-shadow:none]">
                  Book instantly via call or WhatsApp and get quick doorstep support.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center rounded-[14px] bg-white px-6 py-3.5 text-sm font-bold text-[#111] shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5f5f5] active:scale-[0.97]"
                  >
                    Call Now
                  </a>
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
                  alt="Urban AC technician cartoon"
                  width={280}
                  height={420}
                  className="h-auto w-[220px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] motion-safe:animate-[locationsFloat_3.2s_ease-in-out_infinite] md:-mb-10 md:-mr-4 lg:w-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[28px] border border-[#eee] bg-white px-8 py-10 text-center shadow-[0_18px_45px_rgba(0,0,0,0.08)] md:px-10">
            <SectionEyebrow>Coverage</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Serving All Areas of Vadodara
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
              Explore our location pages to find area-specific AC services, quicker local routing,
              and direct booking options near your home or office.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/locations"
                className="inline-flex items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] active:scale-[0.97]"
              >
                View Locations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

