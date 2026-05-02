import Link from "next/link";

export function LocationCard({ location, index = 0 }) {
  return (
    <Link
      href={`/ac-service-${location.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#eee] bg-white p-5 shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-transparent hover:bg-[#111] hover:text-white hover:shadow-[0_22px_48px_rgba(0,0,0,0.12)] active:scale-[0.97] motion-safe:animate-[locationsFadeUp_0.7s_ease-out_both]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ececec] bg-[#f7f7f7] text-base transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/10">
          📍
        </span>
        <h3 className="mb-2 text-[1.55rem] font-extrabold tracking-tight text-[#111] transition-colors duration-300 group-hover:text-white">
          {location.name}
        </h3>
        <p className="mb-4 text-[13px] leading-6 text-[#666] transition-colors duration-300 group-hover:text-white/75">
          AC repair, service, installation, cleaning, and gas-filling support in and around {location.landmark}.
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#e5e5e5] bg-[#f5f5f5] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#555] transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-white/80">
            {location.responseTime}
          </span>
          <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#111] transition-all duration-300 group-hover:gap-3 group-hover:text-white">
            <span>Explore</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

