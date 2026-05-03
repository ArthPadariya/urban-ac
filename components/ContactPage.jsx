"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { business, locations, services } from "../data/site-data";
import { LocationsMotionStyles } from "./LocationsMotionStyles";

const contactCards = [
  {
    Icon: FiPhone,
    iconClassName: "text-[#111]",
    title: "Call Us",
    text: "Speak directly with our team for quick AC booking and urgent support.",
    href: business.phoneHref,
    cta: "Call Now"
  },
  {
    Icon: FaWhatsapp,
    iconClassName: "text-[#16a34a]",
    title: "WhatsApp",
    text: "Send your issue, service type, and area for faster local routing.",
    href: business.whatsappHref,
    cta: "Chat Now"
  },
  {
    Icon: HiOutlineLocationMarker,
    iconClassName: "text-[#dc2626]",
    title: "Visit / Service Area",
    text: "We cover key residential and commercial pockets across Vadodara.",
    href: "/locations",
    cta: "View Locations"
  }
];

const miniFaqs = [
  {
    question: "How fast can you reach my location?",
    answer: "Usually within 30–60 minutes depending on area."
  },
  {
    question: "Do you provide same-day AC service?",
    answer: "Yes, same-day service is available."
  },
  {
    question: "What types of AC do you service?",
    answer: "Split, Window, Inverter AC."
  },
  {
    question: "Do you bring spare parts?",
    answer: "Yes, common parts included."
  },
  {
    question: "What are your service charges?",
    answer: "Depends on service type."
  },
  {
    question: "Do you offer AMC plans?",
    answer: "Yes, AMC available."
  },
  {
    question: "Is gas filling included?",
    answer: "No, separate service."
  },
  {
    question: "Which areas do you cover?",
    answer: "All major areas in Vadodara."
  }
];

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555] shadow-[0_10px_24px_rgba(0,0,0,0.04)] backdrop-blur">
      {children}
    </span>
  );
}

function Field({ label, name, type = "text", required = true }) {
  return (
    <label className="group relative block">
      <input
        type={type}
        name={name}
        required={required}
        placeholder=" "
        className="peer h-14 w-full rounded-2xl border border-white/70 bg-white/85 px-4 pt-5 text-sm font-medium text-[#111] shadow-[0_12px_28px_rgba(15,23,42,0.06)] outline-none transition-all duration-300 placeholder:text-transparent focus:border-[#22c55e]/50 focus:bg-white focus:shadow-[0_18px_40px_rgba(34,197,94,0.12)]"
      />
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#777] transition-all duration-300 peer-focus:top-4 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.08em] peer-focus:text-[#16a34a] peer-[&:not(:placeholder-shown)]:top-4 peer-[&:not(:placeholder-shown)]:text-[11px] peer-[&:not(:placeholder-shown)]:font-semibold peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-[0.08em] peer-[&:not(:placeholder-shown)]:text-[#16a34a]">
        {label}
      </span>
    </label>
  );
}

function SelectField({ label, name, placeholder, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#666]">{label}</span>
      <div className="relative w-full">
        <select
          name={name}
          required
          defaultValue=""
          className="h-14 w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-3 pr-11 text-sm font-medium text-[#111] appearance-none outline-none focus:ring-2 focus:ring-[#22c55e] cursor-pointer"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#555]">{"\u25BE"}</span>
      </div>
    </label>
  );
}

