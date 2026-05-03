"use client";

import Link from "next/link";
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { business, getMainServiceHref, locationMap, services } from "../data/site-data";

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" }
];

const socialLinks = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Twitter", href: "#", Icon: FaTwitter },
  { label: "YouTube", href: "#", Icon: FaYoutube },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn }
];

const footerLinkClass =
  "group relative inline-block w-fit text-[13px] font-medium text-[#555] transition-colors duration-300 hover:text-[#22c55e] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#22c55e] after:transition-all after:duration-300 group-hover:after:w-full";

const footerAreaSlugs = [
  "vasna",
  "alkapuri",
  "akota",
  "gotri",
  "sama",
  "sayajigunj",
  "manjalpur",
  "karelibaug",
  "nizampura"
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-[#e5e7eb] bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 py-9">
        <div className="grid items-start gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-3.5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0a0a0a,#111827)] text-sm font-extrabold text-white">
                UAC
              </span>
              <div>
                <span className="block text-lg font-semibold tracking-tight text-[#111]">{business.name}</span>
                <span className="block text-[13px] text-[#555]">AC services in Vadodara</span>
              </div>
            </Link>

            <p className="max-w-sm text-[13px] leading-6 text-[#555]">
              Fast local AC service, repair, installation, and maintenance support designed around performance and trust.
            </p>

            <div className="space-y-2 text-[13px] leading-6 text-[#555]">
              <div className="flex items-start gap-2 text-sm text-[#555]">
                <FaPhoneAlt className="mt-[2px] text-[#111]" />
                <a href={business.phoneHref} className={`${footerLinkClass} font-medium text-[#111] hover:text-[#22c55e]`}>
                  {business.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#555]">
                <FaMapMarkerAlt className="mt-[2px] text-[#111]" />
                <span className="max-w-[260px] whitespace-pre-line leading-6">{business.address}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#555]">
                <FaClock className="mt-[2px] text-[#111]" />
                <span>{business.serviceHours}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e5e7eb] bg-white text-[#555] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0fdf4] hover:text-[#111] hover:shadow-[0_8px_20px_rgba(34,197,94,0.25)]"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3.5">
            <h3 className="text-base font-semibold tracking-tight text-[#111]">Services</h3>
            <div className="grid gap-2.5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={getMainServiceHref(service.slug)}
                  className={footerLinkClass}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            <h3 className="text-base font-semibold tracking-tight text-[#111]">Areas</h3>
            <div className="grid gap-2.5">
              {footerAreaSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/ac-service-${slug}`}
                  className={footerLinkClass}
                >
                  {locationMap[slug].name}
                </Link>
              ))}
              <Link
                href="/locations"
                className="group relative inline-block w-fit text-[13px] font-medium text-[#22c55e] transition-colors duration-300 hover:text-[#16a34a] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#22c55e] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                View Locations {"\u2192"}
              </Link>
            </div>
          </div>

          <div className="space-y-3.5">
            <h3 className="text-base font-semibold tracking-tight text-[#111]">Quick Links</h3>
            <div className="grid gap-2.5">
              {quickLinks.map((item) => (
                <Link key={item.href} href={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[#e5e7eb] pt-4 text-[13px] text-[#888] md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">&copy; 2026 Urban AC. All rights reserved.</p>
          <a
            href="https://apfpuniversal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#888]"
          >
            Designed and Developed by APFP Universal
          </a>
        </div>
      </div>
    </footer>
  );
}
