import Link from "next/link";
import {
  business,
  getCityContentBlocks,
  getCityFaqs,
  getCityIntro,
  getCtaContent,
  getRelatedServices,
  getTrustHighlights,
  locations
} from "../data/site-data";

const typeCardVariants = [
  {
    gradient: "linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)",
    shadow: "0 22px 48px rgba(37, 99, 235, 0.22)"
  },
  {
    gradient: "linear-gradient(135deg,#f97316 0%,#ea580c 100%)",
    shadow: "0 22px 48px rgba(249, 115, 22, 0.24)"
  },
  {
    gradient: "linear-gradient(135deg,#22c55e 0%,#16a34a 100%)",
    shadow: "0 22px 48px rgba(34, 197, 94, 0.24)"
  },
  {
    gradient: "linear-gradient(135deg,#4f46e5 0%,#3730a3 100%)",
    shadow: "0 22px 48px rgba(79, 70, 229, 0.24)"
  }
];

const featureListVariants = [
  {
    edge: "bg-gradient-to-b from-green-500 to-green-400",
    glow: "shadow-[0_0_18px_rgba(34,197,94,0.16)]"
  },
  {
    edge: "bg-gradient-to-b from-blue-500 to-blue-400",
    glow: "shadow-[0_0_18px_rgba(59,130,246,0.16)]"
  },
  {
    edge: "bg-gradient-to-b from-orange-500 to-orange-400",
    glow: "shadow-[0_0_18px_rgba(249,115,22,0.16)]"
  },
  {
    edge: "bg-gradient-to-b from-purple-500 to-purple-400",
    glow: "shadow-[0_0_18px_rgba(168,85,247,0.16)]"
  }
];