export function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") ?? "").toString().trim();
    const phone = (formData.get("phone") ?? "").toString().trim();
    const service = (formData.get("service") ?? "").toString().trim();
    const area = (formData.get("area") ?? "").toString().trim();
    const message = (formData.get("message") ?? "").toString().trim();
    const whatsappNumber = business.whatsappHref.replace(/\D/g, "");
    const text = `New AC Service Request:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nArea: ${area}\nMessage: ${message || "N/A"}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    event.currentTarget.reset();
  }

  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <LocationsMotionStyles />

      <section className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_58%,#eef5fb_100%)] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="relative z-10 motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]">
            <SectionEyebrow>Contact Urban AC</SectionEyebrow>
            <h1 className="mb-6 mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
              Get in touch with AC experts in Vadodara
            </h1>
            <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-[#555] md:text-[17px]">
              Fast support, local service routing, and quick response for repair, service, installation, and cleaning bookings.
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
              {["Same-day slots when available", "Doorstep support", "Coverage across Vadodara"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e5e5e5] bg-white/80 px-4 py-2 text-sm font-medium text-[#555] shadow-[0_8px_20px_rgba(0,0,0,0.04)] backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="motion-safe:animate-[locationsFadeUp_0.85s_ease-out_both] [animation-delay:120ms]">
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/70 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="pointer-events-none absolute -right-12 top-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_68%)]" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.14),transparent_72%)]" />
              <Image
                src="/contact-tech-hero.jpeg"
                alt="Technician illustration for Urban AC contact page"
                width={832}
                height={1280}
                priority
                className="relative mx-auto h-auto max-h-[620px] w-full object-contain transition-transform duration-700 ease-out md:group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center md:mb-12">
            <SectionEyebrow>Quick Options</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Choose the fastest way to reach us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card, index) => {
              const content = (
                <div className="group relative mx-auto h-full w-full max-w-[90%] rounded-xl border border-[#eee] bg-white px-4 py-4 text-[#111] shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-200 ease-out active:scale-[0.97] active:bg-[#0f172a] md:max-w-none md:rounded-2xl md:px-6 md:py-6 md:duration-300 md:hover:-translate-y-2 md:hover:scale-[1.03] md:hover:border-transparent md:hover:shadow-[0_26px_55px_rgba(15,23,42,0.12)]">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] opacity-0 transition-opacity duration-300 md:rounded-2xl md:group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ececec] bg-[#f8fafc] transition-all duration-300 group-active:border-white/20 group-active:bg-white/10 md:group-hover:border-white/20 md:group-hover:bg-white/10">
                      <card.Icon
                        className={`${card.iconClassName} transition-colors duration-300 group-active:text-white md:group-hover:text-white`}
                        size={22}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mb-3 text-lg font-bold leading-relaxed tracking-tight text-[#111] transition-colors duration-300 group-active:text-white md:text-2xl md:group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#666] transition-colors duration-300 group-active:text-white/80 md:leading-7 md:group-hover:text-white/75">
                      {card.text}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#111] transition-all duration-300 group-active:text-white md:group-hover:gap-3 md:group-hover:text-white">
                      {card.cta}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              );

              if (card.href.startsWith("/")) {
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="motion-safe:animate-[locationsFadeUp_0.75s_ease-out_both]">
            <div className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white/65 p-7 shadow-[0_28px_70px_rgba(15,23,42,0.12)] backdrop-blur md:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)]" />
              <div className="relative">
                <SectionEyebrow>Book Service</SectionEyebrow>
                <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
                  Tell us what you need
                </h2>
                <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
                  Share your service type and area, and our team can guide you to the right booking route quickly.
                </p>

                <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                  <Field label="Name" name="name" />
                  <Field label="Phone" name="phone" type="tel" />

                  <SelectField
                    label="Service Type"
                    name="service"
                    placeholder="Select a service"
                    options={services.map((service) => ({
                      value: service.name,
                      label: service.name
                    }))}
                  />

                  <SelectField
                    label="Location"
                    name="area"
                    placeholder="Select your area"
                    options={locations.map((location) => ({
                      value: location.name,
                      label: location.name
                    }))}
                  />

                  <label className="group relative block md:col-span-2">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder=" "
                      className="peer w-full rounded-2xl border border-white/70 bg-white/85 px-4 pb-4 pt-7 text-sm font-medium text-[#111] shadow-[0_12px_28px_rgba(15,23,42,0.06)] outline-none transition-all duration-300 placeholder:text-transparent focus:border-[#22c55e]/50 focus:bg-white focus:shadow-[0_18px_40px_rgba(34,197,94,0.12)]"
                    />
                    <span className="pointer-events-none absolute left-3 top-2 z-10 rounded bg-white px-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#16a34a]">
                      Message (optional)
                    </span>
                  </label>

                  <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#eef2f7] bg-white/70 px-4 py-4">
                    <p className="text-sm leading-6 text-[#666]">
                      Or call directly at <span className="font-semibold text-[#111]">{business.phoneDisplay}</span> for urgent AC support.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-black active:scale-[0.97]"
                    >
                      Book Service Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="motion-safe:animate-[locationsFadeUp_0.85s_ease-out_both] [animation-delay:120ms]">
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/75 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="pointer-events-none absolute -right-12 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.16),transparent_70%)]" />
              <Image
                src="/contact-tech-form.jpeg"
                alt="Technician illustration for AC service booking form"
                width={832}
                height={1280}
                className="relative mx-auto h-auto max-h-[620px] w-full object-contain transition-transform duration-700 ease-out md:group-hover:scale-[1.02]"
              />
              <div className="relative mt-4 rounded-2xl border border-[#eef2f7] bg-[#f8fbff] p-5">
                <div className="text-sm font-bold text-[#111]">Urban AC - Vadodara</div>
                <div className="mt-2 whitespace-pre-line text-sm leading-6 text-[#666]">{business.address}</div>
                <div className="mt-3 text-sm leading-6 text-[#666]">Service hours: {business.serviceHours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="group relative overflow-hidden rounded-2xl bg-[#0f172a] px-6 py-6 shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 md:rounded-[30px] md:bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] md:px-10 md:py-10 md:hover:-translate-y-1 md:hover:shadow-[0_34px_90px_rgba(0,0,0,0.28)] lg:px-12">
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_320px]">
              <div className="relative z-10 max-w-2xl">
                <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                  Urgent Support
                </span>
                <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em] text-white">
                  Need Urgent AC Service?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] md:text-base md:leading-7 md:text-white/80 md:[text-shadow:none]">
                  Call or WhatsApp now and get connected to quick local booking support in Vadodara.
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

              <div className="relative hidden justify-center md:flex md:justify-end">
                <Image
                  src="/contact-cta1.png"
                  alt="Technician illustration for urgent AC support"
                  width={509}
                  height={556}
                  className="h-auto w-full max-w-[220px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] motion-safe:animate-[locationsFloat_3.2s_ease-in-out_infinite] md:-mb-6 md:-mr-4 md:w-[220px] lg:w-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center md:mb-12">
            <SectionEyebrow>Mini FAQ</SectionEyebrow>
            <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              A Few Quick Answers
            </h2>
          </div>

          <div className="space-y-4">
            {miniFaqs.map((item, index) => (
              <details
                key={item.question}
                className="group mx-auto w-full max-w-[90%] rounded-xl border border-[#eee] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-200 active:scale-[0.98] md:max-w-none md:rounded-2xl md:p-5 md:duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-[#111]">
                  <span>{item.question}</span>
                  <span className="text-xl text-[#22c55e] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#666]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-[28px] border border-[#eee] bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)] px-8 py-10 text-center shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
              Still not sure? Talk to our expert
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
              We can help you choose the right AC service and the fastest local route for your area.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] active:scale-[0.97]"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
