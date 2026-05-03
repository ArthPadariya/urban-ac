"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { business, getEntryLocationHref, locationMap, locations, serviceMap } from "../data/site-data";
import {
  serviceData,
  sharedRelatedServices,
  sharedStats,
  sharedWhyChooseUs
} from "../lib/serviceData";
import { SamaServiceCta } from "./SamaServiceCta";

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

const checklistVariants = [
  {
    edge: "bg-gradient-to-b from-green-500 to-green-400",
    glow: "shadow-[0_0_22px_rgba(34,197,94,0.18)]"
  },
  {
    edge: "bg-gradient-to-b from-blue-500 to-blue-400",
    glow: "shadow-[0_0_22px_rgba(59,130,246,0.18)]"
  },
  {
    edge: "bg-gradient-to-b from-orange-500 to-orange-400",
    glow: "shadow-[0_0_22px_rgba(249,115,22,0.18)]"
  },
  {
    edge: "bg-gradient-to-b from-purple-500 to-purple-400",
    glow: "shadow-[0_0_22px_rgba(168,85,247,0.18)]"
  }
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#555]">
      {children}
    </span>
  );
}

function CountUpValue({ end, suffix = "", duration = 2000 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, end]);

  return `${value}${suffix}`;
}

function StatCard({ end, suffix, label, sub }) {
  return (
    <div className="mx-auto flex max-w-[90%] flex-col items-center rounded-xl border border-white/10 bg-white/6 px-4 py-4 text-center backdrop-blur-sm transition-all duration-200 active:scale-[0.97] active:bg-white/12 md:max-w-none md:rounded-[20px] md:px-5 md:py-6 md:duration-300 md:hover:-translate-y-1 md:hover:bg-white/10 md:hover:shadow-[0_18px_32px_rgba(0,0,0,0.18)]">
      <div className="text-[clamp(2.2rem,4vw,3rem)] font-extrabold leading-none tracking-[-0.04em] text-white">
        <CountUpValue end={end} suffix={suffix} />
      </div>
      <div className="mt-1 text-[15px] font-semibold text-white/90">{label}</div>
      <div className="mt-0.5 text-xs text-white/45">{sub}</div>
    </div>
  );
}

