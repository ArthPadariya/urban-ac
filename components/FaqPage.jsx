"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { business } from "../data/site-data";
import { LocationsMotionStyles } from "./LocationsMotionStyles";

export const faqCategories = [
  {
    id: "general",
    label: "General",
    items: [
      {
        question: "How quickly can you reach?",
        answer: "Usually within 30–45 minutes in Vadodara, depending on the area and open slots."
      },
      {
        question: "Do you offer same-day service?",
        answer: "Yes, same-day service is available whenever the schedule has open capacity."
      },
      {
        question: "What AC types do you service?",
        answer: "We handle split AC, window AC, and inverter AC units."
      },
      {
        question: "Do you provide service across all areas?",
        answer: "Yes, we cover Sama and nearby areas across Vadodara."
      },
      {
        question: "How can I book a service?",
        answer: "You can book through call or WhatsApp for quick confirmation."
      },
      {
        question: "Do technicians carry tools and parts?",
        answer: "Yes, technicians arrive with standard tools and commonly required parts."
      }
    ]
  },
  {
    id: "ac-repair",
    label: "AC Repair",
    items: [
      {
        question: "What repair issues do you handle?",
        answer: "Common issues include low cooling, leakage, noise, wiring faults, and startup problems."
      },
      {
        question: "Do you inspect before repair?",
        answer: "Yes, the technician checks the issue first and explains the likely work before starting."
      },
      {
        question: "Can you repair inverter ACs?",
        answer: "Yes, we also handle inverter AC diagnostics and repair support."
      },
      {
        question: "What if my AC is not turning on?",
        answer: "We diagnose electrical or PCB-related issues and fix them accordingly."
      },
      {
        question: "Do you fix gas leakage issues?",
        answer: "Yes, we detect leaks and perform proper sealing and gas refilling."
      },
      {
        question: "Will I know the cost before repair?",
        answer: "Yes, pricing is explained before starting any repair work."
      }
    ]
  },
  {
    id: "ac-cleaning",
    label: "AC Cleaning",
    items: [
      {
        question: "What is included in AC cleaning?",
        answer: "Filter cleaning, coil wash, drainage check, and general dust removal."
      },
      {
        question: "Does cleaning help cooling performance?",
        answer: "Yes, regular cleaning improves airflow and cooling efficiency."
      },
      {
        question: "Do you clean split and window ACs?",
        answer: "Yes, cleaning support is available for both split and window AC units."
      },
      {
        question: "How often should AC be cleaned?",
        answer: "Ideally every 3–6 months depending on usage and environment."
      },
      {
        question: "Is deep cleaning available?",
        answer: "Yes, deep cleaning includes full coil and blower wash."
      },
      {
        question: "Will cleaning remove bad smell?",
        answer: "Yes, cleaning removes dust, bacteria, and odor-causing buildup."
      }
    ]
  },
  {
    id: "installation",
    label: "Installation",
    items: [
      {
        question: "Do you install new AC units?",
        answer: "Yes, we provide installation support for split and window AC units."
      },
      {
        question: "Can you shift and reinstall an AC?",
        answer: "Yes, AC shifting and reinstallation are available based on the setup."
      },
      {
        question: "Is final testing included?",
        answer: "Yes, cooling and performance are checked after installation."
      },
      {
        question: "Do you provide copper piping?",
        answer: "Yes, piping and installation materials can be arranged if required."
      },
      {
        question: "How long does installation take?",
        answer: "Typically 1–3 hours depending on complexity and setup."
      },
      {
        question: "Do you guide on AC placement?",
        answer: "Yes, technicians suggest optimal placement for best cooling."
      }
    ]
  },
  {
    id: "ac-maintenance",
    label: "AC Maintenance",
    items: [
      {
        question: "What is AMC service?",
        answer: "AMC includes periodic servicing, cleaning, and priority support."
      },
      {
        question: "Do you offer annual maintenance plans?",
        answer: "Yes, both home and office AMC plans are available."
      },
      {
        question: "How many visits are included?",
        answer: "Visits depend on the plan, usually multiple scheduled checkups."
      },
      {
        question: "Does AMC improve AC life?",
        answer: "Yes, regular maintenance improves efficiency and lifespan."
      },
      {
        question: "Is AMC cost-effective?",
        answer: "Yes, it reduces breakdown risk and avoids major repair costs."
      },
      {
        question: "Can I customize AMC plan?",
        answer: "Yes, plans can be adjusted based on your usage needs."
      }
    ]
  }
];
function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555] shadow-[0_10px_24px_rgba(0,0,0,0.04)] backdrop-blur">
      {children}
    </span>
  );
}

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openQuestion, setOpenQuestion] = useState(faqCategories[0].items[0].question);

  const activeItems = useMemo(
    () => faqCategories.find((category) => category.id === activeCategory)?.items ?? [],
    [activeCategory]
  );

  function handleCategoryChange(categoryId) {
    setActiveCategory(categoryId);
    const nextItems = faqCategories.find((category) => category.id === categoryId)?.items ?? [];
    setOpenQuestion(nextItems[0]?.question ?? "");
  }

  return (
    <main className="bg-white text-[#111] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <LocationsMotionStyles />

      <section className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_58%,#eef5fb_100%)] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="relative z-10 motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]">
            <SectionEyebrow>Helpful Answers</SectionEyebrow>
            <h1 className="mb-6 mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mb-4 max-w-xl text-[16px] leading-relaxed text-[#555] md:text-[17px]">
              Everything you need to know about our AC services in Vadodara.
            </p>
            <div className="mb-8 text-sm font-semibold uppercase tracking-[0.08em] text-[#16a34a]">
              Quick answers. Transparent service.
            </div>
            <div className="flex flex-wrap gap-3">
              {["Fast local support", "Clear pricing guidance", "Same-day slots when available"].map((item) => (
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
                src="/faq-tech-hero.jpeg"
                alt="Technician illustration for FAQ page hero"
                width={832}
                height={1280}
                priority
                className="relative mx-auto h-auto max-h-[620px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap gap-3 motion-safe:animate-[locationsFadeUp_0.75s_ease-out_both]">
            {faqCategories.map((category) => {
              const isActive = category.id === activeCategory;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97] ${
                    isActive
                      ? "bg-[#111] text-white shadow-[0_14px_28px_rgba(15,23,42,0.16)]"
                      : "border border-[#ddd] bg-white text-[#555] hover:-translate-y-0.5 hover:border-[#111] hover:text-[#111]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-start">
            <div className="space-y-4 motion-safe:animate-[locationsFadeUp_0.8s_ease-out_both]">
              {activeItems.map((item) => {
                const isOpen = item.question === openQuestion;

                return (
                  <div
                    key={item.question}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-green-500 hover:shadow-sm"
                  >
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-green-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    <button
                      type="button"
                      onClick={() => setOpenQuestion(isOpen ? "" : item.question)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="text-base font-bold tracking-tight text-[#111] md:text-[1.05rem]">
                        {item.question}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e8e8e8] bg-[#f8fafc] text-xl font-medium text-[#111] transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-[#111] text-white border-[#111]" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#f1f1f1] pb-1 pt-4 text-sm leading-7 text-[#666]">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6 motion-safe:animate-[locationsFadeUp_0.88s_ease-out_both] [animation-delay:120ms]">
              <div className="overflow-hidden rounded-[28px] border border-[#eee] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#16a34a]">
                  Quick Help
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#111]">
                  Still have questions?
                </h3>
                <p className="mb-6 text-sm leading-7 text-[#666]">
                  Reach our team by call or WhatsApp for a faster answer based on your service need and location.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center rounded-xl bg-[#111] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-black active:scale-[0.97]"
                  >
                    Call Now
                  </a>
                  <a
                    href={business.whatsappHref}
                    className="inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#16a34a] active:scale-[0.97]"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-[#eaf1f7] bg-white p-4">
                  <Image
                    src="/faq-tech-help1.png"
                    alt="Technician illustration for FAQ help section"
                    width={474}
                    height={560}
                    className="mx-auto h-auto max-h-[260px] w-full object-contain"
                  />
                </div>
              </div>

              <div className="rounded-[28px] border border-[#eee] bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#666]">
                  Support Note
                </div>
                <div className="space-y-3 text-sm text-[#555]">
                  <p>Our team is available Monday Saturday.</p>
                  <p>Fast response across Vadodara.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="group relative overflow-hidden rounded-[30px] bg-[#0f172a] px-8 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 md:bg-[linear-gradient(135deg,#0a0a0a_0%,#111827_60%,#0f1a12_100%)] md:hover:-translate-y-1 md:hover:shadow-[0_34px_90px_rgba(0,0,0,0.28)] md:px-10 lg:px-12">
            <div className="pointer-events-none absolute -left-10 top-0 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_70%)] md:block" />
            <div className="pointer-events-none absolute right-20 top-10 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.18),transparent_72%)] md:block" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_320px]">
              <div className="relative z-10 max-w-2xl">
                <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                  Urgent Support
                </span>
                <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em] text-white">
                  Need urgent AC service?
                </h2>
                <p className="max-w-xl text-[15px] leading-7 text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] md:text-base md:text-white/72 md:[text-shadow:none]">
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

              <div className="relative hidden justify-center bg-transparent md:flex md:justify-end">
                <Image
                  src="/cta-tech.png"
                  alt="Technician illustration for urgent AC service support"
                  width={400}
                  height={636}
                  className="h-auto w-[210px] bg-transparent object-contain mix-blend-normal drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] motion-safe:animate-[locationsFloat_3.2s_ease-in-out_infinite] md:-mb-4 md:-mr-4 lg:w-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
