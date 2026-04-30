import Link from "next/link";
import { business } from "../data/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-paper/85 backdrop-blur">
      <div className="site-container flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-sm font-bold text-white">
            UA
          </span>
          <span className="font-display text-lg font-semibold tracking-[-0.03em]">{business.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-smoke md:flex">
          <Link href="/#services">Services</Link>
          <Link href="/#areas">Areas</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href={business.whatsappHref} className="btn-secondary hidden md:inline-flex">
            WhatsApp
          </a>
          <a href={business.phoneHref} className="btn-primary">
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
