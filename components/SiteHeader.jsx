"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "../data/site-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "FAQs", href: "/faqs" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#eee] bg-[#ffffff]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#111,#14532d)] text-sm font-extrabold text-white">
              UAC
            </span>
            <div>
              <span className="block text-lg font-bold tracking-tight text-[#111]">{business.name}</span>
              <span className="block text-xs text-[#777]">AC services in Vadodara</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative inline-block text-sm font-semibold transition-all duration-300 hover:text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#22c55e] after:transition-all after:duration-300 ${
                  pathname === item.href
                    ? "text-[#111] after:w-full"
                    : "text-[#111] after:w-0 group-hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={business.whatsappHref}
              className="hidden items-center justify-center rounded-[14px] border border-[#22c55e] px-4 py-2.5 text-sm font-bold text-[#16a34a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22c55e] hover:text-white active:scale-[0.97] sm:inline-flex"
            >
              WhatsApp
            </a>
            <a
              href={business.phoneHref}
              className="hidden items-center justify-center rounded-[14px] bg-[#111] px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black active:scale-[0.97] md:inline-flex"
            >
              Call Now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#111] transition-all duration-300 hover:bg-[#f8fafc] active:scale-[0.97] md:hidden"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            open ? "mt-4 max-h-72 border-t border-[#eee] pt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-1 pb-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group relative inline-flex w-fit text-sm font-semibold transition-all duration-300 hover:text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#22c55e] after:transition-all after:duration-300 ${
                    pathname === item.href
                      ? "text-[#111] after:w-full"
                      : "text-[#111] after:w-0 group-hover:after:w-full"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
