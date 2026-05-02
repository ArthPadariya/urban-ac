"use client";

import Link from "next/link";
import { business } from "../data/site-data";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#22c55e]/40 bg-[#22c55e]/20">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export function SamaServiceCta({
  title,
  highlight,
  bullets,
  primaryLabel = "Call & Book Now",
  imageSrc = "/home-cta-1.png",
  imageAlt = "Urban AC technician"
}) {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
          <div className="pointer-events-none absolute -right-[60px] -top-[60px] h-[320px] w-[320px] rounded-full [background:radial-gradient(circle,rgba(34,197,94,0.2)_0%,transparent_70%)]" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-[250px] w-[250px] rounded-full [background:radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)]" />

          <div className="relative flex flex-col gap-8 px-6 py-8 md:min-h-[220px] md:flex-row md:items-center md:justify-between md:gap-5 md:py-10">
            <div className="max-w-xl md:flex-1">
              <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">Book Today</span>
              <h2 className="mb-6 text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.15] tracking-[-0.03em] text-white">
                {title}
                <br />
                <span className="bg-[linear-gradient(90deg,#22c55e,#34d399)] bg-clip-text text-transparent">
                  {highlight}
                </span>
              </h2>
              <div className="flex flex-col gap-3">
                {bullets.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckIcon />
                    <span className="text-sm font-medium text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 md:w-auto md:flex-row md:items-center md:justify-end md:gap-5">
              <div className="flex w-full flex-col items-start justify-center gap-3.5 md:w-auto md:min-w-[220px]">
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-2 rounded-[14px] bg-white px-8 py-4 text-[15px] font-extrabold text-[#111] shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#f5f5f5] active:scale-[0.98] active:bg-[#ececec]"
                >
                  <PhoneIcon />
                  {primaryLabel}
                </Link>
                <a
                  href={business.whatsappHref}
                  className="flex items-center justify-center gap-2 rounded-[14px] bg-[#22c55e] px-8 py-4 text-[15px] font-extrabold text-white shadow-[0_4px_20px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#16a34a] active:scale-[0.98] active:bg-[#15803d]"
                >
                  <WhatsAppIcon />
                  WhatsApp Now
                </a>
              </div>

              <div className="flex items-center justify-center md:w-[220px]">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-[180px] max-h-[220px] object-contain bg-transparent md:w-[220px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
