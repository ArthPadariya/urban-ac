"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/home-tech-hero-1.jpeg",
    title: "Doorstep AC Service",
    text: "Routine servicing, cleaning, and performance checks across Vadodara."
  },
  {
    src: "/home-tech-hero-2.jpeg",
    title: "Quick Local Repair",
    text: "Fast support for cooling loss, leakage, board faults, and noise issues."
  },
  {
    src: "/home-tech-hero-3.jpeg",
    title: "Installation & Gas Support",
    text: "Proper fitting, testing, and refrigerant checks for split and window AC units."
  }
];

export function RotatingHeroVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="group relative rounded-[30px] border border-[#dfe7f5] bg-[linear-gradient(180deg,#ffffff_0%,#EEF4FF_100%)] p-5 shadow-[0_26px_60px_rgba(15,23,42,0.14)]">
        <div className="pointer-events-none absolute -right-12 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_68%)]" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.1),transparent_72%)]" />
        <div className="absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0B0B0B] shadow-[0_8px_18px_rgba(15,23,42,0.06)] backdrop-blur">
          Urban AC Support
        </div>
        <div
          key={slide.src}
          className="relative flex min-h-[430px] items-end rounded-[24px] bg-white/60 px-3 pb-4 pt-14 motion-safe:animate-[locationsFadeUp_0.55s_ease-out_both] md:min-h-[520px]"
        >
          <Image
            src={slide.src}
            alt={`${slide.title} by Urban AC in Vadodara`}
            width={832}
            height={1280}
            priority
            className="mx-auto h-[300px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-[410px]"
          />
          <div className="absolute bottom-4 left-4 right-4 max-w-[80%] rounded-xl bg-black/70 px-4 py-3 shadow-lg backdrop-blur-md md:bottom-8 md:left-8 md:right-8 md:max-w-[90%] md:px-5 md:py-4">
            <h2 className="mb-1 text-base font-bold tracking-tight text-white md:mb-2 md:text-2xl">{slide.title}</h2>
            <p className="max-w-md text-sm leading-6 text-white md:leading-7">{slide.text}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {slides.map((item, slideIndex) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show slide ${slideIndex + 1}`}
              onClick={() => setIndex(slideIndex)}
              className={`rounded-full transition-all duration-300 ${
                slideIndex === index ? "h-2.5 w-10 bg-[#0B0B0B]" : "h-2.5 w-2.5 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
        <span className="rounded-full border border-[#dfe7f5] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#555] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          3 Core AC Solutions
        </span>
      </div>
    </div>
  );
}