function ServiceTypeCard({ title, desc, icon, index }) {
  const variant = typeCardVariants[index % typeCardVariants.length];

  return (
    <Link
      href="/contact-us"
      className="service-hover-card group relative mx-auto block w-full max-w-[90%] cursor-pointer overflow-hidden rounded-xl border border-[#ebebeb] bg-white px-4 py-4 text-[#111] transition-all duration-300 ease-out active:scale-[0.97] md:max-w-none md:rounded-[20px] md:px-6 md:py-6 md:hover:-translate-y-1 md:hover:scale-[1.03] md:hover:border-transparent"
      style={{
        "--service-card-hover-bg": variant.gradient,
        "--service-card-hover-shadow": variant.shadow
      }}
    >
      <div className="service-hover-card-overlay absolute inset-0 rounded-xl bg-[image:var(--service-card-hover-bg)] opacity-0 transition-opacity duration-300 md:rounded-[20px] md:group-hover:opacity-100" />
      <div className="relative space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-[20px] transition-all duration-300 group-active:scale-110 group-active:text-white md:group-hover:scale-110 md:group-hover:text-white">{icon}</span>
          <span className="text-lg font-extrabold leading-relaxed text-[#111] transition-colors duration-300 group-active:text-white md:text-[17px] md:group-hover:text-white">
            {title}
          </span>
        </div>
        <div className="text-sm leading-relaxed text-[#888] transition-colors duration-300 group-active:text-white/85 md:text-[13px] md:leading-[1.65] md:group-hover:text-white/85">
          {desc}
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-[#111] transition-all duration-300 group-active:text-white md:mt-5 md:group-hover:gap-1.5 md:group-hover:text-white">
          <span>Contact Us</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function FeatureCard({ icon, title, desc, index }) {
  const variant = checklistVariants[index % checklistVariants.length];

  return (
    <div className="group relative flex cursor-pointer items-start gap-[18px] overflow-hidden rounded-[18px] border border-gray-200 bg-[#f8fafc] px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-transparent hover:shadow-md active:scale-[1.01] active:shadow-md">
      <span className={`absolute left-0 top-0 h-full w-[4px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100 ${variant.edge} ${variant.glow}`} />
      <span className={`absolute right-0 top-0 h-full w-[4px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100 ${variant.edge} ${variant.glow}`} />
      <div className="absolute inset-0 bg-[#f0fdf4] opacity-0 transition-all duration-300 group-active:opacity-100 md:group-hover:opacity-100" />
      <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border-2 border-[#ebebeb] bg-white text-[22px] transition-all duration-300 group-active:border-[#111] group-active:bg-[#111] group-active:text-white md:group-hover:border-[#111] md:group-hover:bg-[#111] md:group-hover:text-white">
        {icon}
      </div>
      <div className="relative">
        <div className="mb-1.5 text-base font-extrabold text-[#111]">
          {title}
        </div>
        <div className="text-[13px] leading-[1.7] text-[#777]">
          {desc}
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ num, title, desc }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#eee] bg-white px-6 py-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#22c55e]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] active:scale-[0.97]">
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
        {desc}
      </div>
    </div>
  );
}

function ReviewCard({ name, loc, text, tag }) {
  return (
    <div className="group relative cursor-default rounded-2xl border border-[#eee] bg-white p-7 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out md:hover:-translate-y-2 md:hover:border-transparent md:hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] active:scale-[0.97]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex gap-1 text-[#3b82f6]">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="rounded-full border border-[#d9f0df] bg-[#f3fbf5] px-3 py-1 text-[11px] font-semibold text-[#2f8f4e]">
          {tag}
        </span>
      </div>
      <p className="mb-10 text-[15px] leading-[1.95] tracking-[-0.01em] text-[#303030]">{text}</p>
      <div className="flex items-center gap-4 border-t border-[#f2f2f2] pt-5">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#111827] text-[28px] font-extrabold text-white">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-[15px] font-extrabold text-[#111]">{name}</div>
          <div className="text-[13px] text-[#b5b5b5]">{loc}</div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 hover:border-green-500 hover:shadow-sm active:scale-[0.98] ${
        open
          ? "border-[#bbf7d0] bg-[#ecfdf5] shadow-[0_12px_24px_rgba(17,17,17,0.06)]"
          : "bg-white"
      }`}
    >
      <span className="absolute left-0 top-0 h-full w-[3px] bg-green-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-6 py-5 text-left transition-all duration-300 active:scale-[0.995] active:bg-[#f3f4f6]"
      >
        <span className="text-[15px] font-bold leading-[1.5] text-[#111]">{q}</span>
        <span
          className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "rotate-45 bg-[#111]" : "bg-[#f4f4f4]"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : "#888"} strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open ? (
        <div className="border-t border-[#e5e5e5] px-6 pb-5">
          <p className="mt-4 text-sm leading-[1.8] text-[#555]">{a}</p>
        </div>
      ) : null}
    </div>
  );
}

function ServicePill({ label, href, active }) {
  return (
    <Link
      href={href}
      className={`rounded-full border-[1.5px] px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
        active
          ? "border-[#111] bg-[#111] text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          : "border-[#ddd] bg-white text-[#555] hover:-translate-y-0.5 hover:border-[#111] hover:bg-[#111] hover:text-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] active:scale-[0.98] active:bg-[#111] active:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

function AreaPill({ area, href }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[44px] w-auto items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-[#ddd] bg-white px-4 py-2 text-center text-sm font-semibold text-[#555] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111] hover:bg-[#111] hover:text-white hover:shadow-[0_12px_24px_rgba(17,17,17,0.10)] active:scale-[0.98] active:bg-[#111] active:text-white"
    >
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        {"\uD83D\uDCCD"} {area}
      </span>
    </Link>
  );
}

function interpolateValue(value, replacements) {
  if (typeof value === "string") {
    return Object.entries(replacements).reduce(
      (result, [token, replacement]) => result.replaceAll(`{{${token}}}`, replacement),
      value
    );
  }

  if (Array.isArray(value)) {
    return value.map((item) => interpolateValue(item, replacements));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, interpolateValue(entry, replacements)])
    );
  }

  return value;
}

function resolveService(value) {
  if (typeof value === "string") {
    return serviceMap[value] ?? null;
  }

  return value ?? null;
}

function resolveArea(value) {
  if (typeof value === "string") {
    return locationMap[value] ?? null;
  }

  return value ?? null;
}

export function ServiceAreaPage({ service, area }) {
  const resolvedService = resolveService(service);
  const resolvedArea = resolveArea(area);

  if (!resolvedService || !resolvedArea) {
    notFound();
  }

  const config = serviceData[resolvedService.slug];

  if (!config) {
    notFound();
  }

  const replacements = {
    area: resolvedArea.name,
    AREA: resolvedArea.name.toUpperCase(),
    city: business.city
  };

  const content = interpolateValue(config, replacements);
  const whyChooseUs = interpolateValue(sharedWhyChooseUs, replacements);
  const relatedServices = sharedRelatedServices;
  const [openFaq, setOpenFaq] = useState(0);

  const allAreas = locations;
  const nearbyAreas = allAreas.filter((item) => item.slug !== resolvedArea.slug);

  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] pb-0 pt-8 md:pt-10">
        <div className="pointer-events-none absolute -right-20 -top-16 h-[500px] w-[500px] rounded-full [background:radial-gradient(circle,rgba(34,197,94,0.18)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-[100px] bottom-0 h-[400px] w-[400px] rounded-full [background:radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
            <div className="pb-14 md:pb-[72px]">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/12 px-4 py-[7px]">
                <span className="inline-block h-[7px] w-[7px] animate-pulse rounded-full bg-[#22c55e] shadow-[0_0_0_3px_rgba(34,197,94,0.3)]" />
                <span className="text-xs font-semibold tracking-[0.05em] text-[#22c55e]">
                  {resolvedArea.name}, {business.city} · Available Today
                </span>
              </div>

              <h1 className="mb-6 text-[clamp(2.6rem,5.5vw,4.2rem)] font-black leading-[1.06] tracking-[-0.03em] text-white">
                {content.hero.title}
                <br />
                <span className="bg-[linear-gradient(90deg,#22c55e,#34d399)] bg-clip-text text-transparent">
                  in {resolvedArea.name}
                </span>{" "}
                <span className="text-white">Urban AC</span>
              </h1>

              <p className="mb-9 max-w-[460px] text-[17px] leading-[1.75] text-white/60">{content.hero.description}</p>

              <div className="mb-12 flex flex-wrap gap-3">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 rounded-[14px] bg-white px-7 py-3.5 text-[15px] font-bold text-[#111] shadow-[0_4px_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] active:scale-[0.98] active:bg-[#f3f4f6]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {content.hero.primaryLabel}
                </a>
                <a
                  href={business.whatsappHref}
                  className="inline-flex items-center gap-2 rounded-[14px] border-[1.5px] border-[#22c55e]/40 bg-[#22c55e]/15 px-7 py-3.5 text-[15px] font-bold text-[#22c55e] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22c55e] hover:text-white active:scale-[0.98] active:bg-[#16a34a] active:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Now
                </a>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {content.hero.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative self-end">
              <div className="group relative overflow-hidden rounded-t-[20px] shadow-[0_-8px_60px_rgba(0,0,0,0.5)]">
                <img
                  src="/tech11.jpeg"
                  alt="AC technician installing air conditioner"
                  className="h-auto w-full object-contain transition-transform duration-700 ease-out md:h-[clamp(340px,50vw,560px)] md:object-cover md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22c55e]/25 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-0 border-t border-white/10 bg-white/5">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
            {sharedStats.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <Chip>{content.details.chip}</Chip>
              <h2 className="mb-5 mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
                {content.details.title}
              </h2>
              <div className="mb-7 h-1 w-12 rounded bg-[linear-gradient(90deg,#22c55e,#3b82f6)]" />
              <div className="flex flex-col gap-4 text-[15px] leading-[1.85] text-[#555]">
                {content.details.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="group overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
                <img
                  src="/tech10.jpeg"
                  alt="Urban AC technician at work"
                  className="h-auto w-full object-contain transition-transform duration-700 ease-out md:h-[400px] md:object-cover md:group-hover:scale-105"
                />
              </div>
              <div className="absolute -right-4 -top-4 -z-10 h-[120px] w-[120px] rounded-full bg-[#f5f5f5] opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Chip>{content.types.chip}</Chip>
            <h2 className="mb-3 mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
              {content.types.title}
            </h2>
            <p className="mx-auto max-w-[480px] text-[15px] text-[#888]">{content.types.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.types.items.map((item, index) => (
              <ServiceTypeCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <Chip>Why Urban AC</Chip>
            <h2 className="mb-2.5 mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
              Why Customers In {resolvedArea.name} Trust Urban AC
            </h2>
            <p className="max-w-[500px] text-[15px] text-[#888]">
              Reliable, fast, and customer-focused - here's what makes Urban AC a preferred choice in Vadodara.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <FeatureCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Chip>ALL AC SERVICES IN {resolvedArea.name.toUpperCase()}</Chip>
          <h2 className="mb-1.5 mt-3 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
            {content.related.title}
          </h2>
          <p className="mb-8 text-sm text-[#888]">{content.related.description}</p>
          <div className="flex flex-wrap gap-2.5">
            {relatedServices.map((item) => (
              <ServicePill
                key={item.slug}
                label={item.label}
                href={getEntryLocationHref(item.slug, resolvedArea.slug)}
                active={item.slug === resolvedService.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Chip>Urban AC - Coverage</Chip>
          <h2 className="mb-1.5 mt-3 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
            {content.nearby.title}
          </h2>
          <p className="mb-8 text-sm text-[#888]">{content.nearby.description}</p>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((item) => (
              <AreaPill key={item.slug} area={item.name} href={getEntryLocationHref(resolvedService.slug, item.slug)} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Chip>How It Works</Chip>
            <h2 className="mb-3 mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
              {content.process.title}
            </h2>
            <p className="text-[15px] text-[#888]">{content.process.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.process.steps.map((item) => (
              <ProcessCard key={item.num} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="group relative order-2 overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.13)] lg:order-1">
              <img
                src="/tech12.jpeg"
                alt="Professional AC installation quality"
                className="h-auto w-full object-contain transition-transform duration-700 ease-out md:h-[500px] md:object-cover md:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22c55e]/20 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
            </div>

            <div className="order-1 lg:order-2">
              <Chip>{content.quality.chip}</Chip>
              <h2 className="mb-4 mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
                {content.quality.title}
              </h2>
              <div className="mb-6 h-1 w-12 rounded bg-[linear-gradient(90deg,#22c55e,#3b82f6)]" />
              <p className="mb-8 text-[15px] leading-[1.8] text-[#666]">{content.quality.description}</p>
              <div className="flex flex-col gap-4">
                {content.checklist.map((item, index) => {
                  const variant = checklistVariants[index % checklistVariants.length];

                  return (
                    <div
                      key={item.text}
                      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-[#f8fafc] px-5 py-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-md active:scale-[1.01] active:shadow-md"
                    >
                      <span className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-active:opacity-100 md:group-hover:opacity-100 ${item.tintClass}`} />
                      <span className={`absolute left-0 top-0 h-full w-[4px] opacity-0 transition-all duration-300 group-active:opacity-100 md:group-hover:opacity-100 ${variant.edge} ${variant.glow}`} />
                      <span className={`absolute right-0 top-0 h-full w-[4px] opacity-0 transition-all duration-300 group-active:opacity-100 md:group-hover:opacity-100 ${variant.edge} ${variant.glow}`} />
                      <span className="relative pr-12 text-sm font-semibold text-[#111]">
                        {item.text}
                      </span>
                      <span className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1.5 opacity-50 transition-all duration-300 group-active:translate-x-0.5 group-active:opacity-100 md:group-hover:translate-x-0.5 md:group-hover:opacity-100">
                        <span className={`h-1.5 w-1.5 rounded-full ${item.dotClass}`} />
                        <span className={`h-2 w-2 rounded-full ${item.dotClass}`} />
                        <span className={`h-1.5 w-1.5 rounded-full ${item.dotClass}`} />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Chip>Urban AC - Customer Reviews</Chip>
            <h2 className="mb-2.5 mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
              {content.reviews.title}
            </h2>
            <p className="text-[15px] text-[#888]">{content.reviews.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.reviews.items.map((item) => (
              <ReviewCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="mb-[52px]">
            <Chip>{content.faqs.chip}</Chip>
            <h2 className="mb-2.5 mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.2] tracking-[-0.025em]">
              {content.faqs.title}
            </h2>
            <p className="text-[15px] text-[#888]">{content.faqs.description}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {content.faqs.items.map((item, index) => (
              <FaqItem
                key={item.q}
                {...item}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <SamaServiceCta
        title={content.cta.title}
        highlight={content.cta.highlight}
        bullets={content.cta.bullets}
        primaryLabel={content.cta.primaryLabel}
      />
    </main>
  );
}
