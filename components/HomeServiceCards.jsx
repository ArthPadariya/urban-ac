"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getMainServiceHref } from "../data/site-data";

const cardVariants = [
  {
    wrapper: "bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_100%)] shadow-[0_22px_48px_rgba(37,99,235,0.22)]",
    badge: "border-white/25 bg-white/10 text-white",
    dot: "bg-white"
  },
  {
    wrapper: "bg-[linear-gradient(135deg,#f97316_0%,#ea580c_100%)] shadow-[0_22px_48px_rgba(249,115,22,0.24)]",
    badge: "border-white/25 bg-white/10 text-white",
    dot: "bg-white"
  },
  {
    wrapper: "bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_100%)] shadow-[0_22px_48px_rgba(37,99,235,0.22)]",
    badge: "border-white/25 bg-white/10 text-white",
    dot: "bg-white"
  },
  {
    wrapper: "bg-[linear-gradient(135deg,#22c55e_0%,#16a34a_100%)] shadow-[0_22px_48px_rgba(34,197,94,0.24)]",
    badge: "border-white/25 bg-white/10 text-white",
    dot: "bg-white"
  }
];

export function HomeServiceCards({ services }) {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setActiveCard(null);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleCardClick(event, slug) {
    if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    if (activeCard === slug) {
      setActiveCard(null);
      return;
    }

    event.preventDefault();
    setActiveCard(slug);
  }

  return (
    <div ref={containerRef} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service, index) => {
        const variant = cardVariants[index % cardVariants.length];
        const isActive = activeCard === service.slug;

        return (
          <Link
            key={service.slug}
            href={getMainServiceHref(service.slug)}
            onClick={(event) => handleCardClick(event, service.slug)}
            className={`service-hover-card group relative rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out will-change-transform hover:-translate-y-2 hover:scale-[1.01] hover:border-transparent active:scale-[0.97] motion-safe:animate-[locationsFadeUp_0.74s_ease-out_both] [-webkit-tap-highlight-color:transparent] ${
              isActive ? `${variant.wrapper} border-transparent text-white` : ""
            }`}
            style={{ animationDelay: `${index * 75}ms`, WebkitTapHighlightColor: "transparent" }}
          >
            <div
              className={`service-hover-card-overlay absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 md:group-hover:opacity-100 ${
                isActive ? "opacity-0" : ""
              }`}
            />
            <div className="relative flex h-full flex-col gap-4">
              <span
                className={`service-hover-badge inline-flex w-fit rounded-full border border-[#dfe7f5] bg-[#F4F8FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#555] transition-colors duration-300 group-hover:text-white group-active:text-white ${
                  isActive ? variant.badge : ""
                }`}
              >
                Urban AC Service
              </span>
              <h3
                className={`text-2xl font-bold tracking-tight text-[#111] transition-colors duration-300 group-hover:text-white group-active:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                {service.name}
              </h3>
              <p
                className={`text-sm leading-7 text-[#555] transition-colors duration-300 group-hover:text-white/85 group-active:text-white/85 ${
                  isActive ? "text-white/90" : ""
                }`}
              >
                {service.shortDescription}
              </p>
              <ul className="space-y-2">
                {service.types.slice(0, 3).map((type) => (
                  <li
                    key={type}
                    className={`flex items-start gap-2 text-sm leading-relaxed text-[#666] transition-colors duration-300 group-hover:text-white/80 group-active:text-white/80 ${
                      isActive ? "text-white/85" : ""
                    }`}
                  >
                    <span className={`service-hover-dot mt-2 h-1.5 w-1.5 rounded-full bg-[#0B0B0B] ${isActive ? variant.dot : ""}`} />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
              <div
                className={`mt-auto flex items-center gap-1 text-sm font-bold text-[#0B0B0B] transition-all duration-300 group-hover:gap-2 group-hover:text-white group-active:gap-2 group-active:text-white ${
                  isActive ? "gap-2 text-white" : ""
                }`}
              >
                <span>Explore {service.name}</span>
                <svg
                  className={`transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 ${
                    isActive ? "translate-x-1" : ""
                  }`}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