function Chip({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] ${
        dark
          ? "border-[#22c55e]/30 bg-[#22c55e]/12 text-[#22c55e]"
          : "border-[#e5e5e5] bg-[#f5f5f5] text-[#555]"
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeader({ chip, title, description, centered = false }) {
  return (
    <div className={centered ? "mb-14 text-center" : "mb-14"}>
      <Chip>{chip}</Chip>
      <h2 className="mb-3 mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111]">
        {title}
      </h2>
      {description ? (
        <p className={`text-[15px] text-[#888] ${centered ? "mx-auto max-w-[520px]" : "max-w-[520px]"}`}>{description}</p>
      ) : null}
    </div>
  );
}

function TypeCard({ type, index }) {
  const variant = typeCardVariants[index % typeCardVariants.length];

  return (
    <Link
      href="/contact-us"
      className="service-hover-card group relative mx-auto block w-full max-w-[90%] cursor-pointer overflow-hidden rounded-xl border border-[#ebebeb] bg-white px-4 py-4 text-[#111] transition-all duration-300 ease-out active:scale-[0.97] md:max-w-none md:rounded-[20px] md:px-7 md:py-8 md:hover:-translate-y-1 md:hover:scale-[1.03] md:hover:border-transparent"
      style={{
        "--service-card-hover-bg": variant.gradient,
        "--service-card-hover-shadow": variant.shadow
      }}
    >
      <div className="service-hover-card-overlay absolute inset-0 rounded-xl bg-[image:var(--service-card-hover-bg)] opacity-0 transition-opacity duration-300 md:rounded-[20px] md:group-hover:opacity-100" />
      <div className="relative text-lg font-extrabold leading-relaxed text-[#111] transition-all duration-300 group-active:text-white md:text-[17px] md:group-hover:text-white">
        {type}
      </div>
    </Link>
  );
}

function FeatureCard({ item, index }) {
  const variant = featureListVariants[index % featureListVariants.length];

  return (
    <div className="group relative flex cursor-default items-start gap-[18px] overflow-hidden rounded-[18px] border border-gray-200 bg-[#f8fafc] px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-transparent hover:shadow-md active:scale-[1.01] active:shadow-md">
      <span className={`absolute left-0 top-0 h-full w-[4px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100 ${variant.edge} ${variant.glow}`} />
      <span className={`absolute right-0 top-0 h-full w-[4px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100 ${variant.edge} ${variant.glow}`} />
      <div className="absolute inset-0 bg-[#f0fdf4] opacity-0 transition-all duration-300 group-active:opacity-100 md:group-hover:opacity-100" />
      <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border-2 border-[#ebebeb] bg-white text-[18px] font-extrabold text-[#111] transition-all duration-300 group-active:border-[#111] group-active:bg-[#111] group-active:text-white md:group-hover:border-[#111] md:group-hover:bg-[#111] md:group-hover:text-white">
        {item.title.charAt(0)}
      </div>
      <div className="relative">
        <div className="mb-1.5 text-base font-extrabold text-[#111]">
          {item.title}
        </div>
        <div className="text-[13px] leading-[1.7] text-[#777]">
          {item.text}
        </div>
      </div>
    </div>
  );
}

function AreaPill({ href, label }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[44px] w-auto items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[#ddd] bg-white px-4 py-2 text-center text-sm font-semibold text-[#555] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111] hover:bg-[#111] hover:text-white hover:shadow-[0_12px_24px_rgba(17,17,17,0.10)] active:scale-[0.98] active:bg-[#111] active:text-white"
    >
      <span className="inline-flex items-center gap-2 whitespace-nowrap">{"\uD83D\uDCCD"} {label}</span>
    </Link>
  );
}

function RelatedServiceCard({ related }) {
  return (
    <Link
      href={related.href}
      className="group mx-auto block w-full max-w-[90%] cursor-pointer rounded-xl border border-[#eee] bg-white px-4 py-4 text-[#111] shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-200 ease-out active:scale-[0.97] active:bg-[#0f172a] md:max-w-none md:rounded-2xl md:px-7 md:py-6 md:duration-300 md:hover:-translate-y-2 md:hover:border-transparent md:hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
    >
      <div className="text-lg font-extrabold tracking-[-0.03em] text-[#111] transition-colors duration-300 group-active:text-white md:text-2xl md:group-hover:text-[#16a34a]">
        {related.name}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#666] transition-colors duration-300 group-active:text-white/85 md:leading-7 md:group-hover:text-white/80">
        {related.shortDescription}
      </p>
    </Link>
  );
}

function ProcessCard({ num, title, text }) {
  return (
    <div className="group relative cursor-default overflow-hidden rounded-2xl border border-[#eee] bg-white px-6 py-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#22c55e]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      <div className="absolute inset-0 rounded-2xl bg-[#f0fdf4] opacity-0 transition-all duration-300 group-active:opacity-30 md:group-hover:opacity-30" />
      <div className="relative z-10 mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5f9] text-[14px] font-semibold text-[#111] transition-all duration-300 group-active:bg-[#22c55e] group-active:text-white md:group-hover:bg-[#22c55e] md:group-hover:text-white">
          {num}
        </div>
        <div className="text-base font-extrabold text-[#111]">
          {title}
        </div>
      </div>
      <div className="relative z-10 text-[13px] leading-[1.7] text-[#888]">
        {text}
      </div>
    </div>
  );
}

function FaqRow({ faq }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-green-500 hover:shadow-sm">
      <span className="absolute left-0 top-0 h-full w-[3px] bg-green-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      <div className="px-6 py-5">
        <h3 className="text-[15px] font-bold leading-[1.5] text-[#111]">{faq.question}</h3>
        <p className="mt-4 text-sm leading-[1.8] text-[#555]">{faq.answer}</p>
      </div>
    </div>
  );
}

export function ServicePageTemplate({ service }) {
  const intro = getCityIntro(service);
  const contentBlocks = getCityContentBlocks(service);
  const faqs = getCityFaqs(service);
  const trustHighlights = getTrustHighlights(service);
  const relatedServices = getRelatedServices(service.slug);
  const cta = getCtaContent(service);

  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] py-10 md:py-12">
        <div className="pointer-events-none absolute -right-20 -top-16 h-[500px] w-[500px] rounded-full [background:radial-gradient(circle,rgba(34,197,94,0.18)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-[100px] bottom-0 h-[400px] w-[400px] rounded-full [background:radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <Chip dark>Main Service Page</Chip>
              <h1 className="mb-6 mt-5 text-[clamp(2.6rem,5.5vw,4.2rem)] font-black leading-[1.06] tracking-[-0.03em] text-white">
                {service.name} in {business.city}
              </h1>
              <p className="max-w-3xl text-[17px] leading-[1.75] text-white/60">{intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 rounded-[14px] bg-white px-7 py-3.5 text-[15px] font-bold text-[#111] shadow-[0_4px_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] active:scale-[0.98] active:bg-[#f3f4f6]"
                >
                  Call Now
                </a>
                <a
                  href={business.whatsappHref}
                  className="inline-flex items-center gap-2 rounded-[14px] border-[1.5px] border-[#22c55e]/40 bg-[#22c55e]/15 px-7 py-3.5 text-[15px] font-bold text-[#22c55e] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22c55e] hover:text-white active:scale-[0.98] active:bg-[#16a34a] active:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="self-end rounded-[24px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <p className="text-sm font-medium text-white/70">Response Goal</p>
              <p className="mt-2 text-[clamp(2.1rem,4vw,2.8rem)] font-extrabold tracking-[-0.04em] text-white">30-60 min</p>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Across major service pockets in Vadodara, based on route load and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            chip="Service Details"
            title={`How ${service.name} works in ${business.city}`}
            description="This page explains what the service includes, which issues it addresses, and why customers usually book before the AC becomes unreliable."
          />
          <div className="max-w-5xl space-y-4 text-[15px] leading-[1.85] text-[#555]">
            {contentBlocks.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            chip="Types Covered"
            title={`Types of ${service.name}`}
            description="We support both split AC and window AC needs, with the exact service scope based on the unit and the complaint."
            centered
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {service.types.map((type, index) => (
              <TypeCard key={type} type={type} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader chip="Why Choose Us" title={`Why customers choose ${business.name} for ${service.name}`} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {trustHighlights.map((item, index) => (
              <FeatureCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            chip="Areas Covered"
            title={`${service.name} in local areas of ${business.city}`}
            description="Choose a nearby area page for localized service details, area-specific FAQs, and direct booking."
          />
          <div className="flex flex-wrap gap-3">
            {locations.map((location) => (
              <AreaPill key={location.slug} href={`/${service.slug}-${location.slug}`} label={location.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            chip="Related Services"
            title="Related AC services"
            description="Explore closely related services if you are still comparing the right support option."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((related) => (
              <RelatedServiceCard key={related.slug} related={related} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader chip="Process" title="How the booking works" centered />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Call or WhatsApp", "Tell us the AC type, issue, and preferred area."],
              ["2", "Schedule Visit", "We confirm the nearest available slot based on service need and route coverage."],
              ["3", "Inspection & Work", "The technician checks the unit and completes the required support."],
              ["4", "Testing & Close", "Cooling, airflow, and overall performance are checked before the visit ends."]
            ].map(([num, title, text]) => (
              <ProcessCard key={num} num={num} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[760px] px-6">
          <SectionHeader chip="FAQs" title={`Questions about ${service.name} in ${business.city}`} description="" />
          <div className="flex flex-col gap-2.5">
            {faqs.map((faq) => (
              <FaqRow key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
            <div className="pointer-events-none absolute -right-[60px] -top-[60px] h-[320px] w-[320px] rounded-full [background:radial-gradient(circle,rgba(34,197,94,0.2)_0%,transparent_70%)]" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-[250px] w-[250px] rounded-full [background:radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)]" />

            <div className="relative flex flex-col items-center justify-between gap-8 px-6 py-8 md:flex-row md:py-10">
              <div className="max-w-xl">
                <Chip dark>Book Today</Chip>
                <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.15] tracking-[-0.03em] text-white">
                  {cta.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/70">{cta.text}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center gap-2 rounded-[14px] bg-white px-7 py-3.5 text-[15px] font-bold text-[#111] shadow-[0_4px_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] active:scale-[0.98] active:bg-[#f3f4f6]"
                  >
                    Call Now
                  </a>
                  <a
                    href={business.whatsappHref}
                    className="inline-flex items-center gap-2 rounded-[14px] border-[1.5px] border-[#22c55e]/40 bg-[#22c55e]/15 px-7 py-3.5 text-[15px] font-bold text-[#22c55e] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22c55e] hover:text-white active:scale-[0.98] active:bg-[#16a34a] active:text-white"
                  >
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
          </div>
        </div>
      </section>
    </main>
  );
}
